import type { CourseSeed } from "./types";
import { AI_MARKETING_UNIT_1 } from "./ai-marketing-unit1";

export const AI_MARKETING_COURSE: CourseSeed = {
  slug: "ai-marketing",
  title: "Marketing Your Business with AI",
  tagline: "Create professional marketing in minutes — no designer, no agency, no marketing degree",
  description:
    "A hands-on AI marketing playbook for business owners: discover what actually makes customers choose you, write copy that sells in your authentic voice, design scroll-stopping visuals without a designer, run a week of social media from one planning session, turn real customer questions into content that converts, read your numbers without drowning in dashboards, and leave with a complete 30-day marketing plan. You describe what you need, AI creates it, you refine and publish — that's the whole method.",
  icon: "📣",
  color: "#FFE4E6",
  accent: "#E11D48",
  category: "use-case",
  sortOrder: 108,
  units: [AI_MARKETING_UNIT_1],
};
