import EditProject from "@/components/ui/forms/EditProject";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditProjectPage({ params }: Props) {
  const id = (await params).id;

  const response = await fetch(
    `http://localhost:3000/api/projects/getOne?query=${id}`
  );

  if (!response.ok) {
    const { error } = await response.json();
    console.log("Error: ", error);
    return (
      <main className="flex flex-col items-center px-20 py-5">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </main>
    );
  }

  const { project } = await response.json();
  console.log("Project: ", project);

  return (
    <main className="flex flex-col items-center px-20 py-5">
      <h1 className="text-3xl font-bold">Editing: {project.title}</h1>
      <EditProject project={project} />
    </main>
  );
}
