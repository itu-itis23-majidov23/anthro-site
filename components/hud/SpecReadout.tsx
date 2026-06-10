import { cn } from "@/lib/utils";

type SpecReadoutProps = {
  label: string;
  value: string;
  className?: string;
};

export function SpecReadout({ label, value, className }: SpecReadoutProps) {
  return (
    <div className={cn("flex items-baseline gap-3 py-3", className)}>
      <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </span>
      <span
        aria-hidden
        className="flex-1 border-b border-dotted border-border"
      />
      <span className="font-mono text-sm text-foreground">{value}</span>
    </div>
  );
}
