import {
  db,
  pool,
  courses,
  courseUnits,
  courseLessons,
  eq,
} from "@workspace/db";

import { AI_ACCOUNTANT_COURSE } from "./course-content/ai-accountant";
import { AI_BUSINESS_OPS_COURSE } from "./course-content/ai-business-ops";
import { AI_COPYWRITING_COURSE } from "./course-content/ai-copywriting";
import { AI_DESIGN_COURSE } from "./course-content/ai-design";
import { AI_PORTFOLIO_COURSE } from "./course-content/ai-portfolio";
import { AI_REAL_ESTATE_COURSE } from "./course-content/ai-real-estate";
import { CANVA_AI_COURSE } from "./course-content/canva-ai";
import { CHATGPT_COURSE } from "./course-content/chatgpt";
import { CHATGPT_DEEP_DIVE_COURSE } from "./course-content/chatgpt-deep-dive";
import { CLAUDE_COURSE } from "./course-content/claude";
import { CLAUDE_CODE_COURSE } from "./course-content/claude-code";
import { GEMINI_COURSE } from "./course-content/gemini";
import { KLING_COURSE } from "./course-content/kling";
import { LOVABLE_COURSE } from "./course-content/lovable";
import { MIDJOURNEY_COURSE } from "./course-content/midjourney";
import { PERPLEXITY_COURSE } from "./course-content/perplexity";
import { PERSONAL_FINANCE_COURSE } from "./course-content/personal-finance";
import { communicatingWithAiCourse } from "./course-content/communicating-with-ai";
import { LESSON_QUESTIONS } from "./course-content/questions";
import type { CourseSeed } from "./course-content/types";

const ALL_COURSES: CourseSeed[] = [
  CHATGPT_COURSE,
  CHATGPT_DEEP_DIVE_COURSE,
  CLAUDE_COURSE,
  GEMINI_COURSE,
  MIDJOURNEY_COURSE,
  KLING_COURSE,
  CANVA_AI_COURSE,
  LOVABLE_COURSE,
  PERPLEXITY_COURSE,
  CLAUDE_CODE_COURSE,
  communicatingWithAiCourse,
  PERSONAL_FINANCE_COURSE,
  AI_ACCOUNTANT_COURSE,
  AI_REAL_ESTATE_COURSE,
  AI_COPYWRITING_COURSE,
  AI_DESIGN_COURSE,
  AI_PORTFOLIO_COURSE,
  AI_BUSINESS_OPS_COURSE,
];

async function seed() {
  // Optional slug filter: `pnpm run seed-courses <slug>` reseeds only that
  // course, leaving all other courses (and user progress on them) untouched.
  const onlySlug = process.argv[2];
  const toSeed = onlySlug
    ? ALL_COURSES.filter((c) => c.slug === onlySlug)
    : ALL_COURSES;
  if (onlySlug && toSeed.length === 0) {
    throw new Error(`No course seed found for slug "${onlySlug}"`);
  }

  console.log(
    onlySlug ? `Seeding course "${onlySlug}"…` : "Seeding tool courses…",
  );
  // Reseed: cascades clear course_units, course_lessons and lesson_progress
  // for the affected course(s).
  if (onlySlug) {
    await db.delete(courses).where(eq(courses.slug, onlySlug));
  } else {
    await db.delete(courses);
  }

  for (const c of toSeed) {
    const [course] = await db
      .insert(courses)
      .values({
        slug: c.slug,
        title: c.title,
        tagline: c.tagline,
        description: c.description,
        icon: c.icon,
        color: c.color,
        accent: c.accent,
        category: c.category ?? "tool",
        sortOrder: c.sortOrder,
      })
      .returning();

    let lessonOrder = 0;
    for (const [unitIdx, u] of c.units.entries()) {
      const [unit] = await db
        .insert(courseUnits)
        .values({ courseId: course.id, title: u.title, sortOrder: unitIdx })
        .returning();

      for (const l of u.lessons) {
        lessonOrder += 1;
        let steps = l.steps;
        if (!steps) {
          const question = LESSON_QUESTIONS[`${c.slug}::${l.title}`];
          if (!question) {
            throw new Error(`Missing question for ${c.slug}::${l.title}`);
          }
          steps = [{ html: l.content, question }];
        }
        await db.insert(courseLessons).values({
          courseId: course.id,
          unitId: unit.id,
          title: l.title,
          summary: l.summary,
          content: l.content,
          estimatedMinutes: l.estimatedMinutes ?? 10,
          sortOrder: lessonOrder,
          imageUrl: `/lesson-art/${c.slug}-${lessonOrder}.png`,
          tryIt: l.tryIt ?? null,
          steps,
        });
      }
    }
    console.log(
      `  ${c.title}: ${c.units.length} units, ${lessonOrder} lessons`,
    );
  }
  console.log("Done.");
}

seed()
  .then(() => pool.end())
  .catch((err) => {
    console.error(err);
    return pool.end().finally(() => process.exit(1));
  });
