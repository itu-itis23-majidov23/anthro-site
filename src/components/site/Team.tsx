import { SectionLabel } from "./SectionLabel";

export function Team() {
  return (
    <section id="team" className="relative border-t border-border/60 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="05" label="Team" />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              A small team
              <br />
              of robotics
              <br />
              <span className="text-primary">engineers.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              AnthRo is built by a focused group of engineers and researchers with backgrounds in
              humanoid hardware, control theory, embedded systems, and applied AI. We ship real
              robots, not slide decks.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { k: "Hardware", v: "Mechatronics & actuation" },
                { k: "Software", v: "Control & perception" },
                { k: "Research", v: "Embodied learning" },
              ].map((d) => (
                <div key={d.k} className="border-t border-border pt-4">
                  <div className="font-display text-base tracking-tight">{d.k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {d.v}
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
