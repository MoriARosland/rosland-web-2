import Link from "next/link";

interface NavButtonProps {
  text: string;
  href: string;
}

export default function NavButton({ text, href }: NavButtonProps) {
  return (
    <Link
      href={href}
      className="text-lg text-black dark:text-white border-2 border-black dark:border-white px-4 py-2 rounded-md hover:border-blue-500 hover:text-blue-500 transition duration-200"
    >
      {text}
    </Link>
  );
}
