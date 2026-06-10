import { PageHeader } from "@/components/layout/PageHeader";
import { ScanLine } from "@/components/hud/ScanLine";
import { GlowText } from "@/components/hud/GlowText";
import { ContactCard } from "@/components/sections/shared/ContactCard";
import { Reveal } from "@/components/motion/Reveal";
import { getDict, type Locale } from "@/lib/i18n";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDict(locale).contact;

  return (
    <main className="relative">
      <ScanLine />
      <PageHeader
        index="06"
        label={t.header.label}
        title={
          <>
            {t.header.titlePre}
            <GlowText>{t.header.titleGlow}</GlowText>
          </>
        }
        lede={t.header.lede}
      />

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <Reveal delay={0.15}>
          <ContactCard channel={t.channel} purposes={t.purposes} copyLabel={t.copyLabel} />
        </Reveal>
      </section>
    </main>
  );
}
