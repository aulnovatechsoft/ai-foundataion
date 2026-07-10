import type { CourseSeed } from "./types";
import { AI_DESIGN_UNIT_1 } from "./ai-design-unit1";
import { AI_DESIGN_UNIT_2 } from "./ai-design-unit2";

export const AI_DESIGN_COURSE: CourseSeed = {
  slug: "ai-design",
  title: "AI in Design",
  tagline: "Close the gap between the idea in your head and visuals that look professional",
  description:
    "Turn AI into your design department: learn which tool fits which job (generation, editing, layout), master the four-part prompt with constraints, and lock your visual direction with AI-built moodboards. Then produce real assets — a complete brand identity, rescued and enhanced images, a social graphics system, UI screens from wireframe to mockup — and level up with structured AI critique and iteration. Finish with a documented end-to-end design workflow you can run for your own projects or sell as a service.",
  icon: "🎨",
  color: "#EDE9FE",
  accent: "#7C3AED",
  category: "use-case",
  sortOrder: 104,
  units: [
    AI_DESIGN_UNIT_1,
    AI_DESIGN_UNIT_2,
  ],
};
