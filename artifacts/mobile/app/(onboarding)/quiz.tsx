import { usePreviewOnboarding } from "@workspace/api-client-react";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  FadeIn,
  FadeInDown,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, {
  Circle,
  Defs,
  Line,
  LinearGradient as SvgGradient,
  Path,
  Stop,
} from "react-native-svg";

import {
  AppText,
  GradientButton,
  Icon,
  IconButton,
  GlassCard,
  Screen,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import {
  ASPIRATION_PHRASE,
  GOAL_PHRASE,
  QUIZ_STEPS,
  TESTIMONIALS,
  getSelectedLabel,
  type QuizStep,
  type QuizText,
} from "@/lib/quiz";
import { hapticSelect, hapticSuccess } from "@/lib/haptics";
import { saveOnboardingAnswers } from "@/lib/onboardingStorage";

const coachImg = require("@/assets/images/onboarding/coach.png");
const coachPhotoImg = require("@/assets/images/onboarding/coach-photo.png");
const coachCelebrateImg = require("@/assets/images/onboarding/coach-celebrate.png");
const compareWithoutImg = require("@/assets/images/onboarding/compare-without.png");
const compareWithImg = require("@/assets/images/onboarding/compare-with.png");

type Program = {
  programTitle: string;
  programFocus: string;
  workContext?: string | null;
  highlights: string[];
  estimatedWeeks: number;
};

type QuestionStepType = Extract<QuizStep, { kind: "question" }>;

// Post-quiz screens shown in order after the last question. Progress and the
// header back button are driven off this list. (The web funnel also has an
// email screen here — on mobile the sign-up screen right after captures it.)
const RESULT_PHASES = ["summary", "certificate", "easier", "reveal"] as const;
type ResultPhase = (typeof RESULT_PHASES)[number];
type Phase = "quiz" | "building" | ResultPhase;

const TOTAL_SCREENS = QUIZ_STEPS.length + 1 + RESULT_PHASES.length;

// Resolve copy that may be static text or a function of the user's prior answers.
function resolveText(value: QuizText | undefined, answers: Record<string, string>): string {
  if (!value) return "";
  return typeof value === "function" ? value(answers) : value;
}

// Resolve a question step's options from a prior answer when it declares a dependency.
function resolveQuestionStep(
  step: QuestionStepType,
  answers: Record<string, string>,
): QuestionStepType {
  if (step.optionsByAnswer && step.dependsOn) {
    const dep = answers[step.dependsOn];
    const dynamic = dep ? step.optionsByAnswer[dep] : undefined;
    if (dynamic) return { ...step, options: dynamic };
  }
  return step;
}

export default function OnboardingQuizScreen() {
  const c = useColors();
  const router = useRouter();

  const [phase, setPhase] = useState<Phase>("quiz");
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [program, setProgram] = useState<Program | null>(null);

  const preview = usePreviewOnboarding();

  const step = QUIZ_STEPS[stepIndex];
  const resultIndex = RESULT_PHASES.indexOf(phase as ResultPhase);
  const screenNum =
    phase === "quiz"
      ? stepIndex + 1
      : phase === "building"
        ? QUIZ_STEPS.length + 1
        : QUIZ_STEPS.length + 2 + resultIndex;
  const progressPct = Math.round((screenNum / TOTAL_SCREENS) * 100);

  function finishQuiz(finalAnswers: Record<string, string>) {
    setPhase("building");
    preview.mutate(
      { data: { answers: finalAnswers } },
      {
        onSuccess: (data) => {
          setProgram(data);
          setTimeout(() => {
            hapticSuccess();
            setPhase("summary");
          }, 2600);
        },
        onError: () => {
          // The reveal screen falls back gracefully when no program came back.
          setTimeout(() => setPhase("summary"), 2600);
        },
      },
    );
  }

  function goNext(nextAnswers?: Record<string, string>) {
    if (stepIndex < QUIZ_STEPS.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      finishQuiz(nextAnswers ?? answers);
    }
  }

  function goBack() {
    if (phase === "quiz") {
      if (stepIndex > 0) setStepIndex((i) => i - 1);
      return;
    }
    // Step back through the result screens (building is transient — never returned to).
    if (resultIndex > 0) setPhase(RESULT_PHASES[resultIndex - 1]);
  }

  function advanceResult() {
    if (resultIndex >= 0 && resultIndex < RESULT_PHASES.length - 1) {
      setPhase(RESULT_PHASES[resultIndex + 1]);
    }
  }

  const canGoBack = (phase === "quiz" && stepIndex > 0) || resultIndex > 0;

  function selectOption(questionId: string, value: string) {
    hapticSelect();
    const next = { ...answers, [questionId]: value };
    // Clear every step that transitively depends on the changed answer, so a
    // now-invalid selection can't linger after any upstream choice changes
    // (e.g. work_context → goal → help_first → week_result).
    const stale = new Set<string>([questionId]);
    let grew = true;
    while (grew) {
      grew = false;
      for (const s of QUIZ_STEPS) {
        if (s.kind === "question" && s.dependsOn && stale.has(s.dependsOn) && !stale.has(s.id)) {
          stale.add(s.id);
          delete next[s.id];
          grew = true;
        }
      }
    }
    setAnswers(next);
    // Pass the fresh snapshot through so the final step never submits stale answers.
    setTimeout(() => goNext(next), 240);
  }

  async function onStart() {
    // Web parity: the reveal leads to the paywall first; account creation
    // happens from the paywall CTA.
    await saveOnboardingAnswers(answers);
    router.push("/(onboarding)/upgrade");
  }

  const showCoach = phase === "quiz" && (step.kind === "question" || step.kind === "scale");

  return (
    <Screen padded={false}>
      {/* Header with back button, logo, gradient progress bar */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 4,
          paddingBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        {canGoBack ? (
          <IconButton name="chevron-left" onPress={goBack} size={38} />
        ) : (
          <View style={{ width: 38 }} />
        )}
        <LinearGradient
          colors={[c.accent2, c.accent]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="sparkles" size={16} color="#fff" />
        </LinearGradient>
        <View
          style={{
            flex: 1,
            height: 8,
            borderRadius: 999,
            backgroundColor: c.a("surface2", 0.9),
            overflow: "hidden",
          }}
        >
          <View style={{ width: `${progressPct}%`, height: "100%" }}>
            <LinearGradient
              colors={[c.accent, c.accent2]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1, borderRadius: 999 }}
            />
          </View>
        </View>
      </View>

      {phase === "quiz" && (
        <ScrollView
          key={step.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20, paddingTop: 8, paddingBottom: 40, flexGrow: 1 }}
        >
          {showCoach ? (
            <Animated.View entering={FadeInRight.duration(280)} style={{ gap: 0 }}>
              {"coachLine" in step && step.coachLine ? (
                <CoachBubble line={resolveText(step.coachLine, answers)} />
              ) : null}
              {step.kind === "question" ? (
                <QuestionStep
                  step={resolveQuestionStep(step, answers)}
                  answers={answers}
                  selected={answers[step.id]}
                  onSelect={(v) => selectOption(step.id, v)}
                />
              ) : step.kind === "scale" ? (
                <ScaleStep
                  step={step}
                  selected={answers[step.id]}
                  onSelect={(v) => selectOption(step.id, v)}
                />
              ) : null}
            </Animated.View>
          ) : step.kind === "testimonial" ? (
            <TestimonialStep step={step} onContinue={goNext} />
          ) : step.kind === "commitment" ? (
            <CommitmentStep step={step} onContinue={goNext} />
          ) : step.kind === "interstitial" ? (
            <InterstitialStep step={step} onContinue={goNext} />
          ) : null}
        </ScrollView>
      )}

      {phase === "building" && <BuildingPhase />}

      {phase === "summary" && (
        <ResultScroll key="summary">
          <SummaryStep answers={answers} onContinue={advanceResult} />
        </ResultScroll>
      )}
      {phase === "certificate" && (
        <ResultScroll key="certificate">
          <CertificateStep onContinue={advanceResult} />
        </ResultScroll>
      )}
      {phase === "easier" && (
        <ResultScroll key="easier">
          <EasierStep onContinue={advanceResult} />
        </ResultScroll>
      )}
      {phase === "reveal" && (
        <ResultScroll key="reveal">
          <RevealStep program={program} answers={answers} onStart={onStart} />
        </ResultScroll>
      )}

      {phase === "quiz" && (
        <View style={{ paddingHorizontal: 20, paddingBottom: 8 }}>
          <AppText variant="caption" muted style={{ textAlign: "center" }}>
            By continuing you agree to our Terms & Privacy Policy.
          </AppText>
        </View>
      )}
    </Screen>
  );
}

function ResultScroll({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, paddingTop: 8, paddingBottom: 40, flexGrow: 1 }}
    >
      <Animated.View entering={FadeInDown.duration(320)} style={{ flexGrow: 1 }}>
        {children}
      </Animated.View>
    </ScrollView>
  );
}

/* -------------------------------------------------------------------------- */
/*  Coach                                                                     */
/* -------------------------------------------------------------------------- */

// Timing for Nova's "live typing" effect. Kept short so the conversation feels
// snappy — answer options render immediately and are never blocked by this.
const TYPING_DOTS_MS = 550;
const REVEAL_TICK_MS = 18;
const REVEAL_CHARS_PER_TICK = 2;

function TypingDot({ index, color }: { index: number; color: string }) {
  const pulse = useSharedValue(0.35);
  useEffect(() => {
    pulse.value = withDelay(
      index * 140,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 280, easing: Easing.inOut(Easing.ease) }),
          withTiming(0.35, { duration: 280, easing: Easing.inOut(Easing.ease) }),
        ),
        -1,
      ),
    );
    return () => cancelAnimation(pulse);
  }, [index, pulse]);
  const style = useAnimatedStyle(() => ({
    opacity: pulse.value,
    transform: [{ translateY: (1 - pulse.value) * 2.5 }],
  }));
  return (
    <Animated.View
      style={[{ width: 6, height: 6, borderRadius: 3, backgroundColor: color }, style]}
    />
  );
}

function CoachBubble({ line }: { line: string }) {
  const c = useColors();
  const [typing, setTyping] = useState(true);
  const [visibleChars, setVisibleChars] = useState(0);
  const speaking = typing || visibleChars < line.length;

  // Phase 1: typing dots. Phase 2: letter-by-letter reveal.
  useEffect(() => {
    setTyping(true);
    setVisibleChars(0);
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      setTyping(false);
      interval = setInterval(() => {
        setVisibleChars((n) => {
          const next = n + REVEAL_CHARS_PER_TICK;
          if (next >= line.length) {
            if (interval) clearInterval(interval);
            return line.length;
          }
          return next;
        });
      }, REVEAL_TICK_MS);
    }, TYPING_DOTS_MS);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [line]);

  // Subtle avatar pulse while Nova is "speaking"; settles back to rest after.
  const avatarScale = useSharedValue(1);
  useEffect(() => {
    if (speaking) {
      avatarScale.value = withRepeat(
        withSequence(
          withTiming(1.05, { duration: 520, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: 520, easing: Easing.inOut(Easing.ease) }),
        ),
        -1,
      );
    } else {
      cancelAnimation(avatarScale);
      avatarScale.value = withTiming(1, { duration: 260 });
    }
    return () => cancelAnimation(avatarScale);
  }, [speaking, avatarScale]);
  const avatarStyle = useAnimatedStyle(() => ({
    transform: [{ scale: avatarScale.value }],
  }));

  return (
    <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 12, marginBottom: 22 }}>
      {/* Accent ring wrapper keeps the enlarged photo crisp and polished. */}
      <Animated.View
        entering={FadeIn.duration(260)}
        style={[
          {
            width: 84,
            height: 84,
            borderRadius: 42,
            padding: 3,
            backgroundColor: c.a("accent", 0.14),
            borderWidth: 2,
            borderColor: c.a("accent", 0.3),
          },
          avatarStyle,
        ]}
      >
        <Image
          source={coachPhotoImg}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 39,
            backgroundColor: c.a("surface2", 0.8),
          }}
          resizeMode="cover"
        />
      </Animated.View>
      <Animated.View
        entering={FadeIn.delay(100).duration(260)}
        style={{
          flex: 1,
          backgroundColor: c.a("surface", 0.95),
          borderWidth: 1,
          borderColor: c.border,
          borderRadius: 16,
          borderBottomLeftRadius: 4,
          paddingHorizontal: 14,
          paddingVertical: 12,
        }}
      >
        {/* The full line renders invisibly to lock in the bubble's final size,
            so neither the dots nor the reveal cause layout jumps below. */}
        <AppText
          variant="caption"
          muted
          style={{ fontSize: 13, lineHeight: 18, opacity: 0 }}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        >
          {line}
        </AppText>
        <View
          style={{
            position: "absolute",
            left: 14,
            right: 14,
            top: 12,
            bottom: 12,
            justifyContent: typing ? "center" : "flex-start",
          }}
        >
          {typing ? (
            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
              <TypingDot index={0} color={c.textMuted} />
              <TypingDot index={1} color={c.textMuted} />
              <TypingDot index={2} color={c.textMuted} />
            </View>
          ) : (
            <AppText variant="caption" muted style={{ fontSize: 13, lineHeight: 18 }}>
              {line.slice(0, visibleChars)}
            </AppText>
          )}
        </View>
      </Animated.View>
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*  Quiz step renderers                                                       */
/* -------------------------------------------------------------------------- */

function SelectRadio({ selected }: { selected: boolean }) {
  const c = useColors();
  return (
    <View
      style={{
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: selected ? c.accent : c.border,
        backgroundColor: selected ? c.accent : "transparent",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {selected ? <Icon name="check" size={13} color="#fff" /> : null}
    </View>
  );
}

function QuestionStep({
  step,
  answers,
  selected,
  onSelect,
}: {
  step: QuestionStepType;
  answers: Record<string, string>;
  selected?: string;
  onSelect: (value: string) => void;
}) {
  const c = useColors();
  const isGrid = step.layout === "grid";
  const isImageGrid = isGrid && step.options.every((o) => o.image);
  const subtitle = resolveText(step.subtitle, answers);

  return (
    <View style={{ gap: 20 }}>
      <View style={{ gap: 8 }}>
        <AppText variant="title">{step.question}</AppText>
        {subtitle ? <AppText variant="muted">{subtitle}</AppText> : null}
      </View>

      {isImageGrid ? (
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
                  <Image source={opt.image} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
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
                <View style={{ padding: 12, backgroundColor: isSel ? c.accent : c.a("surface", 0.95) }}>
                  <AppText variant="bodySemibold" color={isSel ? "#fff" : c.text}>
                    {opt.label}
                  </AppText>
                </View>
              </Pressable>
            );
          })}
        </View>
      ) : isGrid ? (
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, justifyContent: "space-between" }}>
          {step.options.map((opt) => {
            const isSel = selected === opt.value;
            return (
              <Pressable
                key={opt.value}
                onPress={() => onSelect(opt.value)}
                style={({ pressed }) => ({
                  width: "47%",
                  padding: 14,
                  borderRadius: 16,
                  borderWidth: 1.5,
                  borderColor: isSel ? c.accent : c.border,
                  backgroundColor: isSel ? c.a("accent", 0.1) : c.a("surface2", 0.4),
                  gap: 8,
                  transform: [{ scale: pressed ? 0.98 : 1 }],
                })}
              >
                {opt.emoji ? <AppText style={{ fontSize: 24 }}>{opt.emoji}</AppText> : null}
                <AppText variant="bodySemibold">{opt.label}</AppText>
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
                {opt.image ? (
                  <Image source={opt.image} style={{ width: 48, height: 48 }} resizeMode="contain" />
                ) : opt.emoji ? (
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
                <SelectRadio selected={isSel} />
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}

function ScaleStep({
  step,
  selected,
  onSelect,
}: {
  step: Extract<QuizStep, { kind: "scale" }>;
  selected?: string;
  onSelect: (value: string) => void;
}) {
  const c = useColors();
  return (
    <View style={{ gap: 16 }}>
      <AppText variant="subheading" uppercase color={c.accent}>
        {step.question}
      </AppText>
      <GlassCard>
        <AppText variant="heading">{step.statement}</AppText>
      </GlassCard>
      <View style={{ gap: 12, marginTop: 4 }}>
        {step.options.map((opt) => {
          const isSel = selected === opt.value;
          return (
            <Pressable
              key={opt.value}
              onPress={() => onSelect(opt.value)}
              style={({ pressed }) => ({
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
                paddingHorizontal: 18,
                paddingVertical: 18,
                borderRadius: 16,
                borderWidth: 1.5,
                borderColor: isSel ? c.accent : c.border,
                backgroundColor: isSel ? c.a("accent", 0.1) : c.a("surface2", 0.4),
                transform: [{ scale: pressed ? 0.99 : 1 }],
              })}
            >
              <AppText variant="bodySemibold">{opt.label}</AppText>
              <SelectRadio selected={isSel} />
            </Pressable>
          );
        })}
      </View>
    </View>
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
      style={{ flex: 1, justifyContent: "center", gap: 24, paddingVertical: 12 }}
    >
      <View style={{ alignItems: "center", gap: 16 }}>
        {step.image ? (
          <Image
            source={step.image}
            style={{ width: "100%", maxWidth: 320, aspectRatio: 3 / 4, maxHeight: 340, borderRadius: 24 }}
            resizeMode="cover"
          />
        ) : null}
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
        <AppText variant="body" muted style={{ textAlign: "center", maxWidth: 320, lineHeight: 22 }}>
          {step.body}
        </AppText>
      </View>
      <GradientButton label="Continue" icon="chevron-right" onPress={onContinue} />
    </Animated.View>
  );
}

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  const c = useColors();
  return (
    <View style={{ flexDirection: "row", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={size} color={i < count ? "#fbbf24" : c.border} />
      ))}
    </View>
  );
}

function TestimonialStep({
  step,
  onContinue,
}: {
  step: Extract<QuizStep, { kind: "testimonial" }>;
  onContinue: () => void;
}) {
  const c = useColors();
  return (
    <Animated.View
      entering={FadeInDown.duration(320)}
      style={{ flex: 1, justifyContent: "center", gap: 20, paddingVertical: 24 }}
    >
      <View style={{ alignItems: "center", gap: 16 }}>
        <Image
          source={step.avatar}
          style={{
            width: 96,
            height: 96,
            borderRadius: 48,
            borderWidth: 2,
            borderColor: c.a("accent", 0.4),
          }}
          resizeMode="cover"
        />
        <Stars count={step.rating} />
        <AppText variant="heading" style={{ textAlign: "center", maxWidth: 340 }}>
          “{step.quote}”
        </AppText>
        <View style={{ alignItems: "center", gap: 2 }}>
          <AppText variant="bodySemibold">{step.name}</AppText>
          <AppText variant="caption" muted>
            {step.role}
          </AppText>
        </View>
      </View>
      <GradientButton label="Continue" icon="chevron-right" onPress={onContinue} />
    </Animated.View>
  );
}

function CommitmentStep({
  step,
  onContinue,
}: {
  step: Extract<QuizStep, { kind: "commitment" }>;
  onContinue: () => void;
}) {
  return (
    <Animated.View
      entering={FadeInDown.duration(320)}
      style={{ flex: 1, justifyContent: "center", gap: 24, paddingVertical: 24 }}
    >
      <View style={{ alignItems: "center", gap: 16 }}>
        <Animated.Image
          entering={FadeIn.duration(400)}
          source={coachCelebrateImg}
          style={{ width: 128, height: 128 }}
          resizeMode="contain"
        />
        <AppText variant="title" style={{ textAlign: "center", maxWidth: 340 }}>
          {step.title}
        </AppText>
        <AppText variant="body" muted style={{ textAlign: "center", maxWidth: 320, lineHeight: 22 }}>
          {step.body}
        </AppText>
      </View>
      <GradientButton label={step.confirmLabel} icon="chevron-right" onPress={onContinue} />
    </Animated.View>
  );
}

/* -------------------------------------------------------------------------- */
/*  Building                                                                  */
/* -------------------------------------------------------------------------- */

const BUILDING_ITEMS = [
  "Analyzing your goals",
  "Matching AI tools to your field",
  "Sequencing your 28 daily missions",
  "Calibrating difficulty to your level",
];

function BuildingDonut() {
  const c = useColors();
  const DURATION = 2400;
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const start = Date.now();
    let raf = 0;
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const r = 62;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);

  return (
    <View style={{ width: 160, height: 160, alignItems: "center", justifyContent: "center" }}>
      <Svg width={160} height={160} viewBox="0 0 160 160" style={{ position: "absolute", transform: [{ rotate: "-90deg" }] }}>
        <Defs>
          <SvgGradient id="donutStroke" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={c.accent} />
            <Stop offset="1" stopColor={c.accent2} />
          </SvgGradient>
        </Defs>
        <Circle cx="80" cy="80" r={r} fill="none" stroke={c.a("surface2", 1)} strokeWidth="12" />
        <Circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="url(#donutStroke)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
        />
      </Svg>
      <Image source={coachImg} style={{ width: 40, height: 40 }} resizeMode="contain" />
      <AppText variant="heading">{pct}%</AppText>
    </View>
  );
}

function BuildingPhase() {
  const c = useColors();
  const items = useMemo(() => BUILDING_ITEMS, []);
  const [done, setDone] = useState(0);

  useEffect(() => {
    const timers = items.map((_, i) =>
      setTimeout(() => setDone((d) => Math.max(d, i + 1)), 520 * (i + 1)),
    );
    return () => timers.forEach(clearTimeout);
  }, [items]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 28, padding: 20 }}>
      <BuildingDonut />
      <AppText variant="title" style={{ textAlign: "center" }}>
        Nova is building your program…
      </AppText>
      <View style={{ gap: 14, alignSelf: "stretch", paddingHorizontal: 24 }}>
        {items.map((label, i) => {
          const complete = done > i;
          return (
            <Animated.View
              key={label}
              entering={FadeInDown.delay(i * 120).duration(300)}
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <Icon
                name={complete ? "check-circle" : "circle"}
                size={20}
                color={complete ? c.accent2 : c.textMuted}
              />
              <AppText variant="bodyMedium" color={complete ? c.text : c.textMuted}>
                {label}
              </AppText>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*  Result phase: summary                                                     */
/* -------------------------------------------------------------------------- */

// Marker positions are intentionally capped at mid-yellow (~50%) and never
// enter the green zone (>66%) — landing in "High" would signal users are
// already skilled enough and reduce sign-ups.
const SKILL_LEVELS: Record<string, { label: string; pos: number }> = {
  beginner: { label: "Getting Started", pos: 16 },
  some: { label: "Above Average", pos: 40 },
  advanced: { label: "Advanced", pos: 50 },
};

const FOCUS_PHRASE: Record<string, string> = {
  career: "Future-proofing your role",
  business: "Growing your business with AI",
  productivity: "Getting your time back",
  curiosity: "Understanding AI deeply",
};

const LEARNING_PHRASE: Record<string, string> = {
  beginner: "New to AI tools",
  some: "Self-taught so far",
  advanced: "Confident with AI",
};

function SummaryStep({
  answers,
  onContinue,
}: {
  answers: Record<string, string>;
  onContinue: () => void;
}) {
  const c = useColors();
  const experience = answers.experience;
  const skill = (experience && SKILL_LEVELS[experience]) || SKILL_LEVELS.some;
  const focus = (answers.goal && FOCUS_PHRASE[answers.goal]) || "Building real AI skills";
  const learning = (experience && LEARNING_PHRASE[experience]) || "Self-taught so far";
  const pace = answers.time ? `${answers.time} min a day` : "10 min a day";

  const rows: { icon: React.ComponentProps<typeof Icon>["name"]; label: string; value: string }[] = [
    { icon: "target", label: "Your focus", value: focus },
    { icon: "star", label: "Your readiness", value: "Open to a guided approach" },
    { icon: "clock", label: "Your pace", value: pace },
    { icon: "book", label: "Learning experience", value: learning },
  ];

  return (
    <View style={{ gap: 20 }}>
      <GlassCard style={{ gap: 16 }}>
        <View style={{ gap: 6, alignItems: "center" }}>
          <AppText variant="title" style={{ textAlign: "center" }}>
            Your Personal Summary
          </AppText>
          <AppText variant="muted" style={{ textAlign: "center" }}>
            The quiz indicates that your biggest blocker is the lack of a clear roadmap, not your
            ability.
          </AppText>
        </View>

        <View
          style={{
            borderRadius: 16,
            backgroundColor: c.a("surface2", 0.7),
            padding: 18,
            gap: 8,
            alignItems: "center",
          }}
        >
          <AppText variant="subheading" uppercase muted>
            AI Skills
          </AppText>
          <AppText variant="display" style={{ textAlign: "center" }}>
            {skill.label}
          </AppText>
          <View style={{ alignSelf: "stretch", marginTop: 10 }}>
            <View style={{ height: 10, borderRadius: 999, overflow: "hidden", flexDirection: "row" }}>
              <View style={{ flex: 1, backgroundColor: "hsl(0, 72%, 58%)" }} />
              <View style={{ flex: 1, backgroundColor: "hsl(38, 92%, 55%)" }} />
              <View style={{ flex: 1, backgroundColor: "hsl(142, 60%, 45%)" }} />
            </View>
            <View
              style={{
                position: "absolute",
                top: -3,
                left: `${skill.pos}%`,
                marginLeft: -8,
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: c.text,
                borderWidth: 2,
                borderColor: c.surface,
              }}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
              <AppText variant="caption" muted>
                Low
              </AppText>
              <AppText variant="caption" muted>
                Medium
              </AppText>
              <AppText variant="caption" muted>
                High
              </AppText>
            </View>
          </View>
        </View>

        <View style={{ gap: 14 }}>
          {rows.map((row) => (
            <View key={row.label} style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: c.a("accent", 0.12),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name={row.icon} size={18} color={c.accent} />
              </View>
              <View style={{ flex: 1 }}>
                <AppText variant="caption" muted>
                  {row.label}
                </AppText>
                <AppText variant="bodySemibold">{row.value}</AppText>
              </View>
            </View>
          ))}
        </View>
      </GlassCard>
      <GradientButton label="Continue" icon="chevron-right" onPress={onContinue} />
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*  Result phase: certificate                                                 */
/* -------------------------------------------------------------------------- */

const RED = "hsl(0, 72%, 52%)";
const GREEN = "hsl(142, 60%, 40%)";

function FloatBadge({
  text,
  color,
  style,
}: {
  text: string;
  color: string;
  style?: object;
}) {
  return (
    <View
      style={[
        {
          position: "absolute",
          borderRadius: 999,
          backgroundColor: color,
          paddingHorizontal: 8,
          paddingVertical: 2,
        },
        style,
      ]}
    >
      <AppText variant="caption" color="#fff" style={{ fontSize: 11, fontWeight: "700" }}>
        {text}
      </AppText>
    </View>
  );
}

function CertificateStep({ onContinue }: { onContinue: () => void }) {
  const c = useColors();
  const earnBy = new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const struggles = [
    "Unclear where to start",
    "No recognized credential",
    "Not getting AI's full value",
    "Wasting hours on trial and error",
    "Falling behind AI-savvy peers",
    "Invisible to employers",
  ];
  const solutions = [
    "Clear, step-by-step path",
    "Shareable AI credential",
    "Reliable results from AI",
    "Save hours every week",
    "Stay ahead of the curve",
    "Stand out from other workers",
  ];

  return (
    <View style={{ gap: 20 }}>
      <GlassCard style={{ gap: 14 }}>
        <View style={{ gap: 6, alignItems: "center" }}>
          <AppText variant="title" style={{ textAlign: "center" }}>
            Your Personalized AI Certificate Program
          </AppText>
          <AppText variant="muted" style={{ textAlign: "center" }}>
            We expect you to earn your AI Certificate
          </AppText>
          <AppText
            variant="bodySemibold"
            style={{ textDecorationLine: "underline", textDecorationColor: c.accent }}
          >
            by {earnBy}
          </AppText>
        </View>

        {/* Character portraits with floating result badges */}
        <View style={{ flexDirection: "row", gap: 12, marginTop: 6 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={compareWithoutImg} style={{ height: 112, width: "100%" }} resizeMode="contain" />
            <FloatBadge text="−35%" color={RED} style={{ top: 2, right: 6, transform: [{ rotate: "6deg" }] }} />
            <FloatBadge text="stuck" color={RED} style={{ bottom: 2, left: 8, transform: [{ rotate: "-6deg" }] }} />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={compareWithImg} style={{ height: 112, width: "100%" }} resizeMode="contain" />
            <FloatBadge text="+72%" color={GREEN} style={{ top: 2, left: 6, transform: [{ rotate: "-6deg" }] }} />
            <FloatBadge text="+35%" color={GREEN} style={{ bottom: 2, right: 8, transform: [{ rotate: "6deg" }] }} />
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <View
            style={{
              flex: 1,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "rgba(220, 60, 60, 0.25)",
              backgroundColor: "rgba(220, 60, 60, 0.08)",
              padding: 12,
              gap: 10,
            }}
          >
            <View>
              <AppText variant="caption" muted>
                You without
              </AppText>
              <AppText variant="bodySemibold">Upskil OS</AppText>
            </View>
            <AppText variant="caption" style={{ fontWeight: "700" }}>
              Struggles:
            </AppText>
            {struggles.map((s) => (
              <View key={s} style={{ flexDirection: "row", gap: 6, alignItems: "flex-start" }}>
                <Icon name="x" size={14} color={RED} />
                <AppText variant="caption" muted style={{ flex: 1 }}>
                  {s}
                </AppText>
              </View>
            ))}
          </View>
          <View
            style={{
              flex: 1,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "rgba(46, 160, 90, 0.25)",
              backgroundColor: "rgba(46, 160, 90, 0.08)",
              padding: 12,
              gap: 10,
            }}
          >
            <View>
              <AppText variant="caption" muted>
                You with
              </AppText>
              <AppText variant="bodySemibold">Upskil OS</AppText>
            </View>
            <AppText variant="caption" style={{ fontWeight: "700" }}>
              Solutions:
            </AppText>
            {solutions.map((s) => (
              <View key={s} style={{ flexDirection: "row", gap: 6, alignItems: "flex-start" }}>
                <Icon name="check" size={14} color={GREEN} />
                <AppText variant="caption" style={{ flex: 1 }}>
                  {s}
                </AppText>
              </View>
            ))}
          </View>
        </View>
      </GlassCard>
      <GradientButton label="Continue" icon="chevron-right" onPress={onContinue} />
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*  Result phase: easier                                                      */
/* -------------------------------------------------------------------------- */

function EasierStep({ onContinue }: { onContinue: () => void }) {
  const c = useColors();
  const badges = [
    "No prior AI knowledge is required",
    "No need for a university degree",
    "Work at your own pace and terms",
  ];
  const promises: { pre?: string; bold?: string; post?: string }[] = [
    { pre: "Master AI tools to ", bold: "build practical AI skills and confidence" },
    {
      pre: "Access the world's top AI tools: ",
      bold: "ChatGPT, Gemini, Grok and more",
      post: " — all in one place",
    },
    { bold: "Get an AI Certificate", post: " and stand out from people who still struggle with AI" },
    { pre: "Unlock ", bold: "1000+ proven AI prompts", post: " for productivity, business, and creativity" },
    { pre: "Progress tracking to see your ", bold: "growth and build confidence", post: " with each lesson" },
    { pre: "…and much more!" },
  ];

  return (
    <View style={{ gap: 20 }}>
      <GlassCard style={{ gap: 16 }}>
        <View style={{ gap: 6, alignItems: "center" }}>
          <AppText variant="title" style={{ textAlign: "center" }}>
            AI is Easier Than You Think
          </AppText>
          <AppText variant="muted" style={{ textAlign: "center" }}>
            Our certificate program is designed to make a difference in your AI knowledge from day
            one.
          </AppText>
        </View>

        <View style={{ gap: 10 }}>
          {badges.map((badge) => (
            <View
              key={badge}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: c.a("accent", 0.15),
                backgroundColor: c.a("accent", 0.06),
                paddingHorizontal: 14,
                paddingVertical: 12,
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: GREEN,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="check" size={18} color="#fff" />
              </View>
              <AppText variant="bodySemibold" style={{ flex: 1 }}>
                {badge}
              </AppText>
            </View>
          ))}
        </View>

        <AppText variant="bodySemibold" style={{ marginTop: 4 }}>
          Try Upskil OS and you will:
        </AppText>
        <View style={{ gap: 12 }}>
          {promises.map((p, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 10, alignItems: "flex-start" }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  borderWidth: 2,
                  borderColor: c.accent,
                  marginTop: 2,
                }}
              />
              <AppText variant="caption" muted style={{ flex: 1, fontSize: 13, lineHeight: 19 }}>
                {p.pre}
                {p.bold ? (
                  <AppText variant="caption" color={c.text} style={{ fontSize: 13, fontWeight: "700" }}>
                    {p.bold}
                  </AppText>
                ) : null}
                {p.post}
              </AppText>
            </View>
          ))}
        </View>
      </GlassCard>
      <GradientButton label="Continue" icon="chevron-right" onPress={onContinue} />
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*  Result phase: reveal                                                      */
/* -------------------------------------------------------------------------- */

function ProjectedGraph() {
  const c = useColors();
  return (
    <GlassCard style={{ gap: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <AppText variant="subheading" uppercase muted>
          Your projected AI confidence
        </AppText>
        <AppText variant="caption" color={c.accent2} style={{ fontWeight: "700" }}>
          28-day plan
        </AppText>
      </View>
      <Svg width="100%" height={140} viewBox="0 0 320 160" preserveAspectRatio="none">
        <Defs>
          <SvgGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={c.accent} stopOpacity="0.35" />
            <Stop offset="1" stopColor={c.accent} stopOpacity="0" />
          </SvgGradient>
          <SvgGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={c.accent} />
            <Stop offset="1" stopColor={c.accent2} />
          </SvgGradient>
        </Defs>
        {[40, 80, 120].map((y) => (
          <Line
            key={y}
            x1="8"
            y1={y}
            x2="312"
            y2={y}
            stroke={c.border}
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        ))}
        <Path
          d="M10,142 C 70,138 110,120 160,86 S 250,34 310,20 L 310,150 L 10,150 Z"
          fill="url(#areaFill)"
        />
        <Path
          d="M10,142 C 70,138 110,120 160,86 S 250,34 310,20"
          fill="none"
          stroke="url(#lineStroke)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <Circle cx="310" cy="20" r="5" fill={c.accent2} />
      </Svg>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AppText variant="caption" muted>
          Today
        </AppText>
        <AppText variant="caption" muted>
          Day 14
        </AppText>
        <AppText variant="caption" muted>
          Day 28
        </AppText>
      </View>
    </GlassCard>
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
    <GlassCard style={{ flex: 1, alignItems: "center", gap: 4 }}>
      <Icon name={icon} size={18} color={c.accent} />
      <AppText variant="heading">{value}</AppText>
      <AppText variant="caption" muted style={{ textAlign: "center", fontSize: 11 }}>
        {label}
      </AppText>
    </GlassCard>
  );
}

function RevealStep({
  program,
  answers,
  onStart,
}: {
  program: Program | null;
  answers: Record<string, string>;
  onStart: () => void;
}) {
  const c = useColors();
  const dailyMinutes = answers.time;
  const goalPhrase = answers.goal ? GOAL_PHRASE[answers.goal] : null;
  const aspirationPhrase = answers.aspiration ? ASPIRATION_PHRASE[answers.aspiration] : null;
  const helpFirstLabel = getSelectedLabel("help_first", answers);
  const weekResultLabel = getSelectedLabel("week_result", answers);

  // A personalized "why" line woven from the user's stated goal + aspiration.
  const motivationLine =
    goalPhrase && aspirationPhrase
      ? `Built around ${goalPhrase} — so you can ${aspirationPhrase}.`
      : aspirationPhrase
        ? `Built to help you ${aspirationPhrase}.`
        : goalPhrase
          ? `Built around ${goalPhrase}.`
          : null;

  // Highlights that echo the exact first-win / first-week focus the user picked.
  const personalHighlights = [
    helpFirstLabel ? `Your first wins target ${helpFirstLabel.toLowerCase()}` : null,
    weekResultLabel ? `First-week goal: ${weekResultLabel.toLowerCase()}` : null,
  ].filter((h): h is string => Boolean(h));

  const programHighlights = program?.highlights ?? [];
  const hasHighlights = personalHighlights.length > 0 || programHighlights.length > 0;

  return (
    <View style={{ gap: 18 }}>
      <View style={{ alignItems: "center", gap: 12 }}>
        <Image source={coachCelebrateImg} style={{ width: 96, height: 96 }} resizeMode="contain" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            paddingHorizontal: 14,
            paddingVertical: 7,
            borderRadius: 999,
            backgroundColor: c.a("accent2", 0.12),
          }}
        >
          <Icon name="check-circle" size={14} color={c.accent2} />
          <AppText variant="caption" uppercase color={c.accent2} style={{ fontWeight: "700" }}>
            Your program is ready
          </AppText>
        </View>
        <AppText variant="display" style={{ textAlign: "center" }}>
          {program?.programTitle ?? "Your Personalized AI Mastery Program"}
        </AppText>
        {program?.programFocus ? (
          <AppText variant="body" muted style={{ textAlign: "center", lineHeight: 22 }}>
            {program.programFocus}
          </AppText>
        ) : null}
        {motivationLine ? (
          <AppText variant="bodySemibold" color={c.accent} style={{ textAlign: "center" }}>
            {motivationLine}
          </AppText>
        ) : null}
      </View>

      <ProjectedGraph />

      <View style={{ flexDirection: "row", gap: 12 }}>
        <StatCard icon="target" value="28" label="daily missions" />
        <StatCard icon="clock" value={dailyMinutes ? `${dailyMinutes}m` : "20m"} label="per day" />
        <StatCard icon="zap" value="AI-graded" label="feedback" />
      </View>

      {hasHighlights ? (
        <GlassCard>
          <AppText variant="subheading" uppercase muted style={{ marginBottom: 12 }}>
            What you'll master
          </AppText>
          <View style={{ gap: 12 }}>
            {personalHighlights.map((h, i) => (
              <View key={`personal-${i}`} style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
                <Icon name="check-circle" size={18} color={c.accent2} />
                <AppText variant="bodySemibold" style={{ flex: 1 }}>
                  {h}
                </AppText>
              </View>
            ))}
            {programHighlights.map((h, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
                <Icon name="check-circle" size={18} color={c.accent} />
                <AppText variant="bodyMedium" style={{ flex: 1 }}>
                  {h}
                </AppText>
              </View>
            ))}
          </View>
        </GlassCard>
      ) : null}

      <View style={{ gap: 12 }}>
        {TESTIMONIALS.map((t) => (
          <GlassCard key={t.name} style={{ gap: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Image source={t.avatar} style={{ width: 36, height: 36, borderRadius: 18 }} resizeMode="cover" />
              <View style={{ flex: 1 }}>
                <AppText variant="bodySemibold">{t.name}</AppText>
                <Stars count={t.rating} size={12} />
              </View>
            </View>
            <AppText variant="caption" muted style={{ lineHeight: 18 }}>
              “{t.quote}”
            </AppText>
          </GlassCard>
        ))}
      </View>

      <GlassCard style={{ borderColor: c.a("accent", 0.4) }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: c.accent,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="sparkles" size={20} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <AppText variant="bodySemibold">Lifetime access to all 28 days.</AppText>
            <AppText variant="caption" muted>
              See your plan and pricing, then create your account to start today.
            </AppText>
          </View>
        </View>
      </GlassCard>

      <GradientButton label="See My Plan & Pricing" icon="chevron-right" onPress={onStart} />
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 6, paddingBottom: 8 }}>
        <AppText variant="muted">Already have an account?</AppText>
        <Link href="/(auth)/sign-in">
          <AppText variant="bodySemibold" color={c.accent}>
            Sign in
          </AppText>
        </Link>
      </View>
    </View>
  );
}
