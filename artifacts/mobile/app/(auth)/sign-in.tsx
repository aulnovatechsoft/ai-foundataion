import { useSignIn, useSSO } from "@clerk/clerk-expo";
import * as AuthSession from "expo-auth-session";
import { Link, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useCallback, useState } from "react";
import { Pressable, View } from "react-native";

import { Field } from "@/components/Field";
import {
  AppText,
  GradientButton,
  Icon,
  IconCircle,
  Screen,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  const c = useColors();
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = useCallback(async () => {
    if (!isLoaded || busy) return;
    setError(null);
    setBusy(true);
    try {
      const attempt = await signIn.create({ identifier: email, password });
      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        router.replace("/(app)/(tabs)");
      } else {
        setError("Additional verification is required to sign in.");
      }
    } catch (e: unknown) {
      setError(extractClerkError(e));
    } finally {
      setBusy(false);
    }
  }, [isLoaded, busy, signIn, email, password, setActive, router]);

  const onGoogle = useCallback(async () => {
    if (busy) return;
    setError(null);
    setBusy(true);
    try {
      const { createdSessionId, setActive: ssoSetActive } = await startSSOFlow({
        strategy: "oauth_google",
        redirectUrl: AuthSession.makeRedirectUri(),
      });
      if (createdSessionId && ssoSetActive) {
        await ssoSetActive({ session: createdSessionId });
        router.replace("/(app)/(tabs)");
      }
    } catch (e: unknown) {
      setError(extractClerkError(e));
    } finally {
      setBusy(false);
    }
  }, [busy, startSSOFlow, router]);

  return (
    <Screen padded={false}>
      <KeyboardAwareScrollViewCompat
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
          paddingVertical: 40,
          gap: 28,
        }}
      >
        <View style={{ alignItems: "center", gap: 16 }}>
          <IconCircle
            name="sparkles"
            size={64}
            iconSize={30}
            bg={c.a("accent", 0.16)}
            color={c.accent}
          />
          <View style={{ alignItems: "center", gap: 6 }}>
            <AppText variant="title">Welcome back</AppText>
            <AppText variant="muted" style={{ textAlign: "center" }}>
              Sign in to continue your AI mastery challenge.
            </AppText>
          </View>
        </View>

        <View style={{ gap: 16 }}>
          <Field
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
          />
          <Field
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
          {error ? (
            <AppText variant="caption" color="#ef4444">
              {error}
            </AppText>
          ) : null}
          <GradientButton
            label="Sign in"
            onPress={onSubmit}
            loading={busy}
            disabled={!email || !password}
          />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: c.border }} />
          <AppText variant="caption" muted>
            OR
          </AppText>
          <View style={{ flex: 1, height: 1, backgroundColor: c.border }} />
        </View>

        <Pressable
          onPress={onGoogle}
          disabled={busy}
          style={({ pressed }) => ({
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            paddingVertical: 15,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: c.border,
            backgroundColor: c.a("surface2", 0.5),
            opacity: pressed ? 0.8 : 1,
          })}
        >
          <Icon name="compass" size={18} color={c.text} />
          <AppText variant="bodySemibold">Continue with Google</AppText>
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <AppText variant="muted">New here?</AppText>
          <Link href="/(auth)/sign-up" replace>
            <AppText variant="bodySemibold" color={c.accent}>
              Create an account
            </AppText>
          </Link>
        </View>
      </KeyboardAwareScrollViewCompat>
    </Screen>
  );
}

function extractClerkError(e: unknown): string {
  const err = e as { errors?: { message?: string; longMessage?: string }[] };
  return (
    err?.errors?.[0]?.longMessage ??
    err?.errors?.[0]?.message ??
    "Something went wrong. Please try again."
  );
}
