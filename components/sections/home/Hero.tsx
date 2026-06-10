import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlowText } from "@/components/hud/GlowText";
import { HeroPoster } from "@/components/three/HeroPoster";
import { Reveal } from "@/components/motion/Reveal";

function HudChrome() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-6 inset-y-20 hidden font-mono text-[10px] tracking-[0.25em] text-muted-foreground/60 uppercase md:block">
      <span className="absolute top-0 left-0 border-t-2 border-l-2 border-primary/30 pt-2 pl-2">
        Anthro Industries // Humanoid Systems
      </span>
      <span className="absolute top-0 right-0 border-t-2 border-r-2 border-primary/30 pt-2 pr-2 text-right">
        SYS.R3 — Online
      </span>
      <span className="absolute bottom-0 left-0 border-b-2 border-l-2 border-primary/30 pb-2 pl-2">
        41.10°N 29.02°E
      </span>
      <span className="absolute right-0 bottom-0 border-r-2 border-b-2 border-primary/30 pr-2 pb-2 text-right">
        CTRL 1kHz · DOF 32+ · LAT &lt;10ms
      </span>
    </div>
  );
}

export function Hero({ visual }: { visual?: React.ReactNode }) {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {visual ?? <HeroPoster />}
      <HudChrome />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          <Reveal delay={0.1}>
            <p className="font-mono text-[12px] tracking-[0.3em] text-primary uppercase">
              Anthropomorphic Robotic Industries
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <h1 className="font-display mt-6 text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.02] text-foreground">
              Where Artificial Intelligence Becomes{" "}
              <GlowText>Physical.</GlowText>
            </h1>
          </Reveal>

          <Reveal delay={0.45}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              AnthRo Industries designs and builds general-purpose humanoid robots — hardware,
              intelligence, and control, engineered as one system.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/products/anthro-r3/" size="lg">
                Explore the R3 Platform
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/technology/" variant="ghost" size="lg">
                Our Technology
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#mission"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <ChevronDown className="size-5 motion-safe:animate-float" />
      </a>
    </section>
  );
}
