import type { Request, Response, NextFunction } from "express";
import { getAuth, clerkClient } from "@clerk/express";
import { eq } from "drizzle-orm";
import { db, users, type User } from "@workspace/db";

/**
 * Dev-only testing fallback. When Clerk cannot verify the session (e.g. a
 * misconfigured CLERK_SECRET_KEY in this environment) and NODE_ENV is exactly
 * "development", requests are signed in as this fixed test user so the app is
 * fully usable for testing. Fail-closed: any other NODE_ENV keeps auth enforced.
 */
const DEV_TEST_CLERK_ID = "dev-test-user";

async function findOrCreateTestUser(): Promise<User> {
  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.clerkUserId, DEV_TEST_CLERK_ID));
  if (existing) {
    if (!existing.hasPaid && !existing.isGrandfathered) {
      const [updated] = await db
        .update(users)
        .set({ hasPaid: true, paidAt: existing.paidAt ?? new Date() })
        .where(eq(users.id, existing.id))
        .returning();
      return updated ?? existing;
    }
    return existing;
  }

  const [inserted] = await db
    .insert(users)
    .values({
      clerkUserId: DEV_TEST_CLERK_ID,
      email: "dev-test@example.com",
      displayName: "Test User",
      hasPaid: true,
      paidAt: new Date(),
    })
    .onConflictDoNothing({ target: users.clerkUserId })
    .returning();
  if (inserted) return inserted;

  const [raced] = await db
    .select()
    .from(users)
    .where(eq(users.clerkUserId, DEV_TEST_CLERK_ID));
  return raced;
}

async function findOrCreateUser(
  req: Request,
  clerkUserId: string,
): Promise<User> {
  const existing = await db
    .select()
    .from(users)
    .where(eq(users.clerkUserId, clerkUserId));
  if (existing[0]) return existing[0];

  let email: string | null = null;
  let displayName: string | null = null;
  let avatarUrl: string | null = null;
  try {
    const cu = await clerkClient.users.getUser(clerkUserId);
    email = cu.emailAddresses?.[0]?.emailAddress ?? null;
    displayName =
      [cu.firstName, cu.lastName].filter(Boolean).join(" ") ||
      cu.username ||
      null;
    avatarUrl = cu.imageUrl ?? null;
  } catch (err) {
    req.log.warn({ err }, "Failed to load Clerk user profile");
  }

  const inserted = await db
    .insert(users)
    .values({ clerkUserId, email, displayName, avatarUrl })
    .onConflictDoNothing({ target: users.clerkUserId })
    .returning();
  if (inserted[0]) return inserted[0];

  // Lost an insert race; re-read the row created by the concurrent request.
  const [raced] = await db
    .select()
    .from(users)
    .where(eq(users.clerkUserId, clerkUserId));
  return raced;
}

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const auth = getAuth(req);
  const clerkUserId = auth?.userId;
  if (!clerkUserId) {
    // Fail-closed: only the explicit "development" env enables the bypass, so a
    // missing/typo'd/unknown NODE_ENV never silently disables auth.
    if (process.env.NODE_ENV === "development") {
      const testUser = await findOrCreateTestUser();
      req.userId = testUser.id;
      req.clerkUserId = testUser.clerkUserId;
      req.log.warn(
        "Clerk session not verified; using dev test-user fallback (never active in production)",
      );
      next();
      return;
    }
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const user = await findOrCreateUser(req, clerkUserId);
  req.userId = user.id;
  req.clerkUserId = clerkUserId;
  next();
}
