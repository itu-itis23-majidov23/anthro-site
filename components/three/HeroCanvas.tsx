"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { HeroPoster } from "./HeroPoster";
import { cn } from "@/lib/utils";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/**
 * Lifecycle host for the WebGL hero:
 * - poster renders immediately (LCP-stable, zero-JS backdrop)
 * - scene mounts only after idle, when motion is allowed and WebGL2 exists
 * - frameloop pauses when scrolled away or the tab is hidden
 */
export function HeroCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const probe = document.createElement("canvas");
    const gl = probe.getContext("webgl2");
    if (!gl) return;
    // software rasterizers can't afford 15k additive particles — keep the poster
    // (?gl=force bypasses, for headless screenshot tooling)
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : "";
    if (/swiftshader|llvmpipe|softpipe|software/i.test(renderer) && !window.location.search.includes("gl=force"))
      return;

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setMount(true), { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(() => setMount(true), 2000);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    io.observe(el);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <HeroPoster />
      {mount && (
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            // on small screens the copy overlays the figure — keep it ambient
            ready ? "opacity-45 lg:opacity-100" : "opacity-0",
          )}
        >
          <HeroScene paused={!inView || !pageVisible} onReady={() => setReady(true)} />
        </div>
      )}
    </div>
  );
}
