import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import schematicFront from "@/assets/tech-schematic.jpg";
import schematicSide from "@/assets/tech-schematic-side.jpg";
import schematicCutaway from "@/assets/tech-schematic-cutaway.jpg";

const views = [
  { id: "front", label: "Front", code: "R3-F", src: schematicFront },
  { id: "side", label: "Side", code: "R3-S", src: schematicSide },
  { id: "cutaway", label: "Cutaway", code: "R3-X", src: schematicCutaway },
] as const;

export function Technology() {
  const [view, setView] = useState<(typeof views)[number]["id"]>("front");
  const active = views.find((v) => v.id === view)!;
  const stack = [
    { layer: "L05", name: "AI perception systems", detail: "Vision-language-action models for general scene understanding." },
    { layer: "L04", name: "Real-time control", detail: "Whole-body MPC at kilohertz cadence." },
    { layer: "L03", name: "Sensor fusion", detail: "Vision, tactile, IMU, and proprioception in a single state estimator." },
    { layer: "L02", name: "Embedded hardware", detail: "Custom compute and actuator drivers integrated at the chassis level." },
    { layer: "L01", name: "Mechatronics", detail: "Proprietary actuators, structure, and dexterous end-effectors." },
  ];

  return (
    <section id="technology" className="relative border-t border-border/60 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="04" label="Technology Stack" />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              An integrated
              <br />
              robotics
              <br />
              <span className="text-primary">stack.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              From silicon to behavior — every layer of the AnthRo platform is built in-house and
              tuned for embodied performance in the real world.
            </p>

            <div className="relative mt-10 aspect-square max-w-md overflow-hidden border border-border/80">
              {views.map((v) => (
                <img
                  key={v.id}
                  src={v.src}
                  alt={`Humanoid robot wireframe schematic — ${v.label} view`}
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
                    v.id === view ? "opacity-100 animate-float" : "opacity-0"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                / Chassis-Schematic-{active.code}
              </div>
            </div>

            <div className="mt-4 flex max-w-md gap-px bg-border/60">
              {views.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setView(v.id)}
                  className={`flex-1 bg-background px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    v.id === view
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="border-t border-border/60">
              {stack.map((s) => (
                <div
                  key={s.layer}
                  className="group grid grid-cols-[auto_1fr] gap-8 border-b border-border/60 py-6 transition-colors hover:bg-surface/30"
                >
                  <div className="font-mono text-xs text-primary">{s.layer}</div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                    <div className="font-display text-xl tracking-tight sm:text-2xl">{s.name}</div>
                    <div className="font-mono text-xs text-muted-foreground sm:max-w-sm sm:text-right">
                      {s.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px bg-border/60 sm:grid-cols-4">
              {[
                { k: "1kHz", v: "Control loop" },
                { k: "32+", v: "Degrees of freedom" },
                { k: "<10ms", v: "Perception latency" },
                { k: "100%", v: "In-house stack" },
              ].map((m) => (
                <div key={m.v} className="bg-background p-6">
                  <div className="font-display text-3xl tracking-tight text-primary">{m.k}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
