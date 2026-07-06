#!/bin/bash
set -e
pnpm install --frozen-lockfile
pnpm --filter db push
pnpm --filter db run backfill:grandfather
node lib/db/scripts/backfill-daily-activity.mjs
