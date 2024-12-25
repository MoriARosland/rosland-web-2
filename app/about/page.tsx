import NavButtonIcon from "@/components/ui/buttons/NavButtonIcon";
import { FaArrowLeft } from "react-icons/fa";

export default function About() {
  return (
    <main>
      <NavButtonIcon href="/" icon={FaArrowLeft} text="Back" />
    </main>
  );
}
