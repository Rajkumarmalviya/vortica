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
      "Reduced manual processing effort by introducing workflow automation and real-time dashboards, freeing the ops team to focus on higher-value work.",
    category: "AI & Automation",
    tags: ["Workflow Automation", "Dashboards", "Next.js"],
    result: "View project overview",
  },
  {
    title: "Cloud modernization engagement",
    summary:
      "Migrated a legacy monolith to a cloud-native architecture, improving deployment reliability and cutting release cycle time significantly.",
    category: "Enterprise & Cloud",
    tags: ["Cloud Migration", "DevOps", "Reliability"],
    result: "View project overview",
  },
  {
    title: "Commerce revamp",
    summary:
      "Redesigned storefront UX and streamlined checkout flows, resulting in a measurably smoother purchase experience and improved retention.",
    category: "E-Commerce & UX",
    tags: ["UX Design", "Shopify", "Conversion"],
    result: "View project overview",
  },
];
