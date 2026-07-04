import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetMe, useSaveOnboarding, getGetMeQueryKey } from "@workspace/api-client-react";
import { ONBOARDING_STORAGE_KEY } from "@/lib/quiz";

/**
 * After a user signs up, flush the quiz answers stored in localStorage during
 * the anonymous funnel to the backend so their personalized program is saved.
 * Renders nothing.
 */
export function OnboardingSync() {
  const { data: me } = useGetMe();
  const saveOnboarding = useSaveOnboarding();
  const queryClient = useQueryClient();
  const attempted = useRef(false);

  useEffect(() => {
    if (!me || attempted.current) return;
    if (me.onboardingCompleted || me.isGrandfathered) return;

    let raw: string | null = null;
    try {
      raw = localStorage.getItem(ONBOARDING_STORAGE_KEY);
    } catch {
      return;
    }
    if (!raw) return;

    let answers: Record<string, string> | null = null;
    try {
      const parsed = JSON.parse(raw);
      answers = parsed?.answers ?? null;
    } catch {
      answers = null;
    }
    if (!answers || Object.keys(answers).length === 0) return;

    attempted.current = true;
    saveOnboarding.mutate(
      { data: { answers } },
      {
        onSuccess: () => {
          try {
            localStorage.removeItem(ONBOARDING_STORAGE_KEY);
          } catch {
            // ignore
          }
          queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() });
        },
      },
    );
  }, [me, saveOnboarding, queryClient]);

  return null;
}
