import Card from "@/components/ui/cards/Card";

interface Project {
  _id: string;
  title: string;
  description: string;
  tag: string;
}

export default async function Projects() {
  const projects: Project[] = await fetch(
    "http://localhost:3000/api/projects"
  ).then((res) => res.json());

  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold text-center py-10">Projects</h1>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        {projects.map((project) => (
          <Card
            id={project._id}
            key={project._id}
            header={project.title}
            description={project.description}
            tag={project.tag}
          />
        ))}
      </div>
    </main>
  );
}
