import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlowText } from "@/components/hud/GlowText";
import { ScanLine } from "@/components/hud/ScanLine";
import { Reveal } from "@/components/motion/Reveal";
import { getDict, l, type Locale } from "@/lib/i18n";

export function CTABand({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale).home.ctaBand;

  return (
    <section className="relative overflow-hidden">
      <ScanLine />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-tight text-foreground">
            {t.line1}
            <br />
            <GlowText>{t.line2}</GlowText>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={l(locale, "/careers/")} size="lg">
              {t.join}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={l(locale, "/contact/")} variant="ghost" size="lg">
              {t.contact}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
