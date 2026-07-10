import type { CourseSeed } from "./types";
import { PERSONAL_FINANCE_UNIT_1 } from "./personal-finance-unit1";
import { PERSONAL_FINANCE_UNIT_2 } from "./personal-finance-unit2";
import { PERSONAL_FINANCE_UNIT_3 } from "./personal-finance-unit3";

export const PERSONAL_FINANCE_COURSE: CourseSeed = {
  slug: "personal-finance",
  title: "Managing Personal Finances with AI",
  tagline: "Turn financial chaos into clarity, better decisions and confidence",
  description:
    "Use AI to finally understand your money. Organize scattered expenses, build a budget that fits your real life, compare financial options objectively, repay debt strategically, design savings plans that survive bad months, learn investment concepts jargon-free, and model big decisions before you make them — ending with a personal system for calm, confident financial decisions.",
  icon: "💰",
  color: "#FEF3C7",
  accent: "#D97706",
  category: "use-case",
  sortOrder: 100,
  units: [
    PERSONAL_FINANCE_UNIT_1,
    PERSONAL_FINANCE_UNIT_2,
    PERSONAL_FINANCE_UNIT_3,
  ],
};
