import { useAuth } from "@clerk/clerk-expo";
import { setAuthTokenGetter } from "@workspace/api-client-react";
import { Redirect, Stack } from "expo-router";
import React, { useEffect } from "react";

import { LoadingScreen } from "@/components/ui";
import { OnboardingSync } from "@/components/OnboardingSync";

export default function AppLayout() {
  const { isSignedIn, isLoaded, getToken } = useAuth();

  useEffect(() => {
    setAuthTokenGetter(() => getToken());
  }, [getToken]);

  if (!isLoaded) return <LoadingScreen />;
  if (!isSignedIn) return <Redirect href="/(auth)/sign-in" />;

  return (
    <>
      <OnboardingSync />
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="day/[day]" />
      <Stack.Screen name="upgrade" />
      <Stack.Screen name="audio" options={{ presentation: "modal" }} />
      <Stack.Screen name="playground" />
      <Stack.Screen name="career" />
      <Stack.Screen name="certificates" />
      <Stack.Screen name="projects" />
      <Stack.Screen name="prompts" />
      </Stack>
    </>
  );
}
