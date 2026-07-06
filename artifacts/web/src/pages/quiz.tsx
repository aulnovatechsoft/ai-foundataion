import { useState, useEffect } from "react";
import { Redirect, useLocation, Link } from "wouter";
import { Show } from "@clerk/react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ArrowLeft, Loader2, CheckCircle2, Target, Clock, Zap, Star, BookOpen, Mail, X } from "lucide-react";
import { usePreviewOnboarding } from "@workspace/api-client-react";
import type { OnboardingProgram } from "@workspace/api-client-react";
import { QUIZ_STEPS, TESTIMONIALS, ONBOARDING_STORAGE_KEY, GOAL_PHRASE, ASPIRATION_PHRASE, getSelectedLabel } from "@/lib/quiz";
import coachImg from "@/assets/onboarding/coach.png";
import compareWithoutImg from "@/assets/onboarding/compare-without.png";
import compareWithImg from "@/assets/onboarding/compare-with.png";
import coachCelebrateImg from "@/assets/onboarding/coach-celebrate.png";
import coachPhotoImg from "@/assets/onboarding/coach-photo.png";

type QuizStepType = (typeof QUIZ_STEPS)[number];

export default function QuizPage() {
  return (
    <div className="theme-daylight">
      <Show when="signed-in">
        <Redirect to="/dashboard" />
      </Show>
      <Show when="signed-out">
        <QuizFlow />
      </Show>
    </div>
  );
}

// Post-quiz screens shown in order after the last question. Progress and the
// header back button are driven off this list so adding/removing a result
// screen only requires editing here.
const RESULT_PHASES = ["email", "summary", "certificate", "easier", "reveal"] as const;
type ResultPhase = (typeof RESULT_PHASES)[number];
type Phase = "quiz" | "building" | ResultPhase;

const TOTAL_SCREENS = QUIZ_STEPS.length + 1 + RESULT_PHASES.length; // + building + result screens

function QuizFlow() {
  const [, setLocation] = useLocation();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<Phase>("quiz");
  const [program, setProgram] = useState<OnboardingProgram | null>(null);
  const [email, setEmail] = useState("");

  const previewOnboarding = usePreviewOnboarding();

  const step = QUIZ_STEPS[stepIndex];

  const resultIndex = RESULT_PHASES.indexOf(phase as ResultPhase);
  const screenNum =
    phase === "quiz"
      ? stepIndex + 1
      : phase === "building"
        ? QUIZ_STEPS.length + 1
        : QUIZ_STEPS.length + 2 + resultIndex;
  const progressPct = Math.round((screenNum / TOTAL_SCREENS) * 100);

  const goNext = () => {
    if (stepIndex < QUIZ_STEPS.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      finishQuiz();
    }
  };

  const goBack = () => {
    if (phase === "quiz") {
      if (stepIndex > 0) setStepIndex((i) => i - 1);
      return;
    }
    // Step back through the result screens (building is transient — never returned to).
    if (resultIndex > 0) setPhase(RESULT_PHASES[resultIndex - 1]);
  };

  const advanceResult = () => {
    if (resultIndex >= 0 && resultIndex < RESULT_PHASES.length - 1) {
      setPhase(RESULT_PHASES[resultIndex + 1]);
    }
  };

  const canGoBack =
    (phase === "quiz" && stepIndex > 0) || resultIndex > 0;

  const selectOption = (questionId: string, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: value };
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
      return next;
    });
    setTimeout(goNext, 240);
  };

  const finishQuiz = () => {
    setPhase("building");
    previewOnboarding.mutate(
      { data: { answers } },
      {
        onSuccess: (data) => {
          setProgram(data);
          setTimeout(() => setPhase("email"), 2600);
        },
        onError: () => {
          setTimeout(() => setPhase("email"), 2600);
        },
      },
    );
  };

  const submitEmail = (value: string) => {
    setEmail(value);
    try {
      localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify({ answers, email: value }));
    } catch {
      // ignore storage failures — onboarding can be redone in-app
    }
    advanceResult();
  };

  const startProgram = () => {
    try {
      localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify({ answers, email }));
    } catch {
      // ignore storage failures — onboarding can be redone in-app
    }
    setLocation("/upgrade");
  };

  const showCoach = phase === "quiz" && (step.kind === "question" || step.kind === "scale");

  return (
    <div className="min-h-screen bg-[hsl(var(--bg))] flex flex-col font-sans">
      {/* Top bar with progress */}
      <header className="sticky top-0 z-50 bg-[hsl(var(--surface))/0.85] backdrop-blur-xl border-b border-[hsl(var(--border))]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center gap-4">
          {canGoBack && (
            <button
              onClick={goBack}
              aria-label="Go back"
              className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </Link>
          <div className="flex-1 h-2 rounded-full bg-[hsl(var(--surface-2))] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))]"
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {phase === "quiz" && (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              {showCoach ? (
                <div className="grid md:grid-cols-[1fr_280px] gap-8 lg:gap-12 items-stretch flex-1">
                  <div className="flex flex-col max-w-2xl w-full">
                    {"coachLine" in step && step.coachLine && (
                      <CoachBubble line={resolveText(step.coachLine, answers)} />
                    )}
                    {step.kind === "question" ? (
                      <QuestionStep step={resolveQuestionStep(step, answers)} answers={answers} selected={answers[step.id]} onSelect={(v) => selectOption(step.id, v)} />
                    ) : step.kind === "scale" ? (
                      <ScaleStep step={step} selected={answers[step.id]} onSelect={(v) => selectOption(step.id, v)} />
                    ) : null}
                  </div>
                  <div className="hidden md:block relative">
                    <img
                      src={coachPhotoImg}
                      alt=""
                      aria-hidden="true"
                      className="sticky top-24 w-full max-h-[560px] object-contain object-bottom drop-shadow-[0_20px_40px_hsl(var(--accent)/0.12)]"
                    />
                  </div>
                </div>
              ) : step.kind === "testimonial" ? (
                <TestimonialStep step={step} onContinue={goNext} />
              ) : step.kind === "commitment" ? (
                <CommitmentStep step={step} onContinue={goNext} />
              ) : step.kind === "interstitial" ? (
                <InterstitialStep step={step} onContinue={goNext} />
              ) : null}
            </motion.div>
          )}

          {phase === "building" && (
            <motion.div
              key="building"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center text-center gap-6 py-20"
            >
              <BuildingDonut />
              <div>
                <h2 className="text-3xl font-bold font-heading text-[hsl(var(--text))] mb-3">
                  Nova is building your program…
                </h2>
                <BuildingChecklist />
              </div>
            </motion.div>
          )}

          {phase === "email" && (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              className="flex-1 flex flex-col"
            >
              <EmailStep initialEmail={email} onContinue={submitEmail} />
            </motion.div>
          )}

          {phase === "summary" && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              className="flex-1 flex flex-col"
            >
              <SummaryStep answers={answers} onContinue={advanceResult} />
            </motion.div>
          )}

          {phase === "certificate" && (
            <motion.div
              key="certificate"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              className="flex-1 flex flex-col"
            >
              <CertificateStep onContinue={advanceResult} />
            </motion.div>
          )}

          {phase === "easier" && (
            <motion.div
              key="easier"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              className="flex-1 flex flex-col"
            >
              <EasierStep onContinue={advanceResult} />
            </motion.div>
          )}

          {phase === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col"
            >
              <RevealStep program={program} answers={answers} onStart={startProgram} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function CoachBubble({ line }: { line: string }) {
  return (
    <div className="flex items-end gap-3 mb-7">
      <img
        src={coachPhotoImg}
        alt=""
        aria-hidden="true"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover object-top shrink-0 border-2 border-[hsl(var(--accent))/0.25] bg-[hsl(var(--surface-2))]"
      />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-[hsl(var(--text-muted))] max-w-md"
      >
        <span className="absolute -left-1.5 bottom-3 w-3 h-3 rotate-45 bg-[hsl(var(--surface))] border-l border-b border-[hsl(var(--border))]" />
        {line}
      </motion.div>
    </div>
  );
}

// Resolve copy that may be static text or a function of the user's prior answers.
function resolveText(
  value: string | ((answers: Record<string, string>) => string) | undefined,
  answers: Record<string, string>,
): string {
  if (!value) return "";
  return typeof value === "function" ? value(answers) : value;
}

// Resolve a question step's options from a prior answer when it declares a dependency.
function resolveQuestionStep(
  step: Extract<QuizStepType, { kind: "question" }>,
  answers: Record<string, string>,
): Extract<QuizStepType, { kind: "question" }> {
  if (step.optionsByAnswer && step.dependsOn) {
    const dep = answers[step.dependsOn];
    const dynamic = dep ? step.optionsByAnswer[dep] : undefined;
    if (dynamic) return { ...step, options: dynamic };
  }
  return step;
}

function QuestionStep({
  step,
  answers,
  selected,
  onSelect,
}: {
  step: Extract<QuizStepType, { kind: "question" }>;
  answers: Record<string, string>;
  selected?: string;
  onSelect: (value: string) => void;
}) {
  const isGrid = step.layout === "grid";
  const subtitle = resolveText(step.subtitle, answers);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold font-heading text-[hsl(var(--text))] tracking-tight mb-2">
        {step.question}
      </h1>
      {subtitle && <p className="text-[hsl(var(--text-muted))] text-base mb-6">{subtitle}</p>}
      {isGrid && step.options.every((opt) => opt.image) ? (
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {step.options.map((opt) => {
            const isSelected = selected === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => onSelect(opt.value)}
                className={`group relative overflow-hidden rounded-2xl border-2 text-left transition-all active:scale-[0.98] ${
                  isSelected
                    ? "border-[hsl(var(--accent))] ring-2 ring-[hsl(var(--accent))/0.35]"
                    : "border-[hsl(var(--border))] hover:border-[hsl(var(--accent))/0.5]"
                }`}
              >
                <div className="aspect-square w-full overflow-hidden bg-[hsl(var(--surface-2))]">
                  <img
                    src={opt.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`p-3 md:p-4 ${
                    isSelected ? "bg-[hsl(var(--accent))]" : "bg-[hsl(var(--surface))]"
                  }`}
                >
                  <p
                    className={`font-semibold text-sm md:text-base leading-snug ${
                      isSelected ? "text-white" : "text-[hsl(var(--text))]"
                    }`}
                  >
                    {opt.label}
                  </p>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[hsl(var(--accent))] border-2 border-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <div className={isGrid ? "grid grid-cols-2 gap-3" : "grid gap-3"}>
          {step.options.map((opt) => {
            const isSelected = selected === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => onSelect(opt.value)}
                className={`group flex items-center gap-4 p-4 md:p-5 rounded-2xl border-2 text-left transition-all active:scale-[0.99] ${
                  isSelected
                    ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.08]"
                    : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] hover:border-[hsl(var(--accent))/0.5]"
                }`}
              >
                {opt.image ? (
                  <img src={opt.image} alt="" aria-hidden="true" className="w-12 h-12 object-contain shrink-0 drop-shadow-sm" />
                ) : opt.emoji ? (
                  <span className="text-2xl shrink-0">{opt.emoji}</span>
                ) : null}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[hsl(var(--text))] text-base md:text-lg leading-tight">{opt.label}</p>
                  {opt.description && <p className="text-sm text-[hsl(var(--text-muted))]">{opt.description}</p>}
                </div>
                {!isGrid && (
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                      isSelected
                        ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))]"
                        : "border-[hsl(var(--border))] group-hover:border-[hsl(var(--accent))/0.5]"
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ScaleStep({
  step,
  selected,
  onSelect,
}: {
  step: Extract<QuizStepType, { kind: "scale" }>;
  selected?: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--accent))] mb-3">{step.question}</p>
      <div className="os-card p-6 mb-6">
        <p className="text-xl md:text-2xl font-semibold font-heading text-[hsl(var(--text))] leading-snug">
          {step.statement}
        </p>
      </div>
      <div className="grid gap-3">
        {step.options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`flex items-center justify-between gap-4 px-5 py-5 md:py-6 rounded-2xl border-2 text-left transition-all active:scale-[0.99] ${
                isSelected
                  ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.08]"
                  : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] hover:border-[hsl(var(--accent))/0.5]"
              }`}
            >
              <span className="font-semibold text-base md:text-lg text-[hsl(var(--text))]">{opt.label}</span>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                  isSelected ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))]" : "border-[hsl(var(--border))]"
                }`}
              >
                {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function InterstitialStep({
  step,
  onContinue,
}: {
  step: Extract<QuizStepType, { kind: "interstitial" }>;
  onContinue: () => void;
}) {
  if (!step.image) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 py-12">
        {step.stat && (
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))]">
              {step.stat}
            </span>
            {step.statLabel && (
              <span className="text-[hsl(var(--text-muted))] uppercase tracking-widest text-sm font-bold mt-2">
                {step.statLabel}
              </span>
            )}
          </div>
        )}
        <h2 className="text-3xl font-bold font-heading text-[hsl(var(--text))]">{step.title}</h2>
        <p className="text-[hsl(var(--text-muted))] text-lg max-w-md">{step.body}</p>
        <button
          onClick={onContinue}
          className="mt-4 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all hover:-translate-y-0.5"
        >
          Continue <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col justify-center py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start gap-5">
          {step.stat && (
            <div className="flex flex-col items-center md:items-start">
              <span className="text-5xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))]">
                {step.stat}
              </span>
              {step.statLabel && (
                <span className="text-[hsl(var(--text-muted))] uppercase tracking-widest text-sm font-bold mt-2">
                  {step.statLabel}
                </span>
              )}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[hsl(var(--text))] leading-tight">
            {step.title}
          </h2>
          <p className="text-[hsl(var(--text-muted))] text-lg max-w-md">{step.body}</p>
          <button
            onClick={onContinue}
            className="mt-2 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all hover:-translate-y-0.5"
          >
            Continue <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={step.image}
            alt=""
            aria-hidden="true"
            className="w-full aspect-[3/4] max-h-[440px] object-cover rounded-3xl shadow-[0_20px_50px_hsl(var(--accent)/0.15)]"
          />
        </div>
      </div>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? "text-amber-400 fill-amber-400" : "text-[hsl(var(--border))]"}`} />
      ))}
    </div>
  );
}

function TestimonialStep({
  step,
  onContinue,
}: {
  step: Extract<QuizStepType, { kind: "testimonial" }>;
  onContinue: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 py-10">
      <img
        src={step.avatar}
        alt={step.name}
        className="w-24 h-24 rounded-full object-cover border-2 border-[hsl(var(--accent))/0.4] shadow-[0_0_30px_hsl(var(--accent)/0.25)]"
      />
      <Stars count={step.rating} />
      <p className="text-xl md:text-2xl font-medium font-heading text-[hsl(var(--text))] leading-snug max-w-lg">
        &ldquo;{step.quote}&rdquo;
      </p>
      <div>
        <p className="font-bold text-[hsl(var(--text))]">{step.name}</p>
        <p className="text-sm text-[hsl(var(--text-muted))]">{step.role}</p>
      </div>
      <button
        onClick={onContinue}
        className="mt-2 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all hover:-translate-y-0.5"
      >
        Continue <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function CommitmentStep({
  step,
  onContinue,
}: {
  step: Extract<QuizStepType, { kind: "commitment" }>;
  onContinue: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 py-10">
      <motion.img
        src={coachCelebrateImg}
        alt=""
        aria-hidden="true"
        className="w-32 h-32 object-contain drop-shadow-[0_0_40px_hsl(var(--accent)/0.45)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
      />
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-[hsl(var(--text))] max-w-lg">{step.title}</h2>
      <p className="text-[hsl(var(--text-muted))] text-lg max-w-md">{step.body}</p>
      <button
        onClick={onContinue}
        className="mt-2 bg-[hsl(var(--text))] text-[hsl(var(--bg))] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-[1.02] transition-transform"
      >
        {step.confirmLabel} <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

const BUILDING_ITEMS = [
  "Analyzing your goals",
  "Matching AI tools to your field",
  "Sequencing your 28 daily missions",
  "Calibrating difficulty to your level",
];

function BuildingDonut() {
  const DURATION = 2400;
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const r = 62;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct / 100);

  return (
    <div className="relative w-40 h-40">
      <svg viewBox="0 0 160 160" className="w-40 h-40 -rotate-90">
        <defs>
          <linearGradient id="donutStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--accent-2))" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r={r} fill="none" stroke="hsl(var(--surface-2))" strokeWidth="12" />
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="url(#donutStroke)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        <motion.img
          src={coachImg}
          alt=""
          aria-hidden="true"
          className="w-10 h-10 object-contain drop-shadow-[0_0_16px_hsl(var(--accent)/0.5)]"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-2xl font-bold font-heading text-[hsl(var(--text))] tabular-nums">{pct}%</span>
      </div>
    </div>
  );
}

function BuildingChecklist() {
  const [done, setDone] = useState(0);
  useEffect(() => {
    const timers = BUILDING_ITEMS.map((_, i) =>
      setTimeout(() => setDone((d) => Math.max(d, i + 1)), 520 * (i + 1)),
    );
    return () => timers.forEach(clearTimeout);
  }, []);
  return (
    <ul className="mt-6 space-y-3 text-left inline-block">
      {BUILDING_ITEMS.map((item, i) => (
        <li key={item} className="flex items-center gap-3">
          {i < done ? (
            <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent-2))]" />
          ) : (
            <Loader2 className="w-5 h-5 text-[hsl(var(--text-muted))] animate-spin" />
          )}
          <span className={i < done ? "text-[hsl(var(--text))]" : "text-[hsl(var(--text-muted))]"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectedGraph() {
  return (
    <div className="w-full max-w-lg os-card p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">
          Your projected AI confidence
        </p>
        <span className="text-xs font-bold text-[hsl(var(--accent-2))]">28-day plan</span>
      </div>
      <div className="relative">
        <svg viewBox="0 0 320 160" className="w-full h-40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--accent-2))" />
            </linearGradient>
          </defs>
          {[40, 80, 120].map((y) => (
            <line key={y} x1="8" y1={y} x2="312" y2={y} stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 6" />
          ))}
          <motion.path
            d="M10,142 C 70,138 110,120 160,86 S 250,34 310,20 L 310,150 L 10,150 Z"
            fill="url(#areaFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          />
          <motion.path
            d="M10,142 C 70,138 110,120 160,86 S 250,34 310,20"
            fill="none"
            stroke="url(#lineStroke)"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          />
          <motion.circle
            cx="310"
            cy="20"
            r="5"
            fill="hsl(var(--accent-2))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 300 }}
          />
        </svg>
        <div className="flex justify-between text-xs text-[hsl(var(--text-muted))] mt-2 px-1">
          <span>Today</span>
          <span>Day 14</span>
          <span>Day 28</span>
        </div>
      </div>
    </div>
  );
}

function RevealStep({
  program,
  answers,
  onStart,
}: {
  program: OnboardingProgram | null;
  answers: Record<string, string>;
  onStart: () => void;
}) {
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

  const hasHighlights = personalHighlights.length > 0 || (program?.highlights?.length ?? 0) > 0;

  return (
    <div className="flex flex-col items-center text-center gap-6 py-4">
      <img src={coachCelebrateImg} alt="" aria-hidden="true" className="w-24 h-24 object-contain" />
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent-2))/0.1] text-[hsl(var(--accent-2))] font-bold text-sm tracking-wider uppercase">
        <CheckCircle2 className="w-4 h-4" /> Your program is ready
      </div>
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-[hsl(var(--text))] tracking-tight max-w-xl">
        {program?.programTitle ?? "Your Personalized AI Mastery Program"}
      </h1>
      {program?.programFocus && <p className="text-xl text-[hsl(var(--text-muted))] max-w-lg">{program.programFocus}</p>}
      {motivationLine && (
        <p className="text-base md:text-lg font-semibold text-[hsl(var(--accent))] max-w-lg">{motivationLine}</p>
      )}

      <ProjectedGraph />

      <div className="w-full max-w-lg grid sm:grid-cols-3 gap-4 my-2">
        <StatCard icon={<Target className="w-5 h-5" />} value="28" label="daily missions" />
        <StatCard icon={<Clock className="w-5 h-5" />} value={dailyMinutes ? `${dailyMinutes}m` : "20m"} label="per day" />
        <StatCard icon={<Zap className="w-5 h-5" />} value="AI-graded" label="feedback" />
      </div>

      {hasHighlights && (
        <div className="w-full max-w-lg text-left os-card p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--text-muted))] mb-4">What you'll master</p>
          <ul className="space-y-3">
            {personalHighlights.map((h, i) => (
              <li key={`personal-${i}`} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent-2))] mt-0.5 flex-shrink-0" />
                <span className="font-semibold text-[hsl(var(--text))]">{h}</span>
              </li>
            ))}
            {program?.highlights?.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                <span className="text-[hsl(var(--text))]">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="w-full max-w-lg grid gap-3 sm:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="os-card p-4 text-left flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-[hsl(var(--text))] truncate">{t.name}</p>
                <Stars count={t.rating} />
              </div>
            </div>
            <p className="text-xs text-[hsl(var(--text-muted))] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-lg rounded-2xl border border-[hsl(var(--accent))/0.3] bg-[hsl(var(--accent))/0.06] p-5 text-left flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-[hsl(var(--accent))] flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-bold text-[hsl(var(--text))]">Lifetime access to all 28 days.</p>
          <p className="text-sm text-[hsl(var(--text-muted))]">See your plan and pricing, then create your account to start today.</p>
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full max-w-lg bg-[hsl(var(--text))] text-[hsl(var(--bg))] px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
      >
        See My Plan & Pricing <ArrowRight className="w-5 h-5" />
      </button>
      <Link href="/sign-in" className="text-sm text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]">
        Already have an account? Sign in
      </Link>
    </div>
  );
}

function EmailStep({
  initialEmail,
  onContinue,
}: {
  initialEmail: string;
  onContinue: (email: string) => void;
}) {
  const [value, setValue] = useState(initialEmail);
  const [touched, setTouched] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (valid) onContinue(value.trim());
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 py-10">
      <img src={coachCelebrateImg} alt="" aria-hidden="true" className="w-20 h-20 object-contain" />
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent-2))/0.1] text-[hsl(var(--accent-2))] font-bold text-sm tracking-wider uppercase">
        <CheckCircle2 className="w-4 h-4" /> Your results are ready
      </div>
      <div className="max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-[hsl(var(--text))] tracking-tight mb-3">
          Where should we send your results?
        </h1>
        <p className="text-[hsl(var(--text-muted))]">
          Enter your email to unlock your personalized summary and save your 28-day plan.
        </p>
      </div>
      <form onSubmit={submit} className="w-full max-w-md flex flex-col gap-3 text-left">
        <div className="relative">
          <Mail className="w-5 h-5 text-[hsl(var(--text-muted))] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="you@email.com"
            aria-label="Email address"
            aria-invalid={touched && !valid}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-[hsl(var(--text))] placeholder:text-[hsl(var(--text-muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
          />
        </div>
        {touched && !valid && (
          <p className="text-sm text-[hsl(var(--danger,0_72%_51%))] px-1">Please enter a valid email address.</p>
        )}
        <button
          type="submit"
          className="w-full bg-[hsl(var(--text))] text-[hsl(var(--bg))] px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          Show my results <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-xs text-[hsl(var(--text-muted))] text-center px-2">
          We'll only use this to send your plan. No spam, unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}

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
  const experience = answers.experience;
  const skill = (experience && SKILL_LEVELS[experience]) || SKILL_LEVELS.some;
  const focus = (answers.goal && FOCUS_PHRASE[answers.goal]) || "Building real AI skills";
  const learning = (experience && LEARNING_PHRASE[experience]) || "Self-taught so far";
  const pace = answers.time ? `${answers.time} min a day` : "10 min a day";

  const rows = [
    { icon: <Target className="w-5 h-5" />, label: "Your focus", value: focus },
    { icon: <Star className="w-5 h-5" />, label: "Your readiness", value: "Open to a guided approach" },
    { icon: <Clock className="w-5 h-5" />, label: "Your pace", value: pace },
    { icon: <BookOpen className="w-5 h-5" />, label: "Learning experience", value: learning },
  ];

  return (
    <div className="flex-1 flex flex-col items-center gap-6 py-4">
      <div className="w-full max-w-lg os-card p-6 sm:p-8 text-center">
        <h1 className="text-3xl font-bold font-heading text-[hsl(var(--text))] tracking-tight">
          Your Personal Summary
        </h1>
        <p className="text-[hsl(var(--text-muted))] mt-2 max-w-md mx-auto">
          The quiz indicates that your biggest blocker is the lack of a clear roadmap, not your ability.
        </p>

        <div className="mt-6 rounded-2xl bg-[hsl(var(--surface-2))] p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">AI Skills</p>
          <p className="text-4xl md:text-5xl font-bold font-heading text-[hsl(var(--text))] my-2 leading-tight">
            {skill.label}
          </p>
          <div className="relative mt-5">
            <div className="h-2.5 rounded-full overflow-hidden flex">
              <div className="flex-1 bg-[hsl(0_72%_58%)]" />
              <div className="flex-1 bg-[hsl(38_92%_55%)]" />
              <div className="flex-1 bg-[hsl(142_60%_45%)]" />
            </div>
            <motion.div
              className="absolute -top-1 w-4 h-4 rounded-full bg-[hsl(var(--text))] border-2 border-[hsl(var(--surface))] shadow-md"
              initial={{ left: "0%" }}
              animate={{ left: `${skill.pos}%` }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 16 }}
              style={{ marginLeft: "-8px" }}
            />
            <div className="flex justify-between text-xs text-[hsl(var(--text-muted))] mt-2">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>
        </div>

        <ul className="mt-6 space-y-4 text-left">
          {rows.map((row) => (
            <li key={row.label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] flex items-center justify-center flex-shrink-0">
                {row.icon}
              </div>
              <div>
                <p className="text-sm text-[hsl(var(--text-muted))]">{row.label}</p>
                <p className="font-bold text-[hsl(var(--text))]">{row.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ContinueButton onClick={onContinue} />
    </div>
  );
}

function CertificateStep({ onContinue }: { onContinue: () => void }) {
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
    <div className="flex-1 flex flex-col items-center gap-6 py-4">
      <div className="w-full max-w-lg os-card p-6 sm:p-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold font-heading text-[hsl(var(--text))] tracking-tight">
          Your Personalized AI Certificate Program
        </h1>
        <p className="text-[hsl(var(--text-muted))] mt-2">
          We expect you to earn your AI Certificate
        </p>
        <p className="font-bold text-[hsl(var(--text))] underline decoration-[hsl(var(--accent))] underline-offset-4">
          by {earnBy}
        </p>

        {/* Character portraits with floating result badges */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="relative flex justify-center">
            <img src={compareWithoutImg} alt="Struggling without Upskil OS" className="h-28 w-auto object-contain" />
            <span className="absolute top-1 right-2 rotate-6 rounded-full bg-[hsl(0_72%_52%)] text-white text-[11px] font-bold px-2 py-0.5 shadow-md">
              −35%
            </span>
            <span className="absolute bottom-1 left-3 -rotate-6 rounded-full bg-[hsl(0_72%_52%)] text-white text-[11px] font-bold px-2 py-0.5 shadow-md">
              stuck
            </span>
          </div>
          <div className="relative flex justify-center">
            <img src={compareWithImg} alt="Thriving with Upskil OS" className="h-28 w-auto object-contain" />
            <span className="absolute top-1 left-2 -rotate-6 rounded-full bg-[hsl(142_60%_40%)] text-white text-[11px] font-bold px-2 py-0.5 shadow-md">
              +72%
            </span>
            <span className="absolute bottom-1 right-3 rotate-6 rounded-full bg-[hsl(142_60%_40%)] text-white text-[11px] font-bold px-2 py-0.5 shadow-md">
              +35%
            </span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 text-left">
          <div className="rounded-2xl bg-[hsl(0_72%_58%)/0.08] border border-[hsl(0_72%_58%)/0.25] p-4">
            <p className="text-sm text-[hsl(var(--text-muted))]">You without</p>
            <p className="font-bold text-[hsl(var(--text))] mb-3">Upskil OS</p>
            <p className="text-sm font-bold text-[hsl(var(--text))] mb-2">Struggles:</p>
            <ul className="space-y-3">
              {struggles.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-[hsl(var(--text-muted))]">
                  <X className="w-4 h-4 text-[hsl(0_72%_52%)] mt-0.5 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[hsl(142_60%_45%)/0.08] border border-[hsl(142_60%_45%)/0.25] p-4">
            <p className="text-sm text-[hsl(var(--text-muted))]">You with</p>
            <p className="font-bold text-[hsl(var(--text))] mb-3">Upskil OS</p>
            <p className="text-sm font-bold text-[hsl(var(--text))] mb-2">Solutions:</p>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-[hsl(var(--text))]">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(142_60%_40%)] mt-0.5 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ContinueButton onClick={onContinue} />
    </div>
  );
}

function EasierStep({ onContinue }: { onContinue: () => void }) {
  const promises = [
    <>Master AI tools to <strong className="text-[hsl(var(--text))]">build practical AI skills and confidence</strong></>,
    <>Access the world's top AI tools: <strong className="text-[hsl(var(--text))]">ChatGPT, Gemini, Grok and more</strong> — all in one place</>,
    <><strong className="text-[hsl(var(--text))]">Get an AI Certificate</strong> and stand out from people who still struggle with AI</>,
    <>Unlock <strong className="text-[hsl(var(--text))]">1000+ proven AI prompts</strong> for productivity, business, and creativity</>,
    <>Progress tracking to see your <strong className="text-[hsl(var(--text))]">growth and build confidence</strong> with each lesson</>,
    <>…and much more!</>,
  ];

  return (
    <div className="flex-1 flex flex-col items-center gap-6 py-4">
      <div className="w-full max-w-lg os-card p-6 sm:p-8">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold font-heading text-[hsl(var(--text))] tracking-tight">
            AI is Easier Than You Think
          </h1>
          <p className="text-[hsl(var(--text-muted))] mt-2 max-w-md mx-auto">
            Our certificate program is designed to make a difference in your AI knowledge from day one.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {[
            "No prior AI knowledge is required",
            "No need for a university degree",
            "Work at your own pace and terms",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-3 rounded-2xl bg-[hsl(var(--accent))/0.06] border border-[hsl(var(--accent))/0.15] px-4 py-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[hsl(142_60%_45%)] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-[hsl(var(--text))]">{badge}</span>
            </div>
          ))}
        </div>

        <p className="text-lg font-bold font-heading text-[hsl(var(--text))] mt-6 mb-3">
          Try Upskil OS and you will:
        </p>
        <ul className="space-y-3">
          {promises.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-[hsl(var(--text-muted))]">
              <span className="mt-1 flex-shrink-0">
                <span className="block w-4 h-4 rounded-full border-2 border-[hsl(var(--accent))]" />
              </span>
              <span className="text-sm leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <ContinueButton onClick={onContinue} />
    </div>
  );
}

function ContinueButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-lg bg-[hsl(var(--text))] text-[hsl(var(--bg))] px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
    >
      Continue <ArrowRight className="w-5 h-5" />
    </button>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="os-card p-4 flex flex-col items-center gap-1">
      <div className="text-[hsl(var(--accent))]">{icon}</div>
      <span className="text-2xl font-bold font-heading text-[hsl(var(--text))]">{value}</span>
      <span className="text-xs text-[hsl(var(--text-muted))] text-center">{label}</span>
    </div>
  );
}
