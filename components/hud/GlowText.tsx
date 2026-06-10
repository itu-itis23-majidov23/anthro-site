import { cn } from "@/lib/utils";

type GlowTextProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: "soft" | "strong";
};

export function GlowText({ children, className, intensity = "strong" }: GlowTextProps) {
  return (
    <span className={cn("text-primary", intensity === "strong" ? "text-glow" : "text-glow-soft", className)}>
      {children}
    </span>
  );
}
