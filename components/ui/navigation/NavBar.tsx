import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-zinc-900">
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
