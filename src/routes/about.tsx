import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — AnthRo" },
      {
        name: "description",
        content:
          "AnthRo is a humanoid robotics company building general-purpose physical intelligence — from mechatronics to embodied AI, in-house, end-to-end.",
      },
      { property: "og:title", content: "About AnthRo" },
      {
        property: "og:description",
        content: "The team building anthropomorphic robots for the physical world.",
      },
    ],
  }),
});

function About() {
  const principles = [
    {
      n: "01",
      title: "Ship hardware, not slides.",
      body: "Robotics is a physical discipline. Every quarter we ship measurable progress on a real chassis.",
    },
    {
      n: "02",
      title: "End-to-end ownership.",
      body: "Actuators to AI, every layer is built in-house. Integration is the moat.",
    },
    {
      n: "03",
      title: "Deploy where work happens.",
      body: "Lab demos don't generalize. We engineer for the messy, unstructured environments humans actually work in.",
    },
    {
      n: "04",
      title: "Safety as a system property.",
      body: "Robots operate alongside people. Safety is engineered into mechanics, control, and behavior — not bolted on.",
    },
  ];

  const milestones = [
    { year: "2023", body: "Founded. First locomotion prototype." },
    { year: "2024", body: "R2 chassis. Whole-body MPC running at 1 kHz." },
    { year: "2025", body: "R3 platform — in-house actuators, sensor fusion, perception." },
    { year: "2026", body: "Pilot deployments in logistics and industrial environments." },
  ];

  const disciplines = [
    { k: "Hardware", v: "Mechatronics, actuation, structure, end-effectors." },
    { k: "Software", v: "Whole-body control, sensor fusion, embedded systems." },
    { k: "Research", v: "Embodied learning, perception, vision-language-action." },
    { k: "Operations", v: "Field deployment, safety engineering, integration." },
  ];

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden border-b border-border/60 py-32">
        <div className="absolute inset-0 bg-grid mask-radial opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel index="00" label="About" />
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            We build humanoid robots
            <br />
            <span className="text-primary text-glow">for the physical world.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            AnthRo is a humanoid robotics company. We engineer general-purpose physical intelligence
            — mechatronics, real-time control, and embodied AI — as a single integrated platform,
            deployed where work happens.
          </p>
        </div>
      </section>

      <section className="relative border-b border-border/60 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="01" label="Mission" />
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
                Intelligence
                <br />
                meets <span className="text-primary">matter.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                The last platform shift happened on screens. The next one is happening in the
                physical world. Humanoid robots are the interface between general-purpose
                intelligence and the environments humans already inhabit — factories, warehouses,
                public spaces, homes.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our mission is to make that interface real, safe, and useful. Not in a research lab,
                but in the places where work happens every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border/60 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="02" label="Principles" />
          <div className="grid grid-cols-1 gap-px bg-border/60 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.n}
                className="group relative bg-background p-8 transition-colors hover:bg-surface/40"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                  {p.n}
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-border/60 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="03" label="The team" />
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
                A small,
                <br />
                deeply technical
                <br />
                <span className="text-primary">team.</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                AnthRo is built by engineers and researchers with backgrounds in humanoid hardware,
                control theory, embedded systems, and applied AI. We are intentionally small. Every
                person ships.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <div className="grid grid-cols-1 gap-px bg-border/60 sm:grid-cols-2">
                {disciplines.map((d) => (
                  <div key={d.k} className="bg-background p-6">
                    <div className="font-display text-xl tracking-tight">{d.k}</div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {d.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border/60 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="04" label="Milestones" />
          <div className="border-t border-border/60">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="grid grid-cols-[auto_1fr] gap-8 border-b border-border/60 py-6 transition-colors hover:bg-surface/30"
              >
                <div className="font-mono text-xs text-primary">{m.year}</div>
                <div className="font-display text-xl tracking-tight sm:text-2xl">{m.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Want to build with us?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            We're hiring across hardware, software, and research. Partnership and deployment
            conversations welcome.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.85_0.14_195/0.5)]"
            >
              See the platform
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-3 border border-border bg-surface/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-all hover:border-primary/60 hover:text-primary"
            >
              Contact us
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
