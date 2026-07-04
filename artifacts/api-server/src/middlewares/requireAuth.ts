import type { Request, Response, NextFunction } from "express";
import { getAuth, clerkClient } from "@clerk/express";
import { eq } from "drizzle-orm";
import { db, users, type User } from "@workspace/db";

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
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const user = await findOrCreateUser(req, clerkUserId);
  req.userId = user.id;
  req.clerkUserId = clerkUserId;
  next();
}
