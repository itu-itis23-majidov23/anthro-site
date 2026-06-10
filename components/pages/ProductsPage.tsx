import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { CornerFrame } from "@/components/hud/CornerFrame";
import { StatusBadge } from "@/components/hud/StatusBadge";
import { GlowText } from "@/components/hud/GlowText";
import { Reveal } from "@/components/motion/Reveal";
import { getDict, l, type Locale } from "@/lib/i18n";

export function ProductsPage({ locale }: { locale: Locale }) {
  const t = getDict(locale).products;
  const r3 = t.items[0];
  const r4 = t.r4;

  return (
    <main>
      <PageHeader
        index="03"
        label={t.header.label}
        title={
          <>
            {t.header.titlePre}
            <GlowText>{t.header.titleGlow}</GlowText>
          </>
        }
        lede={t.header.lede}
      />

      <section className="mx-auto max-w-7xl space-y-8 px-6 pb-32">
        {/* R3 — flagship program */}
        <Reveal>
          <Link href={l(locale, `/products/${r3.slug}/`)} className="group block">
            <GlassPanel className="glow-border-hover overflow-hidden transition-shadow duration-300">
              <div className="grid lg:grid-cols-[2fr_3fr]">
                <CornerFrame className="m-6 lg:m-8">
                  <div className="relative aspect-square overflow-hidden border border-border bg-surface/40 lg:aspect-auto lg:h-full">
                    <Image
                      src={r3.views[0].src}
                      alt={`AnthRo R3 — ${r3.views[0].label}`}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </CornerFrame>

                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
                      {t.program} {r3.code}
                    </span>
                    <StatusBadge status={r3.status} />
                  </div>
                  <h2 className="font-display mt-5 text-3xl text-foreground md:text-4xl">
                    {r3.name}
                  </h2>
                  <p className="mt-3 text-lg text-muted-foreground">{r3.summary}</p>

                  <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-8 sm:grid-cols-4">
                    {r3.specs.slice(0, 4).map((spec) => (
                      <div key={spec.label}>
                        <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-mono text-lg text-foreground">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <span className="mt-10 inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.12em] text-primary uppercase">
                    {t.viewProgram}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </GlassPanel>
          </Link>
        </Reveal>

        {/* R4 — classified teaser */}
        <Reveal delay={0.1}>
          <GlassPanel variant="outlined" className="relative overflow-hidden border-violet/20 p-8 lg:p-12">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "repeating-linear-gradient(45deg, transparent, transparent 6px, oklch(0.62 0.16 290 / 0.06) 6px, oklch(0.62 0.16 290 / 0.06) 7px)",
              }}
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
                    {t.program} {r4.code}
                  </span>
                  <StatusBadge status="classified" />
                </div>
                <h2 className="font-display mt-5 text-3xl text-foreground/70 blur-[0.4px] md:text-4xl">
                  {r4.name}
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">{r4.summary}</p>
              </div>
              <Lock aria-hidden className="size-10 shrink-0 text-violet/50" />
            </div>
          </GlassPanel>
        </Reveal>

        {/* Future platforms ghost slot */}
        <Reveal delay={0.2}>
          <div className="flex items-center justify-center border border-dashed border-border/60 p-12 text-center">
            <p className="font-mono text-[12px] tracking-[0.25em] text-muted-foreground uppercase">
              {t.futureSlot}
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
