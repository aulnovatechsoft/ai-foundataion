import type { CourseSeed } from "./types";
import { geminiInteractiveUnit1 } from "./gemini-interactive-unit1";
import { geminiInteractiveUnit2 } from "./gemini-interactive-unit2";

export const GEMINI_COURSE: CourseSeed = {
  slug: "gemini",
  title: "Gemini",
  tagline: "Google's AI, wired into the tools you use every day",
  description:
    "Learn to use Google Gemini for everyday life and work — writing and editing in Gmail and Docs, fixing tech problems, creating images and audio ideas, taming long documents, and building reliable multi-step workflows with prompts and Gems.",
  icon: "🔷",
  color: "#EDE9FE",
  accent: "#7C3AED",
  sortOrder: 4,
  units: [geminiInteractiveUnit1, geminiInteractiveUnit2],
};
