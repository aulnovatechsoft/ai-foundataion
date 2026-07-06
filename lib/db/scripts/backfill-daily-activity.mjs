// One-time, idempotent backfill of the daily_activity log (the truthful source
// for the weekly Mon–Sun streak row). Seeds one row per real calendar day a
// user was active, derived from existing signals:
//   - day_progress.completed_at (days a step was completed)
//   - users.last_active_date   (last recorded active day)
// Safe to run repeatedly: ON CONFLICT DO NOTHING skips existing rows.
import pg from "pg";

const { Pool } = pg;

function resolveConnectionString() {
  const { EXTERNAL_PG_HOST, EXTERNAL_PG_PORT, EXTERNAL_PG_USER, EXTERNAL_PG_PASSWORD_2, EXTERNAL_PG_DATABASE } =
    process.env;
  if (EXTERNAL_PG_HOST && EXTERNAL_PG_USER && EXTERNAL_PG_PASSWORD_2 && EXTERNAL_PG_DATABASE) {
    const port = EXTERNAL_PG_PORT || "5432";
    return `postgresql://${encodeURIComponent(EXTERNAL_PG_USER)}:${encodeURIComponent(EXTERNAL_PG_PASSWORD_2)}@${EXTERNAL_PG_HOST}:${port}/${EXTERNAL_PG_DATABASE}?sslmode=no-verify`;
  }
  if (!process.env.DATABASE_URL) {
    throw new Error("Set EXTERNAL_PG_* or DATABASE_URL to run the daily-activity backfill.");
  }
  return process.env.DATABASE_URL;
}

const pool = new Pool({ connectionString: resolveConnectionString() });

try {
  const { rowCount } = await pool.query(
    `INSERT INTO daily_activity (user_id, activity_date)
     SELECT user_id, DATE(completed_at) FROM day_progress WHERE completed_at IS NOT NULL
     UNION
     SELECT id, last_active_date FROM users WHERE last_active_date IS NOT NULL
     ON CONFLICT (user_id, activity_date) DO NOTHING`,
  );
  const { rows } = await pool.query(
    `SELECT COUNT(*)::int AS rows, COUNT(DISTINCT user_id)::int AS users FROM daily_activity`,
  );
  console.log(`[backfill-daily-activity] inserted ${rowCount} new rows; total ${rows[0].rows} rows across ${rows[0].users} users.`);
} finally {
  await pool.end();
}
