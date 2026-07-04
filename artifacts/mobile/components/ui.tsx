import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  type PressableProps,
  ScrollView,
  type ScrollViewProps,
  StyleSheet,
  Text,
  type TextProps,
  View,
  type ViewProps,
  type ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { fonts, type Palette } from "@/constants/colors";
import { useColors } from "@/hooks/useColors";

/* -------------------------------------------------------------------------- */
/*  Icons                                                                     */
/* -------------------------------------------------------------------------- */

export type IconName =
  | "flame"
  | "zap"
  | "home"
  | "compass"
  | "message"
  | "user"
  | "sparkles"
  | "chevron-right"
  | "chevron-left"
  | "chevron-down"
  | "check"
  | "check-circle"
  | "circle"
  | "play"
  | "pause"
  | "mic"
  | "award"
  | "school"
  | "briefcase"
  | "bookmark"
  | "target"
  | "brain"
  | "file-text"
  | "headphones"
  | "skip-forward"
  | "skip-back"
  | "download"
  | "send"
  | "search"
  | "share"
  | "plus"
  | "list"
  | "play-box"
  | "lock"
  | "settings"
  | "log-out"
  | "trophy"
  | "book"
  | "edit"
  | "trash"
  | "x"
  | "clock"
  | "grid"
  | "footprints"
  | "sunrise"
  | "map-pin"
  | "crown"
  | "diamond"
  | "gem"
  | "milestone"
  | "users"
  | "trending-up"
  | "heart";

type IconSpec =
  | { set: "feather"; name: React.ComponentProps<typeof Feather>["name"] }
  | { set: "ion"; name: React.ComponentProps<typeof Ionicons>["name"] }
  | {
      set: "mci";
      name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    };

const ICONS: Record<IconName, IconSpec> = {
  flame: { set: "ion", name: "flame" },
  zap: { set: "feather", name: "zap" },
  home: { set: "feather", name: "home" },
  compass: { set: "feather", name: "compass" },
  message: { set: "feather", name: "message-square" },
  user: { set: "feather", name: "user" },
  sparkles: { set: "ion", name: "sparkles" },
  "chevron-right": { set: "feather", name: "chevron-right" },
  "chevron-left": { set: "feather", name: "chevron-left" },
  "chevron-down": { set: "feather", name: "chevron-down" },
  check: { set: "feather", name: "check" },
  "check-circle": { set: "feather", name: "check-circle" },
  circle: { set: "feather", name: "circle" },
  play: { set: "ion", name: "play" },
  pause: { set: "ion", name: "pause" },
  mic: { set: "feather", name: "mic" },
  award: { set: "feather", name: "award" },
  school: { set: "ion", name: "school" },
  briefcase: { set: "feather", name: "briefcase" },
  bookmark: { set: "feather", name: "bookmark" },
  target: { set: "feather", name: "target" },
  brain: { set: "mci", name: "brain" },
  "file-text": { set: "feather", name: "file-text" },
  headphones: { set: "feather", name: "headphones" },
  "skip-forward": { set: "ion", name: "play-skip-forward" },
  "skip-back": { set: "ion", name: "play-skip-back" },
  download: { set: "feather", name: "download" },
  send: { set: "feather", name: "send" },
  search: { set: "feather", name: "search" },
  share: { set: "feather", name: "share-2" },
  plus: { set: "feather", name: "plus" },
  list: { set: "feather", name: "list" },
  "play-box": { set: "mci", name: "play-box-outline" },
  lock: { set: "feather", name: "lock" },
  settings: { set: "feather", name: "settings" },
  "log-out": { set: "feather", name: "log-out" },
  trophy: { set: "ion", name: "trophy" },
  book: { set: "feather", name: "book-open" },
  edit: { set: "feather", name: "edit-2" },
  trash: { set: "feather", name: "trash-2" },
  x: { set: "feather", name: "x" },
  clock: { set: "feather", name: "clock" },
  grid: { set: "feather", name: "grid" },
  footprints: { set: "ion", name: "footsteps" },
  sunrise: { set: "feather", name: "sunrise" },
  "map-pin": { set: "feather", name: "map-pin" },
  crown: { set: "mci", name: "crown" },
  diamond: { set: "mci", name: "diamond" },
  gem: { set: "mci", name: "diamond-stone" },
  milestone: { set: "feather", name: "map" },
  users: { set: "feather", name: "users" },
  "trending-up": { set: "feather", name: "trending-up" },
  heart: { set: "feather", name: "heart" },
};

export function Icon({
  name,
  size = 20,
  color,
}: {
  name: IconName;
  size?: number;
  color: string;
}) {
  const spec = ICONS[name];
  if (spec.set === "ion")
    return <Ionicons name={spec.name} size={size} color={color} />;
  if (spec.set === "mci")
    return <MaterialCommunityIcons name={spec.name} size={size} color={color} />;
  return <Feather name={spec.name} size={size} color={color} />;
}

/* -------------------------------------------------------------------------- */
/*  Screen                                                                    */
/* -------------------------------------------------------------------------- */

export function Screen({
  children,
  scroll = false,
  padded = true,
  contentContainerStyle,
  ...rest
}: {
  children: React.ReactNode;
  scroll?: boolean;
  padded?: boolean;
  contentContainerStyle?: ScrollViewProps["contentContainerStyle"];
} & ViewProps) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";
  const top = isWeb ? 67 : insets.top;
  const bottom = isWeb ? 34 : insets.bottom;

  if (scroll) {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingTop: top, paddingBottom: bottom + 24 },
            padded && { paddingHorizontal: 20 },
            contentContainerStyle,
          ]}
          {...(rest as ScrollViewProps)}
        >
          {children}
        </ScrollView>
      </View>
    );
  }

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: c.bg,
          paddingTop: top,
          paddingBottom: bottom,
        },
        padded && { paddingHorizontal: 20 },
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*  Typography                                                                */
/* -------------------------------------------------------------------------- */

type TextVariant =
  | "display"
  | "title"
  | "heading"
  | "subheading"
  | "body"
  | "bodyMedium"
  | "bodySemibold"
  | "muted"
  | "label"
  | "caption";

const VARIANT_STYLE: Record<
  TextVariant,
  { fontFamily: string; fontSize: number; lineHeight?: number }
> = {
  display: { fontFamily: fonts.extrabold, fontSize: 34, lineHeight: 38 },
  title: { fontFamily: fonts.extrabold, fontSize: 24, lineHeight: 28 },
  heading: { fontFamily: fonts.bold, fontSize: 18, lineHeight: 24 },
  subheading: { fontFamily: fonts.bold, fontSize: 15, lineHeight: 20 },
  body: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 21 },
  bodyMedium: { fontFamily: fonts.medium, fontSize: 14, lineHeight: 21 },
  bodySemibold: { fontFamily: fonts.semibold, fontSize: 14, lineHeight: 20 },
  muted: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 19 },
  label: { fontFamily: fonts.semibold, fontSize: 11 },
  caption: { fontFamily: fonts.medium, fontSize: 11, lineHeight: 15 },
};

export function AppText({
  children,
  variant = "body",
  color,
  muted = false,
  uppercase = false,
  style,
  ...rest
}: {
  variant?: TextVariant;
  color?: string;
  muted?: boolean;
  uppercase?: boolean;
} & TextProps) {
  const c = useColors();
  const base = VARIANT_STYLE[variant];
  const resolved =
    color ?? (muted || variant === "muted" || variant === "caption" ? c.textMuted : c.text);
  return (
    <Text
      style={[
        base,
        { color: resolved },
        uppercase && { textTransform: "uppercase", letterSpacing: 1 },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

/* -------------------------------------------------------------------------- */
/*  Surfaces                                                                  */
/* -------------------------------------------------------------------------- */

export function GlassCard({
  children,
  style,
  padded = true,
  ...rest
}: { padded?: boolean } & ViewProps) {
  const c = useColors();
  return (
    <LinearGradient
      colors={[c.a("surface", 0.92), c.a("surface2", 0.6)]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        {
          borderRadius: c.radius,
          borderWidth: 1,
          borderColor: c.a("border", 0.6),
        },
        padded && { padding: 16 },
        style as ViewStyle,
      ]}
      {...(rest as object)}
    >
      {children}
    </LinearGradient>
  );
}

export function SolidCard({ children, style, padded = true, ...rest }: { padded?: boolean } & ViewProps) {
  const c = useColors();
  return (
    <View
      style={[
        {
          backgroundColor: c.surface,
          borderRadius: c.radius,
          borderWidth: 1,
          borderColor: c.border,
        },
        padded && { padding: 16 },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

export function Pill({
  label,
  color,
  bg,
}: {
  label: string;
  color?: string;
  bg?: string;
}) {
  const c = useColors();
  return (
    <View
      style={{
        alignSelf: "flex-start",
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 999,
        backgroundColor: bg ?? c.a("accent", 0.15),
      }}
    >
      <AppText variant="label" color={color ?? c.accent}>
        {label}
      </AppText>
    </View>
  );
}

export function IconCircle({
  name,
  size = 40,
  iconSize = 18,
  bg,
  color,
}: {
  name: IconName;
  size?: number;
  iconSize?: number;
  bg: string;
  color: string;
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bg,
      }}
    >
      <Icon name={name} size={iconSize} color={color} />
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*  Buttons                                                                   */
/* -------------------------------------------------------------------------- */

export function GradientButton({
  label,
  icon,
  onPress,
  disabled = false,
  loading = false,
  style,
}: {
  label: string;
  icon?: IconName;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}) {
  const c = useColors();
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        { borderRadius: 14, opacity: disabled ? 0.5 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] },
        style,
      ]}
    >
      <LinearGradient
        colors={[c.accent, c.accent2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: 14,
          paddingVertical: 15,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Text style={{ color: "#fff", fontFamily: fonts.bold, fontSize: 15 }}>
              {label}
            </Text>
            {icon ? <Icon name={icon} size={18} color="#fff" /> : null}
          </>
        )}
      </LinearGradient>
    </Pressable>
  );
}

export function SolidButton({
  label,
  icon,
  onPress,
  disabled = false,
  loading = false,
  style,
}: {
  label: string;
  icon?: IconName;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}) {
  const c = useColors();
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        {
          borderRadius: 14,
          paddingVertical: 15,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          backgroundColor: c.text,
          opacity: disabled ? 0.5 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={c.bg} />
      ) : (
        <>
          {icon ? <Icon name={icon} size={18} color={c.bg} /> : null}
          <Text style={{ color: c.bg, fontFamily: fonts.bold, fontSize: 15 }}>
            {label}
          </Text>
        </>
      )}
    </Pressable>
  );
}

export function IconButton({
  name,
  onPress,
  size = 40,
  iconSize = 18,
  bg,
  color,
  style,
  ...rest
}: {
  name: IconName;
  size?: number;
  iconSize?: number;
  bg?: string;
  color?: string;
} & PressableProps) {
  const c = useColors();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bg ?? c.a("text", 0.08),
          opacity: pressed ? 0.7 : 1,
        },
        style as ViewStyle,
      ]}
      {...rest}
    >
      <Icon name={name} size={iconSize} color={color ?? c.text} />
    </Pressable>
  );
}

/* -------------------------------------------------------------------------- */
/*  Misc                                                                      */
/* -------------------------------------------------------------------------- */

export function Divider({ style }: { style?: ViewStyle }) {
  const c = useColors();
  return <View style={[{ height: 1, backgroundColor: c.border }, style]} />;
}

export function LoadingScreen() {
  const c = useColors();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: c.bg,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator color={c.accent} size="large" />
    </View>
  );
}

export function EmptyState({
  icon,
  title,
  subtitle,
}: {
  icon: IconName;
  title: string;
  subtitle?: string;
}) {
  const c = useColors();
  return (
    <View style={{ alignItems: "center", paddingVertical: 48, gap: 12 }}>
      <IconCircle
        name={icon}
        size={64}
        iconSize={28}
        bg={c.a("accent", 0.12)}
        color={c.accent}
      />
      <AppText variant="heading" style={{ textAlign: "center" }}>
        {title}
      </AppText>
      {subtitle ? (
        <AppText variant="muted" style={{ textAlign: "center", maxWidth: 260 }}>
          {subtitle}
        </AppText>
      ) : null}
    </View>
  );
}

/** Palette re-export so screens can type helpers if needed. */
export type { Palette };

export const uiStyles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
