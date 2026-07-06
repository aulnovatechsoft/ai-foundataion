import { getSelectedLabel } from "./quiz";

/**
 * Lightweight personalization applied on top of the shared curriculum. Rather
 * than authoring hundreds of per-day variants, we surface a reusable "apply it
 * to your field" lens plus an experience-level nudge. These map to the values
 * captured during onboarding (see lib/quiz.ts QUIZ_STEPS: `field` + `experience`).
 */
export interface FieldLens {
  label: string;
  lens: string;
}

export const FIELD_LENSES: Record<string, FieldLens> = {
  marketing: {
    label: "Marketing & content",
    lens: "As you work through today, aim it at your marketing: campaigns, copy, audience research, and content that converts.",
  },
  engineering: {
    label: "Engineering & data",
    lens: "As you work through today, aim it at your engineering: code, data analysis, debugging, and technical documentation.",
  },
  design: {
    label: "Design & creative",
    lens: "As you work through today, aim it at your design work: ideation, visual concepts, briefs, and creative direction.",
  },
  operations: {
    label: "Operations & admin",
    lens: "As you work through today, aim it at your operations: process, docs, planning, and cutting busywork.",
  },
  sales: {
    label: "Sales & outreach",
    lens: "As you work through today, aim it at your sales: outreach, personalization, follow-ups, and closing.",
  },
  other: {
    label: "your work",
    lens: "As you work through today, pick one real task from your week and apply each idea directly to it.",
  },
};

export function fieldLens(field: string | null | undefined): FieldLens | null {
  if (!field) return null;
  return FIELD_LENSES[field] ?? FIELD_LENSES.other;
}

export interface ExperienceNote {
  tone: "beginner" | "advanced";
  text: string;
}

export function experienceNote(
  level: string | null | undefined,
): ExperienceNote | null {
  if (level === "beginner") {
    return {
      tone: "beginner",
      text: "New to AI? Take it slow — reread anything unclear and try the examples yourself. There's no rush.",
    };
  }
  if (level === "advanced") {
    return {
      tone: "advanced",
      text: "Already confident? Skim the basics and push yourself on the task and practice exercise to go deeper.",
    };
  }
  return null;
}

/**
 * The last day (inclusive) that counts as the learner's "first week", where
 * missions are biased toward their stated first-win focus.
 */
export const FIRST_WEEK_THROUGH_DAY = 7;

export interface FirstWinFocus {
  /** Human label of the learner's chosen first win (help_first). */
  helpLabel: string;
  /** Human label of the first-week result they want (week_result), if chosen. */
  resultLabel: string | null;
}

/**
 * Derive the learner's first-win focus from their raw onboarding answers so the
 * first week's missions (days 1..FIRST_WEEK_THROUGH_DAY) visibly relate to what
 * they said they wanted help with first. Reuses the quiz's own option-label
 * resolver so the copy always matches what the learner actually picked.
 *
 * Returns null when `help_first` was never answered, so callers fall back
 * gracefully to the un-personalized view.
 */
export function firstWinFocus(
  answers: Record<string, string> | null | undefined,
): FirstWinFocus | null {
  if (!answers) return null;
  const helpLabel = getSelectedLabel("help_first", answers);
  if (!helpLabel) return null;
  return {
    helpLabel,
    resultLabel: getSelectedLabel("week_result", answers),
  };
}
