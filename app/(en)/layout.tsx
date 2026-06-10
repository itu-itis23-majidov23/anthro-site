import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav locale="en" />
      {children}
      <Footer locale="en" />
    </>
  );
}
