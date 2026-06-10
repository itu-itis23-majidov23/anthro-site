import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span aria-hidden className="h-px w-8 bg-primary/60" />
      <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
        {index ? `// ${index} — ` : "// "}
        {children}
      </span>
    </div>
  );
}
