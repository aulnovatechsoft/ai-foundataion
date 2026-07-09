import type { CourseSeed } from "./types";
import { CLAUDE_UNIT_1 } from "./claude-unit1";
import { CLAUDE_UNIT_2 } from "./claude-unit2";
import { CLAUDE_UNIT_3 } from "./claude-unit3";

export const CLAUDE_COURSE: CourseSeed = {
  slug: "claude",
  title: "Claude",
  tagline: "The thoughtful AI for deep work and long documents",
  description:
    "Learn Claude's strengths — careful reasoning, Projects, Artifacts and long-document mastery — how to prompt it well, and when to reach for it over other tools.",
  icon: "🟠",
  color: "#FFEDD5",
  accent: "#EA580C",
  sortOrder: 3,
  units: [CLAUDE_UNIT_1, CLAUDE_UNIT_2, CLAUDE_UNIT_3],
};
