import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { DataRule } from "@/components/hud/DataRule";
import { GlowText } from "@/components/hud/GlowText";
import { Timeline } from "@/components/sections/shared/Timeline";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { getDict, type Locale } from "@/lib/i18n";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = getDict(locale).about;

  return (
    <main>
      <PageHeader
        index="01"
        label={t.header.label}
        title={
          <>
            {t.header.titlePre}
            <GlowText>{t.header.titleGlow}</GlowText>
          </>
        }
        lede={t.header.lede}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="02">{t.vision.label}</SectionLabel>
          <h2 className="font-display mt-6 text-[clamp(1.8rem,3.5vw,3rem)] text-foreground">
            {t.vision.title}
          </h2>
        </Reveal>
        <div className="mt-14">
          <Timeline entries={t.timeline} />
        </div>
      </section>

      <section className="border-y border-white/8 bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel index="03">{t.principlesSection.label}</SectionLabel>
            <h2 className="font-display mt-6 text-[clamp(1.8rem,3.5vw,3rem)] text-foreground">
              {t.principlesSection.title}
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2" staggerDelay={0.1}>
            {t.principles.map((p) => (
              <GlassPanel key={p.code} className="h-full p-8">
                <span className="font-mono text-[10px] tracking-[0.25em] text-primary">
                  {p.code}
                </span>
                <h3 className="font-display mt-4 text-xl text-foreground">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
              </GlassPanel>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <DataRule label={site.coordinates} />
          <p className="font-display mt-12 text-center text-[clamp(1.5rem,3vw,2.4rem)] text-foreground">
            {t.istanbul.pre} <span className="text-muted-foreground">{t.istanbul.post}</span>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
