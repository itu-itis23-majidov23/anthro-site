import schematicFront from "@/assets/tech-schematic.jpg";
import schematicSide from "@/assets/tech-schematic-side.jpg";
import schematicCutaway from "@/assets/tech-schematic-cutaway.jpg";

export type SchematicView = {
  id: string;
  label: string;
  code: string;
  src: string;
};

export type Product = {
  slug: string;
  code: string;
  name: string;
  status: "development" | "available" | "research";
  tagline: string;
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
  metrics: { value: string; label: string }[];
  applications: { code: string; title: string; body: string }[];
  views: SchematicView[];
};

export const products: Product[] = [
  {
    slug: "anthro-r3",
    code: "R3",
    name: "AnthRo R3",
    status: "development",
    tagline: "General-purpose humanoid platform.",
    summary:
      "Full-body bipedal robot engineered for unstructured human environments — built end-to-end at AnthRo.",
    description:
      "The R3 is our third-generation humanoid chassis. It integrates proprietary actuators, in-house sensor fusion, and a kilohertz-cadence whole-body control stack into a single deployable platform — designed to operate alongside humans in logistics, industrial, and public-facing environments.",
    specs: [
      { label: "Height", value: "1.72 m" },
      { label: "Mass", value: "62 kg" },
      { label: "Payload", value: "20 kg" },
      { label: "Degrees of freedom", value: "32+" },
      { label: "Runtime", value: "4 h continuous" },
      { label: "Connectivity", value: "Wi-Fi 6E · 5G" },
    ],
    metrics: [
      { value: "1kHz", label: "Control loop" },
      { value: "32+", label: "Degrees of freedom" },
      { value: "<10ms", label: "Perception latency" },
      { value: "100%", label: "In-house stack" },
    ],
    applications: [
      { code: "LOG-01", title: "Logistics & warehouse", body: "Pick, place, sort, transport." },
      { code: "IND-02", title: "Industrial work", body: "Precision tasks on the line." },
      { code: "FAC-04", title: "Facility operations", body: "Maintenance and monitoring." },
    ],
    views: [
      { id: "front", label: "Front", code: "R3-F", src: schematicFront },
      { id: "side", label: "Side", code: "R3-S", src: schematicSide },
      { id: "cutaway", label: "Cutaway", code: "R3-X", src: schematicCutaway },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
