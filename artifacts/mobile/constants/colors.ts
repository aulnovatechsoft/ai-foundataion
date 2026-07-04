/**
 * Design tokens for the Upskil OS mobile app.
 *
 * Three themes — Midnight, Daylight, Aurora — mirror the FINAL mobile mockups
 * (mockup CSS: --bg / --surface / --surface-2 / --text / --text-muted /
 * --border / --accent / --accent-2). Values are stored as raw HSL triples so
 * both solid `hsl()` and translucent `hsla()` variants can be derived.
 */

export type ThemeName = "midnight" | "daylight" | "aurora";

export type ColorKey =
  | "bg"
  | "surface"
  | "surface2"
  | "text"
  | "textMuted"
  | "border"
  | "accent"
  | "accent2";

const rawThemes: Record<ThemeName, Record<ColorKey, string>> = {
  midnight: {
    bg: "230 15% 7%",
    surface: "230 15% 10%",
    surface2: "230 15% 14%",
    text: "0 0% 98%",
    textMuted: "230 15% 60%",
    border: "230 15% 18%",
    accent: "255 85% 65%",
    accent2: "185 100% 45%",
  },
  daylight: {
    bg: "220 30% 97%",
    surface: "0 0% 100%",
    surface2: "220 25% 94%",
    text: "230 28% 12%",
    textMuted: "230 12% 42%",
    border: "230 16% 87%",
    accent: "255 80% 60%",
    accent2: "190 95% 36%",
  },
  aurora: {
    bg: "250 25% 8%",
    surface: "250 22% 12%",
    surface2: "250 20% 16%",
    text: "30 30% 97%",
    textMuted: "258 12% 64%",
    border: "260 20% 20%",
    accent: "12 90% 62%",
    accent2: "32 96% 60%",
  },
};

function hsl(triple: string): string {
  const [h, s, l] = triple.split(" ");
  return `hsl(${h}, ${s}, ${l})`;
}

function hsla(triple: string, alpha: number): string {
  const [h, s, l] = triple.split(" ");
  return `hsla(${h}, ${s}, ${l}, ${alpha})`;
}

export interface Palette {
  name: ThemeName;
  isDark: boolean;
  bg: string;
  surface: string;
  surface2: string;
  text: string;
  textMuted: string;
  border: string;
  accent: string;
  accent2: string;
  radius: number;
  /** Translucent variant of any token. */
  a: (key: ColorKey, alpha: number) => string;
}

export function buildPalette(name: ThemeName): Palette {
  const raw = rawThemes[name];
  return {
    name,
    isDark: name !== "daylight",
    bg: hsl(raw.bg),
    surface: hsl(raw.surface),
    surface2: hsl(raw.surface2),
    text: hsl(raw.text),
    textMuted: hsl(raw.textMuted),
    border: hsl(raw.border),
    accent: hsl(raw.accent),
    accent2: hsl(raw.accent2),
    radius: 16,
    a: (key, alpha) => hsla(raw[key], alpha),
  };
}

export const THEME_NAMES: ThemeName[] = ["midnight", "daylight", "aurora"];

export const THEME_LABELS: Record<ThemeName, string> = {
  midnight: "Midnight",
  daylight: "Daylight",
  aurora: "Aurora",
};

/** Swatch color used in the theme switcher dots (matches mockups). */
export const THEME_SWATCH: Record<ThemeName, string> = {
  midnight: "#0f172a",
  daylight: "#f8fafc",
  aurora: "#1e1b4b",
};

/** Font families loaded in app/_layout.tsx. */
export const fonts = {
  regular: "Jakarta_400Regular",
  medium: "Jakarta_500Medium",
  semibold: "Jakarta_600SemiBold",
  bold: "Jakarta_700Bold",
  extrabold: "Jakarta_800ExtraBold",
  /** Display / heading face. */
  heading: "Jakarta_800ExtraBold",
};

export default rawThemes;
