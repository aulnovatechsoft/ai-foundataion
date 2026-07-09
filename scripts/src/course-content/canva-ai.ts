import type { CourseSeed } from "./types";
import { CANVA_UNIT_1 } from "./canva-unit1";
import { CANVA_UNIT_2 } from "./canva-unit2";

export const CANVA_AI_COURSE: CourseSeed = {
  slug: "canva-ai",
  title: "Canva AI",
  tagline: "Design, write and build interactive content with Magic Studio",
  description:
    "Master Canva's AI toolkit end to end — Magic Design, video and motion generation, Magic Write, and Canva Code — then apply it to real design, marketing and sales workflows.",
  icon: "🎨",
  color: "#EDE9FE",
  accent: "#7C3AED",
  sortOrder: 7,
  units: [CANVA_UNIT_1, CANVA_UNIT_2],
};
