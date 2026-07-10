import type { CourseSeed } from "./types";
import { AI_BUSINESS_OPS_UNIT_1 } from "./ai-business-ops-unit1";

export const AI_BUSINESS_OPS_COURSE: CourseSeed = {
  slug: "ai-business-ops",
  title: "AI for Business Operations",
  tagline: "Lead with AI — orchestrate intelligence to make faster, sharper decisions across your whole operation",
  description:
    "AI isn't here to replace your leadership — it's here to amplify it. This course shows you how to shift from directing tasks to orchestrating intelligence: mapping exactly where AI fits your role, then putting it to work across the operation. You'll get competitive intelligence in minutes, read your business data without being an analyst, stress-test strategy with scenario planning, turn meetings into tracked action, craft presentations that persuade, and communicate with impact. You'll finish by leading AI adoption responsibly — with the accountability, data protection, and governance that make it sustainable and trustworthy for your whole team.",
  icon: "🧭",
  color: "#CCFBF1",
  accent: "#0D9488",
  category: "use-case",
  sortOrder: 106,
  units: [
    AI_BUSINESS_OPS_UNIT_1,
  ],
};
