import { cn } from "@/lib/utils";

type Status = "development" | "available" | "research" | "classified";

const statusConfig: Record<Status, { label: string; dot: string; text: string }> = {
  development: { label: "In Development", dot: "bg-primary", text: "text-primary" },
  available: { label: "Active", dot: "bg-signal", text: "text-signal" },
  research: { label: "Research", dot: "bg-titanium", text: "text-titanium" },
  classified: { label: "Classified", dot: "bg-violet", text: "text-violet" },
};

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-white/10 bg-surface/80 px-3 py-1.5 font-mono text-[11px] tracking-[0.2em] uppercase",
        config.text,
        className,
      )}
    >
      <span aria-hidden className={cn("size-1.5 rounded-full motion-safe:animate-pulse-dot", config.dot)} />
      {config.label}
    </span>
  );
}
