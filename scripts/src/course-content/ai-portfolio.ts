import type { CourseSeed } from "./types";
import { AI_PORTFOLIO_UNIT_1 } from "./ai-portfolio-unit1";

export const AI_PORTFOLIO_COURSE: CourseSeed = {
  slug: "ai-portfolio",
  title: "Build a Strong Portfolio with AI",
  tagline: "Go from a blank page to a live, professional portfolio — with AI handling the hard parts",
  description:
    "Stop staring at the blank page. This course uses AI to remove the hardest parts of portfolio building: it structures your outline, defines your visual identity, and helps you curate only your strongest work. Then you'll create polished visual assets, build the actual homepage with no code, write case study pages that win clients, and craft an about-and-contact experience that turns visitors into opportunities. Finish by optimizing for mobile and launching — with AI doing the technical work while your real achievements take center stage.",
  icon: "💼",
  color: "#E0E7FF",
  accent: "#4F46E5",
  category: "use-case",
  sortOrder: 105,
  units: [
    AI_PORTFOLIO_UNIT_1,
  ],
};
