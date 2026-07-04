import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
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
});

export const insertCurriculumDaySchema = createInsertSchema(curriculumDays).omit(
  { id: true },
);
export type InsertCurriculumDay = z.infer<typeof insertCurriculumDaySchema>;
export type CurriculumDay = typeof curriculumDays.$inferSelect;
