import { initTRPC, type inferAsyncReturnType } from "@trpc/server";
import { getServerSession } from "next-auth";
import superjson from "superjson";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/db";

export const createContext = async () => {
  const session = await getServerSession(authOptions);

  return {
    session,
    db,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create({ transformer: superjson });

export const router = t.router;
export const publicProcedure = t.procedure;
