import { publicProcedure, router } from "@/server/trpc";

export const appRouter = router({
  getString: publicProcedure.query(() => {
    return "Hello world";
  }),
});

export type AppRouter = typeof appRouter;
