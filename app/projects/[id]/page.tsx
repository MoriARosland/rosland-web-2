import LinkButton from "@/components/ui/buttons/LinkButton";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BASE_API_URL } from "@/lib/utils/constants";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const response = await fetch(
    `${BASE_API_URL}/api/projects/getOne?query=${id}`
  );

  if (!response.ok) {
    return (
      <main className="flex flex-col items-center px-20 py-5">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </main>
    );
  }

  const { project } = await response.json();

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
