import { useRunPlayground } from "@workspace/api-client-react";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

import { Field } from "@/components/Field";
import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";
import {
  AppText,
  GlassCard,
  GradientButton,
  IconButton,
  Screen,
  uiStyles,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";

export default function PlaygroundScreen() {
  const c = useColors();
  const router = useRouter();
  const [system, setSystem] = useState("");
  const [prompt, setPrompt] = useState("");
  const run = useRunPlayground();

  const output = run.data?.output;

  return (
    <Screen padded={false}>
      <View
        style={[
          uiStyles.row,
          { gap: 12, paddingHorizontal: 20, paddingBottom: 12 },
        ]}
      >
        <IconButton name="chevron-left" onPress={() => router.back()} />
        <View>
          <AppText variant="heading">AI Playground</AppText>
          <AppText variant="caption" muted>
            Experiment with prompts
          </AppText>
        </View>
      </View>

      <KeyboardAwareScrollViewCompat
        contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 60 }}
      >
        <Field
          label="System instructions (optional)"
          value={system}
          onChangeText={setSystem}
          placeholder="You are a helpful assistant..."
          multiline
        />
        <Field
          label="Prompt"
          value={prompt}
          onChangeText={setPrompt}
          placeholder="Ask anything..."
          multiline
        />
        <GradientButton
          label="Run"
          icon="zap"
          loading={run.isPending}
          disabled={!prompt.trim()}
          onPress={() =>
            run.mutate({
              data: {
                prompt: prompt.trim(),
                ...(system.trim() ? { system: system.trim() } : {}),
              },
            })
          }
        />

        {run.isError ? (
          <AppText variant="body" color="#ef4444">
            Something went wrong. Please try again.
          </AppText>
        ) : null}

        {output ? (
          <View style={{ gap: 8 }}>
            <AppText variant="label" color={c.accent} uppercase>
              Output
            </AppText>
            <GlassCard>
              <AppText variant="body" style={{ lineHeight: 23 }}>
                {output}
              </AppText>
            </GlassCard>
          </View>
        ) : null}
      </KeyboardAwareScrollViewCompat>
    </Screen>
  );
}
