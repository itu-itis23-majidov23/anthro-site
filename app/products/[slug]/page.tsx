import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getProduct, products } from "@/content/products";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { StatusBadge } from "@/components/hud/StatusBadge";
import { AnimatedCounter } from "@/components/hud/AnimatedCounter";
import { SpecReadout } from "@/components/hud/SpecReadout";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { GlowText } from "@/components/hud/GlowText";
import { Button } from "@/components/ui/Button";
import { SchematicViewer } from "@/components/sections/product/SchematicViewer";
import { Reveal, Stagger } from "@/components/motion/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main>
      {/* Program hero */}
      <div className="relative overflow-hidden pt-40 pb-16">
        <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>{`${product.code} — General-Purpose Humanoid Platform`}</SectionLabel>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-foreground">
                {product.name.replace(product.code, "")}
                <GlowText>{product.code}</GlowText>
              </h1>
              <StatusBadge status={product.status} />
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Metrics row */}
      <section className="border-y border-white/8 bg-surface/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 lg:grid-cols-4">
          {product.metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={0.1 * i}>
              <div className="border-l-2 border-primary/40 pl-5">
                <AnimatedCounter
                  value={metric.value}
                  className="font-mono text-3xl text-primary text-glow-soft md:text-4xl"
                />
                <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Schematics + specs */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SchematicViewer views={product.views} />
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel index="01">Specifications</SectionLabel>
              <h2 className="font-display mt-6 text-3xl text-foreground">Platform data.</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 divide-y divide-border/60">
                {product.specs.map((spec) => (
                  <SpecReadout key={spec.label} label={spec.label} value={spec.value} />
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="border-y border-white/8 bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel index="02">Deployment</SectionLabel>
            <h2 className="font-display mt-6 text-3xl text-foreground">Where {product.code} works.</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3" staggerDelay={0.12}>
            {product.applications.map((app) => (
              <GlassPanel key={app.code} className="h-full p-7">
                <span className="font-mono text-[10px] tracking-[0.25em] text-primary">
                  {app.code}
                </span>
                <h3 className="font-display mt-4 text-lg text-foreground">{app.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{app.body}</p>
              </GlassPanel>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Program CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] text-foreground">
            Partner with the {product.code} program.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We work with a small number of deployment partners in logistics and industry.
          </p>
          <Button href="/contact/" size="lg" className="mt-10">
            Contact AnthRo
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
