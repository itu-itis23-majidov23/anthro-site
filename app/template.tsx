"use client";

import { m } from "motion/react";

/**
 * Entrance-only page transition. Transform-only on purpose: an SSR'd
 * `opacity: 0` here would hide the whole page until hydration and destroy LCP.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}
