import type { CourseSeed } from "./types";
import { CLAUDE_CODE_LESSONS_A } from "./claude-code-lessons-a";
import { CLAUDE_CODE_LESSONS_B } from "./claude-code-lessons-b";

export const CLAUDE_CODE_COURSE: CourseSeed = {
  slug: "claude-code",
  title: "Claude Code",
  tagline: "Describe what you want and watch real websites and apps get built",
  description:
    "Learn Claude Code without writing a line of code — build and publish a real website, grow it into an app, connect your everyday tools, install plugins, and set up routines that run themselves.",
  icon: "🛠️",
  color: "#FFEDD5",
  accent: "#EA580C",
  sortOrder: 10,
  units: [
    {
      title: "Claude Code",
      lessons: [...CLAUDE_CODE_LESSONS_A, ...CLAUDE_CODE_LESSONS_B],
    },
  ],
};
