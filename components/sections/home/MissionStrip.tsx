import { AnimatedCounter } from "@/components/hud/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { getDict, type Locale } from "@/lib/i18n";

export function MissionStrip({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale).home.mission;

  return (
    <section id="mission" className="border-y border-white/8 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-display max-w-3xl text-[clamp(1.5rem,3vw,2.4rem)] leading-snug text-foreground">
            {t.statement}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {t.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 * i}>
              <div className="border-l-2 border-primary/40 pl-5">
                <AnimatedCounter
                  value={stat.value}
                  className="font-mono text-4xl text-primary text-glow-soft md:text-5xl"
                />
                <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
