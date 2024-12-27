import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Unauthorized() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <main className="flex flex-col gap-4 h-screen w-full items-center justify-center">
      <h1 className="text-2xl font-bold">
        This user is not authorized as admin
      </h1>
      <Link
        href="/"
        className=" hover:text-blue-700 border hover:border-blue-700 border-black dark:border-white px-4 py-2 rounded-md transition duration-100"
      >
        Sign out
      </Link>
    </main>
  );
}
