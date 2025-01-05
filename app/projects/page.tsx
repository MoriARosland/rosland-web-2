import Card from "@/components/ui/cards/Card";
import clientPromise from "@/lib/mongodb";
import { Project } from "@/lib/types/project";

async function getProjectData() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);

    const response = await db.collection("projects").find({}).toArray();
    const projects: Project[] = response.map((project) => ({
      _id: project._id.toString(),
      title: project.title as string,
      abstract: project.abstract as string,
      description: project.description as string,
      tag: project.tag as string,
      github: project.github as string,
      techStack: project.techStack as string[],
    }));

    return projects;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }
}

export default async function ProjectsPage() {
  // Data revalidation is triggered by the form components using server actions.
  const projects: Project[] = await getProjectData();

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
