import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params }: Props) {
  const id = (await params).id;

  const response = await fetch(
    `http://localhost:3000/api/projects/getOne?query=${id}`
  );

  if (!response.ok) {
    const { error } = await response.json();
    console.log("Error: ", error);
    return (
      <main className="flex flex-col items-center px-20 py-5">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </main>
    );
  }

  const { project } = await response.json();
  console.log("Project: ", project);

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
        <p className="text-lg">{project.description}</p>
      </div>
    </main>
  );
}
