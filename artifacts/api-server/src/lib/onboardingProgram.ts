export type OnboardingAnswers = Record<string, string>;

export interface OnboardingProgram {
  programTitle: string;
  programFocus: string;
  workContext: string | null;
  highlights: string[];
  estimatedWeeks: number;
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

  const programFocus = `A 28-day plan tuned for ${contextLabel}, applying AI directly to ${fieldLabel}.`;

  const highlights = [
    EXPERIENCE_HIGHLIGHT[experience] ?? EXPERIENCE_HIGHLIGHT.beginner,
    TIME_HIGHLIGHT[time] ?? TIME_HIGHLIGHT["20"],
    `Hands-on tasks and AI feedback tailored to ${fieldLabel}`,
    "Build a portfolio-ready AI project by Day 28",
  ];

  return {
    programTitle,
    programFocus,
    workContext,
    highlights,
    estimatedWeeks: 4,
  };
}
