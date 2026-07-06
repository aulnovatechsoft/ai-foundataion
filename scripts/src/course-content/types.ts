export interface StepQuestionSeed {
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonStepSeed {
  html: string;
  question?: StepQuestionSeed;
}

export interface LessonSeed {
  title: string;
  summary: string;
  content: string;
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
  sortOrder: number;
  units: UnitSeed[];
}
