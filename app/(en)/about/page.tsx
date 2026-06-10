import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { getDict, langAlternates } from "@/lib/i18n";

const d = getDict("en");

export const metadata: Metadata = {
  title: d.meta.about.title,
  description: d.meta.about.description,
  alternates: langAlternates("/about/"),
};

export default function Page() {
  return <AboutPage locale="en" />;
}
