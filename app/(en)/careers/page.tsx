import type { Metadata } from "next";
import { CareersPage } from "@/components/pages/CareersPage";
import { getDict, langAlternates } from "@/lib/i18n";

const d = getDict("en");

export const metadata: Metadata = {
  title: d.meta.careers.title,
  description: d.meta.careers.description,
  alternates: langAlternates("/careers/"),
};

export default function Page() {
  return <CareersPage locale="en" />;
}
