"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function NavBarWrapper() {
  const pathname = usePathname();
  const showNavbar = pathname !== "/";

  if (!showNavbar) return null;
  return <NavBar />;
}
