import {
  useGetLeaderboard,
  getGetLeaderboardQueryKey,
} from "@workspace/api-client-react";
import React, { useCallback } from "react";
import { FlatList, RefreshControl, View, Pressable } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useRouter } from "expo-router";

import {
  AppText,
  GlassCard,
  Icon,
  Screen,
  uiStyles,
  EmptyState,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { useQueryClient } from "@tanstack/react-query";

export default function LeaderboardScreen() {
  const c = useColors();
  const router = useRouter();
  const qc = useQueryClient();
  const { data: leaderboard, isLoading, refetch, isRefetching } = useGetLeaderboard({
    query: { queryKey: getGetLeaderboardQueryKey() },
  });

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  if (isLoading && !leaderboard) {
    return (
      <Screen>
        <AppText>Loading...</AppText>
      </Screen>
    );
  }

  const entries = leaderboard?.entries ?? [];
  const me = leaderboard?.me;

  const renderItem = ({ item }: { item: any }) => (
    <LeaderboardRow
      entry={item}
      onPress={() => {
        if (item.isPublicProfile && !item.isMe) {
          router.push({ pathname: "/(app)/user/[id]", params: { id: String(item.userId) } });
        }
      }}
    />
  );

  return (
    <Screen padded={false}>
      <View style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16 }}>
        <AppText variant="display">Leaderboard</AppText>
        <AppText variant="muted" style={{ marginTop: 4 }}>
          This week's XP leaders. Resets on Monday.
        </AppText>
      </View>

      <FlatList
        data={entries}
        keyExtractor={(item) => String(item.userId)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120, gap: 8 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={onRefresh}
            tintColor={c.accent}
          />
        }
        ListEmptyComponent={
          !isLoading ? (
            <EmptyState
              icon="trending-up"
              title="No leaders yet"
              subtitle="Be the first to earn XP this week!"
            />
          ) : null
        }
      />

      {me && (
        <View
          style={{
            position: "absolute",
            bottom: 80,
            left: 20,
            right: 20,
          }}
        >
          <LeaderboardRow entry={me} isPinned onPress={() => router.push("/(app)/(tabs)/profile")} />
        </View>
      )}
    </Screen>
  );
}

function LeaderboardRow({ entry, isPinned, onPress }: { entry: any; isPinned?: boolean; onPress: () => void }) {
  const c = useColors();

  const isTop3 = entry.rank <= 3;
  let rankColor = c.textMuted;
  if (entry.rank === 1) rankColor = "#fbbf24";
  if (entry.rank === 2) rankColor = "#94a3b8";
  if (entry.rank === 3) rankColor = "#b45309";

  const initials = (entry.displayName ?? "Anonymous").slice(0, 1).toUpperCase();

  return (
    <Pressable onPress={onPress}>
      <Animated.View entering={FadeIn}>
        <GlassCard
          padded={false}
          style={[
            {
              padding: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              backgroundColor: entry.isMe ? c.a("accent", 0.1) : c.a("surface", 0.9),
              borderColor: entry.isMe ? c.a("accent", 0.3) : c.border,
            },
            isPinned && {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 5,
            },
          ]}
        >
          <View style={{ width: 28, alignItems: "center" }}>
            <AppText variant={isTop3 ? "heading" : "bodySemibold"} color={rankColor}>
              {entry.rank}
            </AppText>
          </View>

          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: c.a("text", 0.1),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AppText variant="subheading">{initials}</AppText>
          </View>

          <View style={{ flex: 1 }}>
            <AppText variant="bodySemibold" color={entry.isMe ? c.accent : c.text}>
              {entry.displayName ?? "Anonymous Learner"}
            </AppText>
            <View style={[uiStyles.row, { gap: 8, marginTop: 2 }]}>
              <View style={[uiStyles.row, { gap: 4 }]}>
                <Icon name="crown" size={12} color={c.accent2} />
                <AppText variant="caption" muted>Lvl {entry.level}</AppText>
              </View>
              <View style={[uiStyles.row, { gap: 4 }]}>
                <Icon name="flame" size={12} color="#f97316" />
                <AppText variant="caption" muted>{entry.streakCount}</AppText>
              </View>
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <AppText variant="heading">{entry.weeklyXp.toLocaleString()}</AppText>
            <AppText variant="caption" muted>XP</AppText>
          </View>
        </GlassCard>
      </Animated.View>
    </Pressable>
  );
}
