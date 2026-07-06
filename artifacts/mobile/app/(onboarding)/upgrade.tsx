import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { PaywallShell } from "@/components/paywall";
import { AppText, Screen } from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { readOnboardingAnswers } from "@/lib/onboardingStorage";
import { ASPIRATION_PHRASE } from "@/lib/quiz";

/**
 * Anonymous paywall shown right after the quiz reveal (web parity: the
 * signed-out /upgrade page). The CTA sends the user to account creation;
 * the actual payment happens on the authed upgrade screen after sign-up.
 */
export default function OnboardingUpgradeScreen() {
  const c = useColors();
  const router = useRouter();
  const [aspirationPhrase, setAspirationPhrase] = useState<string | null>(null);

  useEffect(() => {
    readOnboardingAnswers()
      .then((answers) => {
        const aspiration = answers?.aspiration;
        setAspirationPhrase(aspiration ? (ASPIRATION_PHRASE[aspiration] ?? null) : null);
      })
      .catch(() => {});
  }, []);

  return (
    <Screen padded={false}>
      <PaywallShell
        eyebrow="Your program is ready"
        aspirationPhrase={aspirationPhrase}
        ctaLabel="Create My Account & Unlock"
        onCta={() => router.push("/(auth)/sign-up")}
        processing={false}
        onBack={router.canGoBack() ? () => router.back() : undefined}
        footer={
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 6, marginTop: 4 }}>
            <AppText variant="muted">Already have an account?</AppText>
            <Link href="/(auth)/sign-in">
              <AppText variant="bodySemibold" color={c.accent}>
                Sign in
              </AppText>
            </Link>
          </View>
        }
      />
    </Screen>
  );
}
