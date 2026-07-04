import { usePreviewOnboarding } from "@workspace/api-client-react";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInRight,
} from "react-native-reanimated";

import {
  AppText,
  GradientButton,
  Icon,
  IconButton,
  IconCircle,
  GlassCard,
  Pill,
  Screen,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { QUIZ_STEPS, type QuizStep } from "@/lib/quiz";
import { saveOnboardingAnswers } from "@/lib/onboardingStorage";

type Program = {
  programTitle: string;
  programFocus: string;
  workContext?: string | null;
  highlights: string[];
  estimatedWeeks: number;
};

type Phase = "quiz" | "building" | "reveal";

export default function OnboardingQuizScreen() {
  const c = useColors();
  const router = useRouter();

  const [phase, setPhase] = useState<Phase>("quiz");
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [program, setProgram] = useState<Program | null>(null);

  const preview = usePreviewOnboarding({
    mutation: {
      onSuccess: (data) => setProgram(data),
    },
  });

  const total = QUIZ_STEPS.length;
  const step = QUIZ_STEPS[stepIndex];
  const progress = Math.round(((stepIndex + 1) / total) * 100);

  function goNext(nextAnswers?: Record<string, string>) {
    if (stepIndex < total - 1) {
      setStepIndex((i) => i + 1);
    } else {
      // Finished the quiz — build the program.
      const finalAnswers = nextAnswers ?? answers;
      setPhase("building");
      preview.mutate({ data: { answers: finalAnswers } });
    }
  }

  function goBack() {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  }

  function onSelect(step: Extract<QuizStep, { kind: "question" }>, value: string) {
    const next = { ...answers, [step.id]: value };
    setAnswers(next);
    // Small delay so the selection state is visible before advancing.
    setTimeout(() => goNext(next), 180);
  }

  async function onStart() {
    await saveOnboardingAnswers(answers);
    router.push("/(auth)/sign-up");
  }

  if (phase === "building") {
    return (
      <BuildingScreen
        ready={!!program}
        failed={preview.isError}
        onReady={() => setPhase("reveal")}
        onRetry={() => preview.mutate({ data: { answers } })}
      />
    );
  }

  if (phase === "reveal" && program) {
    return <RevealScreen program={program} onStart={onStart} />;
  }

  return (
    <Screen padded={false}>
      {/* Header */}
      <View style={{ paddingHorizontal: 20, paddingTop: 4, gap: 14 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {stepIndex > 0 ? (
            <IconButton name="chevron-left" onPress={goBack} size={38} />
          ) : (
            <View style={{ width: 38 }} />
          )}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <IconCircle
              name="sparkles"
              size={28}
              iconSize={15}
              bg={c.a("accent", 0.16)}
              color={c.accent}
            />
            <AppText variant="bodySemibold">Upskil OS</AppText>
          </View>
          <View style={{ width: 38 }} />
        </View>

        {/* Progress */}
        <View style={{ gap: 6 }}>
          <View
            style={{
              height: 6,
              borderRadius: 999,
              backgroundColor: c.a("surface2", 0.8),
              overflow: "hidden",
            }}
          >
            <Animated.View
              layout={FadeIn}
              style={{
                width: `${progress}%`,
                height: "100%",
                borderRadius: 999,
                backgroundColor: c.accent,
              }}
            />
          </View>
          <AppText variant="caption" muted>
            Step {stepIndex + 1} of {total}
          </AppText>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 40,
          gap: 20,
          flexGrow: 1,
        }}
      >
        {step.kind === "question" ? (
          <QuestionStep
            key={step.id}
            step={step}
            selected={answers[step.id]}
            onSelect={(v) => onSelect(step, v)}
          />
        ) : (
          <InterstitialStep key={step.id} step={step} onContinue={() => goNext()} />
        )}
      </ScrollView>

      <View style={{ paddingHorizontal: 20, paddingBottom: 8 }}>
        <AppText variant="caption" muted style={{ textAlign: "center" }}>
          By continuing you agree to our Terms & Privacy Policy.
        </AppText>
      </View>
    </Screen>
  );
}

/* -------------------------------------------------------------------------- */

function QuestionStep({
  step,
  selected,
  onSelect,
}: {
  step: Extract<QuizStep, { kind: "question" }>;
  selected?: string;
  onSelect: (value: string) => void;
}) {
  const c = useColors();
  const isGrid = step.layout === "grid" && step.options.every((o) => o.image);

  return (
    <Animated.View entering={FadeInRight.duration(280)} style={{ gap: 20 }}>
      <View style={{ gap: 8 }}>
        <AppText variant="title">{step.question}</AppText>
        {step.subtitle ? (
          <AppText variant="muted">{step.subtitle}</AppText>
        ) : null}
      </View>

      {isGrid ? (
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, justifyContent: "space-between" }}>
          {step.options.map((opt) => {
            const isSel = selected === opt.value;
            return (
              <Pressable
                key={opt.value}
                onPress={() => onSelect(opt.value)}
                style={({ pressed }) => ({
                  width: "47%",
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: isSel ? c.accent : c.border,
                  backgroundColor: c.a("surface", 0.9),
                  overflow: "hidden",
                  transform: [{ scale: pressed ? 0.98 : 1 }],
                })}
              >
                <View style={{ width: "100%", aspectRatio: 1, backgroundColor: c.a("surface2", 0.6) }}>
                  <Image
                    source={opt.image}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                  {isSel ? (
                    <View
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        backgroundColor: c.accent,
                        borderWidth: 2,
                        borderColor: "#fff",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon name="check" size={13} color="#fff" />
                    </View>
                  ) : null}
                </View>
                <View
                  style={{
                    padding: 12,
                    backgroundColor: isSel ? c.accent : c.a("surface", 0.95),
                  }}
                >
                  <AppText
                    variant="bodySemibold"
                    color={isSel ? "#fff" : c.text}
                  >
                    {opt.label}
                  </AppText>
                </View>
              </Pressable>
            );
          })}
        </View>
      ) : (
        <View style={{ gap: 12 }}>
          {step.options.map((opt) => {
            const isSel = selected === opt.value;
            return (
              <Pressable
                key={opt.value}
                onPress={() => onSelect(opt.value)}
                style={({ pressed }) => ({
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 14,
                  padding: 16,
                  borderRadius: 16,
                  borderWidth: 1.5,
                  borderColor: isSel ? c.accent : c.border,
                  backgroundColor: isSel ? c.a("accent", 0.1) : c.a("surface2", 0.4),
                  transform: [{ scale: pressed ? 0.99 : 1 }],
                })}
              >
                {opt.emoji ? (
                  <View
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: c.a("surface", 0.9),
                    }}
                  >
                    <AppText style={{ fontSize: 22 }}>{opt.emoji}</AppText>
                  </View>
                ) : null}
                <View style={{ flex: 1, gap: 2 }}>
                  <AppText variant="bodySemibold">{opt.label}</AppText>
                  {opt.description ? (
                    <AppText variant="caption" muted>
                      {opt.description}
                    </AppText>
                  ) : null}
                </View>
                <View
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 11,
                    borderWidth: 2,
                    borderColor: isSel ? c.accent : c.border,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isSel ? (
                    <View
                      style={{
                        width: 11,
                        height: 11,
                        borderRadius: 6,
                        backgroundColor: c.accent,
                      }}
                    />
                  ) : null}
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
    </Animated.View>
  );
}

function InterstitialStep({
  step,
  onContinue,
}: {
  step: Extract<QuizStep, { kind: "interstitial" }>;
  onContinue: () => void;
}) {
  const c = useColors();
  return (
    <Animated.View
      entering={FadeInDown.duration(320)}
      style={{ flex: 1, justifyContent: "center", gap: 24, paddingVertical: 24 }}
    >
      <View style={{ alignItems: "center", gap: 16 }}>
        <IconCircle
          name="users"
          size={72}
          iconSize={32}
          bg={c.a("accent", 0.14)}
          color={c.accent}
        />
        {step.stat ? (
          <View style={{ alignItems: "center", gap: 2 }}>
            <AppText variant="display" color={c.accent}>
              {step.stat}
            </AppText>
            {step.statLabel ? (
              <AppText variant="caption" muted uppercase>
                {step.statLabel}
              </AppText>
            ) : null}
          </View>
        ) : null}
        <AppText variant="title" style={{ textAlign: "center" }}>
          {step.title}
        </AppText>
        <AppText variant="body" muted style={{ textAlign: "center", maxWidth: 320 }}>
          {step.body}
        </AppText>
      </View>
      <GradientButton label="Continue" icon="chevron-right" onPress={onContinue} />
    </Animated.View>
  );
}

/* -------------------------------------------------------------------------- */

function BuildingScreen({
  ready,
  failed,
  onReady,
  onRetry,
}: {
  ready: boolean;
  failed: boolean;
  onReady: () => void;
  onRetry: () => void;
}) {
  const c = useColors();
  const steps = useMemo(
    () => [
      "Analyzing your answers",
      "Matching AI skills to your goals",
      "Assembling your 28-day plan",
    ],
    [],
  );
  const [done, setDone] = useState(0);
  const readyRef = useRef(ready);
  readyRef.current = ready;

  useEffect(() => {
    if (failed) return;
    const timers = steps.map((_, i) =>
      setTimeout(() => setDone((d) => Math.max(d, i + 1)), 600 * (i + 1)),
    );
    return () => timers.forEach(clearTimeout);
  }, [steps, failed]);

  useEffect(() => {
    if (ready && done >= steps.length) {
      const t = setTimeout(onReady, 400);
      return () => clearTimeout(t);
    }
  }, [ready, done, steps.length, onReady]);

  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: "center", gap: 28 }}>
        <View style={{ alignItems: "center", gap: 12 }}>
          <IconCircle
            name="brain"
            size={80}
            iconSize={36}
            bg={c.a("accent", 0.14)}
            color={c.accent}
          />
          <AppText variant="title" style={{ textAlign: "center" }}>
            {failed ? "Something went wrong" : "Building your program"}
          </AppText>
          <AppText variant="muted" style={{ textAlign: "center" }}>
            {failed
              ? "We couldn't build your plan. Please try again."
              : "Personalizing your 28-day AI mastery journey…"}
          </AppText>
        </View>

        {failed ? (
          <GradientButton label="Try again" onPress={onRetry} />
        ) : (
          <View style={{ gap: 14 }}>
            {steps.map((label, i) => {
              const complete = done > i;
              return (
                <Animated.View
                  key={label}
                  entering={FadeInDown.delay(i * 120).duration(300)}
                  style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
                >
                  <IconCircle
                    name={complete ? "check" : "circle"}
                    size={28}
                    iconSize={15}
                    bg={complete ? c.a("accent", 0.16) : c.a("surface2", 0.6)}
                    color={complete ? c.accent : c.textMuted}
                  />
                  <AppText
                    variant="bodyMedium"
                    color={complete ? c.text : c.textMuted}
                  >
                    {label}
                  </AppText>
                </Animated.View>
              );
            })}
          </View>
        )}
      </View>
    </Screen>
  );
}

function RevealScreen({
  program,
  onStart,
}: {
  program: Program;
  onStart: () => void;
}) {
  const c = useColors();
  return (
    <Screen padded={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 32, gap: 20 }}
      >
        <Animated.View entering={FadeInDown.duration(360)} style={{ gap: 8 }}>
          <Pill label="Your personalized program" />
          <AppText variant="display">{program.programTitle}</AppText>
          <AppText variant="body" muted style={{ lineHeight: 22 }}>
            {program.programFocus}
          </AppText>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(120).duration(360)}>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <StatCard
              icon="clock"
              value={`${program.estimatedWeeks} wk`}
              label="Program length"
            />
            <StatCard icon="target" value="28" label="Daily lessons" />
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(360)}>
          <GlassCard>
            <AppText variant="subheading" uppercase muted style={{ marginBottom: 12 }}>
              What you'll master
            </AppText>
            <View style={{ gap: 12 }}>
              {program.highlights.map((h, i) => (
                <View
                  key={i}
                  style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
                >
                  <Icon name="check-circle" size={18} color={c.accent} />
                  <AppText variant="bodyMedium" style={{ flex: 1 }}>
                    {h}
                  </AppText>
                </View>
              ))}
            </View>
          </GlassCard>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(280).duration(360)}>
          <GlassCard style={{ borderColor: c.a("accent", 0.4) }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <IconCircle
                name="zap"
                size={40}
                iconSize={18}
                bg={c.a("accent", 0.16)}
                color={c.accent}
              />
              <View style={{ flex: 1 }}>
                <AppText variant="bodySemibold">Day 1 is free</AppText>
                <AppText variant="caption" muted>
                  Create your account and start right now — no card needed.
                </AppText>
              </View>
            </View>
          </GlassCard>
        </Animated.View>
      </ScrollView>

      <View style={{ paddingHorizontal: 20, paddingBottom: 12, gap: 12 }}>
        <GradientButton
          label="Start Day 1 free"
          icon="chevron-right"
          onPress={onStart}
        />
        <View style={{ flexDirection: "row", justifyContent: "center", gap: 6 }}>
          <AppText variant="muted">Already have an account?</AppText>
          <Link href="/(auth)/sign-in">
            <AppText variant="bodySemibold" color={c.accent}>
              Sign in
            </AppText>
          </Link>
        </View>
      </View>
    </Screen>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ComponentProps<typeof Icon>["name"];
  value: string;
  label: string;
}) {
  const c = useColors();
  return (
    <GlassCard style={{ flex: 1 }}>
      <Icon name={icon} size={18} color={c.accent} />
      <AppText variant="title" style={{ marginTop: 8 }}>
        {value}
      </AppText>
      <AppText variant="caption" muted>
        {label}
      </AppText>
    </GlassCard>
  );
}
