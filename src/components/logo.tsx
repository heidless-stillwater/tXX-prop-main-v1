import { Home } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Home className="h-[25px] w-[25px] text-primary" />
      <span className="text-2xl font-bold font-headline text-primary">
        PropertyPro
      </span>
    </Link>
  );
}
