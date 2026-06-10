import { en } from "@/content/dictionaries/en";
import { tr } from "@/content/dictionaries/tr";
import { site } from "@/content/site";

export type Locale = "en" | "tr";
export const locales: Locale[] = ["en", "tr"];

export type Dictionary = typeof en;

export function getDict(locale: Locale): Dictionary {
  return locale === "tr" ? tr : en;
}

/** Prefix an internal href with the locale segment ("/about/" -> "/tr/about/"). */
export function l(locale: Locale, href: string): string {
  if (locale === "en" || !href.startsWith("/")) return href;
  return `/tr${href === "/" ? "/" : href}`;
}

/** hreflang alternates for a path like "/about/". */
export function langAlternates(path: string) {
  return {
    languages: {
      en: `${site.url}${path}`,
      tr: `${site.url}/tr${path}`,
    },
  };
}
