import TypeWriterHeader from "@/components/TypeWriterHeader";
import LinkButtonRow from "@/components/ui/LinkButtonRow";
import NavButton from "@/components/ui/NavButton";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  const links = [
    { icon: FaGithub, url: "https://github.com/MoriARosland" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/morirosland/" },
    { icon: FaInstagram, url: "https://www.instagram.com/mori.rosland/" },
  ];

  return (
    <main className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col gap-7 justify-center items-center">
        <TypeWriterHeader text="Hi there, I'm Mori👋" />
        <p className="text-lg text-center px-20">
          I study Electronic System Design at NTNU with a specialization in
          digital and embedded systems and am currently in my fourth year.
        </p>
        <div className="flex flex-row gap-4">
          <NavButton text="Projects" href="/projects" />
          <NavButton text="About me" href="/about" />
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <LinkButtonRow links={links} />
      </div>
    </main>
  );
}
