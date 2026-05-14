import { Logo } from "./Logo";

export function Nav() {
  const links = [
    { href: "#vision", label: "Vision" },
    { href: "#build", label: "What We Build" },
    { href: "#applications", label: "Applications" },
    { href: "#technology", label: "Technology" },
    { href: "#team", label: "Team" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="font-display text-lg tracking-tight">AnthRo</span>
          <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            / Robotics
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
        >
          Contact →
        </a>
      </div>
    </header>
  );
}
