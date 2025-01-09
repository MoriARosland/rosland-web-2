import Link from "next/link";
import Image from "next/image";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  return (
    <nav className="navbar font-bold bg-slate-200 dark:bg-base-300 shadow px-4 sm:px-6">
      {/* Navbar start (Brand) */}
      <div className="navbar-start">
        <Link href="/">
          <Image
            src="/favicon-dark.ico"
            width={32}
            height={32}
            sizes="20vw"
            alt="Brand Logo"
            className="h-8 w-8"
          />
        </Link>
      </div>

      {/* Navbar end (menu links) */}
      <div className="navbar-end">
        {/* Hidden on small screens (sm breakpoint), visible otherwise */}
        <div className="hidden sm:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/about" className="text-lg">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-lg">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile dropdown menu */}
        <NavDropdown />
      </div>
    </nav>
  );
}
