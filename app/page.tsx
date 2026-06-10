import { Hero } from "@/components/sections/home/Hero";
import { MissionStrip } from "@/components/sections/home/MissionStrip";
import { PlatformIntro } from "@/components/sections/home/PlatformIntro";
import { TechnologyPillars } from "@/components/sections/home/TechnologyPillars";
import { ApplicationsBand } from "@/components/sections/home/ApplicationsBand";
import { ResearchTeaser } from "@/components/sections/home/ResearchTeaser";
import { CTABand } from "@/components/sections/home/CTABand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MissionStrip />
      <PlatformIntro />
      <TechnologyPillars />
      <ApplicationsBand />
      <ResearchTeaser />
      <CTABand />
    </main>
  );
}
