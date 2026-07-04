import { useUser } from "@clerk/clerk-expo";
import {
  getGetMeQueryKey,
  useCreatePaymentOrder,
  useGetMe,
  useVerifyPayment,
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import * as AuthSession from "expo-auth-session";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import {
  AppText,
  GlassCard,
  GradientButton,
  Icon,
  IconButton,
  IconCircle,
  Pill,
  Screen,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";

WebBrowser.maybeCompleteAuthSession();

const PERKS = [
  { icon: "book" as const, text: "All 28 daily lessons unlocked" },
  { icon: "brain" as const, text: "Hands-on tasks with AI feedback" },
  { icon: "headphones" as const, text: "Audio versions of every lesson" },
  { icon: "award" as const, text: "Completion certificate" },
  { icon: "trending-up" as const, text: "Track streaks, XP & progress" },
];

function parseParams(url: string): Record<string, string> {
  const out: Record<string, string> = {};
  const q = url.split("?")[1];
  if (!q) return out;
  for (const pair of q.split("&")) {
    const [k, v] = pair.split("=");
    if (k) out[decodeURIComponent(k)] = decodeURIComponent(v ?? "");
  }
  return out;
}

export default function UpgradeScreen() {
  const c = useColors();
  const router = useRouter();
  const qc = useQueryClient();
  const { data: me } = useGetMe();
  const { user } = useUser();

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createOrder = useCreatePaymentOrder();
  const verify = useVerifyPayment();

  async function onUnlock() {
    if (busy) return;
    setError(null);
    setBusy(true);
    try {
      const order = await createOrder.mutateAsync();
      const base = process.env.EXPO_PUBLIC_DOMAIN
        ? `https://${process.env.EXPO_PUBLIC_DOMAIN}`
        : "";
      const returnUrl = AuthSession.makeRedirectUri({ path: "upgrade-return" });
      const email = user?.primaryEmailAddress?.emailAddress ?? "";
      const url =
        `${base}/api/payments/checkout` +
        `?orderId=${encodeURIComponent(order.orderId)}` +
        `&keyId=${encodeURIComponent(order.razorpayKeyId)}` +
        `&amount=${encodeURIComponent(String(order.amount))}` +
        `&currency=${encodeURIComponent(order.currency)}` +
        `&email=${encodeURIComponent(email)}` +
        `&redirect=${encodeURIComponent(returnUrl)}`;

      const result = await WebBrowser.openAuthSessionAsync(url, returnUrl);
      if (result.type !== "success" || !result.url) {
        setBusy(false);
        return;
      }
      const params = parseParams(result.url);
      if (!params.razorpay_payment_id) {
        setError(
          params.status === "failed"
            ? "Payment failed. Please try again."
            : null,
        );
        setBusy(false);
        return;
      }

      await verify.mutateAsync({
        data: {
          razorpayOrderId: params.razorpay_order_id,
          razorpayPaymentId: params.razorpay_payment_id,
          razorpaySignature: params.razorpay_signature,
        },
      });
      await qc.invalidateQueries({ queryKey: getGetMeQueryKey() });
      router.replace("/(app)/(tabs)");
    } catch {
      setError("Something went wrong with the payment. Please try again.");
      setBusy(false);
    }
  }

  // Already entitled — nothing to buy.
  if (me?.hasAccess) {
    return (
      <Screen>
        <View style={{ flex: 1, justifyContent: "center", gap: 20 }}>
          <View style={{ alignItems: "center", gap: 12 }}>
            <IconCircle
              name="check-circle"
              size={72}
              iconSize={32}
              bg={c.a("accent", 0.14)}
              color={c.accent}
            />
            <AppText variant="title">You're all set</AppText>
            <AppText variant="muted" style={{ textAlign: "center" }}>
              You already have full access to the 28-day program.
            </AppText>
          </View>
          <GradientButton
            label="Back to learning"
            onPress={() => router.replace("/(app)/(tabs)")}
          />
        </View>
      </Screen>
    );
  }

  return (
    <Screen padded={false}>
      <View style={{ paddingHorizontal: 20, paddingTop: 4 }}>
        <IconButton name="chevron-left" onPress={() => router.back()} size={38} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 20 }}
      >
        <View style={{ alignItems: "center", gap: 12 }}>
          <IconCircle
            name="crown"
            size={72}
            iconSize={32}
            bg={c.a("accent", 0.16)}
            color={c.accent}
          />
          <Pill label="Unlock full access" />
          <AppText variant="display" style={{ textAlign: "center" }}>
            Master AI in 28 days
          </AppText>
          <AppText variant="body" muted style={{ textAlign: "center", maxWidth: 320 }}>
            You've completed your free Day 1. Unlock Days 2–28 and everything the
            program has to offer — one payment, lifetime access.
          </AppText>
        </View>

        <GlassCard>
          <View style={{ gap: 14 }}>
            {PERKS.map((p) => (
              <View
                key={p.text}
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
                <IconCircle
                  name={p.icon}
                  size={36}
                  iconSize={16}
                  bg={c.a("accent", 0.14)}
                  color={c.accent}
                />
                <AppText variant="bodyMedium" style={{ flex: 1 }}>
                  {p.text}
                </AppText>
                <Icon name="check" size={16} color={c.accent} />
              </View>
            ))}
          </View>
        </GlassCard>

        <GlassCard style={{ borderColor: c.a("accent", 0.4) }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <AppText variant="caption" muted uppercase>
                One-time payment
              </AppText>
              <AppText variant="display" color={c.accent}>
                ₹1,499
              </AppText>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <AppText variant="caption" muted>
                Lifetime access
              </AppText>
              <AppText variant="bodySemibold">No subscription</AppText>
            </View>
          </View>
        </GlassCard>

        {error ? (
          <AppText variant="caption" color="#ef4444" style={{ textAlign: "center" }}>
            {error}
          </AppText>
        ) : null}
      </ScrollView>

      <View style={{ paddingHorizontal: 20, paddingBottom: 12, gap: 8 }}>
        <GradientButton
          label="Unlock the full program"
          icon="crown"
          loading={busy}
          onPress={onUnlock}
        />
        <AppText variant="caption" muted style={{ textAlign: "center" }}>
          Secure payment via Razorpay.
        </AppText>
      </View>
    </Screen>
  );
}
