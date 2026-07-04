import {
  useGetPublicProfile,
  getGetPublicProfileQueryKey,
} from "@workspace/api-client-react";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View, ScrollView } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import {
  AppText,
  GlassCard,
  Icon,
  IconCircle,
  IconButton,
  LoadingScreen,
  Screen,
  uiStyles,
  EmptyState,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";

export default function PublicProfileScreen() {
  const c = useColors();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const userId = Number(id);

  const { data: profile, isLoading, error } = useGetPublicProfile(userId, {
    query: {
      queryKey: getGetPublicProfileQueryKey(userId),
      enabled: !isNaN(userId),
    },
  });

  if (isLoading) return <LoadingScreen />;

  if (error || !profile) {
    return (
      <Screen>
        <View style={[uiStyles.row, { paddingVertical: 12 }]}>
          <IconButton name="chevron-left" onPress={() => router.back()} />
        </View>
        <EmptyState
          icon="lock"
          title="Profile unavailable"
          subtitle="This profile is private or does not exist."
        />
      </Screen>
    );
  }

  const name = profile.displayName ?? "Anonymous Learner";
  const initials = name.slice(0, 1).toUpperCase();

  return (
    <Screen scroll contentContainerStyle={{ paddingBottom: 120, gap: 20 }}>
      <View style={[uiStyles.row, { paddingVertical: 12 }]}>
        <IconButton name="chevron-left" onPress={() => router.back()} />
        <AppText variant="heading" style={{ marginLeft: 16 }}>{name}</AppText>
      </View>

      <Animated.View entering={FadeIn}>
        <GlassCard>
          <View style={[uiStyles.row, { gap: 16 }]}>
            <View
              style={{
                width: 72,
                height: 72,
                borderRadius: 36,
                backgroundColor: c.a("accent", 0.16),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppText variant="display" color={c.accent}>
                {initials}
              </AppText>
            </View>
            <View style={{ flex: 1 }}>
              <AppText variant="title">{name}</AppText>
              <AppText variant="caption" muted style={{ marginTop: 4 }}>
                Joined {new Date(profile.joinedAt).toLocaleDateString()}
              </AppText>
            </View>
          </View>
        </GlassCard>
      </Animated.View>

      <Animated.View entering={FadeIn.delay(100)} style={{ flexDirection: "row", gap: 12 }}>
        <MiniStat label="Level" value={`${profile.level}`} />
        <MiniStat label="Streak" value={`${profile.streakCount}`} />
        <MiniStat label="Days done" value={`${profile.completedDays}`} />
      </Animated.View>

      <Animated.View entering={FadeIn.delay(200)}>
        <View style={[uiStyles.row, { gap: 8, marginBottom: 12 }]}>
          <Icon name="award" size={18} color={c.accent} />
          <AppText variant="heading">Badges</AppText>
        </View>
        <GlassCard padded={false}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 8 }}>
            {(profile.badges ?? []).map(ach => (
              <View key={ach.code} style={{ width: "33.33%", padding: 8, alignItems: "center" }}>
                <View style={{ 
                  width: 54, height: 54, borderRadius: 27, 
                  backgroundColor: ach.unlockedAt ? c.a("accent", 0.15) : c.a("text", 0.05),
                  alignItems: "center", justifyContent: "center",
                  borderWidth: 1, borderColor: ach.unlockedAt ? c.a("accent", 0.3) : "transparent"
                }}>
                  <Icon 
                    name={(ach.icon as any) || "award"} 
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
            {!(profile.badges?.length) && (
              <AppText variant="muted" style={{ padding: 16 }}>No badges yet.</AppText>
            )}
          </View>
        </GlassCard>
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
