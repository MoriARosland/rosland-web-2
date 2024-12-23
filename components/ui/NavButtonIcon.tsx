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
      className="inline-flex flex-row gap-2 items-center text-lg text-black dark:text-white px-4 py-2 rounded-md hover:text-blue-500 transition duration-200"
    >
      <Icon size={18} />
      <p className="text-lg">{text}</p>
    </Link>
  );
}
