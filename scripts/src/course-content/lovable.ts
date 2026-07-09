import type { CourseSeed } from "./types";
import { LOVABLE_LESSONS_A } from "./lovable-lessons-a";
import { LOVABLE_LESSONS_B } from "./lovable-lessons-b";

export const LOVABLE_COURSE: CourseSeed = {
  slug: "lovable",
  title: "Lovable",
  tagline: "Build real websites and apps by describing them in plain English",
  description:
    "Learn Lovable from your first prompt to a live published site — chat-based editing, design imports, integrations, website copy, and everyday projects like portfolios, booking pages and small business sites.",
  icon: "💜",
  color: "#FCE7F3",
  accent: "#DB2777",
  sortOrder: 8,
  units: [
    {
      title: "Lovable",
      lessons: [...LOVABLE_LESSONS_A, ...LOVABLE_LESSONS_B],
    },
  ],
};
