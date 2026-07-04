import { Router } from "express";
import { and, desc, eq, inArray, sql } from "drizzle-orm";
import { db, posts, postLikes, users, type Post, type User } from "@workspace/db";
import {
  ListFeedResponse,
  CreatePostBody,
  CreatePostResponse,
  LikePostResponse,
  UnlikePostResponse,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { publicIdentity } from "../lib/social";

export const feedRouter = Router();

const FEED_LIMIT = 50;

function toFeedPost(
  post: Post,
  author: User,
  likeCount: number,
  likedByMe: boolean,
  meId: number,
) {
  const identity = publicIdentity(author);
  return {
    id: post.id,
    day: post.day,
    kind: post.kind,
    content: post.content,
    createdAt: post.createdAt.toISOString(),
    author: {
      userId: author.id,
      displayName: identity.displayName,
      avatarUrl: identity.avatarUrl,
      isPublicProfile: identity.isPublicProfile,
      level: author.level,
    },
    likeCount,
    likedByMe,
    isMine: post.userId === meId,
  };
}

async function loadPost(postId: number, meId: number) {
  const [row] = await db
    .select({ post: posts, author: users })
    .from(posts)
    .innerJoin(users, eq(posts.userId, users.id))
    .where(eq(posts.id, postId));
  if (!row) return null;
  const [[{ likeCount }], [myLike]] = await Promise.all([
    db
      .select({ likeCount: sql<number>`count(*)::int` })
      .from(postLikes)
      .where(eq(postLikes.postId, postId)),
    db
      .select({ id: postLikes.id })
      .from(postLikes)
      .where(and(eq(postLikes.postId, postId), eq(postLikes.userId, meId))),
  ]);
  return toFeedPost(row.post, row.author, likeCount, !!myLike, meId);
}

feedRouter.get("/feed", requireAuth, async (req, res) => {
  const meId = req.userId!;
  const rows = await db
    .select({ post: posts, author: users })
    .from(posts)
    .innerJoin(users, eq(posts.userId, users.id))
    .orderBy(desc(posts.createdAt), desc(posts.id))
    .limit(FEED_LIMIT);

  const postIds = rows.map((r) => r.post.id);
  let likeCounts = new Map<number, number>();
  let myLikes = new Set<number>();
  if (postIds.length > 0) {
    const [counts, mine] = await Promise.all([
      db
        .select({
          postId: postLikes.postId,
          likeCount: sql<number>`count(*)::int`,
        })
        .from(postLikes)
        .where(inArray(postLikes.postId, postIds))
        .groupBy(postLikes.postId),
      db
        .select({ postId: postLikes.postId })
        .from(postLikes)
        .where(
          and(inArray(postLikes.postId, postIds), eq(postLikes.userId, meId)),
        ),
    ]);
    likeCounts = new Map(counts.map((c) => [c.postId, c.likeCount]));
    myLikes = new Set(mine.map((m) => m.postId));
  }

  res.json(
    ListFeedResponse.parse(
      rows.map((r) =>
        toFeedPost(
          r.post,
          r.author,
          likeCounts.get(r.post.id) ?? 0,
          myLikes.has(r.post.id),
          meId,
        ),
      ),
    ),
  );
});

feedRouter.post("/feed", requireAuth, async (req, res) => {
  const parsed = CreatePostBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }
  const meId = req.userId!;
  const [created] = await db
    .insert(posts)
    .values({
      userId: meId,
      content: parsed.data.content.trim(),
      day: parsed.data.day ?? null,
      kind: parsed.data.kind ?? "win",
    })
    .returning();
  const full = await loadPost(created.id, meId);
  res.status(201).json(CreatePostResponse.parse(full));
});

feedRouter.delete("/feed/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(404).json({ error: "Post not found" });
    return;
  }
  const deleted = await db
    .delete(posts)
    .where(and(eq(posts.id, id), eq(posts.userId, req.userId!)))
    .returning({ id: posts.id });
  if (deleted.length === 0) {
    res.status(404).json({ error: "Post not found" });
    return;
  }
  res.status(204).end();
});

feedRouter.post("/feed/:id/like", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(404).json({ error: "Post not found" });
    return;
  }
  const [post] = await db.select().from(posts).where(eq(posts.id, id));
  if (!post) {
    res.status(404).json({ error: "Post not found" });
    return;
  }
  await db
    .insert(postLikes)
    .values({ postId: id, userId: req.userId! })
    .onConflictDoNothing({ target: [postLikes.postId, postLikes.userId] });
  const full = await loadPost(id, req.userId!);
  res.json(LikePostResponse.parse(full));
});

feedRouter.delete("/feed/:id/like", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(404).json({ error: "Post not found" });
    return;
  }
  await db
    .delete(postLikes)
    .where(and(eq(postLikes.postId, id), eq(postLikes.userId, req.userId!)));
  const full = await loadPost(id, req.userId!);
  if (!full) {
    res.status(404).json({ error: "Post not found" });
    return;
  }
  res.json(UnlikePostResponse.parse(full));
});
