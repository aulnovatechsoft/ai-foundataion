import { Router } from "express";
import { asc, eq, and, inArray } from "drizzle-orm";
import {
  db,
  courses,
  courseUnits,
  courseLessons,
  lessonProgress,
} from "@workspace/db";
import {
  ListCoursesResponse,
  GetCourseParams,
  GetCourseResponse,
  CompleteCourseLessonParams,
  CompleteCourseLessonResponse,
  GenerateLessonAudioParams,
  GenerateLessonAudioResponse,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { applyUserActivity } from "../lib/gamification";
import { textToSpeech } from "@workspace/integrations-openai-ai-server/audio";
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
        })),
    })),
  };
  res.json(GetCourseResponse.parse(result));
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
      .trim()
      .substring(0, 3000);

    const script = `${lesson.title}. ${stepText || lesson.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().substring(0, 3000)}`;

    const wordCount = script.split(/\s+/).length;
    const estimatedDuration = Math.round((wordCount / 150) * 60);

    let buffer: Buffer;
    try {
      buffer = await textToSpeech(
        script,
        "onyx",
        "mp3",
        "Speak in very clear, crisp, professional English with a subtle Indian accent, like a confident male narrator of an online learning course. Enunciate every word distinctly at a steady, easy-to-follow pace.",
      );
    } catch (err) {
      console.error("Lesson audio generation failed", err);
      res.status(503).json({
        error:
          "Audio generation is temporarily unavailable. Please try again later.",
      });
      return;
    }

    const audioDir = path.join(process.cwd(), "audio");
    await fs.mkdir(audioDir, { recursive: true });
    const fileName = `lesson-${lesson.id}-${crypto.randomBytes(16).toString("hex")}.mp3`;
    await fs.writeFile(path.join(audioDir, fileName), buffer);
    const audioUrl = `/api/audio/${fileName}`;

    await db
      .update(courseLessons)
      .set({ audioUrl, audioDurationSec: estimatedDuration })
      .where(eq(courseLessons.id, lesson.id));

    res.json(
      GenerateLessonAudioResponse.parse({
        audioUrl,
        durationSec: estimatedDuration,
      }),
    );
  },
);
