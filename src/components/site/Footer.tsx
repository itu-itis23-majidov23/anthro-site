import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-7" />
          <span className="font-display text-base tracking-tight">AnthRo</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            / Anthropomorphic Robotics
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} AnthRo Robotics</span>
          <span className="hidden sm:inline">All systems nominal</span>
        </div>
      </div>
    </footer>
  );
}
