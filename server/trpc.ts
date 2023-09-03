import {
  initTRPC,
  type DataTransformerOptions,
  type inferAsyncReturnType,
} from "@trpc/server";
import type { Session } from "next-auth";
import NextAuth from "next-auth/next";
import superjson from "superjson";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/db";

export const createContext = async () => {
  const session = (await NextAuth(authOptions)) as Session;

  return {
    session,
    db,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC
  .context<Context>()
  .create({ transformer: superjson as DataTransformerOptions });

export const router = t.router;
export const publicProcedure = t.procedure;
