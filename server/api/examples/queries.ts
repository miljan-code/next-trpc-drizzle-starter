import type { Context } from "@/server/trpc";

export const getExample = (ctx: Context) => {
  const username = ctx.session?.user.name || "guest";

  return `Hello, ${username}!`;
};
