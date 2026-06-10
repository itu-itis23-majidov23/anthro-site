"use client";

import { m } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, duration = 0.8, y = 28 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  childClassName?: string;
  staggerDelay?: number;
};

export function Stagger({ children, className, childClassName, staggerDelay = 0.1 }: StaggerProps) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <m.div
            key={i}
            className={cn(childClassName)}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
          >
            {child}
          </m.div>
        ))
      ) : (
        <m.div
          className={childClassName}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
          }}
        >
          {children}
        </m.div>
      )}
    </m.div>
  );
}
