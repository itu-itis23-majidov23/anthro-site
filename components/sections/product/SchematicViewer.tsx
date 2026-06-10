"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import type { SchematicView } from "@/content/products";
import { CornerFrame } from "@/components/hud/CornerFrame";
import { cn } from "@/lib/utils";

export function SchematicViewer({ views }: { views: SchematicView[] }) {
  const [active, setActive] = useState(views[0]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div role="tablist" aria-label="Schematic views" className="flex gap-1">
          {views.map((view) => (
            <button
              key={view.id}
              role="tab"
              aria-selected={view.id === active.id}
              onClick={() => setActive(view)}
              className={cn(
                "px-4 py-2 font-mono text-[12px] tracking-[0.2em] uppercase transition-colors",
                view.id === active.id
                  ? "border border-primary/40 bg-primary/10 text-primary"
                  : "border border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {view.label}
            </button>
          ))}
        </div>
        <span className="hidden font-mono text-[11px] tracking-[0.25em] text-muted-foreground/70 sm:block">
          VIEW {active.code}
        </span>
      </div>

      <CornerFrame size={18} className="mt-5">
        <div className="relative aspect-square overflow-hidden border border-border bg-surface/40">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={active.src}
                alt={`AnthRo R3 schematic — ${active.label.toLowerCase()} view`}
                width={active.width}
                height={active.height}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="size-full object-cover"
              />
              {/* scanline sweep on view change */}
              <m.div
                aria-hidden
                initial={{ top: "-4%" }}
                animate={{ top: "104%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-x-0 h-10 motion-reduce:hidden"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, oklch(0.85 0.14 195 / 0.18), transparent)",
                }}
              />
            </m.div>
          </AnimatePresence>
        </div>
      </CornerFrame>
    </div>
  );
}
