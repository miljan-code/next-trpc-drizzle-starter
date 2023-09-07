import { SignIn, SignOut } from "@/components/auth";
import { getUserSession } from "@/lib/auth";

export default async function Home() {
  const { session } = await getUserSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-indigo-800 to-indigo-600 p-24 text-white">
      <div className="flex flex-col">
        <h1 className="text-center text-5xl font-bold">NextJS Starter Kit</h1>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-4xl font-bold">tRPC</h3>
        <h3 className="text-4xl font-bold">Drizzle ORM</h3>
        <h3 className="text-4xl font-bold">NextAuth</h3>
        <h3 className="text-4xl font-bold">Tailwind/ShadCN</h3>
      </div>
      <div className="">{session ? <SignOut /> : <SignIn />}</div>
    </main>
  );
}
