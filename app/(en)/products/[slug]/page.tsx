import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/pages/ProductDetailPage";
import { getDict, langAlternates } from "@/lib/i18n";

const d = getDict("en");

export const dynamicParams = false;

export function generateStaticParams() {
  return d.products.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = d.products.items.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    alternates: langAlternates(`/products/${slug}/`),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} locale="en" />;
}
