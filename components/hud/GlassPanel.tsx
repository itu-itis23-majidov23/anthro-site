import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined";
};

export function GlassPanel({ children, className, variant = "default" }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative border border-white/8 shadow-[inset_0_1px_0_oklch(1_0_0_/_0.05)]",
        variant === "default" && "bg-surface/60 backdrop-blur-md",
        variant === "elevated" && "bg-surface-elevated/70 backdrop-blur-md",
        variant === "outlined" && "bg-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}
