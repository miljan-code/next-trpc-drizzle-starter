import type { Config } from "drizzle-kit";

import { env } from "@/env.mjs";

import "dotenv/config";

export default {
  schema: "db/schema.ts",
  out: "db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
