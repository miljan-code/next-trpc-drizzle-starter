import { migrate } from "drizzle-orm/node-postgres/migrator";

import { db } from "@/db";
import { publicProcedure, router } from "@/server/root";

migrate(db, { migrationsFolder: "db/migrations" }).catch((err) =>
  console.log(err),
);

export const appRouter = router({
  getString: publicProcedure.query(() => {
    return "Hello world";
  }),
});

export type AppRouter = typeof appRouter;
