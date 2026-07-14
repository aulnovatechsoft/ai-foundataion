import type { CourseSeed } from "./types";
import {
  SOCIAL_INFLUENCE_UNIT_1,
  SOCIAL_INFLUENCE_UNIT_2,
} from "./ai-social-influence-units";

export const AI_SOCIAL_INFLUENCE_COURSE: CourseSeed = {
  slug: "ai-social-influence",
  title: "AI Social Influence & Blogging",
  tagline: "Build a real audience — with AI as your behind-the-scenes team",
  description:
    "You're starting a blog and social presence from zero — and this course walks you through the whole journey. Learn what actually makes influencers succeed (hint: it's not follower count), choose between showing your face or building an AI avatar, craft a brand identity people remember, and create content consistently without burning out. Then graduate into growth: picking platforms, landing brand collaborations, reading your numbers honestly, and turning trust into income. Every lesson pairs real creator knowledge with an AI exercise, so you finish with a working influence system — not just inspiration.",
  icon: "✨",
  color: "#FCE7F3",
  accent: "#DB2777",
  category: "use-case",
  sortOrder: 111,
  units: [SOCIAL_INFLUENCE_UNIT_1, SOCIAL_INFLUENCE_UNIT_2],
};
