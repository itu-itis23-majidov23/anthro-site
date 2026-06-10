"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/site";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Nav() {
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
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname?.startsWith(link.href.replace(/\/$/, ""));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono text-[12px] tracking-[0.18em] uppercase transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact/" variant="ghost" size="sm">
            Contact
          </Button>
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 font-mono text-sm tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="py-3 font-mono text-sm tracking-[0.18em] text-primary uppercase"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
