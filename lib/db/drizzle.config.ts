import { defineConfig } from "drizzle-kit";
import path from "path";

function resolveConnectionString(): string {
  const { EXTERNAL_PG_HOST, EXTERNAL_PG_PORT, EXTERNAL_PG_USER, EXTERNAL_PG_PASSWORD_2, EXTERNAL_PG_DATABASE } =
    process.env;
  if (EXTERNAL_PG_HOST && EXTERNAL_PG_USER && EXTERNAL_PG_PASSWORD_2 && EXTERNAL_PG_DATABASE) {
    const port = EXTERNAL_PG_PORT || "5432";
    return `postgresql://${encodeURIComponent(EXTERNAL_PG_USER)}:${encodeURIComponent(EXTERNAL_PG_PASSWORD_2)}@${EXTERNAL_PG_HOST}:${port}/${EXTERNAL_PG_DATABASE}?sslmode=no-verify`;
  }
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL, ensure the database is provisioned");
  }
  return process.env.DATABASE_URL;
}

export default defineConfig({
  schema: path.join(__dirname, "./src/schema/index.ts"),
  dialect: "postgresql",
  dbCredentials: {
    url: resolveConnectionString(),
  },
});
