import { products, type Product } from "@/content/products";
import { technologyPillars, type TechnologyPillar } from "@/content/technology";
import { researchAreas, type ResearchArea } from "@/content/research";
import { disciplines, values, type Discipline } from "@/content/careers";
import { mission, principles, timeline } from "@/content/about";

/**
 * The English dictionary is the canonical shape — `Dictionary = typeof en`.
 * Brand HUD strings (mono codes, status badges, telemetry) intentionally
 * stay English in every locale.
 */
export const en = {
  meta: {
    home: {
      title: "AnthRo Industries — Where Artificial Intelligence Becomes Physical",
      description:
        "AnthRo Industries designs and builds general-purpose humanoid robots — hardware, intelligence, and control, engineered as one system.",
    },
    about: {
      title: "About",
      description:
        "AnthRo Industries is building general-purpose humanoid robots for the long horizon — engineered end-to-end in Istanbul.",
    },
    technology: {
      title: "Technology",
      description:
        "Humanoid robotics, AI systems, autonomy, robotics software, physical intelligence, and simulation — engineered as one system at AnthRo.",
    },
    products: {
      title: "Products",
      description: "AnthRo technology programs — the R-Series of general-purpose humanoid platforms.",
    },
    research: {
      title: "Research",
      description:
        "Reinforcement learning, vision-language-action models, robot learning, navigation, human-robot interaction, and multi-agent systems at AnthRo.",
    },
    careers: {
      title: "Careers",
      description:
        "Join AnthRo Industries — small teams, hard problems, full ownership. Engineering humanoid robots in Istanbul.",
    },
    contact: {
      title: "Contact",
      description: "Reach AnthRo Industries — partnerships, press, and careers.",
    },
  },

  nav: {
    links: [
      { label: "Technology", href: "/technology/" },
      { label: "Products", href: "/products/" },
      { label: "Research", href: "/research/" },
      { label: "About", href: "/about/" },
      { label: "Careers", href: "/careers/" },
    ],
    contact: "Contact",
  },

  footer: {
    mission:
      "General-purpose humanoid robots — hardware, intelligence, and control, engineered as one system.",
    columns: [
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
    ],
  },

  home: {
    hero: {
      eyebrow: "Anthropomorphic Robotic Industries",
      titlePre: "Where Artificial Intelligence Becomes",
      titleGlow: "Physical.",
      sub: "AnthRo Industries designs and builds general-purpose humanoid robots — hardware, intelligence, and control, engineered as one system.",
      ctaPrimary: "Explore the R3 Platform",
      ctaSecondary: "Our Technology",
    },
    mission: {
      statement:
        "We are building the machines that will work alongside humanity for the next fifty years.",
      stats: [
        { value: "1kHz", label: "Whole-body control loop" },
        { value: "32+", label: "Degrees of freedom" },
        { value: "100%", label: "In-house stack" },
      ],
    },
    platform: { label: "Flagship Platform", viewProgram: "View Program" },
    pillars: { label: "Technology", title: "One system. Engineered end-to-end." },
    applications: { label: "Deployment", title: "Built for the places work actually happens." },
    research: { label: "Research", title: "Advancing physical intelligence.", cta: "All Research Areas" },
    ctaBand: { line1: "The future doesn't arrive.", line2: "It's built.", join: "Join AnthRo", contact: "Contact" },
  },

  about: {
    header: {
      label: "Who We Are",
      titlePre: "Built for the ",
      titleGlow: "Long Horizon.",
      lede: mission.statement,
    },
    vision: { label: "Vision", title: "The R-Series roadmap." },
    principlesSection: { label: "Principles", title: "How we engineer." },
    istanbul: { pre: "Engineered in Istanbul.", post: "Built for the world." },
    timeline,
    principles,
  },

  technology: {
    header: {
      label: "Technology",
      titlePre: "One System. Engineered ",
      titleGlow: "End-to-End.",
      lede: "A humanoid robot is not a collection of subsystems. Actuation, perception, control, and intelligence only perform when they are designed together — so we build all of them.",
    },
    pillars: technologyPillars as TechnologyPillar[],
  },

  products: {
    header: {
      label: "Products",
      titlePre: "Technology ",
      titleGlow: "Programs.",
      lede: "Each platform in the R-Series is a complete program: hardware, intelligence, and control developed as one system, designed to compound from one generation to the next.",
    },
    program: "Program",
    viewProgram: "View Program",
    r4: {
      code: "R4",
      name: "AnthRo R4",
      summary: "Successor platform under active development. Program details withheld.",
    },
    futureSlot: "R-Series roadmap continues — future platforms in definition",
    detail: {
      platformLabel: "General-Purpose Humanoid Platform",
      specsLabel: "Specifications",
      specsTitle: "Platform data.",
      deploymentLabel: "Deployment",
      deploymentTitle: (code: string) => `Where ${code} works.`,
      ctaTitle: (code: string) => `Partner with the ${code} program.`,
      ctaSub: "We work with a small number of deployment partners in logistics and industry.",
      ctaButton: "Contact AnthRo",
    },
    items: products as Product[],
  },

  research: {
    header: {
      label: "Research",
      titlePre: "Advancing ",
      titleGlow: "Physical Intelligence.",
      lede: "Six research programs, one constraint: everything must run on the robot. We publish less and deploy more.",
    },
    doctrineLabel: "R&D Doctrine",
    doctrinePre: "Research at AnthRo is not exploratory.",
    doctrinePost: "It ships to hardware.",
    areas: researchAreas as ResearchArea[],
  },

  careers: {
    header: {
      label: "Careers",
      titlePre: "Build What ",
      titleGlow: "Doesn't Exist Yet.",
      lede: "Small teams. Hard problems. Full ownership. We hire engineers who want their work to stand up and walk.",
    },
    howWeWork: "How We Work",
    disciplinesSection: { label: "Open Disciplines", title: "Where we're hiring." },
    apply: "Apply",
    applySubject: "Application",
    istanbulNote: "Istanbul, Türkiye — relocation supported",
    istanbulPre: "The lab is in Istanbul.",
    istanbulPost: "The mission is everywhere.",
    values,
    disciplines: disciplines as Discipline[],
  },

  contact: {
    header: {
      label: "Contact",
      titlePre: "Initiate ",
      titleGlow: "Contact.",
      lede: "One channel, read by humans. Tell us what you are building, deploying, or reporting on.",
    },
    channel: "Direct Channel",
    purposes: "Partnerships · Press · Careers",
    copyLabel: "Copy email address",
  },
};
