import type { User } from "@workspace/db";

export const TOTAL_DAYS = 28;
/**
 * Hard paywall: zero free days. Unpaid users can open no day of the program —
 * the entire 28-day curriculum is gated behind payment (pay-first funnel).
 */
export const FREE_PREVIEW_THROUGH_DAY = 0;

/** A user has full access if they paid or were grandfathered in. */
export function userHasAccess(user: Pick<User, "hasPaid" | "isGrandfathered">): boolean {
  return user.hasPaid || user.isGrandfathered;
}

/** Highest day the user may open right now (0 when unpaid, 28 when entitled). */
export function accessibleThroughDay(
  user: Pick<User, "hasPaid" | "isGrandfathered">,
): number {
  return userHasAccess(user) ? TOTAL_DAYS : FREE_PREVIEW_THROUGH_DAY;
}

export function canAccessDay(
  user: Pick<User, "hasPaid" | "isGrandfathered">,
  day: number,
): boolean {
  return day <= accessibleThroughDay(user);
}

/**
 * Shape a Drizzle user row into the API `Me` contract, adding the computed
 * entitlement fields. `<Op>Response.parse` will strip any extra keys.
 */
export function serializeMe(user: User) {
  return {
    ...user,
    createdAt: user.createdAt,
    hasAccess: userHasAccess(user),
    accessibleThroughDay: accessibleThroughDay(user),
    // Surface the raw aspiration answer so the paywall can reinforce the
    // learner's "why" even when localStorage is unavailable (new device,
    // cleared storage, or a direct visit to /upgrade).
    aspiration: user.onboardingAnswers?.aspiration ?? null,
  };
}
