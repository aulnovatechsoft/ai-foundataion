import {
  pgTable,
  serial,
  integer,
  boolean,
  text,
  jsonb,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

import { users } from "./users";

export const dayProgress = pgTable(
  "day_progress",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    day: integer("day").notNull(),
    lessonCompleted: boolean("lesson_completed").notNull().default(false),
    practiceCompleted: boolean("practice_completed").notNull().default(false),
    practiceText: text("practice_text"),
    taskCompleted: boolean("task_completed").notNull().default(false),
    taskSubmission: text("task_submission"),
    taskScore: integer("task_score"),
    taskFeedback: jsonb("task_feedback").$type<{
      strengths: string[];
      improvements: string[];
      summary: string;
    }>(),
    quizCompleted: boolean("quiz_completed").notNull().default(false),
    quizScore: integer("quiz_score"),
    reflectionText: text("reflection_text"),
    reflectionCompleted: boolean("reflection_completed")
      .notNull()
      .default(false),
    completedAt: timestamp("completed_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [unique("day_progress_user_day_unq").on(t.userId, t.day)],
);

export const insertDayProgressSchema = createInsertSchema(dayProgress).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertDayProgress = z.infer<typeof insertDayProgressSchema>;
export type DayProgress = typeof dayProgress.$inferSelect;
