import type { CourseSeed } from "./types";
import {
  PERF_MARKETING_UNIT_1,
  PERF_MARKETING_UNIT_2,
  PERF_MARKETING_UNIT_3,
  PERF_MARKETING_UNIT_4,
} from "./ai-performance-marketing-units";

export const AI_PERFORMANCE_MARKETING_COURSE: CourseSeed = {
  slug: "ai-performance-marketing",
  title: "AI Performance Marketing",
  tagline: "Run paid campaigns that pay for themselves — with AI as your analyst",
  description:
    "Learn performance marketing the hands-on way: you've just been hired as the performance marketing manager at TechFlow, a B2B SaaS startup — and this course is your first 90 days. Master the metrics that matter (CPC, CPA, ROAS), run smarter Google Ads with layered targeting, build social campaigns where creative is the new targeting, and graduate into testing, attribution, and fraud prevention. Every lesson pairs real campaign knowledge with an AI exercise, so you finish with a complete, AI-powered paid marketing system — not just theory.",
  icon: "📈",
  color: "#FEF3C7",
  accent: "#D97706",
  category: "use-case",
  sortOrder: 110,
  units: [
    PERF_MARKETING_UNIT_1,
    PERF_MARKETING_UNIT_2,
    PERF_MARKETING_UNIT_3,
    PERF_MARKETING_UNIT_4,
  ],
};
