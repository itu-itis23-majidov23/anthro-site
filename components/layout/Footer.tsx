import Link from "next/link";
import { footerColumns, site } from "@/content/site";
import { Logo } from "@/components/layout/Logo";
import { DataRule } from "@/components/hud/DataRule";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              General-purpose humanoid robots — hardware, intelligence, and control, engineered as
              one system.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-sm text-primary transition-colors hover:text-glow"
            >
              {site.email}
            </a>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <DataRule label="anthro.industries" className="mt-16" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
            © 2026 AnthRo Industries — {site.location}
          </p>
          <p className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground">
            {site.coordinates}
          </p>
        </div>
      </div>
    </footer>
  );
}
