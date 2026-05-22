import { useState } from "react";
import type { SchematicView } from "@/content/products";

export function SchematicViewer({
  views,
  captionPrefix = "Chassis-Schematic",
}: {
  views: readonly SchematicView[];
  captionPrefix?: string;
}) {
  const [viewId, setViewId] = useState<string>(views[0].id);
  const active = views.find((v) => v.id === viewId) ?? views[0];

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden border border-border/80">
        {views.map((v) => (
          <img
            key={v.id}
            src={v.src}
            alt={`Humanoid robot wireframe schematic — ${v.label} view`}
            loading="lazy"
            width={1280}
            height={1280}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
              v.id === active.id ? "opacity-100 animate-float" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
        <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          / {captionPrefix}-{active.code}
        </div>
      </div>

      <div className="mt-4 flex gap-px bg-border/60">
        {views.map((v) => (
          <button
            key={v.id}
            onClick={() => setViewId(v.id)}
            className={`flex-1 bg-background px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
              v.id === active.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}
