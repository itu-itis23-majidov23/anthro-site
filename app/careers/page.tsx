import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { disciplines, values } from "@/content/careers";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { GlowText } from "@/components/hud/GlowText";
import { Reveal, Stagger } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join AnthRo Industries — small teams, hard problems, full ownership. Engineering humanoid robots in Istanbul.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHeader
        index="05"
        label="Careers"
        title={
          <>
            Build What <GlowText>Doesn&apos;t Exist Yet.</GlowText>
          </>
        }
        lede="Small teams. Hard problems. Full ownership. We hire engineers who want their work to stand up and walk."
      />

      <section className="border-y border-white/8 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel index="01">How We Work</SectionLabel>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {values.map((value) => (
              <div key={value.title} className="border-l border-border pl-6">
                <h2 className="font-display text-lg text-foreground">{value.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="02">Open Disciplines</SectionLabel>
          <h2 className="font-display mt-6 text-[clamp(1.8rem,3.5vw,3rem)] text-foreground">
            Where we&apos;re hiring.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {disciplines.map((d) => (
            <a
              key={d.code}
              href={`mailto:${site.email}?subject=Application — ${d.title}`}
              className="group block h-full"
            >
              <GlassPanel className="glow-border-hover h-full p-7 transition-shadow duration-300">
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                  {d.code}
                </span>
                <h3 className="font-display mt-4 text-lg text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.15em] text-primary uppercase">
                  Apply
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </GlassPanel>
            </a>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32 text-center">
        <Reveal>
          <p className="font-mono text-[12px] tracking-[0.25em] text-muted-foreground uppercase">
            {site.location} — relocation supported
          </p>
          <p className="font-display mt-6 text-[clamp(1.4rem,2.8vw,2.2rem)] text-foreground">
            The lab is in Istanbul. <span className="text-muted-foreground">The mission is everywhere.</span>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
