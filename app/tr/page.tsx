import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getDict, langAlternates } from "@/lib/i18n";

const d = getDict("tr");

export const metadata: Metadata = {
  title: { absolute: d.meta.home.title },
  description: d.meta.home.description,
  alternates: langAlternates("/"),
};

export default function Page() {
  return <HomePage locale="tr" />;
}
