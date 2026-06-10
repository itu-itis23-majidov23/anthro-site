import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScanLine } from "@/components/hud/ScanLine";
import { GlowText } from "@/components/hud/GlowText";
import { ContactCard } from "@/components/sections/shared/ContactCard";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach AnthRo Industries — partnerships, press, and careers.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <ScanLine />
      <PageHeader
        index="06"
        label="Contact"
        title={
          <>
            Initiate <GlowText>Contact.</GlowText>
          </>
        }
        lede="One channel, read by humans. Tell us what you are building, deploying, or reporting on."
      />

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <Reveal delay={0.15}>
          <ContactCard />
        </Reveal>
      </section>
    </main>
  );
}
