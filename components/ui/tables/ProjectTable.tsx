import { Project } from "@/lib/types/project";
import TableHead from "./TableHead";
import TableItem from "./TableItem";
import { BASE_API_URL } from "@/lib/utils/constants";

export default async function ProjectTable() {
  const projects: Project[] = await fetch(`${BASE_API_URL}/api/projects`).then(
    (res) => res.json()
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <TableHead />
        <tbody>
          {projects.map((project) => (
            <TableItem key={project._id} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
