import ProjectForm from "@/components/services/ProjectForm";

export default function AddProject() {
  return (
    <main className="flex flex-col items-center flex-1 py-5 px-20">
      <h1 className="text-4xl font-bold mb-8">Add Project</h1>
      <ProjectForm />
    </main>
  );
}
