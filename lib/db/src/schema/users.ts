import {
  pgTable,
  serial,
  text,
  integer,
  date,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkUserId: text("clerk_user_id").notNull().unique(),
  email: text("email"),
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  currentDay: integer("current_day").notNull().default(1),
  xp: integer("xp").notNull().default(0),
  level: integer("level").notNull().default(1),
  streakCount: integer("streak_count").notNull().default(0),
  streakFreezes: integer("streak_freezes").notNull().default(0),
  weeklyXp: integer("weekly_xp").notNull().default(0),
  weekStartDate: date("week_start_date", { mode: "string" }),
  isPublicProfile: boolean("is_public_profile").notNull().default(false),
  hideFromLeaderboard: boolean("hide_from_leaderboard").notNull().default(false),
  anonymousMode: boolean("anonymous_mode").notNull().default(false),
  emailRemindersEnabled: boolean("email_reminders_enabled")
    .notNull()
    .default(true),
  lastActiveDate: date("last_active_date", { mode: "string" }),
  theme: text("theme").notNull().default("daylight"),
  // Entitlement / paywall
  hasPaid: boolean("has_paid").notNull().default(false),
  paidAt: timestamp("paid_at", { withTimezone: true }),
  isGrandfathered: boolean("is_grandfathered").notNull().default(false),
  // Post-payment certificate onboarding (Coursiv-style wizard)
  certificateName: text("certificate_name"),
  certOnboardingDone: boolean("cert_onboarding_done").notNull().default(false),
  activeCourseSlug: text("active_course_slug"),
  // Personalization / onboarding funnel
  onboardingCompleted: boolean("onboarding_completed").notNull().default(false),
  onboardingAnswers: jsonb("onboarding_answers").$type<Record<string, string>>(),
  workContext: text("work_context"),
  programTitle: text("program_title"),
  programFocus: text("program_focus"),
  dailyMinutes: integer("daily_minutes").notNull().default(20),
  field: text("field"),
  experienceLevel: text("experience_level"),
  goal: text("goal"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
