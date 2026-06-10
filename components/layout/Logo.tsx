import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <Image
        src="/brand/mark.png"
        alt=""
        width={45}
        height={36}
        priority
        className="h-9 w-auto opacity-90 transition-opacity group-hover:opacity-100"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-tight text-foreground">ANTHRO</span>
        <span className="font-mono text-[9px] tracking-[0.42em] text-muted-foreground uppercase">
          Industries
        </span>
      </span>
    </Link>
  );
}
