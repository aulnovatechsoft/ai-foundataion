import React from "react";
import { Pressable, View } from "react-native";

import { THEME_NAMES, THEME_SWATCH } from "@/constants/colors";
import { useColors } from "@/hooks/useColors";
import { useTheme } from "@/theme/ThemeContext";

/** Three circular swatch buttons (Midnight / Daylight / Aurora), per mockups. */
export function ThemeSwitcher() {
  const { name, setTheme } = useTheme();
  const c = useColors();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        padding: 4,
        borderRadius: 999,
        backgroundColor: c.a("surface", 0.7),
        borderWidth: 1,
        borderColor: c.a("border", 0.6),
      }}
    >
      {THEME_NAMES.map((t) => {
        const selected = name === t;
        return (
          <Pressable
            key={t}
            onPress={() => setTheme(t)}
            accessibilityRole="button"
            accessibilityLabel={`${t} theme`}
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: THEME_SWATCH[t],
              borderWidth: 2,
              borderColor: selected ? c.text : "transparent",
              opacity: selected ? 1 : 0.55,
              transform: [{ scale: selected ? 1.05 : 1 }],
            }}
          />
        );
      })}
    </View>
  );
}
