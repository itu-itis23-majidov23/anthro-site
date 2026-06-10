import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CornerFrame } from "@/components/hud/CornerFrame";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { StatusBadge } from "@/components/hud/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { getDict, l, type Locale } from "@/lib/i18n";

export function PlatformIntro({ locale = "en" }: { locale?: Locale }) {
  const d = getDict(locale);
  const t = d.home.platform;
  const r3 = d.products.items[0];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <CornerFrame className="clip-corner">
            <Image
              src="/images/hero-robot.avif"
              alt="AnthRo R3"
              width={1920}
              height={1080}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full object-cover"
            />
          </CornerFrame>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel index="01">{t.label}</SectionLabel>
            <div className="mt-6 flex items-center gap-4">
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] text-foreground">
                AnthRo {r3.code}
              </h2>
              <StatusBadge status="development" />
            </div>
            <p className="mt-3 font-mono text-sm tracking-[0.15em] text-primary uppercase">
              {r3.tagline}
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">{r3.description}</p>
          </Reveal>

          <Reveal delay={0.15}>
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
          </Reveal>

          <Reveal delay={0.25}>
            <Button href={l(locale, `/products/${r3.slug}/`)} variant="ghost" className="mt-10">
              {t.viewProgram}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
