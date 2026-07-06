import { eq } from "drizzle-orm";
import { db, users, achievements, dailyActivity, type User } from "@workspace/db";
import { serializeMe } from "./entitlement";

const XP_PER_LEVEL = 500;
const FINAL_DAY = 28;
const FREEZE_CAP = 3;
const FREEZE_EARN_EVERY = 7;

export type Tx = Parameters<Parameters<typeof db.transaction>[0]>[0];

export interface AchievementDef {
  code: string;
  title: string;
  description: string;
  icon: string;
}

export const ACHIEVEMENT_DEFS: AchievementDef[] = [
  {
    code: "first_step",
    title: "First Step",
    description: "Complete your first learning step",
    icon: "footprints",
  },
  {
    code: "day_one",
    title: "Day One Done",
    description: "Complete every step of Day 1",
    icon: "sunrise",
  },
  {
    code: "perfect_quiz",
    title: "Perfect Score",
    description: "Ace a quiz with 100%",
    icon: "target",
  },
  {
    code: "streak_3",
    title: "On a Roll",
    description: "Reach a 3-day streak",
    icon: "flame",
  },
  {
    code: "streak_7",
    title: "Week of Fire",
    description: "Reach a 7-day streak",
    icon: "flame",
  },
  {
    code: "streak_14",
    title: "Fortnight Flame",
    description: "Reach a 14-day streak",
    icon: "flame",
  },
  {
    code: "halfway",
    title: "Halfway Hero",
    description: "Complete Day 14 — halfway there",
    icon: "milestone",
  },
  {
    code: "finisher",
    title: "Challenge Finisher",
    description: "Complete all 28 days",
    icon: "trophy",
  },
  {
    code: "level_5",
    title: "Rising Star",
    description: "Reach level 5",
    icon: "zap",
  },
  {
    code: "level_10",
    title: "AI Powerhouse",
    description: "Reach level 10",
    icon: "crown",
  },
  {
    code: "xp_1000",
    title: "XP Collector",
    description: "Earn 1,000 total XP",
    icon: "gem",
  },
];

const DEFS_BY_CODE = new Map(ACHIEVEMENT_DEFS.map((d) => [d.code, d]));

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

export function shiftDay(dateStr: string, deltaDays: number): string {
  const d = new Date(`${dateStr}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + deltaDays);
  return d.toISOString().slice(0, 10);
}

function daysBetween(fromStr: string, toStr: string): number {
  const from = new Date(`${fromStr}T00:00:00.000Z`).getTime();
  const to = new Date(`${toStr}T00:00:00.000Z`).getTime();
  return Math.round((to - from) / 86_400_000);
}

export function levelForXp(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

/** Monday-based start of the week (UTC) for a YYYY-MM-DD date string. */
export function weekStartFor(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00.000Z`);
  const dow = d.getUTCDay(); // 0 = Sunday
  const daysSinceMonday = (dow + 6) % 7;
  return shiftDay(dateStr, -daysSinceMonday);
}

/**
 * Computes the new streak, consuming streak freezes to bridge missed days
 * when possible. One freeze covers one missed day; if the gap exceeds the
 * available freezes the streak resets to 1 and no freezes are consumed.
 */
export function computeStreak(
  lastActiveDate: string | null,
  prevStreak: number,
  today: string,
  freezesAvailable: number,
): { streak: number; freezesConsumed: number } {
  if (lastActiveDate === today) {
    return { streak: prevStreak || 1, freezesConsumed: 0 };
  }
  if (!lastActiveDate) return { streak: 1, freezesConsumed: 0 };
  if (lastActiveDate === shiftDay(today, -1)) {
    return { streak: prevStreak + 1, freezesConsumed: 0 };
  }
  const missedDays = daysBetween(lastActiveDate, today) - 1;
  if (missedDays > 0 && missedDays <= freezesAvailable) {
    return { streak: prevStreak + 1, freezesConsumed: missedDays };
  }
  return { streak: 1, freezesConsumed: 0 };
}

export interface ActivityResult {
  user: ReturnType<typeof serializeMe>;
  xpAwarded: number;
  leveledUp: boolean;
  dayCompleted: boolean;
  streakExtended: boolean;
  unlockedAchievements: AchievementDef[];
}

/**
 * Awards XP, refreshes the daily streak (consuming/earning streak freezes),
 * recomputes level, optionally advances the user's current day, and unlocks
 * any newly earned achievements. Runs inside the caller's transaction and
 * locks the user row (`FOR UPDATE`) so concurrent completions cannot lose
 * updates. Returns the updated user row plus celebration metadata.
 */
export async function applyUserActivity(
  tx: Tx,
  userId: number,
  opts: { xpDelta?: number; completedDay?: number; perfectQuiz?: boolean },
): Promise<ActivityResult> {
  const [user] = await tx
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .for("update");
  if (!user) throw new Error(`User ${userId} not found`);

  const today = todayStr();
  const xpAwarded = Math.max(0, opts.xpDelta ?? 0);
  const newXp = user.xp + xpAwarded;
  const { streak: streakCount, freezesConsumed } = computeStreak(
    user.lastActiveDate,
    user.streakCount,
    today,
    user.streakFreezes,
  );
  const level = levelForXp(newXp);
  const leveledUp = level > user.level;
  const streakExtended =
    user.lastActiveDate !== today && streakCount > user.streakCount;

  // Earn a freeze the day the streak hits a multiple of 7 (capped).
  let streakFreezes = user.streakFreezes - freezesConsumed;
  if (
    streakExtended &&
    streakCount > 0 &&
    streakCount % FREEZE_EARN_EVERY === 0
  ) {
    streakFreezes = Math.min(streakFreezes + 1, FREEZE_CAP);
  }

  let currentDay = user.currentDay;
  if (opts.completedDay != null && opts.completedDay >= currentDay) {
    currentDay = Math.min(opts.completedDay + 1, FINAL_DAY);
  }

  // Weekly XP resets every Monday (UTC).
  const weekStart = weekStartFor(today);
  const weeklyXp =
    (user.weekStartDate === weekStart ? user.weeklyXp : 0) + xpAwarded;

  const [updated] = await tx
    .update(users)
    .set({
      xp: newXp,
      weeklyXp,
      weekStartDate: weekStart,
      streakCount,
      streakFreezes,
      level,
      currentDay,
      lastActiveDate: today,
    })
    .where(eq(users.id, userId))
    .returning();

  // Log today's activity for the weekly Mon–Sun streak row (idempotent).
  await tx
    .insert(dailyActivity)
    .values({ userId, activityDate: today })
    .onConflictDoNothing({
      target: [dailyActivity.userId, dailyActivity.activityDate],
    });

  const candidates = new Set<string>();
  if (xpAwarded > 0) candidates.add("first_step");
  if (opts.completedDay === 1) candidates.add("day_one");
  if (opts.completedDay === 14) candidates.add("halfway");
  if (opts.completedDay === FINAL_DAY) candidates.add("finisher");
  if (opts.perfectQuiz) candidates.add("perfect_quiz");
  if (streakCount >= 3) candidates.add("streak_3");
  if (streakCount >= 7) candidates.add("streak_7");
  if (streakCount >= 14) candidates.add("streak_14");
  if (level >= 5) candidates.add("level_5");
  if (level >= 10) candidates.add("level_10");
  if (newXp >= 1000) candidates.add("xp_1000");

  let unlockedAchievements: AchievementDef[] = [];
  if (candidates.size > 0) {
    const inserted = await tx
      .insert(achievements)
      .values([...candidates].map((code) => ({ userId, code })))
      .onConflictDoNothing({
        target: [achievements.userId, achievements.code],
      })
      .returning({ code: achievements.code });
    unlockedAchievements = inserted
      .map((r) => DEFS_BY_CODE.get(r.code))
      .filter((d): d is AchievementDef => !!d);
  }

  return {
    user: serializeMe(updated),
    xpAwarded,
    leveledUp,
    dayCompleted: opts.completedDay != null,
    streakExtended,
    unlockedAchievements,
  };
}
