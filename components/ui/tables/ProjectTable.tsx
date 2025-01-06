import { Project } from "@/lib/types/project";
import TableHead from "./TableHead";
import TableItem from "./TableItem";
import { getAllProjects } from "@/lib/db/db_actions";

export default async function ProjectTable() {
  const projects: Project[] = await getAllProjects();

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
