// One-time, idempotent backfill: grandfather every user who existed BEFORE the
// paywall launched so pre-launch users keep full free access to all 28 days.
//
// Entitlement is `hasPaid || isGrandfathered` (see api-server/src/lib/entitlement.ts).
// New users signing up on/after the launch cutoff are NOT grandfathered and must
// pay to unlock Days 2-28.
//
// Safe to run repeatedly: it only flips rows created strictly before the cutoff
// that are not already grandfathered. Runs automatically from scripts/post-merge.sh.
import pg from "pg";

const { Pool } = pg;

// Paywall launch cutoff (UTC). Any user row created before this instant predates
// the paywall and is grandfathered in.
const LAUNCH_CUTOFF = "2026-07-03T00:00:00Z";

// Mirror the connection resolution used by drizzle.config.ts and the runtime
// db client (lib/db/src/index.ts): prefer the external Postgres, fall back to
// DATABASE_URL. Using DATABASE_URL alone points at the wrong (empty) database.
function resolveConnectionString() {
  const { EXTERNAL_PG_HOST, EXTERNAL_PG_PORT, EXTERNAL_PG_USER, EXTERNAL_PG_PASSWORD_2, EXTERNAL_PG_DATABASE } =
    process.env;
  if (EXTERNAL_PG_HOST && EXTERNAL_PG_USER && EXTERNAL_PG_PASSWORD_2 && EXTERNAL_PG_DATABASE) {
    const port = EXTERNAL_PG_PORT || "5432";
    return `postgresql://${encodeURIComponent(EXTERNAL_PG_USER)}:${encodeURIComponent(EXTERNAL_PG_PASSWORD_2)}@${EXTERNAL_PG_HOST}:${port}/${EXTERNAL_PG_DATABASE}?sslmode=no-verify`;
  }
  if (!process.env.DATABASE_URL) {
    throw new Error("Set EXTERNAL_PG_* or DATABASE_URL to run the grandfather backfill.");
  }
  return process.env.DATABASE_URL;
}

const pool = new Pool({ connectionString: resolveConnectionString() });

try {
  const { rowCount } = await pool.query(
    `UPDATE users
        SET is_grandfathered = true,
            updated_at = now()
      WHERE is_grandfathered = false
        AND created_at < $1`,
    [LAUNCH_CUTOFF],
  );
  console.log(
    `[grandfather-backfill] cutoff=${LAUNCH_CUTOFF} grandfathered ${rowCount} pre-launch user(s).`,
  );
} finally {
  await pool.end();
}
