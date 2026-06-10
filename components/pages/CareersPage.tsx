import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { GlowText } from "@/components/hud/GlowText";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { getDict, type Locale } from "@/lib/i18n";

export function CareersPage({ locale }: { locale: Locale }) {
  const t = getDict(locale).careers;

  return (
    <main>
      <PageHeader
        index="05"
        label={t.header.label}
        title={
          <>
            {t.header.titlePre}
            <GlowText>{t.header.titleGlow}</GlowText>
          </>
        }
        lede={t.header.lede}
      />

      <section className="border-y border-white/8 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel index="01">{t.howWeWork}</SectionLabel>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {t.values.map((value) => (
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
          <SectionLabel index="02">{t.disciplinesSection.label}</SectionLabel>
          <h2 className="font-display mt-6 text-[clamp(1.8rem,3.5vw,3rem)] text-foreground">
            {t.disciplinesSection.title}
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {t.disciplines.map((d) => (
            <a
              key={d.code}
              href={`mailto:${site.email}?subject=${t.applySubject} — ${d.title}`}
              className="group block h-full"
            >
              <GlassPanel className="glow-border-hover h-full p-7 transition-shadow duration-300">
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                  {d.code}
                </span>
                <h3 className="font-display mt-4 text-lg text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.15em] text-primary uppercase">
                  {t.apply}
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
            {t.istanbulNote}
          </p>
          <p className="font-display mt-6 text-[clamp(1.4rem,2.8vw,2.2rem)] text-foreground">
            {t.istanbulPre} <span className="text-muted-foreground">{t.istanbulPost}</span>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
