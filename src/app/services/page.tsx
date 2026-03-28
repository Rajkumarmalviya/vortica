"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Cloud, 
  Shield, 
  Smartphone, 
  Sparkles,
  Zap,
  Globe,
  Lock,
  Code2,
  Brain,
  Rocket,
  BarChart3,
  Server,
  Users,
  Target,
  Award
} from "lucide-react";
import PageShell from "@/components/ui/page-shell";
import PageHero from "@/components/ui/page-hero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/content/services";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeOut },
  }),
};

// Service categories
const serviceCategories = [
  {
    id: "all",
    label: "All Services",
    icon: Sparkles,
  },
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    icon: Brain,
  },
  {
    id: "cloud",
    label: "Cloud Solutions",
    icon: Cloud,
  },
  {
    id: "security",
    label: "Cybersecurity",
    icon: Shield,
  },
  {
    id: "digital",
    label: "Digital Transformation",
    icon: Rocket,
  },
  {
    id: "mobile",
    label: "Mobile Development",
    icon: Smartphone,
  },
  {
    id: "consulting",
    label: "IT Consulting",
    icon: Target,
  },
];

const serviceCategorySlugs: Record<string, string[]> = {
  "ai-ml": ["ai-automation"],
  cloud: ["enterprise-cloud"],
  security: ["devops-security"],
  digital: ["custom-software-development", "enterprise-cloud", "product-design"],
  mobile: ["custom-software-development"],
  consulting: ["product-design", "devops-security"],
};

// Service delivery approach
const deliveryApproach = [
  {
    icon: Target,
    title: "Discovery & Strategy",
    description: "Deep dive into your goals, challenges, and opportunities to create a tailored roadmap.",
    color: "#F3DB3F",
  },
  {
    icon: Code2,
    title: "Agile Development",
    description: "Iterative development with continuous feedback and transparent progress tracking.",
    color: "#F3DB3F",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Enterprise-grade deployment with comprehensive monitoring and support.",
    color: "#F3DB3F",
  },
  {
    icon: BarChart3,
    title: "Optimize & Grow",
    description: "Continuous improvement and optimization for sustainable growth.",
    color: "#F3DB3F",
  },
];

// Success metrics
const successMetrics = [
  { value: "50+", label: "Projects Delivered", icon: Code2 },
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "3x", label: "Faster Time-to-Market", icon: Rocket },
  { value: "99.9%", label: "Uptime Guarantee", icon: Server },
];

export default function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const approachRef = useRef<HTMLDivElement>(null);
  const approachInView = useInView(approachRef, { once: true, amount: 0.1 });
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter services based on category
  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter((service) => serviceCategorySlugs[selectedCategory]?.includes(service.slug));

  return (
    <PageShell className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 size-56 rounded-full bg-[#F3DB3F]/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-72 rounded-full bg-[#8E5F74]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="mb-16">
          <PageHero
            eyebrow="Our Services"
            title="Focused service tracks designed to move products from idea to scale."
            description="Explore focused service tracks designed to deliver measurable product and business outcomes. From AI to cloud, we've got you covered."
          />
        </div>

        {/* Success Metrics */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                custom={index}
                variants={cardVariants}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="rounded-lg bg-[#F3DB3F]/10 p-2">
                    <Icon className="size-6 text-[#F3DB3F]" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-white sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-sm text-[#ECD8D5]/60">{metric.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Service Tracks Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <motion.div variants={itemVariants}>
              <SectionHeading
                title="Choose the track that fits your next business milestone."
                description="Every service line is built around the same goal: clearer outcomes, stronger execution, and a platform that can scale."
                align="left"
                className="text-white"
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="grid gap-4 sm:grid-cols-3"
            >
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 transition-all duration-300 hover:border-[#F3DB3F]/30 hover:shadow-xl">
                <div className="rounded-lg bg-[#F3DB3F]/10 p-2 w-fit">
                  <Code2 className="size-5 text-[#F3DB3F]" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#F3DB3F]">
                  Build
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#ECD8D5]/80">
                  Custom systems and product delivery with enterprise-grade quality.
                </p>
              </div>
              
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 transition-all duration-300 hover:border-[#F3DB3F]/30 hover:shadow-xl">
                <div className="rounded-lg bg-[#F3DB3F]/10 p-2 w-fit">
                  <Brain className="size-5 text-[#F3DB3F]" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#F3DB3F]">
                  Automate
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#ECD8D5]/80">
                  AI assistants, intelligent workflows, and real-time dashboards.
                </p>
              </div>
              
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 transition-all duration-300 hover:border-[#F3DB3F]/30 hover:shadow-xl">
                <div className="rounded-lg bg-[#F3DB3F]/10 p-2 w-fit">
                  <Rocket className="size-5 text-[#F3DB3F]" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#F3DB3F]">
                  Scale
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#ECD8D5]/80">
                  Cloud, reliability, DevOps, and security maturity at scale.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Service Categories Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10"
        >
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-[#F3DB3F] text-[#1A041F] shadow-lg"
                      : "border border-white/10 bg-white/5 text-[#ECD8D5]/70 hover:border-[#F3DB3F]/30 hover:text-[#F3DB3F]"
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.slug}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-12 text-center"
            >
              <div className="rounded-full bg-[#F3DB3F]/10 p-3">
                <Sparkles className="size-8 text-[#F3DB3F]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">No services found</h3>
              <p className="mt-2 text-[#ECD8D5]/70">
                Try selecting a different category to see more results
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-6 rounded-full bg-[#F3DB3F]/10 px-6 py-2 text-sm font-medium text-[#F3DB3F] transition-all hover:bg-[#F3DB3F]/20"
              >
                View all services
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Delivery Approach Section */}
        <motion.div
          ref={approachRef}
          variants={containerVariants}
          initial="hidden"
          animate={approachInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Zap className="size-4 text-[#F3DB3F]" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#ECD8D5]/70">
                Our Approach
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              How we deliver excellence
            </h2>
            <p className="mt-2 text-[#ECD8D5]/60">
              A proven methodology that ensures success at every stage
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {deliveryApproach.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <motion.div
                  key={approach.title}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 text-center transition-all duration-300 hover:border-[#F3DB3F]/30 hover:shadow-xl"
                >
                  <div className="flex justify-center">
                    <div className="rounded-lg bg-[#F3DB3F]/10 p-3 transition-all duration-300 group-hover:scale-110">
                      <Icon className="size-6 text-[#F3DB3F]" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {approach.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#ECD8D5]/70">
                    {approach.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Award className="size-4 text-[#F3DB3F]" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#ECD8D5]/70">
                Why Choose Us
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              The Vortica advantage
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#F3DB3F]/10 p-2">
                  <Users className="size-5 text-[#F3DB3F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Expert Team</h3>
                  <p className="mt-2 text-sm text-[#ECD8D5]/70">
                    Our engineers bring deep expertise across AI, cloud, and enterprise software development.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#F3DB3F]/10 p-2">
                  <Target className="size-5 text-[#F3DB3F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Results-Driven</h3>
                  <p className="mt-2 text-sm text-[#ECD8D5]/70">
                    We focus on delivering measurable business outcomes, not just code.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#F3DB3F]/10 p-2">
                  <Lock className="size-5 text-[#F3DB3F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Enterprise Security</h3>
                  <p className="mt-2 text-sm text-[#ECD8D5]/70">
                    ISO 27001 certified practices ensure your data and applications are secure.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#F3DB3F]/10 p-2">
                  <Globe className="size-5 text-[#F3DB3F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Global Expertise</h3>
                  <p className="mt-2 text-sm text-[#ECD8D5]/70">
                    Experience working with clients across North America, Europe, and Asia.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-[#F3DB3F]/10 via-[#8E5F74]/10 to-transparent p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            Ready to transform your business?
          </h3>
          <p className="mt-2 text-[#ECD8D5]/70">
            Let's discuss which service track is right for your goals
          </p>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F3DB3F] to-[#E5C82E] px-6 py-3 font-semibold text-[#1A041F] transition-all hover:shadow-lg hover:shadow-[#F3DB3F]/20"
          >
            Get Started
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </PageShell>
  );
}
