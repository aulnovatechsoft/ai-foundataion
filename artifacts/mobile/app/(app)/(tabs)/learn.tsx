import {
  type CurriculumDaySummary,
  useGetMe,
  useListCurriculumDays,
  useListProgress,
} from "@workspace/api-client-react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo } from "react";
import { Platform, Pressable, useWindowDimensions, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import Svg, { Circle, Line } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  AppText,
  Icon,
  type IconName,
  LoadingScreen,
  Screen,
  uiStyles,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { getApiBase } from "@/lib/api";

const TOTAL_DAYS = 28;
const CELL = 128;
const NODE = 84;

type CurriculumDay = CurriculumDaySummary;

/** Per-level identity — palette follows §10 (indigo → violet → teal → amber). */
const LEVELS: {
  level: number;
  name: string;
  accent: string;
  accent2: string;
  icon: IconName;
}[] = [
  { level: 1, name: "Foundations", accent: "#6366f1", accent2: "#3b82f6", icon: "sunrise" },
  { level: 2, name: "Prompt Mastery", accent: "#a855f7", accent2: "#d946ef", icon: "brain" },
  { level: 3, name: "Tools & Workflows", accent: "#14b8a6", accent2: "#06b6d4", icon: "grid" },
  { level: 4, name: "Build & Monetize", accent: "#f59e0b", accent2: "#fbbf24", icon: "trophy" },
];

const GREEN = "#22c55e";

function medallionUri(imageUrl?: string | null): string | undefined {
  if (!imageUrl) return undefined;
  if (imageUrl.startsWith("http")) return imageUrl;
  const base = getApiBase();
  if (base) return `${base}${imageUrl}`;
  // No API base: a relative URL only resolves on web (same-origin). On native
  // it would fail to load, so fall back to the day-number tile instead.
  return Platform.OS === "web" ? imageUrl : undefined;
}

export default function LearnScreen() {
  const c = useColors();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const pathWidth = Math.min(width, 520) - 40;

  const { data: me } = useGetMe();
  const {
    data: days,
    isLoading,
    isError,
    refetch,
  } = useListCurriculumDays();
  const { data: progress } = useListProgress();

  const currentDay = me?.currentDay ?? 1;
  const hasAccess = me?.hasAccess ?? false;
  const accessibleThroughDay = me?.accessibleThroughDay ?? 1;
  const streakCount = me?.streakCount ?? 0;

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
    () => Array.from(progressByDay.values()).filter((v) => v === 4).length,
    [progressByDay],
  );

  const overallPct = Math.round((completedDays / TOTAL_DAYS) * 100);

  const daysByLevel = useMemo(() => {
    const map = new Map<number, CurriculumDay[]>();
    (days ?? []).forEach((d) => {
      const lvl = d.level ?? Math.ceil(d.day / 7);
      const arr = map.get(lvl) ?? [];
      arr.push(d);
      map.set(lvl, arr);
    });
    for (const arr of map.values()) arr.sort((a, b) => a.day - b.day);
    return map;
  }, [days]);

  if (isLoading) return <LoadingScreen />;

  if (isError || !days || days.length === 0) {
    return (
      <Screen>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
          }}
        >
          <Icon
            name={isError ? "x" : "map-pin"}
            size={30}
            color={c.textMuted}
          />
          <AppText variant="subheading" style={{ textAlign: "center" }}>
            {isError ? "Couldn't load your path" : "No lessons yet"}
          </AppText>
          <AppText
            variant="caption"
            muted
            style={{ textAlign: "center", maxWidth: 260 }}
          >
            {isError
              ? "Check your connection and try again."
              : "Your 28-day journey will appear here soon."}
          </AppText>
          {isError ? (
            <Pressable
              onPress={() => refetch()}
              style={{
                marginTop: 4,
                paddingHorizontal: 18,
                paddingVertical: 10,
                borderRadius: 999,
                backgroundColor: c.a("accent", 0.14),
                borderWidth: 1,
                borderColor: c.a("accent", 0.3),
              }}
            >
              <AppText variant="bodySemibold" color={c.accent}>
                Retry
              </AppText>
            </Pressable>
          ) : null}
        </View>
      </Screen>
    );
  }

  const isCurrentPaywalled = !hasAccess && currentDay > accessibleThroughDay;

  const stateFor = (day: number) => {
    const done = progressByDay.get(day) ?? 0;
    const isComplete = done === 4;
    const isPaywalled = !hasAccess && day > accessibleThroughDay;
    const isProgressionLocked = !isPaywalled && day > currentDay;
    const isLocked = isPaywalled || isProgressionLocked;
    const isCurrent = day === currentDay;
    return { done, isComplete, isPaywalled, isProgressionLocked, isLocked, isCurrent };
  };

  const onPressNode = (day: number) => {
    const s = stateFor(day);
    if (s.isProgressionLocked) return;
    router.push(s.isPaywalled ? "/(app)/upgrade" : `/(app)/day/${day}`);
  };

  return (
    <Screen padded={false}>
      {/* Sticky header */}
      <View style={{ paddingHorizontal: 20, paddingBottom: 14 }}>
        <View style={uiStyles.rowBetween}>
          <View>
            <AppText variant="caption" muted uppercase>
              Day {currentDay} of {TOTAL_DAYS} · {overallPct}%
            </AppText>
            <AppText variant="title" style={{ marginTop: 2 }}>
              Your journey
            </AppText>
          </View>
          <View
            style={[
              uiStyles.row,
              {
                gap: 6,
                paddingHorizontal: 12,
                paddingVertical: 7,
                borderRadius: 999,
                backgroundColor: c.a("accent", 0.12),
                borderWidth: 1,
                borderColor: c.a("accent", 0.25),
              },
            ]}
          >
            <Icon name="flame" size={16} color="#f97316" />
            <AppText variant="bodySemibold">{streakCount}</AppText>
          </View>
        </View>
        <View
          style={{
            height: 8,
            borderRadius: 4,
            backgroundColor: c.a("text", 0.1),
            overflow: "hidden",
            marginTop: 12,
          }}
        >
          <LinearGradient
            colors={[c.accent, c.accent2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: `${Math.max(overallPct, 2)}%`,
              height: "100%",
              borderRadius: 4,
            }}
          />
        </View>
      </View>

      {/* Winding path */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 160 }}
      >
        {LEVELS.map((lvl) => {
          const levelDays = daysByLevel.get(lvl.level) ?? [];
          if (levelDays.length === 0) return null;
          const levelComplete = levelDays.filter(
            (d) => (progressByDay.get(d.day) ?? 0) === 4,
          ).length;
          return (
            <View key={lvl.level}>
              <LevelDivider
                meta={lvl}
                complete={levelComplete}
                total={levelDays.length}
              />
              <LevelPath
                meta={lvl}
                days={levelDays}
                pathWidth={pathWidth}
                progressByDay={progressByDay}
                stateFor={stateFor}
                onPressNode={onPressNode}
              />
            </View>
          );
        })}
      </Animated.ScrollView>

      {/* Floating Continue */}
      <View
        style={{
          position: "absolute",
          left: 20,
          right: 20,
          bottom: insets.bottom + 76,
          alignItems: "center",
        }}
        pointerEvents="box-none"
      >
        <Pressable
          onPress={() =>
            router.push(
              isCurrentPaywalled ? "/(app)/upgrade" : `/(app)/day/${currentDay}`,
            )
          }
          style={({ pressed }) => ({
            transform: [{ scale: pressed ? 0.98 : 1 }],
            borderRadius: 999,
            shadowColor: c.accent,
            shadowOpacity: 0.4,
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 6 },
            elevation: 8,
          })}
        >
          <LinearGradient
            colors={[c.accent, c.accent2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              paddingVertical: 14,
              paddingHorizontal: 24,
              borderRadius: 999,
            }}
          >
            <Icon
              name={isCurrentPaywalled ? "lock" : "play"}
              size={16}
              color="#fff"
            />
            <AppText variant="bodySemibold" color="#fff">
              {isCurrentPaywalled
                ? "Unlock to continue"
                : completedDays === 0
                  ? "Start Day 1"
                  : `Continue · Day ${currentDay}`}
            </AppText>
          </LinearGradient>
        </Pressable>
      </View>
    </Screen>
  );
}

/* -------------------------------------------------------------------------- */
/*  Level divider                                                             */
/* -------------------------------------------------------------------------- */

function LevelDivider({
  meta,
  complete,
  total,
}: {
  meta: (typeof LEVELS)[number];
  complete: number;
  total: number;
}) {
  const c = useColors();
  const pct = Math.round((complete / total) * 100);
  return (
    <View
      style={{
        marginTop: 8,
        marginBottom: 4,
        padding: 14,
        borderRadius: c.radius,
        backgroundColor: c.surface,
        borderWidth: 1,
        borderColor: c.border,
        overflow: "hidden",
      }}
    >
      <LinearGradient
        colors={[withAlpha(meta.accent, 0.18), withAlpha(meta.accent2, 0.04)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />
      <View style={uiStyles.rowBetween}>
        <View style={[uiStyles.row, { gap: 10, flex: 1 }]}>
          <View
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: withAlpha(meta.accent, 0.22),
            }}
          >
            <Icon name={meta.icon} size={17} color={meta.accent} />
          </View>
          <View style={{ flex: 1 }}>
            <AppText variant="caption" muted uppercase>
              Level {meta.level}
            </AppText>
            <AppText variant="bodySemibold" numberOfLines={1}>
              {meta.name}
            </AppText>
          </View>
        </View>
        <AppText variant="bodySemibold" color={meta.accent}>
          {complete}/{total}
        </AppText>
      </View>
      <View
        style={{
          height: 6,
          borderRadius: 3,
          backgroundColor: c.a("text", 0.1),
          overflow: "hidden",
          marginTop: 12,
        }}
      >
        <View
          style={{
            width: `${Math.max(pct, 2)}%`,
            height: "100%",
            borderRadius: 3,
            backgroundColor: meta.accent,
          }}
        />
      </View>
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*  Level path (winding nodes + connectors)                                   */
/* -------------------------------------------------------------------------- */

function LevelPath({
  meta,
  days,
  pathWidth,
  progressByDay,
  stateFor,
  onPressNode,
}: {
  meta: (typeof LEVELS)[number];
  days: CurriculumDay[];
  pathWidth: number;
  progressByDay: Map<number, number>;
  stateFor: (day: number) => ReturnType<LearnStateFor>;
  onPressNode: (day: number) => void;
}) {
  const c = useColors();
  const centerX = pathWidth / 2;
  const amp = Math.min(64, (pathWidth - NODE) / 2 - 8);
  const height = days.length * CELL;

  const nodes = days.map((d, p) => ({
    d,
    cx: centerX + amp * Math.sin(p * (Math.PI / 2)),
    cy: p * CELL + CELL / 2,
  }));

  return (
    <View style={{ width: pathWidth, height, alignSelf: "center" }}>
      {/* Connectors */}
      <Svg
        width={pathWidth}
        height={height}
        style={{ position: "absolute", left: 0, top: 0 }}
      >
        {nodes.map((n, i) => {
          if (i === 0) return null;
          const prev = nodes[i - 1];
          const prevComplete = (progressByDay.get(prev.d.day) ?? 0) === 4;
          return (
            <Line
              key={`seg-${n.d.day}`}
              x1={prev.cx}
              y1={prev.cy}
              x2={n.cx}
              y2={n.cy}
              stroke={prevComplete ? meta.accent : c.a("text", 0.12)}
              strokeWidth={6}
              strokeLinecap="round"
            />
          );
        })}
      </Svg>

      {/* Nodes */}
      {nodes.map((n) => (
        <PathNode
          key={n.d.day}
          day={n.d}
          cx={n.cx}
          cy={n.cy}
          accent={meta.accent}
          state={stateFor(n.d.day)}
          onPress={() => onPressNode(n.d.day)}
        />
      ))}
    </View>
  );
}

type LearnStateFor = (day: number) => {
  done: number;
  isComplete: boolean;
  isPaywalled: boolean;
  isProgressionLocked: boolean;
  isLocked: boolean;
  isCurrent: boolean;
};

/* -------------------------------------------------------------------------- */
/*  Path node                                                                 */
/* -------------------------------------------------------------------------- */

function PathNode({
  day,
  cx,
  cy,
  accent,
  state,
  onPress,
}: {
  day: CurriculumDay;
  cx: number;
  cy: number;
  accent: string;
  state: ReturnType<LearnStateFor>;
  onPress: () => void;
}) {
  const c = useColors();
  const { done, isComplete, isPaywalled, isLocked, isCurrent } = state;
  const inProgress = !isComplete && !isLocked && done > 0;
  const available = isCurrent && !isComplete && !isLocked;

  const ringColor = isComplete
    ? GREEN
    : isLocked
      ? c.border
      : available || inProgress
        ? accent
        : c.a("text", 0.2);

  const nodeType = (day.nodeType ?? "lesson") as string;
  let badgeIcon: IconName = "play";
  let badgeColor = accent;
  let badgeBg = c.surface;
  if (isComplete) {
    badgeIcon = "check";
    badgeColor = "#fff";
    badgeBg = GREEN;
  } else if (isPaywalled) {
    badgeIcon = "lock";
    badgeColor = "#fff";
    badgeBg = accent;
  } else if (isLocked) {
    badgeIcon = "lock";
    badgeColor = c.textMuted;
    badgeBg = c.surface2;
  } else if (nodeType === "graduation") {
    badgeIcon = "trophy";
  } else if (nodeType === "review") {
    badgeIcon = "award";
  } else if (nodeType === "start") {
    badgeIcon = "sunrise";
  }

  const uri = medallionUri(day.imageUrl);
  const RING = NODE + 16;
  const label = isComplete
    ? "Completed"
    : isPaywalled
      ? "Tap to unlock"
      : state.isProgressionLocked
        ? "Locked"
        : inProgress
          ? `${done}/4 done`
          : available
            ? "Start"
            : "Ready";

  const accStatus = isComplete
    ? "completed"
    : isLocked
      ? "locked"
      : available
        ? "available, start now"
        : inProgress
          ? `in progress, ${done} of 4 steps done`
          : "ready";

  return (
    <Pressable
      onPress={onPress}
      disabled={state.isProgressionLocked}
      accessibilityRole="button"
      accessibilityState={{ disabled: state.isProgressionLocked }}
      accessibilityLabel={`Day ${day.day}, ${day.title}, ${accStatus}`}
      style={{
        position: "absolute",
        left: cx - 78,
        top: cy - NODE / 2,
        width: 156,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: RING,
          height: RING,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {available ? <PulseHalo color={accent} size={RING + 18} /> : null}

        {/* Progress / status ring */}
        {inProgress ? (
          <Svg
            width={RING}
            height={RING}
            style={{ position: "absolute" }}
          >
            <Circle
              cx={RING / 2}
              cy={RING / 2}
              r={RING / 2 - 3}
              stroke={c.a("text", 0.14)}
              strokeWidth={4}
              fill="none"
            />
            <Circle
              cx={RING / 2}
              cy={RING / 2}
              r={RING / 2 - 3}
              stroke={accent}
              strokeWidth={4}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * (RING / 2 - 3)}
              strokeDashoffset={
                2 * Math.PI * (RING / 2 - 3) * (1 - done / 4)
              }
              transform={`rotate(-90 ${RING / 2} ${RING / 2})`}
            />
          </Svg>
        ) : (
          <View
            style={{
              position: "absolute",
              width: RING,
              height: RING,
              borderRadius: RING / 2,
              borderWidth: 4,
              borderColor: ringColor,
            }}
          />
        )}

        {/* Medallion */}
        <View
          style={{
            width: NODE,
            height: NODE,
            borderRadius: 22,
            overflow: "hidden",
            backgroundColor: c.surface2,
            opacity: isLocked ? 0.45 : 1,
          }}
        >
          {uri ? (
            <Image
              source={{ uri }}
              style={{ width: "100%", height: "100%" }}
              contentFit="cover"
              transition={200}
            />
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText variant="title">{day.day}</AppText>
            </View>
          )}
          {isLocked ? (
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: c.a("bg", 0.45),
              }}
            />
          ) : null}
        </View>

        {/* Badge */}
        <View
          style={{
            position: "absolute",
            right: 2,
            bottom: 2,
            width: 26,
            height: 26,
            borderRadius: 13,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: badgeBg,
            borderWidth: 2,
            borderColor: c.bg,
          }}
        >
          <Icon name={badgeIcon} size={13} color={badgeColor} />
        </View>

        {/* Day number chip */}
        <View
          style={{
            position: "absolute",
            left: 2,
            top: 2,
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderRadius: 8,
            backgroundColor: c.a("bg", 0.6),
          }}
        >
          <AppText variant="caption" color="#fff" style={{ fontSize: 10 }}>
            {day.day}
          </AppText>
        </View>
      </View>

      {/* Title + status */}
      <AppText
        variant="caption"
        numberOfLines={2}
        color={isLocked ? c.textMuted : c.text}
        style={{ textAlign: "center", marginTop: 6, lineHeight: 14 }}
      >
        {day.title}
      </AppText>
      <AppText
        variant="caption"
        color={
          isComplete
            ? GREEN
            : isPaywalled
              ? accent
              : available
                ? accent
                : c.textMuted
        }
        style={{ fontSize: 10, marginTop: 1 }}
      >
        {label}
      </AppText>
    </Pressable>
  );
}

function PulseHalo({ color, size }: { color: string; size: number }) {
  const v = useSharedValue(0);
  useEffect(() => {
    v.value = withRepeat(
      withTiming(1, { duration: 1500, easing: Easing.out(Easing.ease) }),
      -1,
      false,
    );
  }, [v]);
  const style = useAnimatedStyle(() => ({
    opacity: 0.5 * (1 - v.value),
    transform: [{ scale: 0.85 + v.value * 0.4 }],
  }));
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        {
          position: "absolute",
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        style,
      ]}
    />
  );
}

function withAlpha(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
