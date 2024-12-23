import LinkButton from "./LinkButton";
import { IconType } from "react-icons";

export default function LinkButtonRow({
  links,
}: {
  links: { icon: IconType; url: string }[];
}) {
  return (
    <div className="flex flex-row gap-4">
      {links.map((link, index) => (
        <LinkButton key={index} icon={link.icon} url={link.url} />
      ))}
    </div>
  );
}
