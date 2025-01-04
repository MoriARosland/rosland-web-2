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
  let projects: Project[] = [];

  try {
    // Try production URL first
    const res = await fetch(`${BASE_API_URL}/api/projects`);
    if (!res.ok) {
      // If production fails, try localhost
      const localRes = await fetch(`http://localhost:3000/api/projects`);
      projects = await localRes.json();
    } else {
      projects = await res.json();
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Return empty array if both attempts fail
    projects = [];
  }

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
