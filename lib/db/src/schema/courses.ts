import { pgTable, serial, text, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

/**
 * Tool-based courses (ChatGPT, Claude, Gemini, Midjourney, …).
 * Each course is a standalone learning track that earns a named certificate.
 */
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(),
  // Visual identity for cards / pathway header.
  icon: text("icon").notNull(), // emoji or icon key
  color: text("color").notNull(), // pastel card background
  accent: text("accent").notNull(), // strong accent (buttons, rings)
  // Dashboard grouping: "tool" (AI Tool Mastery) or "use-case" (AI Use Cases).
  category: text("category").notNull().default("tool"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const courseUnits = pgTable("course_units", {
  id: serial("id").primaryKey(),
  courseId: integer("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const courseLessons = pgTable("course_lessons", {
  id: serial("id").primaryKey(),
  courseId: integer("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  unitId: integer("unit_id")
    .notNull()
    .references(() => courseUnits.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  summary: text("summary").notNull(), // one-liner under the node / popover
  content: text("content").notNull(), // lesson body (HTML)
  estimatedMinutes: integer("estimated_minutes").notNull().default(10),
  xpReward: integer("xp_reward").notNull().default(50),
  sortOrder: integer("sort_order").notNull().default(0),
  audioUrl: text("audio_url"),
  audioDurationSec: integer("audio_duration_sec"),
  imageUrl: text("image_url"), // lesson hero illustration (served from web /public)
  // Ordered feed steps: each step is a content block followed by an optional
  // check-question the learner must answer before the next step appears.
  // Real-world action step: copy-ready prompt + link to the actual tool.
  tryIt: jsonb("try_it").$type<{
    tool: string;
    url: string;
    prompt: string;
    note?: string;
  }>(),
  steps: jsonb("steps").$type<
    {
      html: string;
      question?: {
        text: string;
        options: string[];
        correctIndex: number;
        explanation: string;
      };
    }[]
  >(),
});

export const insertCourseSchema = createInsertSchema(courses).omit({ id: true });
export const insertCourseUnitSchema = createInsertSchema(courseUnits).omit({ id: true });
export const insertCourseLessonSchema = createInsertSchema(courseLessons).omit({ id: true });
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertCourseUnit = z.infer<typeof insertCourseUnitSchema>;
export type InsertCourseLesson = z.infer<typeof insertCourseLessonSchema>;
export type Course = typeof courses.$inferSelect;
export type CourseUnit = typeof courseUnits.$inferSelect;
export type CourseLesson = typeof courseLessons.$inferSelect;
