import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppText, Icon, type IconName } from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { useTheme } from "@/theme/ThemeContext";

const TABS: { name: string; label: string; icon: IconName }[] = [
  { name: "index", label: "Home", icon: "home" },
  { name: "learn", label: "Learn", icon: "compass" },
  { name: "leaderboard", label: "Rank", icon: "trending-up" },
  { name: "community", label: "Feed", icon: "users" },
  { name: "mentor", label: "Mentor", icon: "message" },
  { name: "profile", label: "Profile", icon: "user" },
];

function TabBar({
  state,
  navigation,
}: {
  state: { index: number; routes: { key: string; name: string }[] };
  navigation: {
    emit: (e: {
      type: "tabPress";
      target: string;
      canPreventDefault: boolean;
    }) => { defaultPrevented: boolean };
    navigate: (name: string) => void;
  };
}) {
  const c = useColors();
  const { palette } = useTheme();
  const insets = useSafeAreaInsets();
  const bottom = Platform.OS === "web" ? 16 : Math.max(insets.bottom, 12);

  return (
    <View
      style={{
        position: "absolute",
        left: 16,
        right: 16,
        bottom,
        borderRadius: 24,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: c.a("border", 0.7),
      }}
    >
      <BlurView
        intensity={Platform.OS === "android" ? 0 : 40}
        tint={palette.isDark ? "dark" : "light"}
        style={{
          flexDirection: "row",
          backgroundColor: c.a("surface", 0.92),
          paddingVertical: 10,
          paddingHorizontal: 8,
        }}
      >
        {state.routes.map((route, i) => {
          const tab = TABS.find((t) => t.name === route.name);
          if (!tab) return null;
          const focused = state.index === i;
          return (
            <Pressable
              key={route.key}
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              style={{ flex: 1, alignItems: "center", gap: 4, paddingVertical: 4 }}
            >
              <View
                style={{
                  width: 44,
                  height: 30,
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? c.a("accent", 0.16) : "transparent",
                }}
              >
                <Icon
                  name={tab.icon}
                  size={20}
                  color={focused ? c.accent : c.textMuted}
                />
              </View>
              <AppText
                variant="caption"
                color={focused ? c.accent : c.textMuted}
                style={{ fontSize: 10 }}
              >
                {tab.label}
              </AppText>
            </Pressable>
          );
        })}
      </BlurView>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => (
        <TabBar
          state={props.state as never}
          navigation={props.navigation as never}
        />
      )}
    >
      {TABS.map((t) => (
        <Tabs.Screen key={t.name} name={t.name} options={{ title: t.label }} />
      ))}
    </Tabs>
  );
}
