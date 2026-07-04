import { Router } from "express";
import { and, desc, eq } from "drizzle-orm";
import { db, prompts } from "@workspace/db";
import {
  ListPromptsResponse,
  CreatePromptBody,
  CreatePromptResponse,
  UpdatePromptParams,
  UpdatePromptBody,
  UpdatePromptResponse,
  DeletePromptParams,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";

export const promptsRouter = Router();

promptsRouter.get("/prompts", requireAuth, async (req, res) => {
  const rows = await db
    .select()
    .from(prompts)
    .where(eq(prompts.userId, req.userId!))
    .orderBy(desc(prompts.updatedAt));
  res.json(ListPromptsResponse.parse(rows));
});

promptsRouter.post("/prompts", requireAuth, async (req, res) => {
  const body = CreatePromptBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid prompt" });
    return;
  }
  const [prompt] = await db
    .insert(prompts)
    .values({
      userId: req.userId!,
      title: body.data.title,
      body: body.data.body,
      category: body.data.category ?? null,
    })
    .returning();
  res.status(201).json(CreatePromptResponse.parse(prompt));
});

promptsRouter.patch("/prompts/:id", requireAuth, async (req, res) => {
  const params = UpdatePromptParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid prompt id" });
    return;
  }
  const body = UpdatePromptBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid prompt" });
    return;
  }
  const [prompt] = await db
    .update(prompts)
    .set(body.data)
    .where(and(eq(prompts.id, params.data.id), eq(prompts.userId, req.userId!)))
    .returning();
  if (!prompt) {
    res.status(404).json({ error: "Prompt not found" });
    return;
  }
  res.json(UpdatePromptResponse.parse(prompt));
});

promptsRouter.delete("/prompts/:id", requireAuth, async (req, res) => {
  const params = DeletePromptParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid prompt id" });
    return;
  }
  const deleted = await db
    .delete(prompts)
    .where(and(eq(prompts.id, params.data.id), eq(prompts.userId, req.userId!)))
    .returning({ id: prompts.id });
  if (deleted.length === 0) {
    res.status(404).json({ error: "Prompt not found" });
    return;
  }
  res.status(204).send();
});
