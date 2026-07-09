import {
  db,
  pool,
  courses,
  courseUnits,
  courseLessons,
} from "@workspace/db";

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
];

async function seed() {
  console.log("Seeding tool courses…");
  // Full reseed: cascades clear course_units, course_lessons and lesson_progress.
  await db.delete(courses);

  for (const c of ALL_COURSES) {
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
