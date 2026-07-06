import {
  pgTable,
  serial,
  integer,
  date,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

import { users } from "./users";

/**
 * One row per calendar day a user was active (any progress step completed).
 * This is the truthful source for the weekly Mon–Sun streak row — the users
 * table only stores a single `lastActiveDate`, which cannot represent a 7-day
 * history. Written idempotently (unique on user_id + activity_date).
 */
export const dailyActivity = pgTable(
  "daily_activity",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    activityDate: date("activity_date", { mode: "string" }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    unique("daily_activity_user_date_unq").on(t.userId, t.activityDate),
  ],
);

export const insertDailyActivitySchema = createInsertSchema(dailyActivity).omit({
  id: true,
  createdAt: true,
});
export type InsertDailyActivity = z.infer<typeof insertDailyActivitySchema>;
export type DailyActivity = typeof dailyActivity.$inferSelect;
