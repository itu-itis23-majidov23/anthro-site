import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";
import { SchematicViewer } from "./SchematicViewer";
import schematicFront from "@/assets/tech-schematic.jpg";
import schematicSide from "@/assets/tech-schematic-side.jpg";
import schematicCutaway from "@/assets/tech-schematic-cutaway.jpg";

const views = [
  { id: "front", label: "Front", code: "R3-F", src: schematicFront },
  { id: "side", label: "Side", code: "R3-S", src: schematicSide },
  { id: "cutaway", label: "Cutaway", code: "R3-X", src: schematicCutaway },
];

export function Technology() {
  const stack = [
    {
      layer: "L05",
      name: "AI perception systems",
      detail: "Vision-language-action models for general scene understanding.",
    },
    { layer: "L04", name: "Real-time control", detail: "Whole-body MPC at kilohertz cadence." },
    {
      layer: "L03",
      name: "Sensor fusion",
      detail: "Vision, tactile, IMU, and proprioception in a single state estimator.",
    },
    {
      layer: "L02",
      name: "Embedded hardware",
      detail: "Custom compute and actuator drivers integrated at the chassis level.",
    },
    {
      layer: "L01",
      name: "Mechatronics",
      detail: "Proprietary actuators, structure, and dexterous end-effectors.",
    },
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

            <div className="mt-10 max-w-md">
              <SchematicViewer views={views} />
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

            <div className="mt-10">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 border border-border bg-surface/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-all hover:border-primary/60 hover:text-primary"
              >
                View products
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
