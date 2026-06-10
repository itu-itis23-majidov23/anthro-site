import type { Metadata } from "next";
import { researchAreas } from "@/content/research";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { GlowText } from "@/components/hud/GlowText";
import { DataRule } from "@/components/hud/DataRule";
import { NeuralField } from "@/components/canvas2d/NeuralField";
import { Reveal, Stagger } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Reinforcement learning, vision-language-action models, robot learning, navigation, human-robot interaction, and multi-agent systems at AnthRo.",
};

export default function ResearchPage() {
  return (
    <main>
      <div className="relative">
        <NeuralField className="mask-fade-b opacity-70" />
        <PageHeader
          index="04"
          label="Research"
          title={
            <>
              Advancing <GlowText>Physical Intelligence.</GlowText>
            </>
          }
          lede="Six research programs, one constraint: everything must run on the robot. We publish less and deploy more."
          className="bg-transparent"
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {researchAreas.map((area) => (
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
          <DataRule label="R&D Doctrine" />
          <p className="font-display mt-10 text-[clamp(1.4rem,2.8vw,2.2rem)] text-foreground">
            Research at AnthRo is not exploratory.{" "}
            <span className="text-muted-foreground">It ships to hardware.</span>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
