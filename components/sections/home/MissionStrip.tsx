import { AnimatedCounter } from "@/components/hud/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "1kHz", label: "Whole-body control loop" },
  { value: "32+", label: "Degrees of freedom" },
  { value: "100%", label: "In-house stack" },
];

export function MissionStrip() {
  return (
    <section id="mission" className="border-y border-white/8 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-display max-w-3xl text-[clamp(1.5rem,3vw,2.4rem)] leading-snug text-foreground">
            We are building the machines that will work alongside humanity for the next fifty
            years.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
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
