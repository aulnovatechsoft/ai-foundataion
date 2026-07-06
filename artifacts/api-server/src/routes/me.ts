import { Router } from "express";
import { and, eq, gte, lte } from "drizzle-orm";
import { db, users, dailyActivity } from "@workspace/db";
import {
  GetMeResponse,
  UpdateMeBody,
  UpdateMeResponse,
  SaveCertificateSetupBody,
  SaveCertificateSetupResponse,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { serializeMe } from "../lib/entitlement";
import { todayStr, weekStartFor, shiftDay } from "../lib/gamification";

/**
 * Builds the current Mon–Sun activity row (7 entries, Monday first) from the
 * daily_activity log — the truthful per-calendar-day source for the streak row.
 */
async function computeWeeklyActivity(
  userId: number,
): Promise<{ date: string; active: boolean }[]> {
  const weekStart = weekStartFor(todayStr());
  const weekEnd = shiftDay(weekStart, 6);
  const rows = await db
    .select({ activityDate: dailyActivity.activityDate })
    .from(dailyActivity)
    .where(
      and(
        eq(dailyActivity.userId, userId),
        gte(dailyActivity.activityDate, weekStart),
        lte(dailyActivity.activityDate, weekEnd),
      ),
    );
  const activeDates = new Set(rows.map((r) => r.activityDate));
  return Array.from({ length: 7 }, (_, i) => {
    const date = shiftDay(weekStart, i);
    return { date, active: activeDates.has(date) };
  });
}

export const meRouter = Router();

meRouter.get("/me", requireAuth, async (req, res) => {
  const [user] = await db.select().from(users).where(eq(users.id, req.userId!));
  const weeklyActivity = await computeWeeklyActivity(req.userId!);
  res.json(GetMeResponse.parse({ ...serializeMe(user), weeklyActivity }));
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

meRouter.post("/me/certificate-setup", requireAuth, async (req, res) => {
  const parsed = SaveCertificateSetupBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }
  const [user] = await db
    .update(users)
    .set({
      certificateName: parsed.data.certificateName.trim(),
      certOnboardingDone: true,
      ...(parsed.data.activeCourseSlug
        ? { activeCourseSlug: parsed.data.activeCourseSlug }
        : {}),
    })
    .where(eq(users.id, req.userId!))
    .returning();
  res.json(SaveCertificateSetupResponse.parse(serializeMe(user)));
});
