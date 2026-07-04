import AsyncStorage from "@react-native-async-storage/async-storage";

import { ONBOARDING_STORAGE_KEY } from "@/lib/quiz";

/**
 * Persist the anonymous quiz answers so they can be flushed to the user's
 * profile after sign-up (mobile equivalent of the web localStorage flow).
 */
export async function saveOnboardingAnswers(
  answers: Record<string, string>,
): Promise<void> {
  try {
    await AsyncStorage.setItem(
      ONBOARDING_STORAGE_KEY,
      JSON.stringify({ answers }),
    );
  } catch {
    // ignore storage failures — onboarding can be redone in-app
  }
}

export async function readOnboardingAnswers(): Promise<Record<
  string,
  string
> | null> {
  try {
    const raw = await AsyncStorage.getItem(ONBOARDING_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const answers = parsed?.answers ?? null;
    if (!answers || Object.keys(answers).length === 0) return null;
    return answers;
  } catch {
    return null;
  }
}

export async function clearOnboardingAnswers(): Promise<void> {
  try {
    await AsyncStorage.removeItem(ONBOARDING_STORAGE_KEY);
  } catch {
    // ignore
  }
}
