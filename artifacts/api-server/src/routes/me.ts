import { Router } from "express";
import { eq } from "drizzle-orm";
import { db, users } from "@workspace/db";
import { GetMeResponse, UpdateMeBody, UpdateMeResponse } from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { serializeMe } from "../lib/entitlement";

export const meRouter = Router();

meRouter.get("/me", requireAuth, async (req, res) => {
  const [user] = await db.select().from(users).where(eq(users.id, req.userId!));
  res.json(GetMeResponse.parse(serializeMe(user)));
});

meRouter.patch("/me", requireAuth, async (req, res) => {
  const parsed = UpdateMeBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }
  if (Object.keys(parsed.data).length === 0) {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, req.userId!));
    res.json(UpdateMeResponse.parse(serializeMe(user)));
    return;
  }
  const [user] = await db
    .update(users)
    .set(parsed.data)
    .where(eq(users.id, req.userId!))
    .returning();
  res.json(UpdateMeResponse.parse(serializeMe(user)));
});
