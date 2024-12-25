import LinkButton from "./LinkButton";
import { IconType } from "react-icons";

interface LinkButtonRowProps {
  links: { icon: IconType; url: string }[];
}

export default function LinkButtonRow({ links }: LinkButtonRowProps) {
  return (
    <div className="flex flex-row gap-4">
      {links.map((link, index) => (
        <LinkButton key={index} icon={link.icon} url={link.url} />
      ))}
    </div>
  );
}
