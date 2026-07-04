import { useQueryClient } from "@tanstack/react-query";
import {
  getListPromptsQueryKey,
  useCreatePrompt,
  useDeletePrompt,
  useListPrompts,
} from "@workspace/api-client-react";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Modal, Pressable, View } from "react-native";

import { Field } from "@/components/Field";
import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";
import {
  AppText,
  EmptyState,
  GlassCard,
  GradientButton,
  Icon,
  IconButton,
  LoadingScreen,
  Pill,
  Screen,
  uiStyles,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";

export default function PromptsScreen() {
  const c = useColors();
  const router = useRouter();
  const qc = useQueryClient();

  const { data: prompts, isLoading } = useListPrompts();
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const create = useCreatePrompt({
    mutation: {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: getListPromptsQueryKey() });
        setModalOpen(false);
        setTitle("");
        setBody("");
        setCategory("");
      },
    },
  });
  const remove = useDeletePrompt({
    mutation: {
      onSuccess: () =>
        qc.invalidateQueries({ queryKey: getListPromptsQueryKey() }),
    },
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <Screen padded={false}>
      <View
        style={[
          uiStyles.rowBetween,
          { paddingHorizontal: 20, paddingBottom: 8 },
        ]}
      >
        <View style={[uiStyles.row, { gap: 12 }]}>
          <IconButton name="chevron-left" onPress={() => router.back()} />
          <AppText variant="heading">Prompt Library</AppText>
        </View>
        <IconButton
          name="plus"
          bg={c.a("accent", 0.16)}
          color={c.accent}
          onPress={() => setModalOpen(true)}
        />
      </View>

      <Screen scroll padded contentContainerStyle={{ gap: 12, paddingTop: 8 }}>
        {(prompts?.length ?? 0) === 0 ? (
          <EmptyState
            icon="bookmark"
            title="No saved prompts"
            subtitle="Save prompts you want to reuse later."
          />
        ) : (
          prompts!.map((p) => (
            <GlassCard key={p.id}>
              <View style={[uiStyles.rowBetween, { marginBottom: 6 }]}>
                <View style={[uiStyles.row, { gap: 8, flex: 1 }]}>
                  <AppText variant="subheading" numberOfLines={1} style={{ flexShrink: 1 }}>
                    {p.title}
                  </AppText>
                  {p.category ? <Pill label={p.category} /> : null}
                </View>
                <Pressable onPress={() => remove.mutate({ id: p.id })} hitSlop={10}>
                  <Icon name="trash" size={16} color={c.textMuted} />
                </Pressable>
              </View>
              <AppText variant="body" muted>
                {p.body}
              </AppText>
            </GlassCard>
          ))
        )}
      </Screen>

      <Modal
        visible={modalOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setModalOpen(false)}
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Pressable
            style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
            onPress={() => setModalOpen(false)}
          />
          <View
            style={{
              backgroundColor: c.bg,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingTop: 8,
            }}
          >
            <View style={{ alignItems: "center", paddingVertical: 8 }}>
              <View
                style={{
                  width: 40,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: c.border,
                }}
              />
            </View>
            <View style={[uiStyles.rowBetween, { paddingHorizontal: 20 }]}>
              <AppText variant="heading">New prompt</AppText>
              <IconButton name="x" onPress={() => setModalOpen(false)} />
            </View>
            <KeyboardAwareScrollViewCompat
              contentContainerStyle={{ padding: 20, gap: 14 }}
            >
              <Field label="Title" value={title} onChangeText={setTitle} placeholder="Prompt name" />
              <Field
                label="Category (optional)"
                value={category}
                onChangeText={setCategory}
                placeholder="e.g. Writing, Coding"
              />
              <Field
                label="Prompt"
                value={body}
                onChangeText={setBody}
                placeholder="The prompt text..."
                multiline
              />
              <GradientButton
                label="Save prompt"
                loading={create.isPending}
                disabled={!title.trim() || !body.trim()}
                onPress={() =>
                  create.mutate({
                    data: {
                      title: title.trim(),
                      body: body.trim(),
                      ...(category.trim() ? { category: category.trim() } : {}),
                    },
                  })
                }
              />
            </KeyboardAwareScrollViewCompat>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}
