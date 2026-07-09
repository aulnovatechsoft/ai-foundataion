import type { CourseSeed } from "./types";
import { CHATGPT_DD_UNIT_1 } from "./chatgpt-dd-unit1";
import { CHATGPT_DD_UNIT_2 } from "./chatgpt-dd-unit2";
import { CHATGPT_DD_UNIT_3 } from "./chatgpt-dd-unit3";

export const CHATGPT_DEEP_DIVE_COURSE: CourseSeed = {
  slug: "chatgpt-deep-dive",
  title: "ChatGPT: Deep Dive",
  tagline: "Custom GPTs, agents, Codex and research — the power-user toolkit",
  description:
    "Go beyond everyday chat. Build Custom GPTs for real workflows, connect ChatGPT to your tools, delegate with Agent Mode, create cohesive visuals, automate with Codex, and run serious research and data analysis.",
  icon: "🧠",
  color: "#E0E7FF",
  accent: "#4F46E5",
  sortOrder: 2,
  units: [CHATGPT_DD_UNIT_1, CHATGPT_DD_UNIT_2, CHATGPT_DD_UNIT_3],
};
