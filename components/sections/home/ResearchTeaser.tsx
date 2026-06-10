import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { getDict, l, type Locale } from "@/lib/i18n";

export function ResearchTeaser({
  background,
  locale = "en",
}: {
  background?: React.ReactNode;
  locale?: Locale;
}) {
  const d = getDict(locale);
  const t = d.home.research;

  return (
    <section className="relative overflow-hidden border-y border-white/8">
      {background ?? <div aria-hidden className="bg-grid-fine mask-radial absolute inset-0 opacity-60" />}

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
        <Reveal>
          <SectionLabel index="04">{t.label}</SectionLabel>
          <h2 className="font-display mt-6 max-w-2xl text-[clamp(1.8rem,3.5vw,3rem)] text-foreground">
            {t.title}
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-10 md:grid-cols-3" staggerDelay={0.12}>
          {d.research.areas.slice(0, 3).map((area) => (
            <div key={area.code} className="border-l border-border pl-6">
              <span className="font-mono text-[10px] tracking-[0.25em] text-primary">
                {area.code}
              </span>
              <h3 className="font-display mt-3 text-lg text-foreground">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.body}</p>
            </div>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <Button href={l(locale, "/research/")} variant="ghost" className="mt-14">
            {t.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
