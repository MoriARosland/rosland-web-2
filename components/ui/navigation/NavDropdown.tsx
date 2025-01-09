import Link from "next/link";
import StackIcon from "../StackIcon";

export default function NavDropdown() {
  // Close the dropdown when a link is clicked
  function handleLinkClick() {
    const elem = document.activeElement;
    if (elem) {
      (elem as HTMLElement).blur();
    }
  }

  return (
    <div className="sm:hidden dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <StackIcon />
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/about" className="text-lg" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-lg" onClick={handleLinkClick}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
