/**
 * Client mirror of the server's daily-pace rules (api-server/src/lib/pace.ts).
 * The learner picks a daily time budget (10 / 20 / 40 min) during onboarding;
 * pace controls which sections are REQUIRED to finish a day. The server is the
 * source of truth for completion — this mirror only drives UI labels/gating so
 * the two never disagree.
 */
export type DayPace = 10 | 20 | 40;

export type PaceSection =
  | "lessonCompleted"
  | "taskCompleted"
  | "quizCompleted"
  | "reflectionCompleted";

export function normalizePace(minutes: number | null | undefined): DayPace {
  if (minutes === 10) return 10;
  if (minutes === 40) return 40;
  return 20;
}

export function requiredSections(pace: DayPace): Set<PaceSection> {
  if (pace === 10) return new Set(["lessonCompleted", "quizCompleted"]);
  return new Set([
    "lessonCompleted",
    "taskCompleted",
    "quizCompleted",
    "reflectionCompleted",
  ]);
}

export function isRequired(pace: DayPace, section: PaceSection): boolean {
  return requiredSections(pace).has(section);
}

export const PACE_LABEL: Record<DayPace, string> = {
  10: "Core pace · ~10 min",
  20: "Standard pace · ~20 min",
  40: "Deep pace · ~40 min",
};

export const PACE_SUMMARY: Record<DayPace, string> = {
  10: "Lesson + quiz are all you need today. Task, reflection and practice are optional bonuses.",
  20: "Lesson, task, quiz and reflection make up your day. Practice is a bonus.",
  40: "Lesson, task, quiz and reflection — plus the practice exercise and audio deep dive to go further.",
};

/** Fisher–Yates shuffle returning a new array. */
export function shuffle<T>(arr: readonly T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
