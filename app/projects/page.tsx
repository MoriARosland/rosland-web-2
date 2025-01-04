import Card from "@/components/ui/cards/Card";
import { Project } from "@/lib/types/project";
import { BASE_API_URL } from "@/lib/utils/constants";

// export async function generateStaticParams() {
//   const projects: Project[] = await fetch(
//     "http://localhost:3000/api/projects"
//   ).then((res) => res.json());

//   return projects.map((project) => ({ id: project._id }));
// }

export default async function Projects() {
  const projects: Project[] = await fetch(`${BASE_API_URL}/api/projects`).then(
    (res) => res.json()
  );

  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold text-center py-10">Projects</h1>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        {projects.map((project) => (
          <Card
            id={project._id}
            key={project._id}
            title={project.title}
            abstract={project.abstract}
            tag={project.tag}
          />
        ))}
      </div>
    </main>
  );
}
