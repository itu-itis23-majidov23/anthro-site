import { Button } from "@/components/ui/Button";
import { GlowText } from "@/components/hud/GlowText";
import { ScanLine } from "@/components/hud/ScanLine";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <div aria-hidden className="bg-grid mask-radial absolute inset-0 opacity-40" />
      <ScanLine />
      <div className="relative px-6 text-center">
        <p className="font-mono text-[12px] tracking-[0.3em] text-muted-foreground uppercase">
          Signal Lost
        </p>
        <h1 className="font-display mt-4 text-7xl text-foreground md:text-8xl">
          <GlowText>404</GlowText>
        </h1>
        <p className="mt-6 text-muted-foreground">
          The coordinates you requested do not resolve to any known system.
        </p>
        <Button href="/" variant="ghost" className="mt-10">
          Return to Base
        </Button>
      </div>
    </main>
  );
}
