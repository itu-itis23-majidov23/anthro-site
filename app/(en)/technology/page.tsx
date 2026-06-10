import type { Metadata } from "next";
import { TechnologyPage } from "@/components/pages/TechnologyPage";
import { getDict, langAlternates } from "@/lib/i18n";

const d = getDict("en");

export const metadata: Metadata = {
  title: d.meta.technology.title,
  description: d.meta.technology.description,
  alternates: langAlternates("/technology/"),
};

export default function Page() {
  return <TechnologyPage locale="en" />;
}
