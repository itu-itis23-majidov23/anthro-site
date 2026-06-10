import { cn } from "@/lib/utils";

export function DataRule({ label, className }: { label?: string; className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center gap-4", className)}>
      <span className="h-px flex-1 bg-border" />
      {label && (
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          {label}
        </span>
      )}
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
