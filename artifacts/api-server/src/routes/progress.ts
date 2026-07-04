import { Router } from "express";
import { and, asc, eq } from "drizzle-orm";
import {
  db,
  users,
  curriculumDays,
  quizQuestions,
  dayProgress,
  type DayProgress,
} from "@workspace/db";
import {
  ListProgressResponse,
  GetDayProgressParams,
  GetDayProgressResponse,
  CompleteLessonParams,
  CompleteLessonResponse,
  CompleteTaskParams,
  CompleteTaskBody,
  CompleteTaskResponse,
  SubmitQuizParams,
  SubmitQuizBody,
  SubmitQuizResponse,
  SubmitReflectionParams,
  SubmitReflectionBody,
  SubmitReflectionResponse,
  SubmitPracticeParams,
  SubmitPracticeBody,
  SubmitPracticeResponse,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { requireDayAccess } from "../middlewares/requireDayAccess";
import { applyUserActivity, type Tx } from "../lib/gamification";
import { normalizePace, dayComplete, type DayPace } from "../lib/pace";
import { openai } from "@workspace/integrations-openai-ai-server";

export const progressRouter = Router();

const QUIZ_PASS_RATIO = 0.6;

async function curriculumXpReward(day: number): Promise<number | null> {
  const [row] = await db
    .select({ xpReward: curriculumDays.xpReward })
    .from(curriculumDays)
    .where(eq(curriculumDays.day, day));
  return row?.xpReward ?? null;
}

async function lockOrCreateProgress(
  tx: Tx,
  userId: number,
  day: number,
): Promise<DayProgress> {
  const existing = await tx
    .select()
    .from(dayProgress)
    .where(and(eq(dayProgress.userId, userId), eq(dayProgress.day, day)))
    .for("update");
  if (existing[0]) return existing[0];

  const created = await tx
    .insert(dayProgress)
    .values({ userId, day })
    .onConflictDoNothing({ target: [dayProgress.userId, dayProgress.day] })
    .returning();
  if (created[0]) return created[0];

  const [raced] = await tx
    .select()
    .from(dayProgress)
    .where(and(eq(dayProgress.userId, userId), eq(dayProgress.day, day)))
    .for("update");
  return raced;
}

/** The learner's chosen daily pace, used to decide which sections a day needs. */
async function getPace(userId: number): Promise<DayPace> {
  const [row] = await db
    .select({ minutes: users.dailyMinutes })
    .from(users)
    .where(eq(users.id, userId));
  return normalizePace(row?.minutes);
}

progressRouter.get("/progress", requireAuth, async (req, res) => {
  const rows = await db
    .select()
    .from(dayProgress)
    .where(eq(dayProgress.userId, req.userId!))
    .orderBy(asc(dayProgress.day));
  res.json(ListProgressResponse.parse(rows));
});

progressRouter.get("/progress/:day", requireAuth, async (req, res) => {
  const params = GetDayProgressParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid day" });
    return;
  }
  const [row] = await db
    .select()
    .from(dayProgress)
    .where(
      and(
        eq(dayProgress.userId, req.userId!),
        eq(dayProgress.day, params.data.day),
      ),
    );
  if (!row) {
    res.status(404).json({ error: "No progress for this day yet" });
    return;
  }
  res.json(GetDayProgressResponse.parse(row));
});

progressRouter.post("/progress/:day/lesson", requireAuth, requireDayAccess, async (req, res) => {
  const params = CompleteLessonParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid day" });
    return;
  }
  const day = params.data.day;
  const xpReward = await curriculumXpReward(day);
  if (xpReward === null) {
    res.status(404).json({ error: "Curriculum day not found" });
    return;
  }

  const pace = await getPace(req.userId!);
  const result = await db.transaction(async (tx) => {
    const current = await lockOrCreateProgress(tx, req.userId!, day);
    const flip = !current.lessonCompleted;
    const nowDone = dayComplete({ ...current, lessonCompleted: true }, pace);
    const [progress] = await tx
      .update(dayProgress)
      .set({
        lessonCompleted: true,
        completedAt:
          nowDone && !current.completedAt ? new Date() : current.completedAt,
      })
      .where(eq(dayProgress.id, current.id))
      .returning();
    const activity = await applyUserActivity(tx, req.userId!, {
      xpDelta: flip ? Math.round(xpReward * 0.25) : 0,
      completedDay: nowDone && !current.completedAt ? day : undefined,
    });
    return { progress, ...activity };
  });

  res.json(CompleteLessonResponse.parse(result));
});

progressRouter.post("/progress/:day/practice", requireAuth, requireDayAccess, async (req, res) => {
  const params = SubmitPracticeParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid day" });
    return;
  }
  const body = SubmitPracticeBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid practice submission" });
    return;
  }
  const day = params.data.day;
  const xpReward = await curriculumXpReward(day);
  if (xpReward === null) {
    res.status(404).json({ error: "Curriculum day not found" });
    return;
  }

  const [dayDetail] = await db
    .select()
    .from(curriculumDays)
    .where(eq(curriculumDays.day, day));

  let feedbackText = "Great effort on the practice exercise! Keep building on this foundation.";
  let passed = true;

  try {
    const evalResult = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are a supportive AI mentor evaluating a practice exercise for Day ${day} of a 28-day AI mastery course.
${dayDetail?.practicePrompt ? `Practice prompt: ${dayDetail.practicePrompt}` : `Topic: ${dayDetail?.lessonTitle ?? "AI concepts"}`}

Evaluate the submission and return JSON with:
- feedback: a 2-3 sentence encouraging and specific response (string)
- passed: boolean (true if the submission shows genuine engagement; be generous)

Keep tone warm and constructive.`,
        },
        { role: "user", content: body.data.text },
      ],
    });
    const parsed = JSON.parse(evalResult.choices[0]?.message?.content ?? "{}");
    if (parsed.feedback) feedbackText = parsed.feedback;
    if (parsed.passed !== undefined) passed = !!parsed.passed;
  } catch {
    // Use default feedback on AI failure
  }

  const result = await db.transaction(async (tx) => {
    const current = await lockOrCreateProgress(tx, req.userId!, day);
    const flip = !current.practiceCompleted && passed;
    const [progress] = await tx
      .update(dayProgress)
      .set({
        practiceCompleted: current.practiceCompleted || passed,
        practiceText: body.data.text,
      })
      .where(eq(dayProgress.id, current.id))
      .returning();
    const activity = await applyUserActivity(tx, req.userId!, {
      xpDelta: flip ? Math.round(xpReward * 0.1) : 0,
    });
    return { passed, feedback: feedbackText, progress, ...activity };
  });

  res.json(SubmitPracticeResponse.parse(result));
});

progressRouter.post("/progress/:day/task", requireAuth, requireDayAccess, async (req, res) => {
  const params = CompleteTaskParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid day" });
    return;
  }
  const body = CompleteTaskBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Task submission text is required" });
    return;
  }
  const day = params.data.day;
  const xpReward = await curriculumXpReward(day);
  if (xpReward === null) {
    res.status(404).json({ error: "Curriculum day not found" });
    return;
  }

  const [dayDetail] = await db
    .select()
    .from(curriculumDays)
    .where(eq(curriculumDays.day, day));

  let feedback = {
    strengths: ["Shows genuine engagement with the material", "Demonstrates effort and initiative"],
    improvements: ["Consider adding more specific examples", "Try to connect concepts to real-world applications"],
    summary: "Good submission! You've engaged with the task meaningfully.",
  };
  let score = 70;
  let passed = true;

  try {
    const evalResult = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are an expert AI mentor evaluating a practical task submission for a 28-day AI mastery challenge.

Task: ${dayDetail?.taskTitle ?? "AI Task"}
Task description: ${dayDetail?.taskDescription?.replace(/<[^>]*>/g, " ").substring(0, 800) ?? ""}

Evaluate the submission and return JSON with:
- strengths: array of 2-3 specific strengths found in the work (strings)
- improvements: array of 1-2 specific, actionable improvement suggestions (strings)
- summary: 1-2 sentence overall assessment (string)
- score: integer 0-100 (how well they completed the task)
- passed: boolean (true if score >= 60 — be generous for genuine effort)

Be specific, constructive, and encouraging. Reference the actual task context.`,
        },
        { role: "user", content: body.data.text },
      ],
    });
    const parsed = JSON.parse(evalResult.choices[0]?.message?.content ?? "{}");
    if (parsed.strengths?.length) feedback.strengths = parsed.strengths;
    if (parsed.improvements?.length) feedback.improvements = parsed.improvements;
    if (parsed.summary) feedback.summary = parsed.summary;
    if (typeof parsed.score === "number") score = Math.min(100, Math.max(0, parsed.score));
    if (parsed.passed !== undefined) passed = !!parsed.passed;
    else passed = score >= 60;
  } catch {
    // Use default feedback on AI failure
  }

  const pace = await getPace(req.userId!);
  const result = await db.transaction(async (tx) => {
    const current = await lockOrCreateProgress(tx, req.userId!, day);
    const flip = !current.taskCompleted;
    const nowDone = dayComplete({ ...current, taskCompleted: true }, pace);
    const [progress] = await tx
      .update(dayProgress)
      .set({
        taskCompleted: true,
        taskSubmission: body.data.text,
        taskScore: score,
        taskFeedback: feedback,
        completedAt:
          nowDone && !current.completedAt ? new Date() : current.completedAt,
      })
      .where(eq(dayProgress.id, current.id))
      .returning();
    const activity = await applyUserActivity(tx, req.userId!, {
      xpDelta: flip ? Math.round(xpReward * 0.35 * (score / 100)) : 0,
      completedDay: nowDone && !current.completedAt ? day : undefined,
    });
    return { passed, score, feedback, progress, ...activity };
  });

  res.json(CompleteTaskResponse.parse(result));
});

progressRouter.post("/progress/:day/quiz", requireAuth, requireDayAccess, async (req, res) => {
  const params = SubmitQuizParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid day" });
    return;
  }
  const body = SubmitQuizBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid quiz submission" });
    return;
  }
  const day = params.data.day;
  const xpReward = await curriculumXpReward(day);
  if (xpReward === null) {
    res.status(404).json({ error: "Curriculum day not found" });
    return;
  }
  const questions = await db
    .select()
    .from(quizQuestions)
    .where(eq(quizQuestions.day, day))
    .orderBy(asc(quizQuestions.orderIndex));
  if (questions.length === 0) {
    res.status(404).json({ error: "No quiz for this day" });
    return;
  }

  const answers = body.data.answers;
  let score = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.correctIndex) score += 1;
  });
  const total = questions.length;
  const passed = score / total >= QUIZ_PASS_RATIO;

  const pace = await getPace(req.userId!);
  const result = await db.transaction(async (tx) => {
    const current = await lockOrCreateProgress(tx, req.userId!, day);
    const flip = passed && !current.quizCompleted;
    const willBeQuizCompleted = current.quizCompleted || passed;
    const nowDone = dayComplete(
      { ...current, quizCompleted: willBeQuizCompleted },
      pace,
    );
    const [progress] = await tx
      .update(dayProgress)
      .set({
        quizCompleted: willBeQuizCompleted,
        quizScore: score,
        completedAt:
          nowDone && !current.completedAt ? new Date() : current.completedAt,
      })
      .where(eq(dayProgress.id, current.id))
      .returning();
    const activity = await applyUserActivity(tx, req.userId!, {
      xpDelta: flip ? Math.round(xpReward * 0.25 * (score / total)) : 0,
      completedDay: nowDone && !current.completedAt ? day : undefined,
      perfectQuiz: flip && score === total,
    });
    return { progress, ...activity };
  });

  res.json(
    SubmitQuizResponse.parse({
      score,
      total,
      passed,
      correctIndexes: questions.map((q) => q.correctIndex),
      ...result,
    }),
  );
});

progressRouter.post(
  "/progress/:day/reflection",
  requireAuth,
  requireDayAccess,
  async (req, res) => {
    const params = SubmitReflectionParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: "Invalid day" });
      return;
    }
    const body = SubmitReflectionBody.safeParse(req.body);
    if (!body.success) {
      res.status(400).json({ error: "Invalid reflection" });
      return;
    }
    const day = params.data.day;
    const xpReward = await curriculumXpReward(day);
    if (xpReward === null) {
      res.status(404).json({ error: "Curriculum day not found" });
      return;
    }

    const pace = await getPace(req.userId!);
    const result = await db.transaction(async (tx) => {
      const current = await lockOrCreateProgress(tx, req.userId!, day);
      const flip = !current.reflectionCompleted;
      const nowDone = dayComplete(
        { ...current, reflectionCompleted: true },
        pace,
      );
      const [progress] = await tx
        .update(dayProgress)
        .set({
          reflectionText: body.data.text,
          reflectionCompleted: true,
          completedAt:
            nowDone && !current.completedAt ? new Date() : current.completedAt,
        })
        .where(eq(dayProgress.id, current.id))
        .returning();
      const activity = await applyUserActivity(tx, req.userId!, {
        xpDelta: flip ? Math.round(xpReward * 0.15) : 0,
        completedDay: nowDone && !current.completedAt ? day : undefined,
      });
      return { progress, ...activity };
    });

    res.json(SubmitReflectionResponse.parse(result));
  },
);
