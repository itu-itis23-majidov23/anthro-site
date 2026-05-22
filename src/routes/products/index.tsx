import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";
import { products } from "@/content/products";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  head: () => ({
    meta: [
      { title: "Products — AnthRo" },
      {
        name: "description",
        content:
          "AnthRo's humanoid robot platforms — built end-to-end for unstructured human environments.",
      },
      { property: "og:title", content: "AnthRo Products" },
      {
        property: "og:description",
        content: "Humanoid robot platforms for logistics, industrial, and real-world deployment.",
      },
    ],
  }),
});

const statusLabel: Record<(typeof products)[number]["status"], string> = {
  development: "In development",
  available: "Available",
  research: "Research",
};

function ProductsIndex() {
  return (
    <main className="pt-16">
      <section className="relative overflow-hidden border-b border-border/60 py-32">
        <div className="absolute inset-0 bg-grid mask-radial opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel index="00" label="Products" />
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Humanoid
            <br />
            <span className="text-primary text-glow">platforms.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            One stack, many contexts. Our robots are built end-to-end — proprietary actuators,
            in-house control, embodied AI — and engineered for deployment in the environments humans
            already work in.
          </p>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-px bg-border/60 md:grid-cols-2">
            {products.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative flex flex-col bg-background p-10 transition-colors hover:bg-surface/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    {p.code}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {statusLabel[p.status]}
                  </span>
                </div>

                <div className="relative mt-8 aspect-square w-full overflow-hidden border border-border/60">
                  <img
                    src={p.views[0].src}
                    alt={`${p.name} schematic`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                </div>

                <h2 className="mt-10 font-display text-4xl tracking-tight sm:text-5xl">{p.name}</h2>
                <p className="mt-3 text-base text-muted-foreground">{p.tagline}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-primary">
                  View specs
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}

            <div className="relative flex flex-col justify-between bg-background p-10 opacity-70">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  R4
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Upcoming
                </span>
              </div>
              <div className="my-12 flex aspect-square w-full items-center justify-center border border-dashed border-border/60 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                / Classified
              </div>
              <div>
                <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Next platform</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Under development. Details on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
