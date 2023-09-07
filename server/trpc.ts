import {
  initTRPC,
  TRPCError,
  type DataTransformerOptions,
  type inferAsyncReturnType,
} from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import superjson from "superjson";

import { db } from "@/db";
import { getUserAuth } from "@/lib/auth";

export const createContext = async (opts?: FetchCreateContextFnOptions) => {
  const { session } = await getUserAuth();

  return {
    session,
    db,
    headers: opts && Object.fromEntries(opts.req.headers),
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC
  .context<Context>()
  .create({ transformer: superjson as DataTransformerOptions });

export const router = t.router;
export const publicProcedure = t.procedure;

const isAuthed = t.middleware((opts) => {
  const { ctx } = opts;
  if (!ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      session: ctx.session,
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);
