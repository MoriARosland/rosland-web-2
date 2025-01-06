import Link from "next/link";

export default async function Unauthorized() {
  return (
    <main className="flex flex-col gap-4 h-screen w-full items-center justify-center">
      <h1 className="text-2xl font-bold">
        This user is not authorized as admin and has been automatically signed
        out.
      </h1>
      <Link
        href="/"
        className=" hover:text-blue-700 border hover:border-blue-700 border-black dark:border-white px-4 py-2 rounded-md transition duration-100"
      >
        Return to home
      </Link>
    </main>
  );
}
