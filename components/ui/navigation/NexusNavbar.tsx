import Link from "next/link";
import { SignOutButton } from "@/components/ui/buttons/AuthButtons";

export default function NexusNavbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-zinc-900">
      <Link href="/nexus" className="font-semibold">
        Nexus
      </Link>
      <SignOutButton />
    </div>
  );
}
