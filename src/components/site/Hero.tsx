import heroRobot from "@/assets/hero-robot.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroRobot}
          alt="AnthRo humanoid robot prototype"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-60 animate-grid-pulse" />

      {/* Scanline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between px-6 py-16">
        {/* Top meta */}
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            System / Online
          </span>
          <span className="hidden sm:inline">v0.1 — Anthropomorphic Series</span>
        </div>

        {/* Center content */}
        <div className="max-w-4xl">
          <div
            className="mb-8 inline-flex items-center gap-3 border border-border/80 bg-surface/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-1 w-1 bg-primary" />
            Humanoid Robotics — Building in Stealth
          </div>

          <h1
            className="font-display text-[20vw] leading-[0.85] tracking-tighter sm:text-[14vw] md:text-[180px] opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Anth<span className="text-primary text-glow">Ro</span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-2xl font-light leading-tight tracking-tight text-foreground/90 sm:text-3xl md:text-4xl opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Building anthropomorphic robots
            <br />
            for the physical world.
          </p>

          <p
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            General-purpose humanoid systems engineered to extend human capability across logistics,
            industry, and the environments we share every day.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href="#technology"
              className="group relative inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.85_0.14_195/0.5)]"
            >
              Explore Technology
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-border bg-surface/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
            >
              Contact Us
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-4">
          <div>
            <div className="text-primary">[01]</div>
            <div className="mt-1 text-foreground">Perception</div>
          </div>
          <div>
            <div className="text-primary">[02]</div>
            <div className="mt-1 text-foreground">Locomotion</div>
          </div>
          <div>
            <div className="text-primary">[03]</div>
            <div className="mt-1 text-foreground">Manipulation</div>
          </div>
          <div>
            <div className="text-primary">[04]</div>
            <div className="mt-1 text-foreground">Cognition</div>
          </div>
        </div>
      </div>
    </section>
  );
}
