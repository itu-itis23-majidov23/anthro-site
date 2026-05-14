import { SectionLabel } from "./SectionLabel";
import robotHand from "@/assets/robot-hand.jpg";

export function WhatWeBuild() {
  const items = [
    { n: "01", title: "Humanoid systems", desc: "Full-body bipedal platforms designed for unstructured human environments." },
    { n: "02", title: "Motion & locomotion", desc: "Dynamic balance, terrain adaptation, and whole-body control at human scale." },
    { n: "03", title: "AI perception", desc: "Multi-modal sensing and decision making for unstructured, real-world spaces." },
    { n: "04", title: "Manipulation", desc: "Dexterous hands and tactile interaction for grasping the unfamiliar." },
    { n: "05", title: "Collaboration", desc: "Human-robot interfaces engineered for safety, intent, and trust." },
    { n: "06", title: "Embodied compute", desc: "On-device inference stacks tuned for low-latency physical control." },
  ];

  return (
    <section id="build" className="relative border-t border-border/60 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="02" label="What We Build" />

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="sticky top-24">
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
                Hardware,
                <br />
                software,
                <br />
                <span className="text-primary">embodied.</span>
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                Our stack is built end-to-end — from actuators and sensors to perception models and
                whole-body control loops. Every layer engineered as a single integrated system.
              </p>

              <div className="relative mt-12 aspect-[3/4] max-w-sm overflow-hidden border border-border/80 clip-corner">
                <img
                  src={robotHand}
                  alt="Articulated humanoid robotic hand"
                  loading="lazy"
                  width={1080}
                  height={1920}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
                  / Manipulator-IV
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border/60 sm:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.n}
                className="group relative bg-background p-8 transition-colors hover:bg-surface/40"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                  {it.n}
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                <div className="absolute right-4 top-4 h-2 w-2 border border-primary/60 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
