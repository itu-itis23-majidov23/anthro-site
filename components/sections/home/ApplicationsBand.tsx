import Image from "next/image";
import { products } from "@/content/products";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { Reveal, Stagger } from "@/components/motion/Reveal";

export function ApplicationsBand() {
  const applications = products[0].applications;

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/applications.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
        <Reveal>
          <SectionLabel index="03">Deployment</SectionLabel>
          <h2 className="font-display mt-6 max-w-2xl text-[clamp(1.8rem,3.5vw,3rem)] text-foreground">
            Built for the places work actually happens.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" staggerDelay={0.12}>
          {applications.map((app) => (
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
  );
}
