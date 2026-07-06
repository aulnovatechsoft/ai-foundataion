import { pgTable, serial, text, integer, check } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const curriculumDays = pgTable("curriculum_days", {
  id: serial("id").primaryKey(),
  day: integer("day").notNull().unique(),
  title: text("title").notNull(),
  theme: text("theme").notNull(),
  lessonTitle: text("lesson_title").notNull(),
  lessonContent: text("lesson_content").notNull(),
  taskTitle: text("task_title").notNull(),
  taskDescription: text("task_description").notNull(),
  reflectionPrompt: text("reflection_prompt").notNull(),
  estimatedMinutes: integer("estimated_minutes").notNull().default(20),
  xpReward: integer("xp_reward").notNull().default(100),
  practicePrompt: text("practice_prompt"),
  audioUrl: text("audio_url"),
  audioDurationSec: integer("audio_duration_sec"),
  // Visual learning-path fields (see doc/LEARNING_EXPERIENCE_PLAN.md §7/§9).
  // level: 1-4 grouping (Days 1-7, 8-14, 15-21, 22-28).
  // nodeType: start | lesson | review | graduation — drives the node badge.
  // imageUrl: per-day illustration for the path medallion (nullable until art ships).
  level: integer("level").notNull().default(1),
  nodeType: text("node_type").notNull().default("lesson"),
  imageUrl: text("image_url"),
}, (table) => [
  check("curriculum_days_level_valid", sql`${table.level} BETWEEN 1 AND 4`),
  check(
    "curriculum_days_node_type_valid",
    sql`${table.nodeType} IN ('start', 'lesson', 'review', 'graduation')`,
  ),
]);

export const insertCurriculumDaySchema = createInsertSchema(curriculumDays).omit(
  { id: true },
);
export type InsertCurriculumDay = z.infer<typeof insertCurriculumDaySchema>;
export type CurriculumDay = typeof curriculumDays.$inferSelect;
