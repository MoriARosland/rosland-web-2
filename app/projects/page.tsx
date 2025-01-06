import Card from "@/components/ui/cards/Card";
import { getAllProjects } from "@/lib/db/db_actions";
import { Project } from "@/lib/types/project";

export default async function ProjectsPage() {
  // Data revalidation is triggered by the form components using server actions.
  const projects: Project[] = await getAllProjects();

  return (
    <main className="flex flex-col">
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
    </main>
  );
}
