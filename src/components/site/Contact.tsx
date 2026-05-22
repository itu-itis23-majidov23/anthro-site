export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/60 py-32">
      <div className="absolute inset-0 bg-grid mask-radial opacity-50" />
      <div
        className="absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-3 border border-border bg-surface/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
          <span className="h-1 w-1 animate-pulse bg-primary" />
          Now Building / Hiring / Partnering
        </div>

        <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          We are building the
          <br />
          next generation of
          <br />
          <span className="text-primary text-glow">humanoid robotics.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          For partnerships, deployments, talent, or investment inquiries — let's talk.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="mailto:info@anthro.industries"
            className="group inline-flex items-center gap-4 border border-primary/40 bg-surface/40 px-8 py-5 font-mono text-sm tracking-wide text-foreground backdrop-blur transition-all hover:border-primary hover:shadow-[0_0_60px_oklch(0.85_0.14_195/0.3)]"
          >
            <span className="h-2 w-2 bg-primary" />
            info@anthro.industries
            <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Response within 48 hours
          </span>
        </div>
      </div>
    </section>
  );
}
