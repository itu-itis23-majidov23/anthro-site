"use client";

import { useEffect } from "react";

/**
 * Static export has one root <html lang>; this corrects it client-side for
 * the /tr subtree (crawlers executing JS see it; hreflang covers the rest).
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "en";
    };
  }, [lang]);
  return null;
}
