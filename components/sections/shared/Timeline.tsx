"use client";

import { useRef } from "react";
import { m, useScroll, useSpring } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";

type TimelineEntry = { year: string; title: string; body: string };

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative ml-2 space-y-14 border-l border-border pl-10 md:ml-6">
      <m.span
        aria-hidden
        className="absolute top-0 -left-px w-px origin-top bg-primary shadow-[0_0_12px_oklch(0.85_0.14_195_/_0.6)]"
        style={{ scaleY: progress, height: "100%" }}
      />
      {entries.map((entry, i) => (
        <li key={entry.year} className="relative">
          <span
            aria-hidden
            className="absolute top-1.5 -left-[45px] size-2 rounded-full border border-primary bg-background md:-left-[45px]"
          />
          <Reveal delay={0.05 * i}>
            <span className="font-mono text-[12px] tracking-[0.25em] text-primary uppercase">
              {entry.year}
            </span>
            <h3 className="font-display mt-2 text-xl text-foreground">{entry.title}</h3>
            <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{entry.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
