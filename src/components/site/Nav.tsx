import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

type PageLink = { to: "/" | "/about" | "/products"; label: string };

const pageLinks: PageLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
];

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";
  const contactHref = onHome ? "#contact" : "/#contact";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="font-display text-lg tracking-tight">AnthRo</span>
          <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            / Robotics
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {pageLinks.map((l) => {
            const active =
              l.to === "/"
                ? pathname === "/"
                : pathname === l.to || pathname.startsWith(`${l.to}/`);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <a
          href={contactHref}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
        >
          Contact →
        </a>
      </div>
    </header>
  );
}
