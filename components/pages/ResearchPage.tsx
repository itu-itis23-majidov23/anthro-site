import { PageHeader } from "@/components/layout/PageHeader";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { GlowText } from "@/components/hud/GlowText";
import { DataRule } from "@/components/hud/DataRule";
import { NeuralField } from "@/components/canvas2d/NeuralField";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { getDict, type Locale } from "@/lib/i18n";

export function ResearchPage({ locale }: { locale: Locale }) {
  const t = getDict(locale).research;

  return (
    <main>
      <div className="relative">
        <NeuralField className="mask-fade-b opacity-70" />
        <PageHeader
          index="04"
          label={t.header.label}
          title={
            <>
              {t.header.titlePre}
              <GlowText>{t.header.titleGlow}</GlowText>
            </>
          }
          lede={t.header.lede}
          className="bg-transparent"
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {t.areas.map((area) => (
            <GlassPanel key={area.code} className="glow-border-hover h-full p-8 transition-shadow duration-300">
              <span className="font-mono text-[10px] tracking-[0.25em] text-primary">
                {area.code}
              </span>
              <h2 className="font-display mt-4 text-xl text-foreground">{area.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.body}</p>
            </GlassPanel>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32 text-center">
        <Reveal>
          <DataRule label={t.doctrineLabel} />
          <p className="font-display mt-10 text-[clamp(1.4rem,2.8vw,2.2rem)] text-foreground">
            {t.doctrinePre} <span className="text-muted-foreground">{t.doctrinePost}</span>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
