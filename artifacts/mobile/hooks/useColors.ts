import { useTheme } from "@/theme/ThemeContext";
import type { Palette } from "@/constants/colors";

/**
 * Returns the palette for the user-selected theme (Midnight / Daylight /
 * Aurora), persisted via ThemeContext. Never hardcode colors in components —
 * always read from here.
 */
export function useColors(): Palette {
  return useTheme().palette;
}
