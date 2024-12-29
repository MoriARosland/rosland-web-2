import TableHead from "./TableHead";
import TableItem from "./TableItem";

interface Project {
  _id: string;
  title: string;
  description: string;
  tag: string;
}

export default async function ProjectTable() {
  const projects: Project[] = await fetch(
    "http://localhost:3000/api/projects"
  ).then((res) => res.json());

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
