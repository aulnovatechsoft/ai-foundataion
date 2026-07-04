/**
 * Daily-pace personalization. The learner picks a daily time budget during
 * onboarding (10 / 20 / 40 minutes). Pace controls which sections are REQUIRED
 * to complete a day so the promise "we'll size your daily lessons to fit" is
 * actually honored:
 *
 *  - 10 min ("core"):     Lesson + Quiz
 *  - 20 min ("standard"): Lesson + Task + Quiz + Reflection
 *  - 40 min ("deep"):     Lesson + Task + Quiz + Reflection (+ Practice & audio
 *                         surfaced as encouraged deep-dive extras)
 *
 * Practice is never required for day completion at any pace — it is always a
 * bonus. Anything beyond a pace's required set is offered as optional depth.
 */
export type DayPace = 10 | 20 | 40;

export function normalizePace(minutes: number | null | undefined): DayPace {
  if (minutes === 10) return 10;
  if (minutes === 40) return 40;
  return 20;
}

export interface DayProgressSections {
  lessonCompleted: boolean;
  taskCompleted: boolean;
  quizCompleted: boolean;
  reflectionCompleted: boolean;
}

export type SectionKey = keyof DayProgressSections;

/** Sections that must be completed for the day to count as done, by pace. */
export function requiredSectionsForPace(pace: DayPace): SectionKey[] {
  if (pace === 10) return ["lessonCompleted", "quizCompleted"];
  return [
    "lessonCompleted",
    "taskCompleted",
    "quizCompleted",
    "reflectionCompleted",
  ];
}

/** True when every section required for the given pace is complete. */
export function dayComplete(p: DayProgressSections, pace: DayPace): boolean {
  return requiredSectionsForPace(pace).every((k) => p[k]);
}
