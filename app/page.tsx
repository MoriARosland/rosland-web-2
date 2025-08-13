import TypeWriterHeader from "@/components/TypeWriterHeader";
import LinkButtonRow from "@/components/ui/buttons/LinkButtonRow";
import NavButton from "@/components/ui/buttons/NavButton";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import nasjonaldag from "@/public/nasjonaldag.jpeg";
import cycling from "@/public/cycling.jpeg";
import Card from "@/components/ui/cards/Card";
import { getAllProjects } from "@/lib/db/db_actions";
import { Project } from "@/lib/types/project";

export default async function Home() {
  const links = [
    { icon: FaGithub, url: "https://github.com/MoriARosland" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/morirosland/" },
    { icon: FaInstagram, url: "https://www.instagram.com/mori.rosland/" },
  ];

  // Get projects data
  const projects: Project[] = await getAllProjects();

  return (
    <main className="flex flex-col">
      {/* Landing Section */}
      <section className="flex flex-col h-screen">
        <div className="flex-1 flex flex-col gap-7 justify-center items-center">
          <TypeWriterHeader text="Hi there, I'm Mori👋" />
          <p className="text-lg text-center px-20">
            I study Electronic System Design at NTNU with a specialization in
            digital and embedded systems and am currently in my fourth year.
          </p>
          <div className="flex flex-row gap-4">
            <NavButton text="Projects" href="#projects" />
            <NavButton text="About me" href="#about" />
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <LinkButtonRow links={links} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col pb-10">
        <h1 className="text-4xl font-bold text-center py-10">Projects</h1>

        {projects.length === 0 ? (
          <p className="text-center text-xl">No projects found</p>
        ) : (
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {projects.map((project: Project) => (
              <Card
                id={project._id}
                key={project._id}
                title={project.title}
                abstract={project.abstract}
                tag={project.tag}
              />
            ))}
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col px-10 py-10 items-center">
        <div className="flex flex-col w-full max-w-4xl">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-4xl font-bold">About</h1>
            <div>
              <h2 className="text-xl font-bold">Name</h2>
              <p className="text-md">Mori Adrian Rosland.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Age</h2>
              <p className="text-md">Continuously increasing.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Where I&apos;m From</h2>
              <p className="text-md">
                A place with plenty of fish and oil. Which part? The place where
                people call us &quot;Nordlending&quot;.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Education</h2>
              <p className="text-md">
                MSc in Electronic System Design (electrical engineering) with a
                specialization in Digital and Embedded Systems.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Bio</h2>
              <p className="text-md">Trying not to be replaced by a robot.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Experience / Technical</h2>
              <p className="text-md">
                Most of my programming experience is in <strong>C/C++</strong>{" "}
                writing firmware for embedded systems. In my free time, I have
                done a fair share of web development as well, using mostly{" "}
                <strong>React/Next.js</strong> and <strong>SvelteKit</strong> with{" "}
                <strong>Typescript</strong> and <strong>Postgres</strong>.
              </p>
              <p className="text-md">
                Hardware-wise, I have experience with <strong>VHDL</strong>/
                <strong>System Verilog</strong> (digital design) and some PCB
                design in <strong>KiCad</strong> and <strong>Altium</strong>.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 py-10">
            <Image
              src={nasjonaldag}
              alt="nasjonaldag"
              width={3024}
              height={4032}
              priority={true}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="max-w-[300px] h-auto object-cover rounded-lg shadow-md shadow-black/25 dark:shadow-white/25"
            />
            <Image
              src={cycling}
              alt="cycling"
              width={3024}
              height={4032}
              priority={true}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="max-w-[300px] h-auto object-cover rounded-lg shadow-md shadow-black/25 dark:shadow-white/25"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
