import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

/**
 * Thin wrappers around expo-haptics that no-op on web (the Expo web build
 * has no vibration hardware API) and swallow errors on devices where the
 * haptic engine is unavailable (e.g. some Android models, silent mode).
 */

const isNative = Platform.OS === "ios" || Platform.OS === "android";

/** Subtle tick for selecting an option (radio/answer/plan). */
export function hapticSelect(): void {
  if (!isNative) return;
  Haptics.selectionAsync().catch(() => {});
}

/** Light tap for button presses / step advances. */
export function hapticLight(): void {
  if (!isNative) return;
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
}

/** Stronger confirmation for milestone moments (program reveal, unlock). */
export function hapticSuccess(): void {
  if (!isNative) return;
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
}

/** Error feedback (e.g. failed payment). */
export function hapticError(): void {
  if (!isNative) return;
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
}
