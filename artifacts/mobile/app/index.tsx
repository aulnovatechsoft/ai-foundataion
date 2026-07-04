import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";

import { LoadingScreen } from "@/components/ui";

/**
 * Root gate. Returning signed-in users land straight on their dashboard;
 * anonymous / new users enter the personalized onboarding funnel.
 */
export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <LoadingScreen />;
  if (isSignedIn) return <Redirect href="/(app)/(tabs)" />;
  return <Redirect href="/(onboarding)/quiz" />;
}
