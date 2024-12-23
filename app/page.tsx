import TypeWriterHeader from "@/components/TypeWriterHeader";
import LinkButtonRow from "@/components/ui/LinkButtonRow";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  const links = [
    { icon: FaGithub, url: "https://github.com/MoriARosland" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/morirosland/" },
    { icon: FaInstagram, url: "https://www.instagram.com/mori.rosland/" },
  ];

  return (
    <main className="flex flex-col gap-6 justify-center items-center h-screen">
      <TypeWriterHeader text="Hi there, I'm Mori👋" />
      <p className="text-lg text-center px-20">
        I study Electronic System Design at NTNU with a specialization in
        digital and embedded systems and am currently in my fourth year.
      </p>
      <LinkButtonRow links={links} />
    </main>
  );
}
