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
import { View } from "react-native";

import { PaywallShell } from "@/components/paywall";
import {
  AppText,
  GradientButton,
  IconCircle,
  Screen,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { hapticError, hapticSuccess } from "@/lib/haptics";
import { ASPIRATION_PHRASE } from "@/lib/quiz";

WebBrowser.maybeCompleteAuthSession();

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
        if (params.status === "failed") hapticError();
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
      hapticSuccess();
      router.replace("/(app)/(tabs)");
    } catch {
      hapticError();
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

  const aspirationPhrase = me?.aspiration
    ? (ASPIRATION_PHRASE[me.aspiration] ?? null)
    : null;

  return (
    <Screen padded={false}>
      <PaywallShell
        eyebrow="One step from full access"
        programTitle={me?.programTitle}
        aspirationPhrase={aspirationPhrase}
        ctaLabel={busy ? "Processing…" : "Unlock Full Access"}
        onCta={onUnlock}
        processing={busy}
        error={error}
        onBack={() => router.replace("/(app)/(tabs)")}
        footer={
          <AppText variant="caption" muted style={{ textAlign: "center", marginTop: 4 }}>
            Secure payment via Razorpay.
          </AppText>
        }
      />
    </Screen>
  );
}
