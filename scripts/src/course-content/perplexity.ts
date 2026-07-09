import type { CourseSeed } from "./types";
import { PERPLEXITY_UNIT_1 } from "./perplexity-unit1";
import { PERPLEXITY_UNIT_2 } from "./perplexity-unit2";
import { PERPLEXITY_UNIT_3 } from "./perplexity-unit3";

export const PERPLEXITY_COURSE: CourseSeed = {
  slug: "perplexity",
  title: "Perplexity",
  tagline: "Get cited answers, automate research and write better reports",
  description:
    "Master Perplexity from your first question to automated workflows — search modes, source filters, Spaces, the Comet assistant, connectors, and everyday use cases from news briefings to report writing.",
  icon: "🔎",
  color: "#CFFAFE",
  accent: "#0891B2",
  sortOrder: 9,
  units: [PERPLEXITY_UNIT_1, PERPLEXITY_UNIT_2, PERPLEXITY_UNIT_3],
};
