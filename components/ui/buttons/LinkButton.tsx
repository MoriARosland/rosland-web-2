import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
  icon: IconType;
  url: string;
}

export default function LinkButton({ icon: Icon, url }: LinkButtonProps) {
  return (
    <Link href={url} prefetch={false}>
      <Icon
        size={28}
        className="text-black dark:text-white hover:scale-110 hover:fill-sky-500 transition duration-200"
      />
    </Link>
  );
}
