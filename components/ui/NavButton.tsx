import Link from "next/link";

export default function NavButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="text-lg text-black dark:text-white border-2 border-black dark:border-white px-4 py-2 rounded-md hover:border-blue-500 hover:text-blue-500 transition duration-200"
    >
      {text}
    </Link>
  );
}
