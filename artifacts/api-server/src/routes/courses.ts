import { Router } from "express";
import { asc, eq, and, inArray } from "drizzle-orm";
import {
  db,
  courses,
  courseUnits,
  courseLessons,
  lessonProgress,
  lessonTries,
} from "@workspace/db";
import {
  ListCoursesResponse,
  GetCourseParams,
  GetCourseResponse,
  CompleteCourseLessonParams,
  CompleteCourseLessonResponse,
  MarkLessonTriedParams,
  MarkLessonTriedResponse,
  GenerateLessonAudioParams,
  GenerateLessonAudioResponse,
  GenerateCardAudioParams,
  GenerateCardAudioBody,
  GenerateCardAudioResponse,
  GetChatFeedbackParams,
  GetChatFeedbackBody,
  GetChatFeedbackResponse,
} from "@workspace/api-zod";
import { openai } from "@workspace/integrations-openai-ai-server";
import { requireAuth } from "../middlewares/requireAuth";
import { applyUserActivity } from "../lib/gamification";
import { textToSpeech } from "@workspace/integrations-openai-ai-server/audio";
import {
  concatMp3Buffers,
  probeAudioDuration,
  ensureCardAudio,
  warmLessonsInBackground,
} from "../lib/cardAudio";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export const coursesRouter = Router();

coursesRouter.get("/courses", requireAuth, async (req, res) => {
  const allCourses = await db
    .select()
    .from(courses)
    .orderBy(asc(courses.sortOrder));
  const allLessons = await db
    .select({ id: courseLessons.id, courseId: courseLessons.courseId })
    .from(courseLessons);
  const done = await db
    .select({ lessonId: lessonProgress.lessonId })
    .from(lessonProgress)
    .where(eq(lessonProgress.userId, req.userId!));
  const doneIds = new Set(done.map((d) => d.lessonId));

  const result = allCourses.map((c) => {
    const lessons = allLessons.filter((l) => l.courseId === c.id);
    return {
      ...c,
      lessonCount: lessons.length,
      completedCount: lessons.filter((l) => doneIds.has(l.id)).length,
    };
  });
  res.json(ListCoursesResponse.parse(result));
});

coursesRouter.get("/courses/:slug", requireAuth, async (req, res) => {
  const params = GetCourseParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid course" });
    return;
  }
  const [course] = await db
    .select()
    .from(courses)
    .where(eq(courses.slug, params.data.slug));
  if (!course) {
    res.status(404).json({ error: "Course not found" });
    return;
  }
  const units = await db
    .select()
    .from(courseUnits)
    .where(eq(courseUnits.courseId, course.id))
    .orderBy(asc(courseUnits.sortOrder));
  const lessons = await db
    .select()
    .from(courseLessons)
    .where(eq(courseLessons.courseId, course.id))
    .orderBy(asc(courseLessons.sortOrder));
  const done = lessons.length
    ? await db
        .select({ lessonId: lessonProgress.lessonId })
        .from(lessonProgress)
        .where(
          and(
            eq(lessonProgress.userId, req.userId!),
            inArray(
              lessonProgress.lessonId,
              lessons.map((l) => l.id),
            ),
          ),
        )
    : [];
  const doneIds = new Set(done.map((d) => d.lessonId));
  const tried = lessons.length
    ? await db
        .select({ lessonId: lessonTries.lessonId })
        .from(lessonTries)
        .where(
          and(
            eq(lessonTries.userId, req.userId!),
            inArray(
              lessonTries.lessonId,
              lessons.map((l) => l.id),
            ),
          ),
        )
    : [];
  const triedIds = new Set(tried.map((t) => t.lessonId));

  const result = {
    ...course,
    lessonCount: lessons.length,
    completedCount: lessons.filter((l) => doneIds.has(l.id)).length,
    units: units.map((u) => ({
      id: u.id,
      title: u.title,
      sortOrder: u.sortOrder,
      lessons: lessons
        .filter((l) => l.unitId === u.id)
        .map((l) => ({
          id: l.id,
          unitId: l.unitId,
          title: l.title,
          summary: l.summary,
          estimatedMinutes: l.estimatedMinutes,
          xpReward: l.xpReward,
          sortOrder: l.sortOrder,
          completed: doneIds.has(l.id),
          audioUrl: l.audioUrl,
          audioDurationSec: l.audioDurationSec,
          imageUrl: l.imageUrl,
          steps: l.steps ?? [],
          tryIt: l.tryIt ?? undefined,
          tried: triedIds.has(l.id),
        })),
    })),
  };
  res.json(GetCourseResponse.parse(result));

  // Fire-and-forget: pre-generate narration for this course's cards so the
  // lesson player gets instant cache hits instead of cold TTS generation.
  warmLessonsInBackground(
    lessons.map((l) => ({ id: l.id, steps: l.steps ?? [] })),
  );
});

coursesRouter.post(
  "/courses/lessons/:lessonId/complete",
  requireAuth,
  async (req, res) => {
    const params = CompleteCourseLessonParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: "Invalid lesson" });
      return;
    }
    const [lesson] = await db
      .select()
      .from(courseLessons)
      .where(eq(courseLessons.id, params.data.lessonId));
    if (!lesson) {
      res.status(404).json({ error: "Lesson not found" });
      return;
    }

    const result = await db.transaction(async (tx) => {
      const inserted = await tx
        .insert(lessonProgress)
        .values({ userId: req.userId!, lessonId: lesson.id })
        .onConflictDoNothing()
        .returning();
      const alreadyCompleted = inserted.length === 0;
      let xpAwarded = 0;
      if (!alreadyCompleted) {
        const activity = await applyUserActivity(tx, req.userId!, {
          xpDelta: lesson.xpReward,
        });
        xpAwarded = activity.xpAwarded;
      }
      return { alreadyCompleted, xpAwarded };
    });

    const courseLessonRows = await db
      .select({ id: courseLessons.id })
      .from(courseLessons)
      .where(eq(courseLessons.courseId, lesson.courseId));
    const done = await db
      .select({ lessonId: lessonProgress.lessonId })
      .from(lessonProgress)
      .where(
        and(
          eq(lessonProgress.userId, req.userId!),
          inArray(
            lessonProgress.lessonId,
            courseLessonRows.map((l) => l.id),
          ),
        ),
      );

    res.json(
      CompleteCourseLessonResponse.parse({
        lessonId: lesson.id,
        alreadyCompleted: result.alreadyCompleted,
        xpAwarded: result.xpAwarded,
        completedCount: done.length,
        lessonCount: courseLessonRows.length,
        courseCompleted:
          courseLessonRows.length > 0 && done.length === courseLessonRows.length,
      }),
    );
  },
);

// Mark that the learner tried this lesson's prompt in the real tool (idempotent).
coursesRouter.post(
  "/courses/lessons/:lessonId/try",
  requireAuth,
  async (req, res) => {
    const params = MarkLessonTriedParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: "Invalid lesson" });
      return;
    }
    const [lesson] = await db
      .select({ id: courseLessons.id })
      .from(courseLessons)
      .where(eq(courseLessons.id, params.data.lessonId));
    if (!lesson) {
      res.status(404).json({ error: "Lesson not found" });
      return;
    }

    const inserted = await db
      .insert(lessonTries)
      .values({ userId: req.userId!, lessonId: lesson.id })
      .onConflictDoNothing()
      .returning();

    res.json(
      MarkLessonTriedResponse.parse({
        lessonId: lesson.id,
        tried: true,
        alreadyTried: inserted.length === 0,
      }),
    );
  },
);

coursesRouter.post(
  "/courses/lessons/:lessonId/audio",
  requireAuth,
  async (req, res) => {
    const params = GenerateLessonAudioParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: "Invalid lesson" });
      return;
    }
    const [lesson] = await db
      .select()
      .from(courseLessons)
      .where(eq(courseLessons.id, params.data.lessonId));
    if (!lesson) {
      res.status(404).json({ error: "Lesson not found" });
      return;
    }

    if (lesson.audioUrl) {
      res.json(
        GenerateLessonAudioResponse.parse({
          audioUrl: lesson.audioUrl,
          durationSec: lesson.audioDurationSec ?? null,
        }),
      );
      return;
    }

    const stepText = (lesson.steps ?? [])
      .map((s) => s.html)
      .join(" ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const script = `${lesson.title}. ${stepText || lesson.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()}`;

    const wordCount = script.split(/\s+/).length;
    const estimatedDuration = Math.round((wordCount / 150) * 60);

    // Split the full script into chunks at sentence boundaries so the
    // narration covers the entire lesson (TTS input is limited per call).
    const CHUNK_LIMIT = 2800;
    const rawSentences = script.match(/[^.!?]+[.!?]+[\s]*|[^.!?]+$/g) ?? [script];
    // Hard-split any oversized sentence at word boundaries
    const sentences: string[] = [];
    for (const s of rawSentences) {
      if (s.length <= CHUNK_LIMIT) {
        sentences.push(s);
        continue;
      }
      let piece = "";
      for (const word of s.split(/(\s+)/)) {
        if (piece.length + word.length > CHUNK_LIMIT && piece.trim()) {
          sentences.push(piece);
          piece = "";
        }
        if (word.length > CHUNK_LIMIT) {
          // Character-level fallback for a single overlong token
          for (let i = 0; i < word.length; i += CHUNK_LIMIT) {
            sentences.push(word.slice(i, i + CHUNK_LIMIT));
          }
        } else {
          piece += word;
        }
      }
      if (piece.trim()) sentences.push(piece);
    }
    const chunks: string[] = [];
    let current = "";
    for (const sentence of sentences) {
      if (current.length + sentence.length > CHUNK_LIMIT && current.trim()) {
        chunks.push(current.trim());
        current = "";
      }
      current += sentence;
    }
    if (current.trim()) chunks.push(current.trim());

    const STYLE =
      "Speak in very clear, crisp, professional English with a subtle Indian accent, like a confident male narrator of an online learning course. Enunciate every word distinctly at a steady, easy-to-follow pace.";

    let buffer: Buffer;
    try {
      const parts: Buffer[] = [];
      for (const chunk of chunks) {
        parts.push(await textToSpeech(chunk, "onyx", "mp3", STYLE));
      }
      buffer =
        parts.length === 1 ? parts[0] : await concatMp3Buffers(parts);
    } catch (err) {
      console.error("Lesson audio generation failed", err);
      res.status(503).json({
        error:
          "Audio generation is temporarily unavailable. Please try again later.",
      });
      return;
    }

    // Prefer the real decoded duration over the word-rate estimate
    const realDuration = await probeAudioDuration(buffer);

    const audioDir = path.join(process.cwd(), "audio");
    await fs.mkdir(audioDir, { recursive: true });
    const fileName = `lesson-${lesson.id}-${crypto.randomBytes(16).toString("hex")}.mp3`;
    await fs.writeFile(path.join(audioDir, fileName), buffer);
    const audioUrl = `/api/audio/${fileName}`;

    await db
      .update(courseLessons)
      .set({
        audioUrl,
        audioDurationSec:
          realDuration != null ? Math.round(realDuration) : estimatedDuration,
      })
      .where(eq(courseLessons.id, lesson.id));

    res.json(
      GenerateLessonAudioResponse.parse({
        audioUrl,
        durationSec:
          realDuration != null ? Math.round(realDuration) : estimatedDuration,
      }),
    );
  },
);

// ---------- Per-card synced narration with sentence timestamps ----------
// Generation pipeline lives in ../lib/cardAudio (shared with background warming).

coursesRouter.post(
  "/courses/lessons/:lessonId/card-audio",
  requireAuth,
  async (req, res) => {
    const params = GenerateCardAudioParams.safeParse(req.params);
    const body = GenerateCardAudioBody.safeParse(req.body);
    if (!params.success || !body.success) {
      res.status(400).json({ error: "Invalid request" });
      return;
    }
    const [lesson] = await db
      .select({ id: courseLessons.id })
      .from(courseLessons)
      .where(eq(courseLessons.id, params.data.lessonId));
    if (!lesson) {
      res.status(404).json({ error: "Lesson not found" });
      return;
    }

    const sentences = body.data.sentences
      .map((s) => s.replace(/\s+/g, " ").trim())
      .filter(Boolean);
    if (sentences.length === 0) {
      res.status(400).json({ error: "No narratable text" });
      return;
    }

    try {
      const payload = await ensureCardAudio(lesson.id, sentences);
      res.json(GenerateCardAudioResponse.parse(payload));
    } catch (err) {
      console.error("Card audio generation failed", err);
      res.status(503).json({
        error:
          "Audio generation is temporarily unavailable. Please try again later.",
      });
    }
  },
);

// Feedback on a learner's typed answer inside an interactive chat lesson.
// Prefers AI coaching; falls back to scripted keyword feedback when AI is unavailable.
coursesRouter.post(
  "/courses/lessons/:lessonId/chat-feedback",
  requireAuth,
  async (req, res) => {
    const params = GetChatFeedbackParams.safeParse(req.params);
    const body = GetChatFeedbackBody.safeParse(req.body);
    if (!params.success || !body.success) {
      res.status(400).json({ error: "Invalid request" });
      return;
    }
    const [lesson] = await db
      .select({ id: courseLessons.id, title: courseLessons.title, steps: courseLessons.steps })
      .from(courseLessons)
      .where(eq(courseLessons.id, params.data.lessonId));
    if (!lesson) {
      res.status(404).json({ error: "Lesson not found" });
      return;
    }

    const steps = Array.isArray(lesson.steps) ? (lesson.steps as any[]) : [];
    const turn = steps[body.data.stepIdx]?.chat?.[body.data.turnIdx];
    if (!turn || !turn.ask) {
      res.status(400).json({ error: "No question at this position" });
      return;
    }

    const answer = body.data.answer.trim().slice(0, 1000);
    const keywords: string[] = Array.isArray(turn.keywords) ? turn.keywords : [];
    const keywordHit = keywords.some((k) =>
      answer.toLowerCase().includes(k.toLowerCase()),
    );

    // Try AI coaching first
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        max_tokens: 180,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "You are Nova, a warm, encouraging coach inside an interactive lesson about communicating with AI. " +
              "The learner just answered a practice question. Reply ONLY with JSON: " +
              '{"good": boolean, "feedback": string}. ' +
              "good=true if the answer shows reasonable understanding (be generous). " +
              "feedback: 1-3 short sentences, specific to their answer, conversational, no markdown headers. " +
              "If the answer is weak, gently point out what to add — never scold.",
          },
          {
            role: "user",
            content:
              `Lesson: ${lesson.title}\nQuestion: ${turn.ask}\n` +
              (keywords.length ? `A good answer usually touches on: ${keywords.join(", ")}\n` : "") +
              `Learner's answer: ${answer}`,
          },
        ],
      });
      const raw = completion.choices[0]?.message?.content ?? "";
      const parsed = JSON.parse(raw);
      if (typeof parsed.feedback === "string" && parsed.feedback.trim()) {
        res.json(
          GetChatFeedbackResponse.parse({
            feedback: parsed.feedback.trim(),
            good: Boolean(parsed.good),
            source: "ai",
          }),
        );
        return;
      }
    } catch (err) {
      console.warn("Chat feedback AI unavailable, using scripted fallback:", (err as Error)?.message);
    }

    // Scripted fallback
    const scripted =
      typeof turn.feedback === "string" && turn.feedback.trim()
        ? turn.feedback.trim()
        : "Nice — you're thinking in the right direction. Compare your answer with the ideas we just covered and keep going!";
    const fallback = keywordHit
      ? `Great answer! ${scripted}`
      : keywords.length
        ? `Good try! One thing to consider: ${scripted}`
        : scripted;
    res.json(
      GetChatFeedbackResponse.parse({
        feedback: fallback,
        good: keywordHit || keywords.length === 0,
        source: "scripted",
      }),
    );
  },
);
