import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Vision } from "@/components/site/Vision";
import { WhatWeBuild } from "@/components/site/WhatWeBuild";
import { Applications } from "@/components/site/Applications";
import { Technology } from "@/components/site/Technology";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AnthRo — Anthropomorphic Robots for the Physical World" },
      {
        name: "description",
        content:
          "AnthRo builds general-purpose humanoid robots designed to operate alongside humans in logistics, industrial, and real-world environments.",
      },
      { property: "og:title", content: "AnthRo — Humanoid Robotics" },
      {
        property: "og:description",
        content:
          "Building anthropomorphic robots for the physical world. Scalable humanoid intelligence deployed in real environments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Hero />
      <Vision />
      <WhatWeBuild />
      <Applications />
      <Technology />
      <Team />
      <Contact />
    </main>
  );
}
