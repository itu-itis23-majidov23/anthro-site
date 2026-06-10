import type { Metadata } from "next";
import { technologyPillars } from "@/content/technology";
import { products } from "@/content/products";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowText } from "@/components/hud/GlowText";
import { AnimatedCounter } from "@/components/hud/AnimatedCounter";
import { TechnologyStory } from "@/components/sections/technology/TechnologyStory";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Humanoid robotics, AI systems, autonomy, robotics software, physical intelligence, and simulation — engineered as one system at AnthRo.",
};

export default function TechnologyPage() {
  return (
    <main>
      <PageHeader
        index="02"
        label="Technology"
        title={
          <>
            One System. Engineered <GlowText>End-to-End.</GlowText>
          </>
        }
        lede="A humanoid robot is not a collection of subsystems. Actuation, perception, control, and intelligence only perform when they are designed together — so we build all of them."
      />

      <TechnologyStory pillars={technologyPillars} />

      {/* Closing stat band */}
      <section className="mt-24 border-y border-white/8 bg-surface/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 lg:grid-cols-4">
          {products[0].metrics.map((metric, i) => (
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
