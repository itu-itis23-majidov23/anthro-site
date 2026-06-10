import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { technologyPillars } from "@/content/technology";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { Reveal, Stagger } from "@/components/motion/Reveal";

export function TechnologyPillars() {
  return (
    <section className="relative border-y border-white/8 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <Reveal>
          <SectionLabel index="02">Technology</SectionLabel>
          <h2 className="font-display mt-6 max-w-2xl text-[clamp(1.8rem,3.5vw,3rem)] text-foreground">
            One system. Engineered end-to-end.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {technologyPillars.map((pillar) => (
            <Link key={pillar.code} href="/technology/" className="group block h-full">
              <GlassPanel className="glow-border-hover h-full p-7 transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground/70">
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
