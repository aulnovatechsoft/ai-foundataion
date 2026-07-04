import {
  getGetDayProgressQueryKey,
  getGetMeQueryKey,
  getListProgressQueryKey,
  getListAchievementsQueryKey,
  getListFeedQueryKey,
  useCompleteLesson,
  useCompleteTask,
  useGetCurriculumDay,
  useGetDayProgress,
  useGetMe,
  useSubmitQuiz,
  useSubmitReflection,
  useCreatePost,
  type ProgressUpdate,
  type QuizResult,
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import Animated, { FadeIn, FadeInDown, Layout } from "react-native-reanimated";

import { Field } from "@/components/Field";
import {
  AppText,
  GlassCard,
  GradientButton,
  Icon,
  type IconName,
  IconButton,
  LoadingScreen,
  Screen,
  uiStyles,
} from "@/components/ui";
import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";
import { useColors } from "@/hooks/useColors";
import { useCelebration } from "@/components/CelebrationProvider";
import { normalizePace, isRequired, PACE_LABEL, PACE_SUMMARY, shuffle } from "@/lib/pace";
import { fieldLens, experienceNote } from "@/lib/personalization";

type StepKey = "lesson" | "task" | "quiz" | "reflection";

const STEP_META: { key: StepKey; label: string; icon: IconName }[] = [
  { key: "lesson", label: "Lesson", icon: "play" },
  { key: "task", label: "Task", icon: "briefcase" },
  { key: "quiz", label: "Quiz", icon: "brain" },
  { key: "reflection", label: "Reflect", icon: "file-text" },
];

export default function DayScreen() {
  const c = useColors();
  const router = useRouter();
  const qc = useQueryClient();
  const params = useLocalSearchParams<{ day: string }>();
  const day = Number(params.day) || 1;
  const { celebrate } = useCelebration();

  const { data: detail, isLoading, error } = useGetCurriculumDay(day);
  const { data: progress } = useGetDayProgress(day);
  const { data: me } = useGetMe();

  const pace = normalizePace(me?.dailyMinutes);
  const taskRequired = isRequired(pace, "taskCompleted");
  const reflectionRequired = isRequired(pace, "reflectionCompleted");
  const lens = fieldLens(me?.field);
  const expNote = experienceNote(me?.experienceLevel);

  const isLocked = (error as { status?: number } | null)?.status === 402;

  const [active, setActive] = useState<StepKey>("lesson");
  const [taskResult, setTaskResult] = useState<import("@workspace/api-client-react").TaskEvalResult | null>(null);

  const handleProgressUpdate = (data: ProgressUpdate | QuizResult | import("@workspace/api-client-react").TaskEvalResult) => {
    qc.invalidateQueries({ queryKey: getGetDayProgressQueryKey(day) });
    qc.invalidateQueries({ queryKey: getListProgressQueryKey() });
    qc.invalidateQueries({ queryKey: getGetMeQueryKey() });
    qc.invalidateQueries({ queryKey: getListAchievementsQueryKey() });

    const events: Parameters<typeof celebrate>[0] = [];
    
    if (data.xpAwarded > 0) {
      events.push({ type: "xp", xp: data.xpAwarded });
    }
    
    if (data.unlockedAchievements && data.unlockedAchievements.length > 0) {
      data.unlockedAchievements.forEach(ach => {
        events.push({ 
          type: "achievement", 
          title: ach.title, 
          description: ach.description,
          icon: ach.icon
        });
      });
    }

    if (data.leveledUp) {
      events.push({ type: "levelup", level: data.user.level });
    }

    if (data.dayCompleted) {
      events.push({ type: "day_complete", xp: data.xpAwarded });
    }

    if (events.length > 0) {
      celebrate(events);
    }
  };

  const completeLesson = useCompleteLesson({
    mutation: { onSuccess: handleProgressUpdate },
  });
  const completeTask = useCompleteTask({
    mutation: {
      onSuccess: (data) => {
        setTaskResult(data);
        handleProgressUpdate(data);
      },
    },
  });

  if (isLocked) {
    return (
      <Screen>
        <View
          style={[
            uiStyles.rowBetween,
            { paddingBottom: 12 },
          ]}
        >
          <IconButton name="chevron-left" onPress={() => router.back()} />
          <View style={{ width: 40 }} />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
          <View
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: c.a("accent", 0.16),
            }}
          >
            <Icon name="lock" size={30} color={c.accent} />
          </View>
          <AppText variant="title" style={{ textAlign: "center" }}>
            Day {day} is locked
          </AppText>
          <AppText variant="muted" style={{ textAlign: "center", maxWidth: 280 }}>
            Unlock the full 28-day program to continue your AI mastery journey.
          </AppText>
          <GradientButton
            label="Unlock the full program"
            icon="crown"
            onPress={() => router.replace("/(app)/upgrade")}
            style={{ alignSelf: "stretch", marginTop: 8 }}
          />
        </View>
      </Screen>
    );
  }

  if (isLoading || !detail) return <LoadingScreen />;

  return (
    <Screen padded={false}>
      {/* Header */}
      <View
        style={[
          uiStyles.rowBetween,
          { paddingHorizontal: 20, paddingBottom: 12 },
        ]}
      >
        <IconButton name="chevron-left" onPress={() => router.back()} />
        <View style={{ alignItems: "center" }}>
          <AppText variant="caption" muted uppercase>
            Day {day}
          </AppText>
          <AppText variant="subheading">{detail.title}</AppText>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Segmented control */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          padding: 4,
          borderRadius: 14,
          backgroundColor: c.a("surface2", 0.6),
          borderWidth: 1,
          borderColor: c.border,
        }}
      >
        {STEP_META.map((s) => {
          const focused = active === s.key;
          const done = !!progress?.[
            `${s.key}Completed` as keyof typeof progress
          ];
          const optional =
            (s.key === "task" && !taskRequired) ||
            (s.key === "reflection" && !reflectionRequired);
          return (
            <Pressable
              key={s.key}
              onPress={() => setActive(s.key)}
              style={{
                flex: 1,
                paddingVertical: 9,
                borderRadius: 10,
                alignItems: "center",
                gap: 3,
                opacity: !focused && optional && !done ? 0.6 : 1,
                backgroundColor: focused ? c.accent : "transparent",
              }}
            >
              <Icon
                name={done ? "check-circle" : s.icon}
                size={16}
                color={focused ? "#fff" : done ? "#22c55e" : c.textMuted}
              />
              <AppText
                variant="caption"
                color={focused ? "#fff" : c.textMuted}
                style={{ fontSize: 10 }}
              >
                {s.label}
                {optional ? "*" : ""}
              </AppText>
            </Pressable>
          );
        })}
      </View>

      <View style={{ flex: 1, marginTop: 12 }}>
        {active === "lesson" && (
          <LessonSection
            title={detail.lessonTitle}
            content={detail.lessonContent}
            minutes={detail.estimatedMinutes}
            done={!!progress?.lessonCompleted}
            loading={completeLesson.isPending}
            nextLabel={taskRequired ? "Continue to Task" : "Continue to Quiz"}
            paceLabel={me ? PACE_LABEL[pace] : null}
            paceSummary={me ? PACE_SUMMARY[pace] : null}
            lens={lens}
            expNote={expNote}
            onComplete={() => {
              if (!progress?.lessonCompleted) {
                completeLesson.mutate({ day });
              }
              setActive(taskRequired ? "task" : "quiz");
            }}
          />
        )}
        {active === "task" && (
          <TaskSection
            title={detail.taskTitle}
            description={detail.taskDescription}
            done={!!progress?.taskCompleted}
            loading={completeTask.isPending}
            taskResult={taskResult}
            onComplete={(text) => {
              if (!progress?.taskCompleted && text.trim()) {
                completeTask.mutate({ day, data: { text } }, {
                  onSuccess: () => setActive("quiz"),
                });
              } else {
                setActive("quiz");
              }
            }}
          />
        )}
        {active === "quiz" && (
          <QuizSection
            day={day}
            quiz={detail.quiz}
            done={!!progress?.quizCompleted}
            score={progress?.quizScore ?? null}
            nextLabel={reflectionRequired ? "Continue to reflection" : "Finish day"}
            onDone={() => (reflectionRequired ? setActive("reflection") : router.back())}
            handleProgressUpdate={handleProgressUpdate}
          />
        )}
        {active === "reflection" && (
          <ReflectionSection
            day={day}
            prompt={detail.reflectionPrompt}
            done={!!progress?.reflectionCompleted}
            existing={progress?.reflectionText ?? ""}
            onDone={() => router.back()}
            handleProgressUpdate={handleProgressUpdate}
          />
        )}
      </View>
    </Screen>
  );
}

function SectionShell({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <Animated.View style={{ flex: 1 }} entering={FadeInDown.duration(300).springify()}>
      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      {footer ? (
        <View style={{ padding: 20, paddingTop: 8 }}>{footer}</View>
      ) : null}
    </Animated.View>
  );
}

function DoneBanner({ label }: { label: string }) {
  return (
    <Animated.View
      entering={FadeIn.duration(300)}
      style={[
        uiStyles.row,
        {
          gap: 8,
          padding: 12,
          borderRadius: 12,
          backgroundColor: "rgba(34,197,94,0.15)",
        },
      ]}
    >
      <Icon name="check-circle" size={18} color="#22c55e" />
      <AppText variant="bodySemibold" color="#22c55e">
        {label}
      </AppText>
    </Animated.View>
  );
}

function LessonSection({
  title,
  content,
  minutes,
  done,
  loading,
  onComplete,
  nextLabel,
  paceLabel,
  paceSummary,
  lens,
  expNote,
}: {
  title: string;
  content: string;
  minutes: number;
  done: boolean;
  loading: boolean;
  onComplete: () => void;
  nextLabel: string;
  paceLabel: string | null;
  paceSummary: string | null;
  lens: { label: string; lens: string } | null;
  expNote: { text: string } | null;
}) {
  const c = useColors();
  return (
    <SectionShell
      footer={
        done ? (
          <View style={{ gap: 12 }}>
            <DoneBanner label="Lesson complete" />
            <GradientButton
              label={nextLabel}
              icon="chevron-right"
              onPress={onComplete}
            />
          </View>
        ) : (
          <GradientButton
            label="Mark lesson complete"
            icon="check"
            loading={loading}
            onPress={onComplete}
          />
        )
      }
    >
      {paceSummary ? (
        <GlassCard>
          <View style={{ gap: 4 }}>
            {paceLabel ? (
              <AppText variant="bodySemibold" color={c.accent}>
                {paceLabel}
              </AppText>
            ) : null}
            <AppText variant="caption" muted style={{ lineHeight: 18 }}>
              {paceSummary}
            </AppText>
          </View>
        </GlassCard>
      ) : null}
      {lens ? (
        <GlassCard>
          <AppText variant="body" style={{ lineHeight: 21 }}>
            <AppText variant="bodySemibold">Your focus — {lens.label}: </AppText>
            {lens.lens}
          </AppText>
        </GlassCard>
      ) : null}
      {expNote ? (
        <AppText variant="caption" muted style={{ lineHeight: 18 }}>
          {expNote.text}
        </AppText>
      ) : null}
      <View style={[uiStyles.row, { gap: 8 }]}>
        <Icon name="clock" size={14} color={c.textMuted} />
        <AppText variant="caption" muted>
          {minutes} min read
        </AppText>
      </View>
      <AppText variant="title">{title}</AppText>
      <GlassCard>
        <AppText variant="body" style={{ lineHeight: 23 }}>
          {content}
        </AppText>
      </GlassCard>
    </SectionShell>
  );
}

function TaskSection({
  title,
  description,
  done,
  loading,
  onComplete,
  taskResult,
}: {
  title: string;
  description: string;
  done: boolean;
  loading: boolean;
  onComplete: (text: string) => void;
  taskResult: import("@workspace/api-client-react").TaskEvalResult | null;
}) {
  const c = useColors();
  const [text, setText] = useState("");

  if (done && taskResult) {
    return (
      <SectionShell
        footer={
          <GradientButton
            label="Continue to Quiz"
            icon="chevron-right"
            onPress={() => onComplete(text)}
          />
        }
      >
        <DoneBanner label="Task complete" />
        <GlassCard>
          <View style={{ gap: 8 }}>
            <AppText variant="bodySemibold">AI Mentor Feedback</AppText>
            <AppText variant="body" style={{ lineHeight: 22 }}>
              {taskResult.feedback.summary}
            </AppText>
            {taskResult.feedback.strengths.length > 0 && (
              <View style={{ gap: 4, marginTop: 8 }}>
                <AppText variant="caption" muted uppercase>Strengths</AppText>
                {taskResult.feedback.strengths.map((s, i) => (
                  <AppText key={i} variant="body" style={{ color: "#22c55e", lineHeight: 20 }}>
                    ✓ {s}
                  </AppText>
                ))}
              </View>
            )}
            {taskResult.feedback.improvements.length > 0 && (
              <View style={{ gap: 4, marginTop: 4 }}>
                <AppText variant="caption" muted uppercase>To improve</AppText>
                {taskResult.feedback.improvements.map((imp, i) => (
                  <AppText key={i} variant="body" style={{ color: "#f59e0b", lineHeight: 20 }}>
                    → {imp}
                  </AppText>
                ))}
              </View>
            )}
            {taskResult.xpAwarded > 0 && (
              <AppText variant="caption" color={c.accent} style={{ marginTop: 8 }}>
                +{taskResult.xpAwarded} XP earned
              </AppText>
            )}
          </View>
        </GlassCard>
      </SectionShell>
    );
  }

  if (done) {
    return (
      <SectionShell
        footer={
          <GradientButton
            label="Continue to Quiz"
            icon="chevron-right"
            onPress={() => onComplete(text)}
          />
        }
      >
        <DoneBanner label="Task complete" />
      </SectionShell>
    );
  }

  return (
    <SectionShell
      footer={
        <GradientButton
          label={loading ? "Getting feedback…" : "Submit for AI Feedback"}
          icon="sparkles"
          loading={loading}
          disabled={!text.trim()}
          onPress={() => onComplete(text)}
        />
      }
    >
      <AppText variant="title">{title}</AppText>
      <GlassCard>
        <AppText variant="body" style={{ lineHeight: 23 }}>
          {description}
        </AppText>
      </GlassCard>
      <Field
        label="Your work"
        value={text}
        onChangeText={setText}
        placeholder="Describe what you built, paste output, or share your findings…"
        multiline
        numberOfLines={6}
      />
    </SectionShell>
  );
}

function QuizSection({
  day,
  quiz,
  done,
  score,
  nextLabel,
  onDone,
  handleProgressUpdate,
}: {
  day: number;
  quiz: { id: number; question: string; options: string[]; explanation?: string | null }[];
  done: boolean;
  score: number | null;
  nextLabel: string;
  onDone: () => void;
  handleProgressUpdate: (data: QuizResult) => void;
}) {
  const c = useColors();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [reshuffle, setReshuffle] = useState(0);
  const [result, setResult] = useState<{
    score: number;
    total: number;
    passed: boolean;
    correctIndexes?: number[];
  } | null>(null);

  const optionOrder = useMemo(() => {
    const map: Record<number, number[]> = {};
    quiz.forEach((q) => {
      map[q.id] = shuffle(q.options.map((_, i) => i));
    });
    return map;
    // reshuffle intentionally re-randomizes on retry
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz, reshuffle]);

  const submit = useSubmitQuiz({
    mutation: {
      onSuccess: (data) => {
        setResult({ 
          score: data.score, 
          total: data.total, 
          passed: data.passed,
          correctIndexes: data.correctIndexes 
        });
        handleProgressUpdate(data);
      },
    },
  });

  const allAnswered = quiz.every((q) => answers[q.id] !== undefined);

  if (done && !result) {
    return (
      <SectionShell footer={<GradientButton label="Next" icon="chevron-right" onPress={onDone} />}>
        <DoneBanner
          label={
            score !== null
              ? `Quiz passed — ${score}/${quiz.length}`
              : "Quiz complete"
          }
        />
      </SectionShell>
    );
  }

  if (result) {
    return (
      <SectionShell
        footer={
          result.passed ? (
            <GradientButton label={nextLabel} icon="chevron-right" onPress={onDone} />
          ) : (
            <GradientButton
              label="Try again"
              onPress={() => {
                setResult(null);
                setAnswers({});
                setReshuffle((n) => n + 1);
              }}
            />
          )
        }
      >
        <Animated.View layout={Layout.springify()} style={{ alignItems: "center", gap: 12, paddingVertical: 24 }}>
          <Icon
            name={result.passed ? "check-circle" : "x"}
            size={48}
            color={result.passed ? "#22c55e" : "#ef4444"}
          />
          <AppText variant="title">
            {result.score} / {result.total}
          </AppText>
          <AppText variant="muted">
            {result.passed ? "Nicely done — you passed." : "Not quite. Give it another go."}
          </AppText>
        </Animated.View>
        
        {result.correctIndexes && (
          <View style={{ gap: 16 }}>
            {quiz.map((q, qi) => {
              const selected = answers[q.id];
              const isCorrect = selected === result.correctIndexes![qi];
              return (
                <View key={q.id} style={{ gap: 8 }}>
                  <AppText variant="bodySemibold">{qi + 1}. {q.question}</AppText>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 12,
                      padding: 14,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: isCorrect ? "#22c55e" : "#ef4444",
                      backgroundColor: isCorrect ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
                    }}
                  >
                    <Icon name={isCorrect ? "check" : "x"} color={isCorrect ? "#22c55e" : "#ef4444"} size={20} />
                    <AppText variant="body" color={isCorrect ? "#22c55e" : "#ef4444"} style={{ flex: 1 }}>
                      {q.options[selected]}
                    </AppText>
                  </View>
                  {q.explanation ? (
                    <AppText variant="caption" muted style={{ lineHeight: 18 }}>
                      <AppText variant="caption" style={{ color: c.text }}>Why: </AppText>
                      {q.explanation}
                    </AppText>
                  ) : null}
                </View>
              );
            })}
          </View>
        )}
      </SectionShell>
    );
  }

  return (
    <SectionShell
      footer={
        <GradientButton
          label="Submit quiz"
          loading={submit.isPending}
          disabled={!allAnswered}
          onPress={() =>
            submit.mutate({
              day,
              data: { answers: quiz.map((q) => answers[q.id] ?? -1) },
            })
          }
        />
      }
    >
      {quiz.map((q, qi) => (
        <View key={q.id} style={{ gap: 10 }}>
          <AppText variant="bodySemibold">
            {qi + 1}. {q.question}
          </AppText>
          {(optionOrder[q.id] ?? q.options.map((_, i) => i)).map((oi) => {
            const opt = q.options[oi];
            const selected = answers[q.id] === oi;
            return (
              <Pressable
                key={oi}
                onPress={() => setAnswers((p) => ({ ...p, [q.id]: oi }))}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  padding: 14,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: selected ? c.accent : c.border,
                  backgroundColor: selected
                    ? c.a("accent", 0.12)
                    : c.a("surface2", 0.4),
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: selected ? c.accent : c.border,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selected ? (
                    <Animated.View
                      entering={FadeIn.duration(200)}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: c.accent,
                      }}
                    />
                  ) : null}
                </View>
                <AppText variant="body" style={{ flex: 1 }}>
                  {opt}
                </AppText>
              </Pressable>
            );
          })}
        </View>
      ))}
    </SectionShell>
  );
}

function ReflectionSection({
  day,
  prompt,
  done,
  existing,
  onDone,
  handleProgressUpdate,
}: {
  day: number;
  prompt: string;
  done: boolean;
  existing: string;
  onDone: () => void;
  handleProgressUpdate: (data: ProgressUpdate) => void;
}) {
  const qc = useQueryClient();
  const [text, setText] = useState(existing);
  const [shared, setShared] = useState(false);
  const submit = useSubmitReflection({
    mutation: {
      onSuccess: (data) => {
        handleProgressUpdate(data);
      },
    },
  });

  const createPost = useCreatePost({
    mutation: {
      onSuccess: () => {
        setShared(true);
        qc.invalidateQueries({ queryKey: getListFeedQueryKey() });
      }
    }
  });

  useEffect(() => {
    if (existing) setText(existing);
  }, [existing]);

  return (
    <Animated.View entering={FadeInDown.duration(300).springify()} style={{ flex: 1 }}>
      <KeyboardAwareScrollViewCompat
        contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 40 }}
      >
        <AppText variant="title">Reflection</AppText>
        <GlassCard>
          <AppText variant="body" style={{ lineHeight: 23 }}>
            {prompt}
          </AppText>
        </GlassCard>
        <Field
          label="Your reflection"
          value={text}
          onChangeText={setText}
          placeholder="Write what you learned today..."
          multiline
        />
        {done ? <DoneBanner label="Reflection saved" /> : null}
        
        {!done || text !== existing ? (
          <GradientButton
            label={done ? "Update reflection" : "Save reflection"}
            icon="check"
            loading={submit.isPending}
            disabled={!text.trim() || submit.isPending}
            onPress={() => submit.mutate({ day, data: { text: text.trim() } })}
          />
        ) : (
          <View style={{ gap: 12 }}>
            {!shared ? (
              <GlassCard>
                <AppText variant="bodySemibold" style={{ marginBottom: 8 }}>Share with Community</AppText>
                <AppText variant="caption" muted style={{ marginBottom: 16 }}>
                  Inspire others by sharing your reflection on the community feed.
                </AppText>
                <GradientButton
                  label="Share Reflection"
                  icon="share"
                  loading={createPost.isPending}
                  onPress={() => createPost.mutate({ data: { content: text.trim(), day, kind: "reflection" } })}
                />
              </GlassCard>
            ) : (
              <DoneBanner label="Shared to community" />
            )}
            <GradientButton
              label="Return Home"
              icon="home"
              onPress={onDone}
              style={{ marginTop: 12 }}
            />
          </View>
        )}
      </KeyboardAwareScrollViewCompat>
    </Animated.View>
  );
}
