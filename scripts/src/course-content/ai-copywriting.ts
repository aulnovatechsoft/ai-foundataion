import type { CourseSeed } from "./types";
import { AI_COPYWRITING_UNIT_1 } from "./ai-copywriting-unit1";
import { AI_COPYWRITING_UNIT_2 } from "./ai-copywriting-unit2";

export const AI_COPYWRITING_COURSE: CourseSeed = {
  slug: "ai-copywriting",
  title: "AI Copywriting",
  tagline: "Direct AI like a pro copywriter — from first brief to paying clients",
  description:
    "Become the strategist AI can't replace: master the brief-driven workflow that turns AI into a tireless junior writer, mine customer language for copy that converts, apply proven persuasion frameworks (PAS, AIDA, BAB), and run the edit-test-learn loop professionals use. Then apply the system across every format — headlines and SEO, landing pages, product pages, email and social, paid ads, and long-form content — and finish by packaging the skill into a positioned, productized copywriting business with your first clients.",
  icon: "✍️",
  color: "#FCE7F3",
  accent: "#DB2777",
  category: "use-case",
  sortOrder: 103,
  units: [
    AI_COPYWRITING_UNIT_1,
    AI_COPYWRITING_UNIT_2,
  ],
};
