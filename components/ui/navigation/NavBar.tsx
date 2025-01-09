import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center py-4 dark:bg-zinc-900 bg-gray-100 px-14">
      <Link href="/" className="font-semibold">
        Home
      </Link>
      <div className="flex gap-4">
        <Link href="/projects" className="font-semibold">
          Projects
        </Link>
        <Link href="/about" className="font-semibold">
          About
        </Link>
      </div>
    </div>
  );
}
