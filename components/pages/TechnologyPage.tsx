import { PageHeader } from "@/components/layout/PageHeader";
import { GlowText } from "@/components/hud/GlowText";
import { AnimatedCounter } from "@/components/hud/AnimatedCounter";
import { TechnologyStory } from "@/components/sections/technology/TechnologyStory";
import { Reveal } from "@/components/motion/Reveal";
import { getDict, type Locale } from "@/lib/i18n";

export function TechnologyPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const t = d.technology;
  const metrics = d.products.items[0].metrics;

  return (
    <main>
      <PageHeader
        index="02"
        label={t.header.label}
        title={
          <>
            {t.header.titlePre}
            <GlowText>{t.header.titleGlow}</GlowText>
          </>
        }
        lede={t.header.lede}
      />

      <TechnologyStory pillars={t.pillars} />

      <section className="mt-24 border-y border-white/8 bg-surface/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={0.1 * i}>
              <div className="border-l-2 border-primary/40 pl-5">
                <AnimatedCounter
                  value={metric.value}
                  className="font-mono text-3xl text-primary text-glow-soft md:text-4xl"
                />
                <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
