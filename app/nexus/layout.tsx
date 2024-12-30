import NexusNavbar from "@/components/ui/navigation/NexusNavbar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import Loading from "./loading";

interface Props {
  children: React.ReactNode;
}

export default async function NexusLayout({ children }: Props) {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (session.user?.email !== process.env.ADMIN_EMAIL) {
    redirect("/unauthorized");
  }

  return (
    <>
      <NexusNavbar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
