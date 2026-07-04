import { db } from "@workspace/db";
import { users } from "@workspace/db";
import { lt, gt, isNotNull } from "drizzle-orm";
import { logger } from "./logger";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = "Upskil OS <noreply@upskil.app>";

async function sendStreakReminderEmails() {
  if (!RESEND_API_KEY) {
    logger.info("RESEND_API_KEY not set — skipping streak reminder emails");
    return;
  }

  const todayStr = new Date().toISOString().split("T")[0];
  const threshold = new Date(Date.now() - 20 * 60 * 60 * 1000);

  try {
    const atRiskUsers = await db
      .select({
        id: users.id,
        email: users.email,
        displayName: users.displayName,
        streakCount: users.streakCount,
        currentDay: users.currentDay,
      })
      .from(users)
      .where(
        lt(users.lastActiveDate, todayStr),
      );

    for (const user of atRiskUsers) {
      if (!user.email || user.streakCount === 0) continue;

      const name = user.displayName ?? "there";
      const body = {
        from: FROM_EMAIL,
        to: [user.email],
        subject: `🔥 Don't break your ${user.streakCount}-day streak, ${name}!`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;background:#0f0f17;color:#e2e2f0;border-radius:16px">
            <h2 style="margin:0 0 8px;font-size:24px;color:#fff">Hey ${name},</h2>
            <p style="margin:0 0 20px;color:#a0a0b8;font-size:16px">
              You're on a <strong style="color:#f97316">${user.streakCount}-day streak</strong> in your AI mastery journey — don't let it slip today!
            </p>
            <p style="margin:0 0 24px;color:#a0a0b8;font-size:15px">
              Day ${user.currentDay} is waiting. It only takes a few minutes to keep your momentum going.
            </p>
            <a href="${process.env.APP_URL ?? "https://upskil.app"}/day/${user.currentDay}"
               style="display:inline-block;background:linear-gradient(135deg,#6d28d9,#a855f7);color:#fff;text-decoration:none;padding:14px 28px;border-radius:10px;font-weight:600;font-size:16px">
              Continue Day ${user.currentDay} →
            </a>
            <p style="margin:32px 0 0;color:#6b6b88;font-size:13px">
              Upskil OS · You're receiving this because you have an active streak.
            </p>
          </div>
        `,
      };

      try {
        const resp = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        if (!resp.ok) {
          logger.warn({ status: resp.status, userId: user.id }, "streak reminder email failed");
        } else {
          logger.info({ userId: user.id, streak: user.streakCount }, "sent streak reminder email");
        }
      } catch (err) {
        logger.warn({ err, userId: user.id }, "streak reminder email error");
      }
    }
  } catch (err) {
    logger.error({ err }, "streak reminder job failed");
  }
}

export function scheduleStreakReminders() {
  const EIGHT_PM = 20;
  const now = new Date();
  const nextRun = new Date(now);
  nextRun.setHours(EIGHT_PM, 0, 0, 0);
  if (nextRun <= now) nextRun.setDate(nextRun.getDate() + 1);

  const msUntilFirst = nextRun.getTime() - now.getTime();

  setTimeout(() => {
    sendStreakReminderEmails();
    setInterval(sendStreakReminderEmails, 24 * 60 * 60 * 1000);
  }, msUntilFirst);

  logger.info({ scheduledAt: nextRun.toISOString() }, "streak reminder scheduler armed");
}
