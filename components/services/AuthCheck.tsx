import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function AuthCheck({ children }: Props) {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (session.user?.email !== process.env.ADMIN_UID) {
    signOut({ callbackUrl: "/unauthorized" });
    redirect("/unauthorized");
  }

  return children;
}
