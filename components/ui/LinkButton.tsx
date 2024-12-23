import Link from "next/link";
import { IconType } from "react-icons";

export default function LinkButton({
  icon: Icon,
  url,
}: {
  icon: IconType;
  url: string;
}) {
  return (
    <Link href={url} prefetch={false}>
      <Icon
        size={28}
        className="text-black dark:text-white hover:scale-110 hover:fill-sky-500 transition duration-200"
      />
    </Link>
  );
}
