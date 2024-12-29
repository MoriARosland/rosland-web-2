interface Project {
  _id: string;
  title: string;
  description: string;
  tag: string;
}

export default async function ProjectList() {
  const projects: Project[] = await fetch(
    "http://localhost:3000/api/projects"
  ).then((res) => res.json());

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-left">Tag</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td className="border px-4 py-2 font-mono text-sm">
                {project._id}
              </td>
              <td className="border px-4 py-2 font-medium">{project.title}</td>
              <td className="border px-4 py-2">{project.description}</td>
              <td className="border px-4 py-2">
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {project.tag}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
