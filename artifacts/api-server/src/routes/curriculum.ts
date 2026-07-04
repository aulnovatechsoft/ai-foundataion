import { Router } from "express";
import { asc, eq } from "drizzle-orm";
import { db, curriculumDays, quizQuestions } from "@workspace/db";
import {
  ListCurriculumDaysResponse,
  GetCurriculumDayParams,
  GetCurriculumDayResponse,
  GenerateDayAudioParams,
  GenerateDayAudioResponse,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { requireDayAccess } from "../middlewares/requireDayAccess";
import { textToSpeech } from "@workspace/integrations-openai-ai-server/audio";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export const curriculumRouter = Router();

curriculumRouter.get("/curriculum", requireAuth, async (_req, res) => {
  const days = await db
    .select()
    .from(curriculumDays)
    .orderBy(asc(curriculumDays.day));
  res.json(ListCurriculumDaysResponse.parse(days));
});

curriculumRouter.get("/curriculum/:day", requireAuth, requireDayAccess, async (req, res) => {
  const params = GetCurriculumDayParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid day" });
    return;
  }
  const [day] = await db
    .select()
    .from(curriculumDays)
    .where(eq(curriculumDays.day, params.data.day));
  if (!day) {
    res.status(404).json({ error: "Curriculum day not found" });
    return;
  }
  const quiz = await db
    .select()
    .from(quizQuestions)
    .where(eq(quizQuestions.day, day.day))
    .orderBy(asc(quizQuestions.orderIndex));
  res.json(GetCurriculumDayResponse.parse({ ...day, quiz }));
});

curriculumRouter.post("/curriculum/:day/audio", requireAuth, requireDayAccess, async (req, res) => {
  const params = GenerateDayAudioParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid day" });
    return;
  }

  const [day] = await db
    .select()
    .from(curriculumDays)
    .where(eq(curriculumDays.day, params.data.day));
  if (!day) {
    res.status(404).json({ error: "Curriculum day not found" });
    return;
  }

  if (day.audioUrl) {
    res.json(GenerateDayAudioResponse.parse({
      audioUrl: day.audioUrl,
      durationSec: day.audioDurationSec ?? null,
    }));
    return;
  }

  const lessonText = day.lessonContent
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .substring(0, 1500);

  const taskText = day.taskDescription
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .substring(0, 400);

  const script = `Welcome to Day ${day.day} of your AI mastery journey. Today's theme is ${day.theme}, and we're diving into: ${day.title}.

${day.lessonTitle}.

${lessonText}

Now let's talk about today's practical challenge. Your task is: ${day.taskTitle}. ${taskText}

As you work through today, remember to reflect on this: ${day.reflectionPrompt}

That's your deep dive for Day ${day.day}. Keep building, keep experimenting, and I'll see you tomorrow.`;

  const wordCount = script.split(/\s+/).length;
  const estimatedDuration = Math.round((wordCount / 150) * 60);

  let buffer: Buffer;
  try {
    buffer = await textToSpeech(script, "nova", "mp3");
  } catch (err) {
    console.error("Audio generation failed", err);
    res.status(503).json({
      error:
        "Audio generation is temporarily unavailable. Please try again later.",
    });
    return;
  }

  const audioDir = path.join(process.cwd(), "audio");
  await fs.mkdir(audioDir, { recursive: true });
  // Opaque, unguessable filename. The resulting URL is only ever returned via
  // paywall-guarded endpoints, so an unpaid user cannot enumerate/guess it.
  const fileName = `day-${day.day}-${crypto.randomBytes(16).toString("hex")}.mp3`;
  const filePath = path.join(audioDir, fileName);
  await fs.writeFile(filePath, buffer);

  const audioUrl = `/api/audio/${fileName}`;

  await db
    .update(curriculumDays)
    .set({ audioUrl, audioDurationSec: estimatedDuration })
    .where(eq(curriculumDays.day, day.day));

  res.json(GenerateDayAudioResponse.parse({
    audioUrl,
    durationSec: estimatedDuration,
  }));
});
