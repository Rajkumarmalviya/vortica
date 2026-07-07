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

export const qualityPillars = [
  {
    eyebrow: "Code Quality",
    title: "Clean, maintainable code by default",
    description:
      "Every codebase we touch follows consistent conventions, clear separation of concerns, and documentation that the next engineer can actually read.",
    metric: "100%",
    metricLabel: "peer-reviewed",
  },
  {
    eyebrow: "Performance",
    title: "Fast by design, not as an afterthought",
    description:
      "We architect for performance from the first commit — optimizing renders, bundle size, API latency, and database access before they become problems.",
    metric: "<100ms",
    metricLabel: "target API response",
  },
  {
    eyebrow: "Reliability",
    title: "Systems that hold up under pressure",
    description:
      "Comprehensive test coverage, CI/CD pipelines, structured error handling, and observability tooling mean your product stays stable as it grows.",
    metric: "99.9%",
    metricLabel: "uptime target",
  },
  {
    eyebrow: "Standards",
    title: "Modern stack, proven patterns",
    description:
      "We use current best practices across TypeScript, React, Node.js, cloud infrastructure, and security — not legacy workarounds or technical debt by default.",
    metric: "0",
    metricLabel: "known CVEs shipped",
  },
];

export const qualityCommitments = [
  "TypeScript-first development across all services",
  "Automated testing with meaningful coverage targets",
  "CI/CD pipelines that catch issues before they reach production",
  "Code reviews on every pull request, no exceptions",
  "Accessibility and Core Web Vitals built in from the start",
  "Dependency audits and security scanning as part of delivery",
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
