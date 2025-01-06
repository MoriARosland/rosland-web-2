"use client";

import { signOut } from "next-auth/react";

// This component is simply a wrapper for the signOut function.
// We need the wrapper as the signOut() function is not available in server components.
export function SignOutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
  );
}
