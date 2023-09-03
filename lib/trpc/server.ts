import { appRouter } from "@/server";
import { createContext } from "@/server/trpc";

export const server = appRouter.createCaller(await createContext());
