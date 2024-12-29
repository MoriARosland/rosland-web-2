import NavButtonIcon from "@/components/ui/buttons/NavButtonIcon";
import { FaArrowLeft } from "react-icons/fa";

export default function About() {
  return (
    <main className="flex flex-col">
      <div className="relative flex items-center justify-center py-4">
        <div className="absolute left-0 px-4">
          <NavButtonIcon icon={FaArrowLeft} href="/" text="Back" />
        </div>
        <h1 className="text-4xl font-bold text-center">About</h1>
      </div>
    </main>
  );
}
