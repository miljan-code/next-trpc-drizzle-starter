import Link from "next/link";

import { SignIn, SignOut } from "@/components/auth";
import { getUserSession } from "@/lib/auth";
import { server } from "@/lib/trpc/server";

export default async function Home() {
  const { session } = await getUserSession();
  const example = await server.example.getExample.query();

  return (
    <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-800 to-indigo-950">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Next <span className="text-[hsl(219,100%,70%)]">Kickstart</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="#"
            target="_blank"
          >
            <h3 className="text-xl font-bold">First Steps →</h3>
            <p>
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </p>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="#"
            target="_blank"
          >
            <h3 className="text-xl font-bold">Documentation →</h3>
            <p>
              Learn more about Next Kickstart, the libraries it uses, and how to
              deploy it.
            </p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          {session ? <SignOut /> : <SignIn />}
          <p className="text-white">{example}</p>
        </div>
      </div>
    </main>
  );
}
