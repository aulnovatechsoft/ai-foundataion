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

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set to run the grandfather backfill.");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

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
