import ProjectTable from "@/components/ui/tables/ProjectTable";
import NavButton from "@/components/ui/buttons/NavButton";

export default async function Nexus() {
  return (
    // The TableItem in the ProjectTable uses "createPortal" to render the modal.
    // To correctly place the modal in the DOM, the portal needs to be able to find the main element.
    // the <main> element. Therefore it needs an id.
    <main id="main-content" className="flex flex-col items-center px-20 py-5">
      <h1 className="text-4xl font-bold mb-8">Admin panel</h1>
      <div className="w-full max-w-7xl flex-1">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ProjectTable />
        <div className="flex justify-start my-5">
          <NavButton text="Add Project" href="/nexus/add-project" />
        </div>
      </div>
    </main>
  );
}
