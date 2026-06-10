"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/content/site";
import { CornerFrame } from "@/components/hud/CornerFrame";
import { GlassPanel } from "@/components/hud/GlassPanel";
import { DataRule } from "@/components/hud/DataRule";

export function ContactCard() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
  }

  return (
    <CornerFrame size={18}>
      <GlassPanel className="px-8 py-12 text-center md:px-16">
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
          Direct Channel
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="font-display text-2xl text-primary text-glow-soft transition-colors hover:text-glow md:text-3xl"
          >
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            {copied ? <Check className="size-5 text-signal" /> : <Copy className="size-5" />}
          </button>
        </div>

        <p className="mt-6 font-mono text-[12px] tracking-[0.2em] text-muted-foreground uppercase">
          Partnerships · Press · Careers
        </p>

        <DataRule className="mt-10" />

        <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          {site.location} — {site.coordinates}
        </p>
      </GlassPanel>
    </CornerFrame>
  );
}
