/**
 * Lightweight personalization applied on top of the shared curriculum. Rather
 * than authoring hundreds of per-day variants, we surface a reusable "apply it
 * to your field" lens plus an experience-level nudge. These map to the values
 * captured during onboarding (see lib/quiz.ts: `field` + `experience`).
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
