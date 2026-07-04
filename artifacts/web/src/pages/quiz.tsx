import { useState, useEffect } from "react";
import { Redirect, useLocation, Link } from "wouter";
import { Show } from "@clerk/react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ArrowLeft, Loader2, CheckCircle2, Target, Clock, Zap, Star } from "lucide-react";
import { usePreviewOnboarding } from "@workspace/api-client-react";
import type { OnboardingProgram } from "@workspace/api-client-react";
import { QUIZ_STEPS, TESTIMONIALS, ONBOARDING_STORAGE_KEY } from "@/lib/quiz";
import coachImg from "@/assets/onboarding/coach.png";
import coachCelebrateImg from "@/assets/onboarding/coach-celebrate.png";

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

const TOTAL_SCREENS = QUIZ_STEPS.length + 2; // + building + reveal

function QuizFlow() {
  const [, setLocation] = useLocation();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<"quiz" | "building" | "reveal">("quiz");
  const [program, setProgram] = useState<OnboardingProgram | null>(null);

  const previewOnboarding = usePreviewOnboarding();

  const step = QUIZ_STEPS[stepIndex];

  const screenNum =
    phase === "quiz" ? stepIndex + 1 : phase === "building" ? QUIZ_STEPS.length + 1 : TOTAL_SCREENS;
  const progressPct = Math.round((screenNum / TOTAL_SCREENS) * 100);

  const goNext = () => {
    if (stepIndex < QUIZ_STEPS.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      finishQuiz();
    }
  };

  const goBack = () => {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  };

  const selectOption = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setTimeout(goNext, 240);
  };

  const finishQuiz = () => {
    setPhase("building");
    previewOnboarding.mutate(
      { data: { answers } },
      {
        onSuccess: (data) => {
          setProgram(data);
          setTimeout(() => setPhase("reveal"), 2600);
        },
        onError: () => {
          setTimeout(() => setPhase("reveal"), 2600);
        },
      },
    );
  };

  const startProgram = () => {
    try {
      localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify({ answers }));
    } catch {
      // ignore storage failures — onboarding can be redone in-app
    }
    setLocation("/sign-up");
  };

  const showCoach = phase === "quiz" && (step.kind === "question" || step.kind === "scale");

  return (
    <div className="min-h-screen bg-[hsl(var(--bg))] flex flex-col font-sans">
      {/* Top bar with progress */}
      <header className="sticky top-0 z-50 bg-[hsl(var(--surface))/0.85] backdrop-blur-xl border-b border-[hsl(var(--border))]">
        <div className="max-w-2xl mx-auto px-6 h-16 flex items-center gap-4">
          {phase === "quiz" && stepIndex > 0 && (
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
          <span className="text-xs font-bold text-[hsl(var(--text-muted))] tabular-nums w-12 text-right">
            {screenNum} / {TOTAL_SCREENS}
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-2xl w-full mx-auto px-6 py-8">
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
              {showCoach && "coachLine" in step && step.coachLine && (
                <CoachBubble line={step.coachLine} />
              )}
              {step.kind === "question" ? (
                <QuestionStep step={step} selected={answers[step.id]} onSelect={(v) => selectOption(step.id, v)} />
              ) : step.kind === "scale" ? (
                <ScaleStep step={step} selected={answers[step.id]} onSelect={(v) => selectOption(step.id, v)} />
              ) : step.kind === "testimonial" ? (
                <TestimonialStep step={step} onContinue={goNext} />
              ) : step.kind === "commitment" ? (
                <CommitmentStep step={step} onContinue={goNext} />
              ) : (
                <InterstitialStep step={step} onContinue={goNext} />
              )}
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
              <motion.img
                src={coachImg}
                alt=""
                aria-hidden="true"
                className="w-28 h-28 object-contain drop-shadow-[0_0_40px_hsl(var(--accent)/0.5)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div>
                <h2 className="text-3xl font-bold font-heading text-[hsl(var(--text))] mb-3">
                  Nova is building your program…
                </h2>
                <BuildingChecklist />
              </div>
            </motion.div>
          )}

          {phase === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col"
            >
              <RevealStep program={program} dailyMinutes={answers.time} onStart={startProgram} />
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
      <img src={coachImg} alt="" aria-hidden="true" className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0" />
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

function QuestionStep({
  step,
  selected,
  onSelect,
}: {
  step: Extract<QuizStepType, { kind: "question" }>;
  selected?: string;
  onSelect: (value: string) => void;
}) {
  const isGrid = step.layout === "grid";
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold font-heading text-[hsl(var(--text))] tracking-tight mb-2">
        {step.question}
      </h1>
      {step.subtitle && <p className="text-[hsl(var(--text-muted))] text-base mb-6">{step.subtitle}</p>}
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
      <div className="grid gap-2.5">
        {step.options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`flex items-center justify-between px-5 py-4 rounded-xl border-2 text-left transition-all active:scale-[0.99] ${
                isSelected
                  ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.08]"
                  : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] hover:border-[hsl(var(--accent))/0.5]"
              }`}
            >
              <span className="font-semibold text-[hsl(var(--text))]">{opt.label}</span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                  isSelected ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))]" : "border-[hsl(var(--border))]"
                }`}
              >
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
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
  dailyMinutes,
  onStart,
}: {
  program: OnboardingProgram | null;
  dailyMinutes?: string;
  onStart: () => void;
}) {
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

      <ProjectedGraph />

      <div className="w-full max-w-lg grid sm:grid-cols-3 gap-4 my-2">
        <StatCard icon={<Target className="w-5 h-5" />} value="28" label="daily missions" />
        <StatCard icon={<Clock className="w-5 h-5" />} value={dailyMinutes ? `${dailyMinutes}m` : "20m"} label="per day" />
        <StatCard icon={<Zap className="w-5 h-5" />} value="AI-graded" label="feedback" />
      </div>

      {program?.highlights && program.highlights.length > 0 && (
        <div className="w-full max-w-lg text-left os-card p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--text-muted))] mb-4">What you'll master</p>
          <ul className="space-y-3">
            {program.highlights.map((h, i) => (
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
          <p className="font-bold text-[hsl(var(--text))]">Day 1 is on us — free.</p>
          <p className="text-sm text-[hsl(var(--text-muted))]">Create your account to start your first mission right now.</p>
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full max-w-lg bg-[hsl(var(--text))] text-[hsl(var(--bg))] px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
      >
        Start Day 1 Free <ArrowRight className="w-5 h-5" />
      </button>
      <Link href="/sign-in" className="text-sm text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]">
        Already have an account? Sign in
      </Link>
    </div>
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
