import { SectionLabel } from "./SectionLabel";
import applications from "@/assets/applications.jpg";

export function Applications() {
  const apps = [
    { code: "LOG-01", title: "Logistics & warehouse", body: "Pick, place, sort, and transport across high-mix fulfillment environments." },
    { code: "IND-02", title: "Industrial work", body: "Repetitive, hazardous, or precision tasks alongside human operators on the line." },
    { code: "PUB-03", title: "Guidance & assistance", body: "Information, wayfinding, and physical assistance in public-facing environments." },
    { code: "FAC-04", title: "Facility operations", body: "Maintenance, monitoring, and routine support tasks across distributed sites." },
    { code: "RES-05", title: "Research platforms", body: "Deployable humanoid platforms for academic and applied robotics research." },
  ];

  return (
    <section id="applications" className="relative border-t border-border/60 py-32">
      <div className="absolute inset-0 bg-grid-fine mask-radial opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel index="03" label="Applications" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              Deployed where
              <br />
              <span className="text-primary">work happens.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              AnthRo platforms are designed for the messy, unstructured reality of physical
              operations — not for laboratory demos.
            </p>

            <div className="relative mt-10 aspect-video overflow-hidden border border-border/80 clip-corner">
              <img
                src={applications}
                alt="Humanoid robot working alongside humans in a warehouse"
                loading="lazy"
                width={1920}
                height={1080}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
                / Field Deployment 2024
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-border/60">
              {apps.map((a, i) => (
                <a
                  key={a.code}
                  href="#contact"
                  className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-border/60 py-7 transition-colors hover:bg-surface/30 sm:gap-10"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    {a.code}
                  </span>
                  <div>
                    <div className="font-display text-2xl tracking-tight sm:text-3xl">
                      {a.title}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground sm:text-base">{a.body}</div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary">
                    →
                  </span>
                  <div
                    className="absolute inset-y-0 left-0 w-px scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100"
                    style={{ transformOrigin: i % 2 ? "bottom" : "top" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
