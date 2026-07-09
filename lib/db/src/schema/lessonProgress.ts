import {
  pgTable,
  serial,
  integer,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

import { courseLessons } from "./courses";
import { users } from "./users";

/** Per-user completion of tool-course lessons. */
export const lessonProgress = pgTable(
  "lesson_progress",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonId: integer("lesson_id")
      .notNull()
      .references(() => courseLessons.id, { onDelete: "cascade" }),
    completedAt: timestamp("completed_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [unique("lesson_progress_user_lesson_unq").on(t.userId, t.lessonId)],
);

/** Per-user "I tried it in the real tool" marks — independent of completion. */
export const lessonTries = pgTable(
  "lesson_tries",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonId: integer("lesson_id")
      .notNull()
      .references(() => courseLessons.id, { onDelete: "cascade" }),
    triedAt: timestamp("tried_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [unique("lesson_tries_user_lesson_unq").on(t.userId, t.lessonId)],
);

export type LessonTry = typeof lessonTries.$inferSelect;

export const insertLessonProgressSchema = createInsertSchema(
  lessonProgress,
).omit({ id: true, completedAt: true });
export type InsertLessonProgress = z.infer<typeof insertLessonProgressSchema>;
export type LessonProgress = typeof lessonProgress.$inferSelect;
