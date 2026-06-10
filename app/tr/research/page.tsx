import type { Metadata } from "next";
import { ResearchPage } from "@/components/pages/ResearchPage";
import { getDict, langAlternates } from "@/lib/i18n";

const d = getDict("tr");

export const metadata: Metadata = {
  title: d.meta.research.title,
  description: d.meta.research.description,
  alternates: langAlternates("/research/"),
};

export default function Page() {
  return <ResearchPage locale="tr" />;
}
