import type { CourseSeed } from "./types";
import { AI_REAL_ESTATE_UNIT_1 } from "./ai-real-estate-unit1";
import { AI_REAL_ESTATE_UNIT_2 } from "./ai-real-estate-unit2";

export const AI_REAL_ESTATE_COURSE: CourseSeed = {
  slug: "ai-real-estate",
  title: "AI-Powered Real Estate",
  tagline: "Answer every lead in minutes, launch listings in an hour, and build a referral engine that runs itself",
  description:
    "A field-tested AI playbook for real estate agents: respond to every lead within minutes with templates in your voice, walk into consults over-prepared, launch complete listing campaigns in a single hour, run a marketing engine that builds your local brand, turn comps into pricing stories sellers believe, rehearse negotiations before they happen, and systematize contract-to-close and after-close follow-up — so every client becomes years of referrals. AI runs the machinery; you keep the judgment, the license, and the relationships.",
  icon: "🏠",
  color: "#D1FAE5",
  accent: "#059669",
  category: "use-case",
  sortOrder: 102,
  units: [
    AI_REAL_ESTATE_UNIT_1,
    AI_REAL_ESTATE_UNIT_2,
  ],
};
