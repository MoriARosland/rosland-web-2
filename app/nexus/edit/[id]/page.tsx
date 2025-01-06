import EditProject from "@/components/ui/forms/EditProject";
import { getProject } from "@/lib/db/db_actions";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const project = await getProject(id);

  if (!project) {
    return (
      <main className="flex flex-col items-center px-20 py-5">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center px-20 py-5">
      <h1 className="text-3xl font-bold">Editing: {project.title}</h1>
      <EditProject project={project} />
    </main>
  );
}
