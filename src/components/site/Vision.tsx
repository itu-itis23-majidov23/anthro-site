import { SectionLabel } from "./SectionLabel";

export function Vision() {
  const points = [
    {
      n: "01",
      title: "Shared environments",
      body: "Humans and humanoid robots operating side-by-side in factories, warehouses, and public spaces — not in cages, but in collaboration.",
    },
    {
      n: "02",
      title: "Physical agents",
      body: "Robots as embodied intelligence — performing labor, providing assistance, and interacting with the physical world at human scale.",
    },
    {
      n: "03",
      title: "Scalable deployment",
      body: "A single platform, a thousand contexts. General-purpose robotics intelligence engineered to be deployed at scale, anywhere humans work.",
    },
  ];

  return (
    <section id="vision" className="relative border-t border-border/60 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="01" label="Vision" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              The next generation of
              <br />
              <span className="text-primary">physical intelligence.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              We believe the next major platform shift is not on the screen — it is in the physical
              world. Humanoid robots will be the interface between intelligence and matter.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="space-y-px">
              {points.map((p) => (
                <div
                  key={p.n}
                  className="group relative grid grid-cols-[auto_1fr] gap-8 border-t border-border/60 py-8 transition-colors hover:bg-surface/30"
                >
                  <div className="font-mono text-xs text-primary">{p.n}</div>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100 origin-left" />
                </div>
              ))}
              <div className="border-t border-border/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
