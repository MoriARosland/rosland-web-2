import ProjectList from "@/components/ui/tables/ProjectList";
import NavButton from "@/components/ui/buttons/NavButton";

export default async function Nexus() {
  return (
    <main className="flex flex-col items-center px-20 py-5">
      <h1 className="text-4xl font-bold mb-8">Admin panel</h1>
      <div className="w-full max-w-7xl flex-1">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ProjectList />
        <div className="flex justify-start my-5">
          <NavButton text="Add Project" href="/nexus/add-project" />
        </div>
      </div>
    </main>
  );
}
