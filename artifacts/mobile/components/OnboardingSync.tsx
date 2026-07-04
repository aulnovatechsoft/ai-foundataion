import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useGetMe,
  useSaveOnboarding,
  getGetMeQueryKey,
} from "@workspace/api-client-react";

import {
  readOnboardingAnswers,
  clearOnboardingAnswers,
} from "@/lib/onboardingStorage";

/**
 * After a user signs up, flush the quiz answers stored during the anonymous
 * funnel (AsyncStorage) to the backend so their personalized program is saved.
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
    // Don't start a second flush while one is already in flight.
    if (saveOnboarding.isPending) return;

    let cancelled = false;
    (async () => {
      const answers = await readOnboardingAnswers();
      // Nothing to sync yet (or read failed) — leave `attempted` false so a
      // later render (e.g. after answers land or a transient failure clears)
      // can retry instead of permanently skipping the flush.
      if (cancelled || !answers) return;
      // Commit to this attempt only once we have a valid payload to send.
      attempted.current = true;
      saveOnboarding.mutate(
        { data: { answers } },
        {
          onSuccess: () => {
            void clearOnboardingAnswers();
            queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() });
          },
          onError: () => {
            // Allow a retry on a subsequent render; keep local answers intact.
            attempted.current = false;
          },
        },
      );
    })();

    return () => {
      cancelled = true;
    };
  }, [me, saveOnboarding, queryClient]);

  return null;
}
