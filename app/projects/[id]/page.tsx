import LinkButton from "@/components/ui/buttons/LinkButton";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { getAllProjects, getProject } from "@/lib/db/db_actions";
import { Project } from "@/lib/types/project";

// Generate static params for the project pages.
// This enables pre-rendering of the dynamic routes.
export async function generateStaticParams() {
  const projects: Project[] = await getAllProjects();

  return projects.map((project: Project) => ({ id: project._id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const project = await getProject(id);

  if (!project) {
    return (
      <main className="flex flex-col items-center px-20 py-5">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full gap-10">
      <div className="relative w-full h-[30vh]">
        <Image
          src={
            project.tag.toLowerCase() === "software"
              ? "/bitstream.jpg"
              : project.tag.toLowerCase() === "hardware"
              ? "/asic.jpg"
              : "/arcane.jpeg"
          }
          alt={project.title}
          fill={true}
          sizes="100vw"
          priority={true}
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-4 px-20">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div className="flex flex-row items-center gap-4">
          <div className="flex">
            <LinkButton
              icon={FaGithub}
              url={project.github}
              disabled={!project.github}
            />
          </div>
          <p className="font-bold">Tech: {project.techStack?.join(", ")}</p>
        </div>
        <div className="text-base space-y-4">
          {project.description
            .split(/\n\r?/)
            .map((line: string, index: number) => (
              <p key={index}>{line}</p>
            ))}
        </div>
      </div>
    </main>
  );
}
