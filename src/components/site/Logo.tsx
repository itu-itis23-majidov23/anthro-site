import logo from "@/assets/anthro-logo.svg";

export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="AnthRo logo"
      className={className}
      style={{
        filter: "invert(1) brightness(1.6) contrast(1.2)",
        mixBlendMode: "screen",
      }}
    />
  );
}
