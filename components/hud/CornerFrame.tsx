import { cn } from "@/lib/utils";

type CornerFrameProps = {
  children: React.ReactNode;
  className?: string;
  size?: number;
  color?: string;
};

export function CornerFrame({
  children,
  className,
  size = 14,
  color = "border-primary/40",
}: CornerFrameProps) {
  const corners = [
    "top-0 left-0 border-t-2 border-l-2",
    "top-0 right-0 border-t-2 border-r-2",
    "bottom-0 left-0 border-b-2 border-l-2",
    "bottom-0 right-0 border-b-2 border-r-2",
  ];

  return (
    <div className={cn("relative", className)}>
      {corners.map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={cn("pointer-events-none absolute z-10", pos, color)}
          style={{ width: size, height: size }}
        />
      ))}
      {children}
    </div>
  );
}
