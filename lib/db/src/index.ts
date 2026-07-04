import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

function resolveConnectionString(): string {
  const { EXTERNAL_PG_HOST, EXTERNAL_PG_PORT, EXTERNAL_PG_USER, EXTERNAL_PG_PASSWORD_2, EXTERNAL_PG_DATABASE } =
    process.env;
  if (EXTERNAL_PG_HOST && EXTERNAL_PG_USER && EXTERNAL_PG_PASSWORD_2 && EXTERNAL_PG_DATABASE) {
    const port = EXTERNAL_PG_PORT || "5432";
    return `postgresql://${encodeURIComponent(EXTERNAL_PG_USER)}:${encodeURIComponent(EXTERNAL_PG_PASSWORD_2)}@${EXTERNAL_PG_HOST}:${port}/${EXTERNAL_PG_DATABASE}?sslmode=no-verify`;
  }
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL must be set. Did you forget to provision a database?",
    );
  }
  return process.env.DATABASE_URL;
}

export const pool = new Pool({ connectionString: resolveConnectionString() });
export const db = drizzle(pool, { schema });

export * from "./schema";
