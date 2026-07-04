import { useAuth } from "@clerk/clerk-expo";
import { useQueryClient } from "@tanstack/react-query";
import {
  getListOpenaiConversationsQueryKey,
  getListOpenaiMessagesQueryKey,
  useCreateOpenaiConversation,
  useListOpenaiConversations,
  useListOpenaiMessages,
} from "@workspace/api-client-react";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppText, Icon, Screen, uiStyles } from "@/components/ui";
import { fonts } from "@/constants/colors";
import { useColors } from "@/hooks/useColors";
import { streamNovaMessage } from "@/lib/nova";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

let idCounter = 0;
const nextId = () => `local-${Date.now()}-${idCounter++}`;

const SUGGESTIONS = [
  "Explain today's lesson simply",
  "Give me a project idea",
  "Quiz me on what I learned",
];

export default function MentorScreen() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const { getToken } = useAuth();
  const qc = useQueryClient();
  const listRef = useRef<FlatList<ChatMessage>>(null);
  const inputRef = useRef<TextInput>(null);

  const { data: conversations } = useListOpenaiConversations();
  const createConversation = useCreateOpenaiConversation();
  const [conversationId, setConversationId] = useState<number | null>(null);

  const { data: history } = useListOpenaiMessages(conversationId ?? 0, {
    query: {
      enabled: !!conversationId,
      queryKey: getListOpenaiMessagesQueryKey(conversationId ?? 0),
    },
  });

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  // Mirrors `streaming` synchronously so the history-seeding effect can bail out
  // during a live stream without depending on the `streaming` state in its deps.
  const streamingRef = useRef(false);

  // Pick or create a conversation once the list has loaded.
  useEffect(() => {
    if (conversationId || !conversations) return;
    if (conversations.length > 0) {
      setConversationId(conversations[0].id);
    } else if (!createConversation.isPending) {
      createConversation.mutate(
        { data: { title: "Chat with Nova" } },
        {
          onSuccess: (conv) => {
            setConversationId(conv.id);
            qc.invalidateQueries({
              queryKey: getListOpenaiConversationsQueryKey(),
            });
          },
        },
      );
    }
  }, [conversations, conversationId, createConversation, qc]);

  // Seed local messages whenever fresh server history arrives (initial load and
  // the post-reply refetch). Keyed off `history` only — never off the `streaming`
  // toggle — so ending a stream can't reseed from a stale cache and briefly wipe
  // the exchange that was just sent before the refetch resolves. The ref guard
  // ensures an in-flight stream is never clobbered.
  useEffect(() => {
    if (!history || streamingRef.current) return;
    setMessages(
      history.map((m) => ({
        id: `srv-${m.id}`,
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      })),
    );
  }, [history]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || streaming || !conversationId) return;

      setInput("");
      const userMsg: ChatMessage = { id: nextId(), role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      streamingRef.current = true;
      setStreaming(true);

      const assistantId = nextId();
      let started = false;
      const token = await getToken();

      await streamNovaMessage(conversationId, trimmed, token, {
        onDelta: (delta) => {
          setMessages((prev) => {
            if (!started) {
              started = true;
              return [...prev, { id: assistantId, role: "assistant", content: delta }];
            }
            return prev.map((m) =>
              m.id === assistantId ? { ...m, content: m.content + delta } : m,
            );
          });
        },
        onError: (msg) => {
          setMessages((prev) => [
            ...prev,
            { id: nextId(), role: "assistant", content: msg },
          ]);
        },
        onDone: () => {
          streamingRef.current = false;
          setStreaming(false);
          qc.invalidateQueries({
            queryKey: getListOpenaiMessagesQueryKey(conversationId),
          });
        },
      });
      streamingRef.current = false;
      setStreaming(false);
      inputRef.current?.focus();
    },
    [conversationId, streaming, getToken, qc],
  );

  return (
    <Screen padded={false}>
      {/* Header */}
      <View
        style={[
          uiStyles.row,
          { gap: 12, paddingHorizontal: 20, paddingBottom: 12 },
        ]}
      >
        <LinearGradient
          colors={["#a855f7", "#3b82f6"]}
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="sparkles" size={18} color="#fff" />
        </LinearGradient>
        <View>
          <AppText variant="heading">Nova</AppText>
          <AppText variant="caption" muted>
            Your AI learning mentor
          </AppText>
        </View>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={insets.bottom + 80}
      >
        {messages.length === 0 ? (
          <EmptyChat onPick={send} />
        ) : (
          <FlatList
            ref={listRef}
            data={messages}
            keyExtractor={(m) => m.id}
            contentContainerStyle={{ padding: 20, gap: 14 }}
            renderItem={({ item }) => <Bubble message={item} />}
            onContentSizeChange={() =>
              listRef.current?.scrollToEnd({ animated: true })
            }
            showsVerticalScrollIndicator={false}
          />
        )}

        {/* Composer */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 10,
            paddingHorizontal: 16,
            paddingTop: 8,
            paddingBottom: 12,
            borderTopWidth: 1,
            borderTopColor: c.border,
            backgroundColor: c.bg,
          }}
        >
          <TextInput
            ref={inputRef}
            value={input}
            onChangeText={setInput}
            placeholder="Ask Nova anything..."
            placeholderTextColor={c.textMuted}
            multiline
            blurOnSubmit={false}
            style={{
              flex: 1,
              maxHeight: 120,
              minHeight: 46,
              borderRadius: 22,
              paddingHorizontal: 18,
              paddingTop: 12,
              paddingBottom: 12,
              backgroundColor: c.surface2,
              color: c.text,
              fontFamily: fonts.regular,
              fontSize: 14,
              borderWidth: 1,
              borderColor: c.border,
            }}
          />
          <Pressable
            onPress={() => send(input)}
            disabled={!input.trim() || streaming}
            style={{ opacity: !input.trim() || streaming ? 0.5 : 1 }}
          >
            <LinearGradient
              colors={[c.accent, c.accent2]}
              style={{
                width: 46,
                height: 46,
                borderRadius: 23,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {streaming ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Icon name="send" size={18} color="#fff" />
              )}
            </LinearGradient>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

function Bubble({ message }: { message: ChatMessage }) {
  const c = useColors();
  const isUser = message.role === "user";
  return (
    <View
      style={{
        alignSelf: isUser ? "flex-end" : "flex-start",
        maxWidth: "85%",
      }}
    >
      <View
        style={{
          borderRadius: 18,
          paddingHorizontal: 16,
          paddingVertical: 11,
          backgroundColor: isUser ? c.accent : c.surface,
          borderWidth: isUser ? 0 : 1,
          borderColor: c.border,
          borderBottomRightRadius: isUser ? 4 : 18,
          borderBottomLeftRadius: isUser ? 18 : 4,
        }}
      >
        <AppText
          variant="body"
          color={isUser ? "#fff" : c.text}
          style={{ lineHeight: 21 }}
        >
          {message.content || "..."}
        </AppText>
      </View>
    </View>
  );
}

function EmptyChat({ onPick }: { onPick: (text: string) => void }) {
  const c = useColors();
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, gap: 20 }}>
      <View style={{ alignItems: "center", gap: 10 }}>
        <LinearGradient
          colors={["#a855f7", "#3b82f6"]}
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="sparkles" size={28} color="#fff" />
        </LinearGradient>
        <AppText variant="title" style={{ textAlign: "center" }}>
          Hey, I'm Nova
        </AppText>
        <AppText variant="muted" style={{ textAlign: "center" }}>
          Ask me about your lessons, projects, or anything AI.
        </AppText>
      </View>
      <View style={{ gap: 10 }}>
        {SUGGESTIONS.map((s) => (
          <Pressable
            key={s}
            onPress={() => onPick(s)}
            style={{
              padding: 14,
              borderRadius: 14,
              backgroundColor: c.surface,
              borderWidth: 1,
              borderColor: c.border,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Icon name="message" size={16} color={c.accent} />
            <AppText variant="bodyMedium">{s}</AppText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
