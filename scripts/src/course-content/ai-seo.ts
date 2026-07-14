import type { CourseSeed } from "./types";
import { AI_SEO_UNIT_1 } from "./ai-seo-unit1";

export const AI_SEO_COURSE: CourseSeed = {
  slug: "ai-seo",
  title: "AI for SEO",
  tagline: "Get found on Google — with AI doing the heavy lifting",
  description:
    "A practical SEO system for real businesses, powered by AI: understand how search engines actually rank pages, find keywords you can genuinely win, plan content that matches what searchers want, write pages that rank without sounding robotic, fix technical issues without a developer, build authority, win local searches, and read your results in plain English. Every lesson pairs the knowledge with a hands-on AI exercise — by the end, SEO stops being a mystery and becomes a repeatable weekly routine.",
  icon: "🔍",
  color: "#D1FAE5",
  accent: "#059669",
  category: "use-case",
  sortOrder: 109,
  units: [AI_SEO_UNIT_1],
};
