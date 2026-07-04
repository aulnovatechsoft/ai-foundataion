import { Router } from "express";
import { and, eq, isNotNull, sql } from "drizzle-orm";
import { db, users, dayProgress, achievements } from "@workspace/db";
import { GetPublicProfileResponse } from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { ACHIEVEMENT_DEFS } from "../lib/gamification";

export const profilesRouter = Router();

const DEFS_BY_CODE = new Map(ACHIEVEMENT_DEFS.map((d) => [d.code, d]));

profilesRouter.get("/users/:id/profile", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(404).json({ error: "Profile not found" });
    return;
  }

  const [user] = await db.select().from(users).where(eq(users.id, id));
  if (!user || !user.isPublicProfile || user.anonymousMode) {
    res.status(404).json({ error: "Profile not found" });
    return;
  }

  const [[{ completedDays }], unlocked] = await Promise.all([
    db
      .select({ completedDays: sql<number>`count(*)::int` })
      .from(dayProgress)
      .where(
        and(eq(dayProgress.userId, id), isNotNull(dayProgress.completedAt)),
      ),
    db
      .select({ code: achievements.code, unlockedAt: achievements.unlockedAt })
      .from(achievements)
      .where(eq(achievements.userId, id)),
  ]);

  const badges = unlocked
    .map((row) => {
      const def = DEFS_BY_CODE.get(row.code);
      if (!def) return null;
      return { ...def, unlockedAt: row.unlockedAt.toISOString() };
    })
    .filter((b): b is NonNullable<typeof b> => b !== null);

  res.json(
    GetPublicProfileResponse.parse({
      userId: user.id,
      displayName: user.displayName,
      avatarUrl: user.avatarUrl,
      level: user.level,
      xp: user.xp,
      streakCount: user.streakCount,
      completedDays,
      badges,
      joinedAt: user.createdAt.toISOString(),
    }),
  );
});
