import type { Request, Response, NextFunction } from "express";
import { eq } from "drizzle-orm";
import { db, users } from "@workspace/db";
import { canAccessDay } from "../lib/entitlement";

/**
 * Guards day-scoped routes behind the paywall. Must run after `requireAuth`.
 * Hard paywall: every day (1-28) requires a paid or grandfathered user.
 * Returns 402 Payment Required when the day is locked.
 */
export async function requireDayAccess(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const day = Number(req.params.day);
  if (!Number.isInteger(day) || day < 1) {
    res.status(400).json({ error: "Invalid day" });
    return;
  }

  const [user] = await db
    .select({
      hasPaid: users.hasPaid,
      isGrandfathered: users.isGrandfathered,
    })
    .from(users)
    .where(eq(users.id, req.userId!));

  if (!user || !canAccessDay(user, day)) {
    res.status(402).json({
      error: "This day is locked. Unlock the full program to continue.",
    });
    return;
  }

  next();
}
