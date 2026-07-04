import {
  useGetMe,
  useListCurriculumDays,
  useListProgress,
} from "@workspace/api-client-react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, View } from "react-native";

import {
  AppText,
  GlassCard,
  Icon,
  IconCircle,
  LoadingScreen,
  Screen,
  uiStyles,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";

const TOTAL_DAYS = 28;

export default function LearnScreen() {
  const c = useColors();
  const router = useRouter();

  const { data: me } = useGetMe();
  const { data: days, isLoading } = useListCurriculumDays();
  const { data: progress } = useListProgress();

  const currentDay = me?.currentDay ?? 1;
  const hasAccess = me?.hasAccess ?? false;
  const accessibleThroughDay = me?.accessibleThroughDay ?? 1;

  const progressByDay = useMemo(() => {
    const map = new Map<number, number>();
    (progress ?? []).forEach((p) => {
      const done =
        (p.lessonCompleted ? 1 : 0) +
        (p.taskCompleted ? 1 : 0) +
        (p.quizCompleted ? 1 : 0) +
        (p.reflectionCompleted ? 1 : 0);
      map.set(p.day, done);
    });
    return map;
  }, [progress]);

  const completedDays = useMemo(
    () =>
      Array.from(progressByDay.values()).filter((v) => v === 4).length,
    [progressByDay],
  );

  if (isLoading || !days) return <LoadingScreen />;

  return (
    <Screen scroll contentContainerStyle={{ paddingBottom: 120, gap: 20 }}>
      <View style={{ marginTop: 8 }}>
        <AppText variant="caption" muted uppercase>
          Week {Math.ceil(currentDay / 7)} of 4
        </AppText>
        <AppText variant="display" style={{ marginTop: 4 }}>
          The 28-Day Challenge
        </AppText>
      </View>

      {/* Overall progress */}
      <GlassCard>
        <View style={[uiStyles.rowBetween, { marginBottom: 12 }]}>
          <AppText variant="bodySemibold">Overall progress</AppText>
          <AppText variant="bodySemibold" color={c.accent}>
            {completedDays}/{TOTAL_DAYS} days
          </AppText>
        </View>
        <View
          style={{
            height: 8,
            borderRadius: 4,
            backgroundColor: c.a("text", 0.1),
            overflow: "hidden",
          }}
        >
          <LinearGradient
            colors={[c.accent, c.accent2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: `${Math.round((completedDays / TOTAL_DAYS) * 100)}%`,
              height: "100%",
              borderRadius: 4,
            }}
          />
        </View>
      </GlassCard>

      {/* Day list */}
      <View style={{ gap: 10 }}>
        {days.map((d) => {
          const done = progressByDay.get(d.day) ?? 0;
          const isComplete = done === 4;
          const isCurrent = d.day === currentDay;
          // Paywalled: entitlement doesn't cover this day (tappable → upgrade).
          const isPaywalled = !hasAccess && d.day > accessibleThroughDay;
          // Progression lock: not yet reached (only relevant for entitled users).
          const isProgressionLocked = !isPaywalled && d.day > currentDay;
          const isLocked = isPaywalled || isProgressionLocked;
          return (
            <Pressable
              key={d.day}
              disabled={isProgressionLocked}
              onPress={() =>
                router.push(
                  isPaywalled ? "/(app)/upgrade" : `/(app)/day/${d.day}`,
                )
              }
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 14,
                  borderRadius: c.radius,
                  backgroundColor: c.surface,
                  borderWidth: 1,
                  borderColor: isCurrent
                    ? c.a("accent", 0.5)
                    : isPaywalled
                      ? c.a("accent", 0.3)
                      : c.border,
                  opacity: isProgressionLocked ? 0.55 : 1,
                }}
              >
                <DayBadge
                  day={d.day}
                  complete={isComplete}
                  current={isCurrent}
                  locked={isLocked}
                />
                <View style={{ flex: 1, marginLeft: 14 }}>
                  <AppText
                    variant="bodySemibold"
                    numberOfLines={1}
                    color={isLocked ? c.textMuted : c.text}
                  >
                    {d.title}
                  </AppText>
                  <AppText
                    variant="caption"
                    numberOfLines={1}
                    color={isPaywalled ? c.accent : c.textMuted}
                  >
                    {isComplete
                      ? "Completed"
                      : isPaywalled
                        ? "Tap to unlock"
                        : isProgressionLocked
                          ? "Locked"
                          : `${done}/4 tasks done`}
                  </AppText>
                </View>
                <Icon
                  name={isLocked ? "lock" : "chevron-right"}
                  size={18}
                  color={isPaywalled ? c.accent : c.textMuted}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
}

function DayBadge({
  day,
  complete,
  current,
  locked,
}: {
  day: number;
  complete: boolean;
  current: boolean;
  locked: boolean;
}) {
  const c = useColors();
  if (complete) {
    return (
      <IconCircle
        name="check"
        size={40}
        iconSize={18}
        bg="rgba(34,197,94,0.2)"
        color="#22c55e"
      />
    );
  }
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: current ? c.a("accent", 0.16) : c.a("text", 0.06),
      }}
    >
      <AppText
        variant="subheading"
        color={current ? c.accent : locked ? c.textMuted : c.text}
      >
        {day}
      </AppText>
    </View>
  );
}
