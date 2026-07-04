import { Router } from "express";
import { eq } from "drizzle-orm";
import { db, achievements } from "@workspace/db";
import { ListAchievementsResponse } from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { ACHIEVEMENT_DEFS } from "../lib/gamification";

export const achievementsRouter = Router();

achievementsRouter.get("/achievements", requireAuth, async (req, res) => {
  const rows = await db
    .select()
    .from(achievements)
    .where(eq(achievements.userId, req.userId!));
  const unlockedByCode = new Map(rows.map((r) => [r.code, r.unlockedAt]));
  const payload = ACHIEVEMENT_DEFS.map((def) => ({
    ...def,
    unlockedAt: unlockedByCode.get(def.code)?.toISOString() ?? null,
  }));
  res.json(ListAchievementsResponse.parse(payload));
});
