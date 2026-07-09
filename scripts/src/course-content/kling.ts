import type { CourseSeed } from "./types";
import { KLING_UNIT_1 } from "./kling-unit1";
import { KLING_UNIT_2 } from "./kling-unit2";
import { KLING_UNIT_3 } from "./kling-unit3";

export const KLING_COURSE: CourseSeed = {
  slug: "kling",
  title: "Kling",
  tagline: "Turn ideas into cinematic AI video, images and avatars",
  description:
    "Master Kling AI from first prompt to professional practice — image and video generation, camera control, AI avatars, and real workflows for filmmakers, marketers and educators.",
  icon: "🎬",
  color: "#DBEAFE",
  accent: "#2563EB",
  sortOrder: 6,
  units: [KLING_UNIT_1, KLING_UNIT_2, KLING_UNIT_3],
};
