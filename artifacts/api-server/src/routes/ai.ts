import { Router } from "express";
import { openai } from "@workspace/integrations-openai-ai-server";
import { RunPlaygroundBody, RunPlaygroundResponse } from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";

export const aiRouter = Router();

const PLAYGROUND_MODEL = "gpt-4o-mini";
const DEFAULT_SYSTEM =
  "You are a helpful AI assistant inside Upskil OS, an AI learning platform. " +
  "Give clear, concise, practical answers.";

aiRouter.post("/ai/playground", requireAuth, async (req, res) => {
  const body = RunPlaygroundBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid request" });
    return;
  }

  const completion = await openai.chat.completions.create({
    model: PLAYGROUND_MODEL,
    messages: [
      { role: "system", content: body.data.system ?? DEFAULT_SYSTEM },
      { role: "user", content: body.data.prompt },
    ],
  });

  const output = completion.choices[0]?.message?.content ?? "";
  res.json(RunPlaygroundResponse.parse({ output }));
});
