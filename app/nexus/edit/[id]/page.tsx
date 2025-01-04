import EditProject from "@/components/ui/forms/EditProject";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const response = await fetch(
    `http://localhost:3000/api/projects/getOne?query=${id}`
  );

  if (!response.ok) {
    return (
      <main className="flex flex-col items-center px-20 py-5">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </main>
    );
  }

  const { project } = await response.json();

  return (
    <main className="flex flex-col items-center px-20 py-5">
      <h1 className="text-3xl font-bold">Editing: {project.title}</h1>
      <EditProject project={project} />
    </main>
  );
}
