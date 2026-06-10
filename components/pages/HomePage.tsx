import { Hero } from "@/components/sections/home/Hero";
import { MissionStrip } from "@/components/sections/home/MissionStrip";
import { PlatformIntro } from "@/components/sections/home/PlatformIntro";
import { TechnologyPillars } from "@/components/sections/home/TechnologyPillars";
import { ApplicationsBand } from "@/components/sections/home/ApplicationsBand";
import { ResearchTeaser } from "@/components/sections/home/ResearchTeaser";
import { CTABand } from "@/components/sections/home/CTABand";
import { NeuralField } from "@/components/canvas2d/NeuralField";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <main>
      <Hero visual={<HeroCanvas />} locale={locale} />
      <MissionStrip locale={locale} />
      <PlatformIntro locale={locale} />
      <TechnologyPillars locale={locale} />
      <ApplicationsBand locale={locale} />
      <ResearchTeaser background={<NeuralField className="mask-radial opacity-50" />} locale={locale} />
      <CTABand locale={locale} />
    </main>
  );
}
