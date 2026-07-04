import React from "react";
import { TextInput, type TextInputProps, View } from "react-native";

import { fonts } from "@/constants/colors";
import { useColors } from "@/hooks/useColors";
import { AppText } from "@/components/ui";

export function Field({
  label,
  error,
  style,
  multiline,
  ...rest
}: {
  label?: string;
  error?: string;
} & TextInputProps) {
  const c = useColors();
  return (
    <View style={{ gap: 8 }}>
      {label ? (
        <AppText variant="label" muted uppercase>
          {label}
        </AppText>
      ) : null}
      <TextInput
        placeholderTextColor={c.textMuted}
        multiline={multiline}
        style={[
          {
            backgroundColor: c.a("surface2", 0.5),
            borderWidth: 1,
            borderColor: error ? "#ef4444" : c.border,
            borderRadius: 14,
            paddingHorizontal: 16,
            paddingVertical: 14,
            color: c.text,
            fontFamily: fonts.medium,
            fontSize: 15,
          },
          multiline && { minHeight: 110, textAlignVertical: "top" },
          style,
        ]}
        {...rest}
      />
      {error ? (
        <AppText variant="caption" color="#ef4444">
          {error}
        </AppText>
      ) : null}
    </View>
  );
}
