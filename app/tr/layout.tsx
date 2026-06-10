import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";

export default function TurkishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetHtmlLang lang="tr" />
      <Nav locale="tr" />
      {children}
      <Footer locale="tr" />
    </>
  );
}
