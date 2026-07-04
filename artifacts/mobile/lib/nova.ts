import { fetch } from "expo/fetch";

import { getApiBase } from "@/lib/api";

interface StreamCallbacks {
  onDelta: (text: string) => void;
  onDone?: () => void;
  onError?: (message: string) => void;
}

/**
 * Streams Nova's reply for a message posted to a conversation. The server
 * emits SSE lines of the form `data: {"content": "..."}` with a terminal
 * `data: {"done": true}` (or `data: {"error": "..."}`).
 */
export async function streamNovaMessage(
  conversationId: number,
  content: string,
  token: string | null,
  { onDelta, onDone, onError }: StreamCallbacks,
): Promise<void> {
  try {
    const response = await fetch(
      `${getApiBase()}/api/openai/conversations/${conversationId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ content }),
      },
    );

    if (!response.ok || !response.body) {
      onError?.("Nova could not respond right now.");
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      onDone?.();
    };

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const raw = line.slice(6).trim();
        if (!raw) continue;
        try {
          const parsed = JSON.parse(raw);
          if (parsed.content) onDelta(parsed.content as string);
          else if (parsed.error) onError?.(parsed.error as string);
          else if (parsed.done) finish();
        } catch {
          // Ignore partial / non-JSON keepalive lines.
        }
      }
    }
    finish();
  } catch {
    onError?.("Nova could not respond right now.");
  }
}
