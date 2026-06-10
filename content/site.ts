export const site = {
  name: "AnthRo Industries",
  shortName: "AnthRo",
  tagline: "Where Artificial Intelligence Becomes Physical.",
  description:
    "AnthRo Industries designs and builds general-purpose humanoid robots — hardware, intelligence, and control, engineered as one system.",
  email: "info@anthro.industries",
  location: "Istanbul, Türkiye",
  coordinates: "41.10°N 29.02°E",
  url: "https://anthro.industries",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Technology", href: "/technology/" },
  { label: "Products", href: "/products/" },
  { label: "Research", href: "/research/" },
  { label: "About", href: "/about/" },
  { label: "Careers", href: "/careers/" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Careers", href: "/careers/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Technology", href: "/technology/" },
      { label: "Products", href: "/products/" },
      { label: "Research", href: "/research/" },
    ],
  },
];
