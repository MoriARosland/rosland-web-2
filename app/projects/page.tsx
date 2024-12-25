import { FaArrowLeft } from "react-icons/fa";
import NavButtonIcon from "@/components/ui/buttons/NavButtonIcon";
import Card from "@/components/ui/cards/Card";

interface Project {
  _id: string;
  title: string;
  description: string;
  tools: string[];
}

export default async function Projects() {
  const projects: Project[] = await fetch(
    "http://localhost:3000/api/projects"
  ).then((res) => res.json());

  return (
    <main>
      {/* Parent container uses relative so children can be positioned absolutely */}
      <div className="relative flex items-center justify-center py-4">
        {/* Position the nav button absolutely on the left */}
        <div className="absolute left-0 px-4">
          <NavButtonIcon icon={FaArrowLeft} href="/" text="Back" />
        </div>

        {/* Heading remains centered in the flex container */}
        <h1 className="text-4xl font-bold text-center">Projects</h1>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {projects.map((project) => (
          <Card
            key={project._id}
            header={project.title}
            description={project.description}
            imageUrl="/arcane.jpeg"
          />
        ))}
      </div>
    </main>
  );
}

{
  /* <div className="flex my-4">
<div className="flex">
  <NavButtonIcon icon={FaArrowLeft} href="/" text="Back" />
</div>
<div className="flex grow justify-center">
  <h1 className="text-4xl font-bold text-center">Projects</h1>
</div>
</div> */
}
