import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  buildPalette,
  type Palette,
  type ThemeName,
} from "@/constants/colors";

const STORAGE_KEY = "upskil.theme";
// Matches the web app's default (ThemeProvider defaults to "daylight").
const DEFAULT_THEME: ThemeName = "daylight";

interface ThemeContextValue {
  name: ThemeName;
  palette: Palette;
  setTheme: (name: ThemeName) => void;
  ready: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState<ThemeName>(DEFAULT_THEME);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        if (
          active &&
          (stored === "midnight" || stored === "daylight" || stored === "aurora")
        ) {
          setName(stored);
        }
      })
      .finally(() => {
        if (active) setReady(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const setTheme = useCallback((next: ThemeName) => {
    setName(next);
    AsyncStorage.setItem(STORAGE_KEY, next).catch(() => {});
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ name, palette: buildPalette(name), setTheme, ready }),
    [name, setTheme, ready],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Fallback so hooks used outside the provider never crash.
    return {
      name: DEFAULT_THEME,
      palette: buildPalette(DEFAULT_THEME),
      setTheme: () => {},
      ready: true,
    };
  }
  return ctx;
}
