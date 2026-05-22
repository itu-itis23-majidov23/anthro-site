import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";
import { SchematicViewer } from "@/components/site/SchematicViewer";
import { getProduct, products } from "@/content/products";

export const Route = createFileRoute("/products/$slug")({
  component: ProductDetail,
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) return {};
    return {
      meta: [
        { title: `${product.name} — AnthRo` },
        { name: "description", content: product.summary },
        { property: "og:title", content: `${product.name} — AnthRo` },
        { property: "og:description", content: product.summary },
      ],
    };
  },
});

const statusLabel = {
  development: "In development",
  available: "Available",
  research: "Research",
} as const;

function ProductDetail() {
  const { product } = Route.useLoaderData();

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden border-b border-border/60 py-24">
        <div className="absolute inset-0 bg-grid mask-radial opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <Link to="/products" className="transition-colors hover:text-foreground">
              ← Products
            </Link>
            <span className="h-px flex-1 max-w-16 bg-border" />
            <span className="text-primary">{product.code}</span>
            <span>/ {statusLabel[product.status]}</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
                {product.name.split(" ").map((part, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-primary text-glow">
                      {part}
                    </span>
                  ) : (
                    <span key={i}>{part} </span>
                  ),
                )}
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-tight font-light text-foreground/90 sm:text-2xl">
                {product.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {product.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <SchematicViewer views={product.views} captionPrefix={`Chassis-Schematic`} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="01" label="Specifications" />
          <div className="grid grid-cols-1 gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {product.specs.map((s) => (
              <div key={s.label} className="bg-background p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-3 font-display text-3xl tracking-tight">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="02" label="Performance" />
          <div className="grid grid-cols-2 gap-px bg-border/60 sm:grid-cols-4">
            {product.metrics.map((m) => (
              <div key={m.label} className="bg-background p-6">
                <div className="font-display text-3xl tracking-tight text-primary">{m.value}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="03" label="Applications" />
          <div className="border-t border-border/60">
            {product.applications.map((a) => (
              <div
                key={a.code}
                className="grid grid-cols-[auto_1fr] items-center gap-6 border-b border-border/60 py-7 transition-colors hover:bg-surface/30 sm:gap-10"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {a.code}
                </span>
                <div>
                  <div className="font-display text-2xl tracking-tight sm:text-3xl">{a.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground sm:text-base">{a.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Interested in the {product.code}?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            We're talking with partners about pilots, deployments, and research collaborations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.85_0.14_195/0.5)]"
            >
              Contact us
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            {products.length > 1 && (
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 border border-border bg-surface/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-all hover:border-primary/60 hover:text-primary"
              >
                Other products
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
