import { Router } from "express";
import { eq } from "drizzle-orm";
import { db, users } from "@workspace/db";
import {
  PreviewOnboardingBody,
  PreviewOnboardingResponse,
  SaveOnboardingBody,
  SaveOnboardingResponse,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { computeProgram } from "../lib/onboardingProgram";
import { serializeMe } from "../lib/entitlement";

export const onboardingRouter = Router();

// Anonymous: compute a personalized program preview from quiz answers.
onboardingRouter.post("/onboarding/preview", async (req, res) => {
  const body = PreviewOnboardingBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid onboarding answers" });
    return;
  }
  const program = computeProgram(body.data.answers);
  res.json(PreviewOnboardingResponse.parse(program));
});

// Authenticated: persist quiz answers to the user and return the saved profile.
onboardingRouter.post("/onboarding", requireAuth, async (req, res) => {
  const body = SaveOnboardingBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid onboarding answers" });
    return;
  }
  const program = computeProgram(body.data.answers);
  const answers = body.data.answers;
  const parsedMinutes = Number.parseInt(answers.time ?? "", 10);
  const dailyMinutes = [10, 20, 40].includes(parsedMinutes) ? parsedMinutes : 20;
  const [user] = await db
    .update(users)
    .set({
      onboardingCompleted: true,
      onboardingAnswers: answers,
      workContext: program.workContext,
      programTitle: program.programTitle,
      programFocus: program.programFocus,
      dailyMinutes,
      field: answers.field ?? null,
      experienceLevel: answers.experience ?? null,
      goal: answers.goal ?? null,
    })
    .where(eq(users.id, req.userId!))
    .returning();
  res.json(SaveOnboardingResponse.parse(serializeMe(user)));
});
