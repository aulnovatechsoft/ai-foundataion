import {
  getGetCurriculumDayQueryKey,
  useGetCurriculumDay,
  useGetMe,
  useGenerateDayAudio,
} from "@workspace/api-client-react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Linking, Platform, Pressable, View, Alert } from "react-native";

import {
  AppText,
  GradientButton,
  Icon,
  IconButton,
  Screen,
  uiStyles,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";

export default function AudioScreen() {
  const c = useColors();
  const router = useRouter();
  const { data: me } = useGetMe();
  const currentDay = me?.currentDay ?? 1;
  const { data: day, refetch: refetchDay } = useGetCurriculumDay(currentDay, {
    query: { queryKey: getGetCurriculumDayQueryKey(currentDay) },
  });

  const generateAudio = useGenerateDayAudio();
  const [audioUrl, setAudioUrl] = useState<string | null>(day?.audioUrl ?? null);

  const onGenerateAudio = () => {
    generateAudio.mutate({ day: currentDay }, {
      onSuccess: (data) => {
        setAudioUrl(data.audioUrl);
        refetchDay();
      },
      onError: () => Alert.alert("Error", "Could not generate audio. Try again."),
    });
  };

  const onPlayAudio = () => {
    if (!audioUrl) return;
    const fullUrl = audioUrl.startsWith("http")
      ? audioUrl
      : `https://${process.env.EXPO_PUBLIC_DOMAIN}${audioUrl}`;
    Linking.openURL(fullUrl).catch(() =>
      Alert.alert("Error", "Could not open audio link.")
    );
  };

  const resolvedAudioUrl = audioUrl ?? day?.audioUrl ?? null;

  return (
    <Screen>
      <View style={[uiStyles.rowBetween, { marginBottom: 8 }]}>
        <IconButton name="chevron-down" onPress={() => router.back()} />
        <AppText variant="caption" muted uppercase>Daily Audio</AppText>
        <View style={{ width: 40 }} />
      </View>

      <View style={{ flex: 1, justifyContent: "center", gap: 40 }}>
        {/* Artwork */}
        <View style={{ alignItems: "center" }}>
          <LinearGradient
            colors={[c.accent, c.accent2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: 240,
              height: 240,
              borderRadius: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="headphones" size={72} color="#fff" />
          </LinearGradient>
        </View>

        {/* Meta */}
        <View style={{ alignItems: "center", gap: 6 }}>
          <AppText variant="title" style={{ textAlign: "center" }}>
            {day?.title ?? "Deep Dive"}
          </AppText>
          <AppText variant="muted">Day {currentDay} — Audio Deep Dive</AppText>
        </View>

        {!resolvedAudioUrl ? (
          <View style={{ alignItems: "center", gap: 16, paddingHorizontal: 20 }}>
            <AppText variant="muted" style={{ textAlign: "center" }}>
              Generate an AI-narrated audio version of today's lesson to listen on the go.
            </AppText>
            <GradientButton
              label={generateAudio.isPending ? "Generating…" : "Generate Audio Deep Dive"}
              icon="sparkles"
              loading={generateAudio.isPending}
              onPress={onGenerateAudio}
            />
          </View>
        ) : (
          <View style={{ alignItems: "center", gap: 24, paddingHorizontal: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                padding: 12,
                borderRadius: 12,
                backgroundColor: c.a("accent", 0.1),
              }}
            >
              <Icon name="check-circle" size={16} color={c.accent} />
              <AppText variant="caption" color={c.accent}>
                Audio ready
              </AppText>
            </View>

            <Pressable onPress={onPlayAudio}>
              <LinearGradient
                colors={[c.accent, c.accent2]}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 36,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="play" size={30} color="#fff" />
              </LinearGradient>
            </Pressable>

            <AppText variant="muted" style={{ textAlign: "center" }}>
              Tap to open audio in your browser
            </AppText>
          </View>
        )}
      </View>
    </Screen>
  );
}
