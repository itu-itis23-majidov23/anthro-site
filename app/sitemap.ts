import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/technology",
    "/products",
    "/research",
    "/careers",
    "/contact",
    ...products.map((p) => `/products/${p.slug}`),
  ];

  return paths.flatMap((path) => {
    const en = `${site.url}${path}/`;
    const tr = `${site.url}/tr${path}/`;
    const priority = path === "" ? 1 : path.startsWith("/products/") ? 0.8 : 0.7;
    return [
      {
        url: en,
        changeFrequency: "monthly" as const,
        priority,
        alternates: { languages: { en, tr } },
      },
      {
        url: tr,
        changeFrequency: "monthly" as const,
        priority: priority - 0.1,
        alternates: { languages: { en, tr } },
      },
    ];
  });
}
