"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export function SignInButton() {
  const { status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return <Link href="/nexus">Nexus</Link>;
  }

  return <button onClick={() => signIn()}>Sign In</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}
