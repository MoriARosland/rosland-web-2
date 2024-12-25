import Link from "next/link";
import { IconType } from "react-icons";

interface NavButtonIconProps {
  href: string;
  icon: IconType;
  text: string;
}

export default function NavButtonIcon({
  href,
  icon: Icon,
  text,
}: NavButtonIconProps) {
  return (
    <Link
      href={href}
      className="inline-flex flex-row gap-2 justify-center items-center text-black dark:text-white px-4 py-2 rounded-md hover:text-blue-500 transition duration-200"
    >
      <Icon size={14} />
      <p className="text-md">{text}</p>
    </Link>
  );
}
