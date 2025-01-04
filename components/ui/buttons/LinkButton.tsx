import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
  icon: IconType;
  url?: string;
  disabled?: boolean;
}

export default function LinkButton({
  icon: Icon,
  url,
  disabled = false,
}: LinkButtonProps) {
  if (disabled) {
    return (
      <Icon
        size={28}
        className="text-gray-400 dark:text-gray-600 cursor-not-allowed"
      />
    );
  }

  return (
    <Link
      href={url!}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
    >
      <Icon
        size={28}
        className="text-black dark:text-white hover:scale-110 hover:fill-sky-500 transition duration-200"
      />
    </Link>
  );
}
