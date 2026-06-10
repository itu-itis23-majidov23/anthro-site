import { cn } from "@/lib/utils";

export function Crosshair({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("relative inline-block size-3 text-primary/40", className)}>
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
    </span>
  );
}
