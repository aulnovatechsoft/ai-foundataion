import { useUser } from "@clerk/clerk-expo";
import {
  getGetCurriculumDayQueryKey,
  getGetDayProgressQueryKey,
  useGetCurriculumDay,
  useGetDayProgress,
  useGetMe,
  useListCertificates,
  useListProgress,
  useListProjects,
  useListPrompts,
} from "@workspace/api-client-react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, ScrollView, View } from "react-native";
import Animated, { FadeIn, useAnimatedStyle, withSpring, interpolate } from "react-native-reanimated";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import {
  AppText,
  GlassCard,
  GradientButton,
  Icon,
  type IconName,
  IconCircle,
  LoadingScreen,
  Pill,
  Screen,
  uiStyles,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import Svg, { Circle } from "react-native-svg";

const TOTAL_DAYS = 28;

export default function HomeScreen() {
  const c = useColors();
  const router = useRouter();
  const { user } = useUser();

  const { data: me, isLoading: meLoading } = useGetMe();
  const currentDay = me?.currentDay ?? 1;

  const { data: day } = useGetCurriculumDay(currentDay, {
    query: { enabled: !!me, queryKey: getGetCurriculumDayQueryKey(currentDay) },
  });
  const { data: progress } = useGetDayProgress(currentDay, {
    query: { enabled: !!me, queryKey: getGetDayProgressQueryKey(currentDay) },
  });
  const { data: certificates } = useListCertificates();
  const { data: projects } = useListProjects();
  const { data: prompts } = useListPrompts();
  const { data: progressList } = useListProgress();

  const steps = useMemo(
    () => [
      { key: "lesson", label: "Lesson", done: !!progress?.lessonCompleted },
      { key: "task", label: "Task", done: !!progress?.taskCompleted },
      { key: "quiz", label: "Quiz", done: !!progress?.quizCompleted },
      {
        key: "reflection",
        label: "Reflection",
        done: !!progress?.reflectionCompleted,
      },
    ],
    [progress],
  );

  const completedCount = steps.filter((s) => s.done).length;
  const percent = Math.round((completedCount / steps.length) * 100);
  const nextStep = steps.find((s) => !s.done);

  const completedDays = useMemo(
    () =>
      (progressList ?? []).filter(
        (p) =>
          p.lessonCompleted &&
          p.taskCompleted &&
          p.quizCompleted &&
          p.reflectionCompleted,
      ).length,
    [progressList],
  );

  const level = me?.level ?? 1;
  const projectCount = projects?.length ?? 0;
  const promptCount = prompts?.length ?? 0;
  const roleReadiness = Math.round(
    Math.min(100, (completedDays / TOTAL_DAYS) * 100) * 0.4 +
      Math.min(100, projectCount * 20) * 0.25 +
      Math.min(100, (completedDays / TOTAL_DAYS) * 100) * 0.2 +
      Math.min(100, promptCount * 10) * 0.15,
  );

  const pathTracks = useMemo(() => buildPathTracks(level), [level]);

  if (meLoading || !me) return <LoadingScreen />;

  const firstName =
    user?.firstName ?? me.displayName?.split(" ")[0] ?? "there";
  const greeting = getGreeting();
  
  const CIRCLE_RADIUS = 30;
  const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
  const strokeDashoffset = CIRCLE_CIRCUMFERENCE - (percent / 100) * CIRCLE_CIRCUMFERENCE;

  return (
    <Screen scroll contentContainerStyle={{ paddingBottom: 120, gap: 24 }}>
      {/* Header */}
      <Animated.View entering={FadeIn} style={[uiStyles.rowBetween, { marginTop: 4 }]}>
        <View style={uiStyles.row}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              padding: 2,
              backgroundColor: c.a("accent", 0.2),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                borderRadius: 20,
                backgroundColor: c.surface,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText variant="subheading" color={c.accent}>
                {firstName.slice(0, 1).toUpperCase()}
              </AppText>
            </View>
          </View>
          <View style={{ marginLeft: 12 }}>
            <AppText variant="caption" muted>
              {greeting},
            </AppText>
            <AppText variant="heading">{firstName}</AppText>
          </View>
        </View>
        <ThemeSwitcher />
      </Animated.View>

      {/* Stats */}
      <Animated.View entering={FadeIn.delay(100)} style={{ flexDirection: "row", gap: 12 }}>
        <GlassCard style={{ flex: 1 }} padded={false}>
          <View style={[uiStyles.row, { padding: 14, gap: 12 }]}>
            <View>
              <IconCircle
                name="flame"
                size={34}
                iconSize={16}
                bg="rgba(249,115,22,0.18)"
                color="#f97316"
              />
              {me.streakFreezes > 0 && (
                <View style={{ position: "absolute", top: -4, right: -4, backgroundColor: "#3b82f6", borderRadius: 10, width: 16, height: 16, alignItems: "center", justifyContent: "center" }}>
                  <Icon name="lock" size={10} color="#fff" />
                </View>
              )}
            </View>
            <View>
              <AppText variant="subheading">{me.streakCount ?? 0} Days</AppText>
              <AppText variant="caption" muted uppercase>
                Streak
              </AppText>
            </View>
          </View>
        </GlassCard>
        
        <StatCard
          icon="zap"
          iconBg="rgba(59,130,246,0.18)"
          iconColor="#3b82f6"
          value={(me.xp ?? 0).toLocaleString()}
          label="Total XP"
        />
      </Animated.View>

      {/* Challenge hero */}
      <Animated.View entering={FadeIn.delay(200)}
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
          <View style={[uiStyles.rowBetween, { marginBottom: 14 }]}>
            <Pill label={`DAY ${currentDay} OF ${TOTAL_DAYS}`} />
            
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
               <View style={{ position: "relative", width: 36, height: 36, alignItems: "center", justifyContent: "center" }}>
                 <Svg width={36} height={36} viewBox="0 0 70 70">
                    <Circle
                      cx="35"
                      cy="35"
                      r={CIRCLE_RADIUS}
                      stroke={c.a("text", 0.1)}
                      strokeWidth="5"
                      fill="none"
                    />
                    <Circle
                      cx="35"
                      cy="35"
                      r={CIRCLE_RADIUS}
                      stroke={c.accent}
                      strokeWidth="5"
                      fill="none"
                      strokeDasharray={CIRCLE_CIRCUMFERENCE}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      rotation="-90"
                      origin="35, 35"
                    />
                 </Svg>
                 <View style={{ position: "absolute", alignItems: "center", justifyContent: "center" }}>
                    <AppText variant="caption" style={{ fontSize: 10, fontFamily: "bold" }}>{completedCount}/4</AppText>
                 </View>
               </View>
            </View>
          </View>

          <AppText variant="title" style={{ marginBottom: 6 }}>
            {day?.title ?? "Loading today's focus"}
          </AppText>
          {day?.lessonTitle ? (
            <AppText variant="body" muted style={{ marginBottom: 18 }}>
              {day.lessonTitle}
            </AppText>
          ) : (
            <View style={{ height: 12 }} />
          )}

          <View style={{ gap: 14, marginBottom: 20 }}>
            {steps.map((s, i) => {
              const active = !s.done && s === nextStep;
              return (
                <View key={s.key} style={uiStyles.row}>
                  <StepDot done={s.done} active={active} />
                  <AppText
                    variant="bodyMedium"
                    color={s.done || active ? c.text : c.textMuted}
                    style={{ marginLeft: 12, opacity: s.done || active ? 1 : 0.6 }}
                  >
                    {i + 1}. {s.label}
                    {s.done ? "  ·  Done" : active ? "  ·  Up next" : ""}
                  </AppText>
                </View>
              );
            })}
          </View>

          <GradientButton
            label={
              completedCount === steps.length
                ? "Review Today"
                : nextStep
                  ? `Continue: ${nextStep.label}`
                  : "Start Today"
            }
            icon="chevron-right"
            onPress={() => router.push(`/(app)/day/${currentDay}`)}
          />
        </LinearGradient>
      </Animated.View>

      {/* Audio mini player */}
      <Animated.View entering={FadeIn.delay(300)}>
        <Pressable onPress={() => router.push("/(app)/audio")}>
          <GlassCard>
            <View style={uiStyles.row}>
              <LinearGradient
                colors={["#6366f1", "#9333ea"]}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="mic" size={20} color="#fff" />
              </LinearGradient>
              <View style={{ flex: 1, marginLeft: 14 }}>
                <AppText variant="label" color={c.accent} uppercase>
                  Daily Audio
                </AppText>
                <AppText variant="bodySemibold" numberOfLines={1}>
                  {day?.title ? `${day.title} — Deep Dive` : "The Architecture of Agents"}
                </AppText>
                <View style={[uiStyles.row, { marginTop: 8, gap: 8 }]}>
                  <View
                    style={{
                      flex: 1,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: c.a("text", 0.1),
                    }}
                  >
                    <View
                      style={{
                        width: "33%",
                        height: "100%",
                        borderRadius: 2,
                        backgroundColor: "#818cf8",
                      }}
                    />
                  </View>
                  <AppText variant="caption" muted>
                    4:20 / 12:45
                  </AppText>
                </View>
              </View>
              <IconCircle
                name="play"
                size={40}
                iconSize={18}
                bg={c.a("text", 0.1)}
                color={c.text}
              />
            </View>
          </GlassCard>
        </Pressable>
      </Animated.View>

      {/* Adaptive path */}
      <Animated.View entering={FadeIn.delay(400)} style={{ gap: 12 }}>
        <SectionHeading icon="compass" title="Your Path" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingRight: 4 }}
        >
          {pathTracks.map((t) => (
            <PathCard key={t.title} track={t} />
          ))}
        </ScrollView>
      </Animated.View>

      {/* Tools grid */}
      <Animated.View entering={FadeIn.delay(500)} style={{ gap: 12 }}>
        <SectionHeading icon="grid" title="Your Toolkit" />
        <View style={{ flexDirection: "row", gap: 12 }}>
          <ToolCard
            icon="play-box"
            iconColor={c.accent}
            title="Playground"
            subtitle="Experiment with models"
            onPress={() => router.push("/(app)/playground")}
          />
          <ToolCard
            icon="briefcase"
            iconColor={c.accent2}
            title={`Projects (${projects?.length ?? 0})`}
            subtitle="Your builds"
            onPress={() => router.push("/(app)/projects")}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <ToolCard
            icon="bookmark"
            iconColor="#34d399"
            title="Prompts"
            subtitle={`${prompts?.length ?? 0} saved`}
            onPress={() => router.push("/(app)/prompts")}
          />
          <ToolCard
            icon="trophy"
            iconColor="#fbbf24"
            title="Certificates"
            subtitle={`${certificates?.length ?? 0} earned`}
            onPress={() => router.push("/(app)/certificates")}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <ToolCard
            icon="target"
            iconColor="#fb923c"
            title="Career"
            subtitle={`Role readiness ${roleReadiness}%`}
            onPress={() => router.push("/(app)/career")}
          />
          <ToolCard
            icon="compass"
            iconColor={c.accent}
            title="Learning Path"
            subtitle={`Day ${currentDay} of ${TOTAL_DAYS}`}
            onPress={() => router.push("/(app)/(tabs)/learn")}
          />
        </View>
      </Animated.View>

      {/* Nova prompt */}
      <Animated.View entering={FadeIn.delay(600)} style={{ gap: 12 }}>
        <SectionHeading icon="message" title="Coach Nova" />
        <Pressable onPress={() => router.push("/(app)/(tabs)/mentor")}>
          <GlassCard>
            <View style={[uiStyles.row, { gap: 12 }]}>
              <LinearGradient
                colors={["#a855f7", "#3b82f6"]}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="sparkles" size={16} color="#fff" />
              </LinearGradient>
              <AppText variant="body" style={{ flex: 1 }}>
                Ask Nova anything about today's lesson or your projects.
              </AppText>
              <Icon name="chevron-right" size={18} color={c.textMuted} />
            </View>
          </GlassCard>
        </Pressable>
      </Animated.View>
    </Screen>
  );
}

function StatCard({
  icon,
  iconBg,
  iconColor,
  value,
  label,
}: {
  icon: IconName;
  iconBg: string;
  iconColor: string;
  value: string;
  label: string;
}) {
  return (
    <GlassCard style={{ flex: 1 }} padded={false}>
      <View style={[uiStyles.row, { padding: 14, gap: 12 }]}>
        <IconCircle
          name={icon}
          size={34}
          iconSize={16}
          bg={iconBg}
          color={iconColor}
        />
        <View>
          <AppText variant="subheading">{value}</AppText>
          <AppText variant="caption" muted uppercase>
            {label}
          </AppText>
        </View>
      </View>
    </GlassCard>
  );
}

function StepDot({ done, active }: { done: boolean; active: boolean }) {
  const c = useColors();
  if (done) {
    return (
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(34,197,94,0.2)",
        }}
      >
        <Icon name="check" size={14} color="#22c55e" />
      </View>
    );
  }
  return (
    <View
      style={{
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: active ? c.accent : c.border,
      }}
    >
      <View
        style={{
          width: active ? 8 : 6,
          height: active ? 8 : 6,
          borderRadius: 4,
          backgroundColor: active ? c.accent : c.border,
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

function ToolCard({
  icon,
  iconColor,
  title,
  subtitle,
  onPress,
}: {
  icon: IconName;
  iconColor: string;
  title: string;
  subtitle: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={{ flex: 1 }} onPress={onPress}>
      <GlassCard style={{ flex: 1 }}>
        <Icon name={icon} size={22} color={iconColor} />
        <AppText variant="subheading" style={{ marginTop: 12 }}>
          {title}
        </AppText>
        <AppText variant="caption" muted style={{ marginTop: 2 }}>
          {subtitle}
        </AppText>
      </GlassCard>
    </Pressable>
  );
}

type PathTrack = {
  icon: IconName;
  title: string;
  hint: string;
  unlockLevel: number;
  locked: boolean;
};

function buildPathTracks(level: number): PathTrack[] {
  const tracks: Omit<PathTrack, "locked">[] = [
    {
      icon: "sparkles",
      title: "AI Automations",
      hint: "Tailored to your goal: saving 10h/week.",
      unlockLevel: 1,
    },
    {
      icon: "grid",
      title: "Data Analysis",
      hint: "Turn raw data into decisions.",
      unlockLevel: 3,
    },
    {
      icon: "brain",
      title: "Advanced Prompting",
      hint: "Master multi-step reasoning.",
      unlockLevel: 5,
    },
  ];
  return tracks.map((t) => ({ ...t, locked: level < t.unlockLevel }));
}

function PathCard({ track }: { track: PathTrack }) {
  const c = useColors();
  return (
    <GlassCard
      style={{
        width: 160,
        opacity: track.locked ? 0.6 : 1,
        borderColor: track.locked ? c.border : c.a("accent", 0.3),
      }}
    >
      <IconCircle
        name={track.locked ? "lock" : track.icon}
        size={34}
        iconSize={16}
        bg={track.locked ? c.a("text", 0.06) : c.a("accent", 0.12)}
        color={track.locked ? c.textMuted : c.accent}
      />
      <AppText variant="bodySemibold" style={{ marginTop: 12 }}>
        {track.title}
      </AppText>
      <AppText variant="caption" muted style={{ marginTop: 4 }}>
        {track.locked ? `Unlocks at Level ${track.unlockLevel}.` : track.hint}
      </AppText>
    </GlassCard>
  );
}

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}
