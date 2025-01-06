import NexusNavbar from "@/components/ui/navigation/NexusNavbar";
import { Suspense } from "react";
import Loading from "./loading";
import AuthProvider from "@/components/services/AuthProvider";
import AuthCheck from "@/components/services/AuthCheck";

interface Props {
  children: React.ReactNode;
}

export default function NexusLayout({ children }: Props) {
  return (
    <AuthProvider>
      <AuthCheck>
        <NexusNavbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </AuthCheck>
    </AuthProvider>
  );
}
