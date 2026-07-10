export interface StepQuestionSeed {
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ChatTurnSeed {
  bot: string;
  ask?: string;
  inputType?: "choice" | "text" | "fill-blank" | "arrange" | "match" | "binary";
  options?: string[];
  correctIndex?: number;
  keywords?: string[];
  feedback?: string;
  hint?: string;
  /** fill-blank: sentence containing a ___ gap filled with an option chip */
  template?: string;
  /** arrange: words in correct order; UI shuffles them */
  words?: string[];
  /** match: pairs to connect; UI shuffles the right column */
  pairs?: { left: string; right: string }[];
  /**
   * multi-gap fill-blank: correct chip text for each ___ gap in template, in
   * order. When present, options is the chip pool (answers + distractors).
   */
  gapAnswers?: string[];
  /**
   * Simulated generation result: after a correct answer the UI plays a
   * "Generating…" animation, then shows this clip.
   */
  video?: { url: string; caption?: string };
}

export interface LessonStepSeed {
  html: string;
  question?: StepQuestionSeed;
  chat?: ChatTurnSeed[];
}

/** Real-world action step: copy-ready prompt + link to the actual tool. */
export interface TryItSeed {
  tool: string;
  url: string;
  prompt: string;
  note?: string;
}

export interface LessonSeed {
  title: string;
  summary: string;
  content: string;
  /** "Try it for real" closing card — copy-ready prompt for the real tool. */
  tryIt?: TryItSeed;
  /**
   * Optional hand-authored multi-step flow. When omitted, the seed builds a
   * single step from `content` plus the lesson's check-question.
   */
  steps?: LessonStepSeed[];
  estimatedMinutes?: number;
}

export interface UnitSeed {
  title: string;
  lessons: LessonSeed[];
}

export interface CourseSeed {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  accent: string;
  /** Dashboard grouping: "tool" (AI Tool Mastery) or "use-case" (AI Use Cases). */
  category?: "tool" | "use-case";
  sortOrder: number;
  units: UnitSeed[];
}
