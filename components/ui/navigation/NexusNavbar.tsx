import Link from "next/link";
import { SignOutButton } from "@/components/ui/buttons/AuthButtons";

export default function NexusNavbar() {
  return (
    <div className="flex justify-between items-center py-4 bg-gray-100 dark:bg-zinc-900 px-14">
      <Link href="/nexus" className="font-semibold">
        Nexus
      </Link>
      <SignOutButton />
    </div>
  );
}
