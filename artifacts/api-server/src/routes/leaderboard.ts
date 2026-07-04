import { Router } from "express";
import { and, desc, asc, eq, gt, sql } from "drizzle-orm";
import { db, users, type User } from "@workspace/db";
import { GetLeaderboardResponse } from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { todayStr, weekStartFor } from "../lib/gamification";
import { publicIdentity } from "../lib/social";

export const leaderboardRouter = Router();

const TOP_LIMIT = 20;

function toEntry(user: User, rank: number, meId: number) {
  const identity = publicIdentity(user);
  return {
    userId: user.id,
    rank,
    displayName: identity.displayName,
    avatarUrl: identity.avatarUrl,
    isPublicProfile: identity.isPublicProfile,
    level: user.level,
    streakCount: user.streakCount,
    weeklyXp: user.weeklyXp,
    isMe: user.id === meId,
  };
}

leaderboardRouter.get("/leaderboard", requireAuth, async (req, res) => {
  const weekStart = weekStartFor(todayStr());
  const meId = req.userId!;

  const eligible = and(
    eq(users.hideFromLeaderboard, false),
    eq(users.weekStartDate, weekStart),
    gt(users.weeklyXp, 0),
  );

  const top = await db
    .select()
    .from(users)
    .where(eligible)
    .orderBy(desc(users.weeklyXp), asc(users.id))
    .limit(TOP_LIMIT);

  const entries = top.map((u, i) => toEntry(u, i + 1, meId));

  let me: ReturnType<typeof toEntry> | null =
    entries.find((e) => e.isMe) ?? null;
  if (!me) {
    const [meUser] = await db.select().from(users).where(eq(users.id, meId));
    if (meUser && !meUser.hideFromLeaderboard) {
      const myWeeklyXp =
        meUser.weekStartDate === weekStart ? meUser.weeklyXp : 0;
      const [{ ahead }] = await db
        .select({ ahead: sql<number>`count(*)::int` })
        .from(users)
        .where(
          and(
            eligible,
            sql`(${users.weeklyXp} > ${myWeeklyXp} or (${users.weeklyXp} = ${myWeeklyXp} and ${users.id} < ${meId}))`,
          ),
        );
      me = toEntry(
        { ...meUser, weeklyXp: myWeeklyXp },
        ahead + 1,
        meId,
      );
    }
  }

  res.json(GetLeaderboardResponse.parse({ weekStart, entries, me }));
});
