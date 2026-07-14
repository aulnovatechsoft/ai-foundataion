import type { CourseSeed } from "./types";
import { AI_SALES_UNIT_1 } from "./ai-sales-unit1";

export const AI_SALES_COURSE: CourseSeed = {
  slug: "ai-sales",
  title: "Boost Your Sales with AI",
  tagline: "Reclaim 6+ hours a week and spend them on what actually closes deals",
  description:
    "A practical AI playbook for sales professionals: write outreach and follow-up emails in 60 seconds instead of 15 minutes, find and qualify the prospects most likely to buy, run follow-up sequences that never let a deal slip through the cracks, walk into every objection prepared with frameworks you can adapt live, let a chatbot handle routine questions while you sleep, and turn your own sales calls into a personal coaching engine. AI handles the busy work; you keep the relationships, the negotiations, and the close.",
  icon: "📈",
  color: "#DBEAFE",
  accent: "#2563EB",
  category: "use-case",
  sortOrder: 107,
  units: [AI_SALES_UNIT_1],
};
