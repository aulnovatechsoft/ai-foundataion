export type OnboardingAnswers = Record<string, string>;

export interface OnboardingProgram {
  programTitle: string;
  programFocus: string;
  workContext: string | null;
  highlights: string[];
  estimatedWeeks: number;
  /**
   * How the first week's missions are biased toward the learner's stated
   * first-win focus (help_first) and first-week result (week_result). Null when
   * neither answer is present, so callers can fall back gracefully.
   */
  firstWeekFocus: string | null;
}

const GOAL_TITLES: Record<string, string> = {
  career: "AI Career Accelerator",
  business: "AI for Business Builders",
  productivity: "AI Productivity Mastery",
  curiosity: "AI Foundations Explorer",
};

const FIELD_LABELS: Record<string, string> = {
  marketing: "marketing",
  engineering: "engineering",
  design: "design",
  operations: "operations",
  sales: "sales",
  other: "your field",
};

const WORK_CONTEXT_LABELS: Record<string, string> = {
  company: "your role at work",
  self: "your own business",
  student: "your studies",
  exploring: "your next chapter",
};

const EXPERIENCE_HIGHLIGHT: Record<string, string> = {
  beginner: "Starts from zero — no prior AI experience needed",
  some: "Skips the basics and builds on what you already know",
  advanced: "Pushes past fundamentals into advanced, real-world workflows",
};

const TIME_HIGHLIGHT: Record<string, string> = {
  "10": "Bite-sized daily sessions — about 10 minutes a day",
  "20": "Focused daily lessons — about 20 minutes a day",
  "40": "Deep daily practice — about 40 minutes a day",
};

/**
 * The learner's chosen "first win" (help_first) mapped to a short focus phrase
 * used to theme the opening missions. Values mirror the `help_first` options in
 * the web quiz (lib/quiz.ts) across all of its answer-dependent branches.
 */
const HELP_FIRST_FOCUS: Record<string, string> = {
  writing: "sharper writing and communication",
  research: "faster research and analysis",
  automation: "automating your repetitive work",
  creative: "creative and design work",
  code: "coding and data tasks",
  interviews: "interview and review prep",
  skills: "building in-demand skills",
  marketing: "creating marketing content",
  customers: "winning and serving customers",
  numbers: "making sense of your numbers",
  organize: "organizing your day",
  basics: "understanding how AI really works",
  prompts: "practical, reusable prompts",
  project: "shipping a small first project",
};

/**
 * The learner's chosen first-week result (week_result) grouped into a handful of
 * outcome phrases. week_result has many answer-dependent values, so rather than
 * mapping each one we bucket them by the outcome they express. Falls back to a
 * generic first-week-win phrase for anything unrecognized.
 */
const WEEK_RESULT_OUTCOME_SETS: { keys: string[]; phrase: string }[] = [
  {
    keys: ["faster", "minutes", "hours", "halftime", "prep", "daily", "time"],
    phrase: "save real time in your first week",
  },
  {
    keys: [
      "library",
      "cheatsheet",
      "summary",
      "dashboard",
      "portfolio",
      "batch",
      "script",
      "reuse",
      "flow",
      "process",
      "works",
      "workflow",
    ],
    phrase: "build a reusable asset you keep using",
  },
  {
    keys: [
      "confidence",
      "confident",
      "ontop",
      "incontrol",
      "keepgoing",
      "buildmore",
      "get",
      "first",
      "habit",
      "proud",
    ],
    phrase: "feel genuinely confident",
  },
  {
    keys: [
      "impress",
      "win",
      "proof",
      "standout",
      "message",
      "replies",
      "followup",
      "trends",
      "decide",
      "control",
      "planned",
      "applied",
      "mock",
      "ideas",
      "share",
      "story",
      "tough",
      "onetask",
      "datatask",
      "debug",
      "ship",
      "show",
      "shipcode",
    ],
    phrase: "produce a real result you can show off",
  },
];

function weekResultOutcome(value: string | undefined): string | null {
  if (!value) return null;
  const set = WEEK_RESULT_OUTCOME_SETS.find((s) => s.keys.includes(value));
  return set?.phrase ?? "reach a concrete first-week win";
}

/**
 * Deterministically map quiz answers to a personalized 28-day program.
 * Robust to missing/unknown answer keys — always returns a sensible program.
 */
export function computeProgram(answers: OnboardingAnswers): OnboardingProgram {
  const goal = answers.goal ?? "curiosity";
  const field = answers.field ?? "other";
  const experience = answers.experience ?? "beginner";
  const time = answers.time ?? "20";
  const workContext = answers.work_context ?? null;

  const programTitle = GOAL_TITLES[goal] ?? GOAL_TITLES.curiosity;
  const fieldLabel = FIELD_LABELS[field] ?? FIELD_LABELS.other;
  const contextLabel = workContext
    ? WORK_CONTEXT_LABELS[workContext] ?? "your goals"
    : "your goals";

  // Bias the opening of the program toward the learner's stated first win.
  const helpFocus = answers.help_first
    ? HELP_FIRST_FOCUS[answers.help_first] ?? null
    : null;
  const weekOutcome = weekResultOutcome(answers.week_result);

  let firstWeekFocus: string | null = null;
  if (helpFocus) {
    firstWeekFocus = weekOutcome
      ? `Your first week zeroes in on ${helpFocus} so you ${weekOutcome}.`
      : `Your first week zeroes in on ${helpFocus}.`;
  } else if (weekOutcome) {
    firstWeekFocus = `Your first week is built so you ${weekOutcome}.`;
  }

  const programFocus = helpFocus
    ? `A 28-day plan that starts with ${helpFocus} for ${contextLabel}, then builds AI mastery across ${fieldLabel}.`
    : `A 28-day plan tuned for ${contextLabel}, applying AI directly to ${fieldLabel}.`;

  const highlights: string[] = [];
  if (firstWeekFocus) {
    highlights.push(
      weekOutcome && helpFocus
        ? `Week one is aimed at ${helpFocus} so you ${weekOutcome}`
        : firstWeekFocus.replace(/\.$/, ""),
    );
  }
  highlights.push(
    EXPERIENCE_HIGHLIGHT[experience] ?? EXPERIENCE_HIGHLIGHT.beginner,
    TIME_HIGHLIGHT[time] ?? TIME_HIGHLIGHT["20"],
    `Hands-on tasks and AI feedback tailored to ${fieldLabel}`,
    "Build a portfolio-ready AI project by Day 28",
  );

  return {
    programTitle,
    programFocus,
    workContext,
    highlights,
    estimatedWeeks: 4,
    firstWeekFocus,
  };
}
