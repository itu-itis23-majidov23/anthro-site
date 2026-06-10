import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { getDict, l, type Locale } from "@/lib/i18n";

export function TechnologyPillars({ locale = "en" }: { locale?: Locale }) {
  const d = getDict(locale);
  const t = d.home.pillars;

  return (
    <section className="relative border-y border-white/8 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <Reveal>
          <SectionLabel index="02">{t.label}</SectionLabel>
          <h2 className="font-display mt-6 max-w-2xl text-[clamp(1.8rem,3.5vw,3rem)] text-foreground">
            {t.title}
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {d.technology.pillars.map((pillar) => (
            <Link key={pillar.code} href={l(locale, "/technology/")} className="group block h-full">
              <GlassPanel className="glow-border-hover h-full p-7 transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                    {pillar.code}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                </div>
                <h3 className="font-display mt-5 text-xl text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.headline}
                </p>
              </GlassPanel>
            </Link>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
