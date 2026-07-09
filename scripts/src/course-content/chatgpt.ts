import type { CourseSeed } from "./types";
import { CHATGPT_UNIT_1 } from "./chatgpt-unit1";
import { CHATGPT_UNIT_2 } from "./chatgpt-unit2";
import { CHATGPT_UNIT_3 } from "./chatgpt-unit3";
import { CHATGPT_UNIT_4 } from "./chatgpt-unit4";

export const CHATGPT_COURSE: CourseSeed = {
  slug: "chatgpt",
  title: "ChatGPT",
  tagline: "Master the world's most popular AI assistant",
  description:
    "Go from casual user to power user. Learn every ChatGPT mode, feature and workflow — writing, analysis, voice, images and custom GPTs — then apply it all to real life: productivity, communication, research, planning, finances and content creation.",
  icon: "🟢",
  color: "#DCFCE7",
  accent: "#16A34A",
  sortOrder: 1,
  units: [CHATGPT_UNIT_1, CHATGPT_UNIT_2, CHATGPT_UNIT_3, CHATGPT_UNIT_4],
};
