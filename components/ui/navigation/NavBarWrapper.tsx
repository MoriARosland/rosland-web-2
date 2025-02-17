"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function NavBarWrapper() {
  const pathname = usePathname();
  const showNavbar =
    pathname !== "/" &&
    !pathname.startsWith("/nexus") &&
    !pathname.startsWith("/unauthorized");

  if (!showNavbar) return null;
  return <NavBar />;
}
