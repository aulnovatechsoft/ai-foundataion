import { Router } from "express";
import { and, asc, eq } from "drizzle-orm";
import { openai } from "@workspace/integrations-openai-ai-server";
import { db, conversations, messages } from "@workspace/db";
import {
  ListOpenaiConversationsResponse,
  CreateOpenaiConversationBody,
  CreateOpenaiConversationResponse,
  GetOpenaiConversationParams,
  GetOpenaiConversationResponse,
  DeleteOpenaiConversationParams,
  ListOpenaiMessagesParams,
  ListOpenaiMessagesResponse,
  SendOpenaiMessageParams,
  SendOpenaiMessageBody,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";

export const openaiRouter = Router();

const NOVA_MODEL = "gpt-4o";
const NOVA_SYSTEM =
  "You are Nova, the AI mentor inside Upskil OS, an AI learning platform. " +
  "You help learners master AI skills across a 28-day challenge. Be encouraging, " +
  "concise, and practical. Use plain language and concrete examples.";

async function ownedConversation(userId: number, id: number) {
  const [conv] = await db
    .select()
    .from(conversations)
    .where(and(eq(conversations.id, id), eq(conversations.userId, userId)));
  return conv;
}

openaiRouter.get("/openai/conversations", requireAuth, async (req, res) => {
  const rows = await db
    .select()
    .from(conversations)
    .where(eq(conversations.userId, req.userId!))
    .orderBy(asc(conversations.createdAt));
  res.json(ListOpenaiConversationsResponse.parse(rows));
});

openaiRouter.post("/openai/conversations", requireAuth, async (req, res) => {
  const body = CreateOpenaiConversationBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid conversation" });
    return;
  }
  const [conv] = await db
    .insert(conversations)
    .values({ userId: req.userId!, title: body.data.title })
    .returning();
  res.status(201).json(CreateOpenaiConversationResponse.parse(conv));
});

openaiRouter.get("/openai/conversations/:id", requireAuth, async (req, res) => {
  const params = GetOpenaiConversationParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid conversation id" });
    return;
  }
  const conv = await ownedConversation(req.userId!, params.data.id);
  if (!conv) {
    res.status(404).json({ error: "Conversation not found" });
    return;
  }
  const msgs = await db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, conv.id))
    .orderBy(asc(messages.createdAt));
  res.json(GetOpenaiConversationResponse.parse({ ...conv, messages: msgs }));
});

openaiRouter.delete(
  "/openai/conversations/:id",
  requireAuth,
  async (req, res) => {
    const params = DeleteOpenaiConversationParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: "Invalid conversation id" });
      return;
    }
    const deleted = await db
      .delete(conversations)
      .where(
        and(
          eq(conversations.id, params.data.id),
          eq(conversations.userId, req.userId!),
        ),
      )
      .returning({ id: conversations.id });
    if (deleted.length === 0) {
      res.status(404).json({ error: "Conversation not found" });
      return;
    }
    res.status(204).send();
  },
);

openaiRouter.get(
  "/openai/conversations/:id/messages",
  requireAuth,
  async (req, res) => {
    const params = ListOpenaiMessagesParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: "Invalid conversation id" });
      return;
    }
    const conv = await ownedConversation(req.userId!, params.data.id);
    if (!conv) {
      res.status(404).json({ error: "Conversation not found" });
      return;
    }
    const msgs = await db
      .select()
      .from(messages)
      .where(eq(messages.conversationId, conv.id))
      .orderBy(asc(messages.createdAt));
    res.json(ListOpenaiMessagesResponse.parse(msgs));
  },
);

openaiRouter.post(
  "/openai/conversations/:id/messages",
  requireAuth,
  async (req, res) => {
    const params = SendOpenaiMessageParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: "Invalid conversation id" });
      return;
    }
    const body = SendOpenaiMessageBody.safeParse(req.body);
    if (!body.success) {
      res.status(400).json({ error: "Invalid message" });
      return;
    }
    const conv = await ownedConversation(req.userId!, params.data.id);
    if (!conv) {
      res.status(404).json({ error: "Conversation not found" });
      return;
    }

    await db.insert(messages).values({
      conversationId: conv.id,
      role: "user",
      content: body.data.content,
    });

    const history = await db
      .select()
      .from(messages)
      .where(eq(messages.conversationId, conv.id))
      .orderBy(asc(messages.createdAt));

    const chatMessages = [
      { role: "system" as const, content: NOVA_SYSTEM },
      ...history.map((m) => ({
        role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
        content: m.content,
      })),
    ];

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    let fullResponse = "";
    try {
      const stream = await openai.chat.completions.create({
        model: NOVA_MODEL,
        max_completion_tokens: 4096,
        messages: chatMessages,
        stream: true,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          fullResponse += content;
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }

      if (fullResponse) {
        await db.insert(messages).values({
          conversationId: conv.id,
          role: "assistant",
          content: fullResponse,
        });
      }
      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (err) {
      req.log.error({ err }, "Nova stream failed");
      res.write(
        `data: ${JSON.stringify({ error: "Assistant failed to respond" })}\n\n`,
      );
      res.end();
    }
  },
);
