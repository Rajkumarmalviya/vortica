export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  outcomes: string[];
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    summary: "Web, mobile, desktop, and API systems built around your business workflows.",
    icon: "🔧",
    outcomes: ["Faster delivery", "Lower manual effort", "Scalable architecture"],
    capabilities: [
      "Web applications",
      "Mobile applications",
      "Desktop tools",
      "API development & integration",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    summary: "Intelligent automation, copilots, and data-driven workflows for modern teams.",
    icon: "🧠",
    outcomes: ["Process automation", "Better support response", "Data-backed decisions"],
    capabilities: ["AI assistants", "Workflow automation", "Analytics dashboards", "NLP & computer vision"],
  },
  {
    slug: "enterprise-cloud",
    title: "Enterprise & Cloud Solutions",
    summary: "Cloud-native systems and modernization programs for long-term growth.",
    icon: "🏗️",
    outcomes: ["Reliable systems", "Reduced downtime", "Future-ready platform"],
    capabilities: ["ERP/CRM systems", "Cloud-native apps", "Microservices", "Legacy modernization"],
  },
  {
    slug: "ecommerce-cms",
    title: "E-Commerce & CMS",
    summary: "Commerce experiences and content platforms optimized for conversion and operations.",
    icon: "🛒",
    outcomes: ["Higher conversion", "Faster content updates", "Unified storefront workflows"],
    capabilities: ["Shopify apps", "WooCommerce/Shopify customization", "Headless commerce"],
  },
  {
    slug: "product-design",
    title: "UI/UX & Product Design",
    summary: "Research-led product experiences that are accessible, usable, and conversion-oriented.",
    icon: "🧩",
    outcomes: ["Clearer UX", "Higher engagement", "Reduced drop-off"],
    capabilities: ["UX design", "MVP prototyping", "Responsive and accessibility design"],
  },
  {
    slug: "devops-security",
    title: "DevOps & Security",
    summary: "Delivery pipelines, observability, and security hardening for stable operations.",
    icon: "🔐",
    outcomes: ["Faster releases", "Improved reliability", "Security posture uplift"],
    capabilities: ["CI/CD setup", "Infrastructure monitoring", "Security implementation"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
