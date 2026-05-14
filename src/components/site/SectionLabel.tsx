export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      <span className="text-primary">[{index}]</span>
      <span className="h-px flex-1 max-w-16 bg-border" />
      <span>{label}</span>
    </div>
  );
}
