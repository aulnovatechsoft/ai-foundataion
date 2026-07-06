import type { DayProgress } from "@workspace/api-client-react";

export type LevelMeta = {
  level: number;
  name: string;
  accent: string;
  accent2: string;
};

/** The four learning-path levels, in order. Days 1-7 / 8-14 / 15-21 / 22-28. */
export const LEVELS: LevelMeta[] = [
  { level: 1, name: "Foundations", accent: "#6366f1", accent2: "#3b82f6" },
  { level: 2, name: "Prompt Mastery", accent: "#a855f7", accent2: "#d946ef" },
  { level: 3, name: "Tools & Automation", accent: "#14b8a6", accent2: "#06b6d4" },
  { level: 4, name: "Build & Ship", accent: "#f59e0b", accent2: "#fbbf24" },
];

/** Number of the four daily steps completed for a day (0-4). */
export function stepsDone(p?: DayProgress): number {
  if (!p) return 0;
  return (
    (p.lessonCompleted ? 1 : 0) +
    (p.taskCompleted ? 1 : 0) +
    (p.quizCompleted ? 1 : 0) +
    (p.reflectionCompleted ? 1 : 0)
  );
}
