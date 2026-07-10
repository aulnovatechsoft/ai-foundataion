import type { CourseSeed } from "./types";
import { AI_ACCOUNTANT_UNIT_1 } from "./ai-accountant-unit1";
import { AI_ACCOUNTANT_UNIT_2 } from "./ai-accountant-unit2";
import { AI_ACCOUNTANT_UNIT_3 } from "./ai-accountant-unit3";

export const AI_ACCOUNTANT_COURSE: CourseSeed = {
  slug: "ai-accountant",
  title: "AI for Accountants",
  tagline: "Automate the processing, keep the judgment — and move up the value chain",
  description:
    "A practical playbook for accountants: map exactly where AI fits in your weekly workflow, automate bookkeeping safely with exception-based review, analyze documents and research tax questions with verified citations, draft client communication in your own voice, explain variances, build three-scenario forecasts, and convert the reclaimed hours into premium advisory work — with professional judgment and accountability kept firmly in your hands.",
  icon: "🧮",
  color: "#DBEAFE",
  accent: "#2563EB",
  category: "use-case",
  sortOrder: 101,
  units: [
    AI_ACCOUNTANT_UNIT_1,
    AI_ACCOUNTANT_UNIT_2,
    AI_ACCOUNTANT_UNIT_3,
  ],
};
