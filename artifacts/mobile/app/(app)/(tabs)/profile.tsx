import { useClerk, useUser } from "@clerk/clerk-expo";
import {
  useGetMe,
  useListCertificates,
  useListProjects,
  useListProgress,
  useListPrompts,
  useListAchievements,
  getListAchievementsQueryKey,
} from "@workspace/api-client-react";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, View, ScrollView } from "react-native";
import Animated, { FadeIn, FadeInDown, Layout } from "react-native-reanimated";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import {
  AppText,
  Divider,
  GlassCard,
  Icon,
  type IconName,
  IconCircle,
  LoadingScreen,
  Screen,
  uiStyles,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";

import { PrivacyToggles } from "@/components/PrivacyToggles";

export default function ProfileScreen() {
  const c = useColors();
  const router = useRouter();
  const { user } = useUser();
  const { signOut } = useClerk();

  const { data: me, isLoading } = useGetMe();
  const { data: certificates } = useListCertificates();
  const { data: projects } = useListProjects();
  const { data: prompts } = useListPrompts();
  const { data: progress } = useListProgress();
  const { data: achievements } = useListAchievements({
    query: { queryKey: getListAchievementsQueryKey() },
  });

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

  if (isLoading || !me) return <LoadingScreen />;

  const level = Math.floor((me.xp ?? 0) / 500) + 1;
  const xpIntoLevel = (me.xp ?? 0) % 500;
  const name =
    user?.fullName ?? me.displayName ?? user?.firstName ?? "Learner";
  const email =
    me.email ?? user?.primaryEmailAddress?.emailAddress ?? "";

  return (
    <Screen scroll contentContainerStyle={{ paddingBottom: 120, gap: 20 }}>
      <Animated.View entering={FadeIn} style={[uiStyles.rowBetween, { marginTop: 8 }]}>
        <AppText variant="display">Profile</AppText>
        <ThemeSwitcher />
      </Animated.View>

      {/* Identity */}
      <Animated.View entering={FadeIn.delay(100)}>
        <GlassCard>
          <View style={[uiStyles.row, { gap: 14 }]}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: c.a("accent", 0.16),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText variant="title" color={c.accent}>
                {name.slice(0, 1).toUpperCase()}
              </AppText>
            </View>
            <View style={{ flex: 1 }}>
              <AppText variant="heading">{name}</AppText>
              {email ? (
                <AppText variant="caption" muted numberOfLines={1}>
                  {email}
                </AppText>
              ) : null}
            </View>
          </View>

          <Divider style={{ marginVertical: 16 }} />

          <View style={[uiStyles.rowBetween, { marginBottom: 8 }]}>
            <AppText variant="bodySemibold">Level {level}</AppText>
            <AppText variant="caption" muted>
              {xpIntoLevel} / 500 XP
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
            <View
              style={{
                width: `${(xpIntoLevel / 500) * 100}%`,
                height: "100%",
                borderRadius: 4,
                backgroundColor: c.accent,
              }}
            />
          </View>
        </GlassCard>
      </Animated.View>

      {/* Stat grid */}
      <Animated.View entering={FadeIn.delay(200)} style={{ flexDirection: "row", gap: 12 }}>
        <MiniStat label="Total XP" value={(me.xp ?? 0).toLocaleString()} />
        <MiniStat label="Streak" value={`${me.streakCount ?? 0}`} />
        <MiniStat label="Days done" value={`${completedDays}`} />
      </Animated.View>
      
      {/* Achievements */}
      <Animated.View entering={FadeIn.delay(300)}>
        <View style={[uiStyles.row, { gap: 8, marginBottom: 12 }]}>
          <Icon name="award" size={18} color={c.accent} />
          <AppText variant="heading">Achievements</AppText>
        </View>
        <GlassCard padded={false}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 8 }}>
            {(achievements ?? []).map(ach => (
              <View key={ach.code} style={{ width: "33.33%", padding: 8, alignItems: "center" }}>
                <View style={{ 
                  width: 54, height: 54, borderRadius: 27, 
                  backgroundColor: ach.unlockedAt ? c.a("accent", 0.15) : c.a("text", 0.05),
                  alignItems: "center", justifyContent: "center",
                  borderWidth: 1, borderColor: ach.unlockedAt ? c.a("accent", 0.3) : "transparent"
                }}>
                  <Icon 
                    name={(ach.icon as IconName) || "award"} 
                    size={24} 
                    color={ach.unlockedAt ? c.accent : c.textMuted} 
                  />
                </View>
                <AppText 
                  variant="caption" 
                  style={{ textAlign: "center", marginTop: 8, opacity: ach.unlockedAt ? 1 : 0.6 }}
                  numberOfLines={2}
                >
                  {ach.title}
                </AppText>
              </View>
            ))}
            {!(achievements?.length) && (
               <AppText variant="muted" style={{ padding: 16 }}>No achievements loaded.</AppText>
            )}
          </View>
        </GlassCard>
      </Animated.View>

      {/* Links */}
      <Animated.View entering={FadeIn.delay(400)} style={{ gap: 10 }}>
        <AppText variant="heading" style={{ marginTop: 8, marginBottom: 4 }}>Learning</AppText>
        <LinkRow
          icon="trophy"
          color="#fbbf24"
          label="Certificates"
          count={certificates?.length ?? 0}
          onPress={() => router.push("/(app)/certificates")}
        />
        <LinkRow
          icon="briefcase"
          color={c.accent2}
          label="Projects"
          count={projects?.length ?? 0}
          onPress={() => router.push("/(app)/projects")}
        />
        <LinkRow
          icon="bookmark"
          color="#34d399"
          label="Prompt Library"
          count={prompts?.length ?? 0}
          onPress={() => router.push("/(app)/prompts")}
        />
        <LinkRow
          icon="play-box"
          color={c.accent}
          label="AI Playground"
          onPress={() => router.push("/(app)/playground")}
        />

        <AppText variant="heading" style={{ marginTop: 16, marginBottom: 4 }}>Privacy & Community</AppText>
        <PrivacyToggles />
      </Animated.View>

      {/* Sign out */}
      <Animated.View entering={FadeIn.delay(500)}>
        <Pressable
          onPress={() => signOut()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: 15,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: c.border,
          }}
        >
          <Icon name="log-out" size={18} color="#ef4444" />
          <AppText variant="bodySemibold" color="#ef4444">
            Sign out
          </AppText>
        </Pressable>
      </Animated.View>
    </Screen>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <GlassCard style={{ flex: 1 }}>
      <AppText variant="title">{value}</AppText>
      <AppText variant="caption" muted uppercase style={{ marginTop: 4 }}>
        {label}
      </AppText>
    </GlassCard>
  );
}

function LinkRow({
  icon,
  color,
  label,
  count,
  onPress,
}: {
  icon: IconName;
  color: string;
  label: string;
  count?: number;
  onPress: () => void;
}) {
  const c = useColors();
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 14,
          padding: 14,
          borderRadius: c.radius,
          backgroundColor: c.surface,
          borderWidth: 1,
          borderColor: c.border,
        }}
      >
        <IconCircle
          name={icon}
          size={38}
          iconSize={17}
          bg={c.a("text", 0.06)}
          color={color}
        />
        <AppText variant="bodySemibold" style={{ flex: 1 }}>
          {label}
        </AppText>
        {count !== undefined ? (
          <AppText variant="caption" muted>
            {count}
          </AppText>
        ) : null}
        <Icon name="chevron-right" size={18} color={c.textMuted} />
      </View>
    </Pressable>
  );
}
