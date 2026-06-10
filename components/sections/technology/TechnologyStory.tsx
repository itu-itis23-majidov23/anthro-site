"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { TechnologyPillar } from "@/content/technology";
import { SectionLabel } from "@/components/hud/SectionLabel";
import { CornerFrame } from "@/components/hud/CornerFrame";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function PillarVisual({ pillar, index, total }: { pillar: TechnologyPillar; index: number; total: number }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="flex items-baseline justify-between font-mono text-muted-foreground">
        <span className="text-[11px] tracking-[0.3em]">{pillar.code}</span>
        <span className="text-[11px] tracking-[0.3em]">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <CornerFrame size={18} className="mt-5">
        <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface/40">
          {pillar.image ? (
            <Image
              src={pillar.image.src}
              alt={pillar.image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="bg-grid-fine mask-radial absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[7rem] text-primary/15">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          )}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
          />
          <span className="absolute bottom-4 left-4 font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
            {pillar.title}
          </span>
        </div>
      </CornerFrame>
    </div>
  );
}

function PillarText({ pillar, index }: { pillar: TechnologyPillar; index: number }) {
  return (
    <div>
      <SectionLabel index={String(index + 1).padStart(2, "0")}>{pillar.title}</SectionLabel>
      <h2 className="font-display mt-6 text-[clamp(1.7rem,3vw,2.6rem)] leading-tight text-foreground">
        {pillar.headline}
      </h2>
      <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{pillar.body}</p>
      <ul className="mt-8 space-y-3">
        {pillar.capabilities.map((cap) => (
          <li key={cap} className="flex items-center gap-3 font-mono text-[13px] tracking-[0.1em] text-foreground/85">
            <span aria-hidden className="size-1 bg-primary" />
            {cap}
          </li>
        ))}
      </ul>
      {/* visual inline on mobile, pinned column on desktop */}
      <div className="mt-10 lg:hidden">
        <PillarVisual pillar={pillar} index={index} total={6} />
      </div>
    </div>
  );
}

export function TechnologyStory({ pillars }: { pillars: TechnologyPillar[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const blocks = gsap.utils.toArray<HTMLElement>("[data-pillar-block]");
        blocks.forEach((block, i) => {
          ScrollTrigger.create({
            trigger: block,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => {
              if (self.isActive) setActive(i);
            },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-6">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20">
        <div>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.code}
              data-pillar-block
              className="flex min-h-0 items-center py-16 lg:min-h-[80vh] lg:py-0"
            >
              <PillarText pillar={pillar} index={i} />
            </div>
          ))}
        </div>

        {/* pinned visual column (CSS sticky — robust inside animated ancestors) */}
        <div className="hidden lg:block">
          <div className="sticky top-20 h-[calc(100vh-10rem)]">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.code}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  i === active ? "opacity-100" : "pointer-events-none opacity-0",
                )}
                aria-hidden={i !== active}
              >
                <PillarVisual pillar={pillar} index={i} total={pillars.length} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
