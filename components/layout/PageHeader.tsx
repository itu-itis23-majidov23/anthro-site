import { SectionLabel } from "@/components/hud/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({ index, label, title, lede, className, children }: PageHeaderProps) {
  return (
    <div className={cn("relative overflow-hidden pt-40 pb-20 md:pb-28", className)}>
      <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index={index}>{label}</SectionLabel>
          <h1 className="font-display mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-foreground">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
          )}
          {children}
        </Reveal>
      </div>
    </div>
  );
}
