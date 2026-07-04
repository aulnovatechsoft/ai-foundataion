import {
  useGetMe,
  useListCertificates,
  useListProgress,
  useListProjects,
  useListPrompts,
} from "@workspace/api-client-react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { View } from "react-native";

import {
  AppText,
  GlassCard,
  Icon,
  type IconName,
  IconButton,
  IconCircle,
  LoadingScreen,
  Screen,
  uiStyles,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";

const TOTAL_DAYS = 28;

export default function CareerScreen() {
  const c = useColors();
  const router = useRouter();

  const { data: me, isLoading: meLoading } = useGetMe();
  const { data: progress, isLoading: progressLoading } = useListProgress();
  const { data: projects } = useListProjects();
  const { data: prompts } = useListPrompts();
  const { data: certificates } = useListCertificates();

  const completedDays = useMemo(
    () =>
      (progress ?? []).filter(
        (p) =>
          p.lessonCompleted &&
          p.taskCompleted &&
          p.quizCompleted &&
          p.reflectionCompleted,
      ).length,
    [progress],
  );

  const quizzesPassed = useMemo(
    () => (progress ?? []).filter((p) => p.quizCompleted).length,
    [progress],
  );

  if (meLoading || progressLoading || !me) return <LoadingScreen />;

  const projectCount = projects?.length ?? 0;
  const promptCount = prompts?.length ?? 0;
  const certCount = certificates?.length ?? 0;

  // Role readiness is derived from real progress across four pillars.
  const foundations = Math.min(100, Math.round((completedDays / TOTAL_DAYS) * 100));
  const application = Math.min(100, projectCount * 20);
  const promptCraft = Math.min(100, Math.round((quizzesPassed / TOTAL_DAYS) * 100));
  const toolkit = Math.min(100, promptCount * 10);

  const readiness = Math.round(
    foundations * 0.4 + application * 0.25 + promptCraft * 0.2 + toolkit * 0.15,
  );

  const pillars: {
    icon: IconName;
    color: string;
    label: string;
    value: number;
    hint: string;
  }[] = [
    {
      icon: "book",
      color: c.accent,
      label: "Foundations",
      value: foundations,
      hint: `${completedDays} of ${TOTAL_DAYS} days complete`,
    },
    {
      icon: "briefcase",
      color: c.accent2,
      label: "Applied Projects",
      value: application,
      hint: `${projectCount} project${projectCount === 1 ? "" : "s"} built`,
    },
    {
      icon: "brain",
      color: "#34d399",
      label: "Prompt Craft",
      value: promptCraft,
      hint: `${quizzesPassed} knowledge checks passed`,
    },
    {
      icon: "bookmark",
      color: "#fbbf24",
      label: "Toolkit",
      value: toolkit,
      hint: `${promptCount} prompt${promptCount === 1 ? "" : "s"} saved`,
    },
  ];

  const nextActions = buildNextActions({
    completedDays,
    projectCount,
    promptCount,
    certCount,
    currentDay: me.currentDay ?? 1,
  });

  return (
    <Screen padded={false}>
      <View
        style={[
          uiStyles.row,
          { gap: 12, paddingHorizontal: 20, paddingBottom: 8 },
        ]}
      >
        <IconButton name="chevron-left" onPress={() => router.back()} />
        <AppText variant="heading">Career Coach</AppText>
      </View>

      <Screen scroll padded contentContainerStyle={{ gap: 20, paddingTop: 8 }}>
        {/* Role readiness hero */}
        <View
          style={{
            borderRadius: 24,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: c.a("border", 0.5),
          }}
        >
          <LinearGradient
            colors={[c.surface2, c.surface]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ padding: 20 }}
          >
            <View style={[uiStyles.row, { gap: 10, marginBottom: 16 }]}>
              <IconCircle
                name="target"
                size={40}
                iconSize={18}
                bg={c.a("accent", 0.14)}
                color={c.accent}
              />
              <View style={{ flex: 1 }}>
                <AppText variant="label" color={c.accent} uppercase>
                  Role Readiness
                </AppText>
                <AppText variant="subheading">AI-Ready Professional</AppText>
              </View>
              <AppText variant="title" color={c.accent}>
                {readiness}%
              </AppText>
            </View>

            <ProgressBar value={readiness} color={c.accent} track={c.a("text", 0.1)} />

            <AppText variant="caption" muted style={{ marginTop: 12 }}>
              {readinessMessage(readiness)}
            </AppText>
          </LinearGradient>
        </View>

        {/* Skill pillars */}
        <View style={{ gap: 12 }}>
          <SectionHeading icon="compass" title="Skill Breakdown" />
          {pillars.map((p) => (
            <GlassCard key={p.label}>
              <View style={[uiStyles.row, { gap: 12, marginBottom: 10 }]}>
                <IconCircle
                  name={p.icon}
                  size={34}
                  iconSize={16}
                  bg={withAlpha(p.color, 0.16)}
                  color={p.color}
                />
                <View style={{ flex: 1 }}>
                  <AppText variant="bodySemibold">{p.label}</AppText>
                  <AppText variant="caption" muted>
                    {p.hint}
                  </AppText>
                </View>
                <AppText variant="bodySemibold" color={p.color}>
                  {p.value}%
                </AppText>
              </View>
              <ProgressBar value={p.value} color={p.color} track={c.a("text", 0.08)} />
            </GlassCard>
          ))}
        </View>

        {/* Recommended next steps */}
        <View style={{ gap: 12 }}>
          <SectionHeading icon="sparkles" title="Recommended Next Steps" />
          {nextActions.map((a) => (
            <GlassCard key={a.label}>
              <View style={[uiStyles.row, { gap: 12 }]}>
                <IconCircle
                  name={a.icon}
                  size={34}
                  iconSize={16}
                  bg={c.a("accent", 0.12)}
                  color={c.accent}
                />
                <View style={{ flex: 1 }}>
                  <AppText variant="bodySemibold">{a.label}</AppText>
                  <AppText variant="caption" muted style={{ marginTop: 2 }}>
                    {a.detail}
                  </AppText>
                </View>
                <Icon name="chevron-right" size={18} color={c.textMuted} />
              </View>
            </GlassCard>
          ))}
        </View>
      </Screen>
    </Screen>
  );
}

function buildNextActions({
  completedDays,
  projectCount,
  promptCount,
  certCount,
  currentDay,
}: {
  completedDays: number;
  projectCount: number;
  promptCount: number;
  certCount: number;
  currentDay: number;
}) {
  const actions: { icon: IconName; label: string; detail: string }[] = [];

  if (completedDays < TOTAL_DAYS) {
    actions.push({
      icon: "compass",
      label: `Continue Day ${currentDay}`,
      detail: `${TOTAL_DAYS - completedDays} days left to finish the challenge.`,
    });
  }
  if (projectCount < 3) {
    actions.push({
      icon: "briefcase",
      label: "Ship another project",
      detail: "Portfolio projects are the strongest readiness signal.",
    });
  }
  if (promptCount < 10) {
    actions.push({
      icon: "bookmark",
      label: "Grow your prompt library",
      detail: "Save reusable prompts you can apply on the job.",
    });
  }
  if (completedDays >= TOTAL_DAYS && certCount === 0) {
    actions.push({
      icon: "award",
      label: "Claim your certificate",
      detail: "You finished the challenge — make it official.",
    });
  }
  if (actions.length === 0) {
    actions.push({
      icon: "trophy",
      label: "You're role-ready",
      detail: "Keep your streak alive and mentor others.",
    });
  }
  return actions;
}

function readinessMessage(readiness: number): string {
  if (readiness >= 80) return "You're nearly role-ready. Polish your portfolio.";
  if (readiness >= 50) return "Strong momentum. Keep building and shipping projects.";
  if (readiness >= 20) return "Good start. Consistency will move this fast.";
  return "Complete daily flows and build projects to raise your readiness.";
}

function withAlpha(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function ProgressBar({
  value,
  color,
  track,
}: {
  value: number;
  color: string;
  track: string;
}) {
  return (
    <View
      style={{
        height: 8,
        borderRadius: 4,
        backgroundColor: track,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width: `${Math.max(0, Math.min(100, value))}%`,
          height: "100%",
          borderRadius: 4,
          backgroundColor: color,
        }}
      />
    </View>
  );
}

function SectionHeading({ icon, title }: { icon: IconName; title: string }) {
  const c = useColors();
  return (
    <View style={[uiStyles.row, { gap: 8 }]}>
      <Icon name={icon} size={18} color={c.accent} />
      <AppText variant="heading">{title}</AppText>
    </View>
  );
}
