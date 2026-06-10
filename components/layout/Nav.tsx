"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { getDict, l, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const basePath = pathname.startsWith("/tr") ? pathname.slice(3) || "/" : pathname;
  const targets: { code: Locale; href: string }[] = [
    { code: "en", href: basePath },
    { code: "tr", href: `/tr${basePath === "/" ? "/" : basePath}` },
  ];

  return (
    <span className="flex items-center gap-1 font-mono text-[11px] tracking-[0.15em]">
      {targets.map((t, i) => (
        <span key={t.code} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden className="text-muted-foreground/40">/</span>}
          <Link
            href={t.href}
            hrefLang={t.code}
            aria-current={t.code === locale ? "true" : undefined}
            className={cn(
              "uppercase transition-colors",
              t.code === locale ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t.code}
          </Link>
        </span>
      ))}
    </span>
  );
}

export function Nav({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale).nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-white/8 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={l(locale, "/")} className="contents">
          <Logo asLink={false} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {t.links.map((link) => {
            const href = l(locale, link.href);
            const active = pathname?.startsWith(href.replace(/\/$/, ""));
            return (
              <Link
                key={link.href}
                href={href}
                className={cn(
                  "font-mono text-[12px] tracking-[0.18em] uppercase transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href={l(locale, "/contact/")} variant="ghost" size="sm">
            {t.contact}
          </Button>
          <LocaleSwitch locale={locale} />
        </nav>

        <button
          type="button"
          className="text-foreground lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/8 bg-background/95 backdrop-blur-md lg:hidden"
          aria-label="Primary mobile"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={l(locale, link.href)}
                className="py-3 font-mono text-sm tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={l(locale, "/contact/")}
              className="py-3 font-mono text-sm tracking-[0.18em] text-primary uppercase"
            >
              {t.contact}
            </Link>
            <div className="py-3">
              <LocaleSwitch locale={locale} />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
