import { services } from "@/content/services";

export const homeStats = [
  {
    value: `${services.length}+`,
    label: "service tracks",
  },
  {
    value: "3",
    label: "delivery pillars",
  },
  {
    value: "1",
    label: "partner from discovery to scale",
  },
];

export const trustPoints = [
  "Product-minded engineering teams",
  "Transparent sprint execution",
  "Architecture designed for scale",
  "Security and quality built into delivery",
];

export const processSteps = [
  {
    eyebrow: "Discover",
    title: "Clarify the problem, goals, and roadmap.",
    description:
      "We shape requirements around business outcomes, technical risk, and the shortest path to value.",
  },
  {
    eyebrow: "Build",
    title: "Ship with cross-functional product discipline.",
    description:
      "Design, engineering, AI, and cloud execution move together in transparent sprint cycles with clear milestones.",
  },
  {
    eyebrow: "Scale",
    title: "Harden the platform for long-term growth.",
    description:
      "From architecture and observability to security and release workflows, we help teams scale with confidence.",
  },
];

export const caseStudies = [
  {
    title: "Operations automation platform",
    summary:
      "Reduced manual processing effort by introducing workflow automation and dashboards.",
    category: "AI & Automation",
  },
  {
    title: "Cloud modernization engagement",
    summary:
      "Migrated a legacy stack to cloud-native architecture with improved stability and release speed.",
    category: "Enterprise & Cloud",
  },
  {
    title: "Commerce revamp",
    summary:
      "Improved storefront UX and checkout flows to increase conversion and retention.",
    category: "E-Commerce & UX",
  },
];
