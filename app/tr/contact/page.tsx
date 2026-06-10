import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { getDict, langAlternates } from "@/lib/i18n";

const d = getDict("tr");

export const metadata: Metadata = {
  title: d.meta.contact.title,
  description: d.meta.contact.description,
  alternates: langAlternates("/contact/"),
};

export default function Page() {
  return <ContactPage locale="tr" />;
}
