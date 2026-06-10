import type { Metadata } from "next";
import { ProductsPage } from "@/components/pages/ProductsPage";
import { getDict, langAlternates } from "@/lib/i18n";

const d = getDict("tr");

export const metadata: Metadata = {
  title: d.meta.products.title,
  description: d.meta.products.description,
  alternates: langAlternates("/products/"),
};

export default function Page() {
  return <ProductsPage locale="tr" />;
}
