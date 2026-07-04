import { useQueryClient } from "@tanstack/react-query";
import {
  getListProjectsQueryKey,
  useCreateProject,
  useDeleteProject,
  useListProjects,
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

export default function ProjectsScreen() {
  const c = useColors();
  const router = useRouter();
  const qc = useQueryClient();

  const { data: projects, isLoading } = useListProjects();
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const create = useCreateProject({
    mutation: {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: getListProjectsQueryKey() });
        setModalOpen(false);
        setTitle("");
        setDescription("");
      },
    },
  });
  const remove = useDeleteProject({
    mutation: {
      onSuccess: () =>
        qc.invalidateQueries({ queryKey: getListProjectsQueryKey() }),
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
          <AppText variant="heading">Projects</AppText>
        </View>
        <IconButton
          name="plus"
          bg={c.a("accent", 0.16)}
          color={c.accent}
          onPress={() => setModalOpen(true)}
        />
      </View>

      <Screen scroll padded contentContainerStyle={{ gap: 12, paddingTop: 8 }}>
        {(projects?.length ?? 0) === 0 ? (
          <EmptyState
            icon="briefcase"
            title="No projects yet"
            subtitle="Track the things you build during the challenge."
          />
        ) : (
          projects!.map((p) => (
            <GlassCard key={p.id}>
              <View style={[uiStyles.rowBetween, { marginBottom: 6 }]}>
                <AppText variant="subheading" style={{ flex: 1 }}>
                  {p.title}
                </AppText>
                <Pressable onPress={() => remove.mutate({ id: p.id })} hitSlop={10}>
                  <Icon name="trash" size={16} color={c.textMuted} />
                </Pressable>
              </View>
              {p.description ? (
                <AppText variant="body" muted style={{ marginBottom: 10 }}>
                  {p.description}
                </AppText>
              ) : null}
              <View style={[uiStyles.rowBetween]}>
                <Pill label={p.status} />
                <AppText variant="caption" muted>
                  {p.progress}%
                </AppText>
              </View>
              <View
                style={{
                  height: 6,
                  borderRadius: 3,
                  marginTop: 8,
                  backgroundColor: c.a("text", 0.1),
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    width: `${Math.max(0, Math.min(100, p.progress))}%`,
                    height: "100%",
                    borderRadius: 3,
                    backgroundColor: c.accent,
                  }}
                />
              </View>
            </GlassCard>
          ))
        )}
      </Screen>

      <FormModal
        visible={modalOpen}
        title="New project"
        onClose={() => setModalOpen(false)}
      >
        <Field label="Title" value={title} onChangeText={setTitle} placeholder="Project name" />
        <Field
          label="Description"
          value={description}
          onChangeText={setDescription}
          placeholder="What are you building?"
          multiline
        />
        <GradientButton
          label="Create project"
          loading={create.isPending}
          disabled={!title.trim()}
          onPress={() =>
            create.mutate({
              data: {
                title: title.trim(),
                ...(description.trim() ? { description: description.trim() } : {}),
              },
            })
          }
        />
      </FormModal>
    </Screen>
  );
}

function FormModal({
  visible,
  title,
  onClose,
  children,
}: {
  visible: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const c = useColors();
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
          onPress={onClose}
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
            <AppText variant="heading">{title}</AppText>
            <IconButton name="x" onPress={onClose} />
          </View>
          <KeyboardAwareScrollViewCompat
            contentContainerStyle={{ padding: 20, gap: 14 }}
          >
            {children}
          </KeyboardAwareScrollViewCompat>
        </View>
      </View>
    </Modal>
  );
}
