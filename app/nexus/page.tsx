import ProjectList from "@/components/ui/tables/ProjectList";

export default async function Nexus() {
  return (
    <main className="flex flex-col items-center flex-1 p-4">
      <h1 className="text-4xl font-bold mb-8">Admin panel</h1>
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ProjectList />
      </div>
    </main>
  );
}
