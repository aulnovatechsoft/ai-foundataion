import {
  getGetMeQueryKey,
  useGetMe,
  useUpdateMe,
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { View, Switch } from "react-native";
import { AppText, GlassCard, uiStyles } from "@/components/ui";
import { useColors } from "@/hooks/useColors";

export function PrivacyToggles() {
  const c = useColors();
  const qc = useQueryClient();
  const { data: me } = useGetMe();
  const updateMe = useUpdateMe({
    mutation: {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: getGetMeQueryKey() });
        // Leaderboard will be invalidated by the feed hooks or manually if needed
      },
    },
  });

  if (!me) return null;

  return (
    <GlassCard>
      <View style={{ gap: 20 }}>
        <View style={[uiStyles.rowBetween, { gap: 16 }]}>
          <View style={{ flex: 1 }}>
            <AppText variant="bodySemibold">Public Profile</AppText>
            <AppText variant="caption" muted style={{ marginTop: 2 }}>
              Allow others in the community to view your completed days, level, and badges.
            </AppText>
          </View>
          <Switch
            value={me.isPublicProfile}
            onValueChange={(val) => updateMe.mutate({ data: { isPublicProfile: val } })}
            trackColor={{ false: c.border, true: c.accent }}
          />
        </View>

        <View style={[uiStyles.rowBetween, { gap: 16 }]}>
          <View style={{ flex: 1 }}>
            <AppText variant="bodySemibold">Anonymous Mode</AppText>
            <AppText variant="caption" muted style={{ marginTop: 2 }}>
              Mask your name and avatar on the leaderboard and feed as "Anonymous Learner".
            </AppText>
          </View>
          <Switch
            value={me.anonymousMode}
            onValueChange={(val) => updateMe.mutate({ data: { anonymousMode: val } })}
            trackColor={{ false: c.border, true: c.accent }}
          />
        </View>

        <View style={[uiStyles.rowBetween, { gap: 16 }]}>
          <View style={{ flex: 1 }}>
            <AppText variant="bodySemibold">Hide from Leaderboard</AppText>
            <AppText variant="caption" muted style={{ marginTop: 2 }}>
              Remove yourself from the weekly XP leaderboard entirely.
            </AppText>
          </View>
          <Switch
            value={me.hideFromLeaderboard}
            onValueChange={(val) => updateMe.mutate({ data: { hideFromLeaderboard: val } })}
            trackColor={{ false: c.border, true: c.accent }}
          />
        </View>
      </View>
    </GlassCard>
  );
}
