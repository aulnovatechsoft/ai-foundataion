import { useQueryClient } from "@tanstack/react-query";
import {
  getListCertificatesQueryKey,
  useIssueCertificate,
  useListCertificates,
  useListProgress,
} from "@workspace/api-client-react";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { View } from "react-native";

import {
  AppText,
  EmptyState,
  GlassCard,
  GradientButton,
  Icon,
  IconButton,
  LoadingScreen,
  Screen,
  uiStyles,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";

export default function CertificatesScreen() {
  const c = useColors();
  const router = useRouter();
  const qc = useQueryClient();

  const { data: certificates, isLoading } = useListCertificates();
  const { data: progress } = useListProgress();

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

  const canIssue = completedDays >= 28 && (certificates?.length ?? 0) === 0;

  const issue = useIssueCertificate({
    mutation: {
      onSuccess: () =>
        qc.invalidateQueries({ queryKey: getListCertificatesQueryKey() }),
    },
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <Screen padded={false}>
      <View
        style={[
          uiStyles.row,
          { gap: 12, paddingHorizontal: 20, paddingBottom: 8 },
        ]}
      >
        <IconButton name="chevron-left" onPress={() => router.back()} />
        <AppText variant="heading">Certificates</AppText>
      </View>

      <Screen scroll padded contentContainerStyle={{ gap: 16, paddingTop: 8 }}>
        {canIssue ? (
          <GlassCard>
            <AppText variant="bodySemibold" style={{ marginBottom: 4 }}>
              You finished the 28-day challenge
            </AppText>
            <AppText variant="muted" style={{ marginBottom: 14 }}>
              Claim your completion certificate.
            </AppText>
            <GradientButton
              label="Issue certificate"
              icon="award"
              loading={issue.isPending}
              onPress={() =>
                issue.mutate({
                  data: {
                    title: "AI Mastery — 28-Day Challenge",
                    description:
                      "Completed all 28 days of the Upskil OS AI challenge.",
                  },
                })
              }
            />
          </GlassCard>
        ) : null}

        {(certificates?.length ?? 0) === 0 ? (
          <EmptyState
            icon="trophy"
            title="No certificates yet"
            subtitle="Complete the 28-day challenge to earn your certificate."
          />
        ) : (
          certificates!.map((cert) => (
            <GlassCard key={cert.id}>
              <View style={[uiStyles.row, { gap: 14 }]}>
                <View
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    backgroundColor: "rgba(251,191,36,0.16)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="trophy" size={24} color="#fbbf24" />
                </View>
                <View style={{ flex: 1 }}>
                  <AppText variant="subheading">{cert.title}</AppText>
                  {cert.description ? (
                    <AppText variant="caption" muted style={{ marginTop: 2 }}>
                      {cert.description}
                    </AppText>
                  ) : null}
                  <AppText variant="caption" color={c.accent} style={{ marginTop: 6 }}>
                    ID: {cert.credentialId}
                  </AppText>
                </View>
              </View>
            </GlassCard>
          ))
        )}
      </Screen>
    </Screen>
  );
}
