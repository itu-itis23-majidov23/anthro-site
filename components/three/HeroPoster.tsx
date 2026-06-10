/**
 * Static hero backdrop: shown before the WebGL scene mounts, for
 * reduced-motion users, and as the no-WebGL fallback. Pure CSS — costs nothing.
 */
export function HeroPoster() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* deep radial energy core */}
      <div
        className="absolute top-1/2 left-1/2 size-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.45 0.1 210 / 0.35), oklch(0.25 0.06 220 / 0.15) 40%, transparent 70%)",
        }}
      />
      {/* perspective holo-grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[42%] opacity-50"
        style={{
          background:
            "linear-gradient(to right, oklch(0.85 0.14 195 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.85 0.14 195 / 0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          transform: "perspective(600px) rotateX(60deg)",
          transformOrigin: "center top",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      {/* horizon glow line */}
      <div className="absolute inset-x-0 top-[58%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, oklch(0.14 0.012 240 / 0.9) 95%)",
        }}
      />
    </div>
  );
}
