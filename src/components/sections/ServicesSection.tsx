"use client";

import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  ArrowRight, 
  Cloud, 
  Database, 
  Sparkles,
  CheckCircle2,
  Globe,
  Code2,
  Brain,
  Rocket
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/content/services";
import AnimatedButton from "@/components/ui/AnimatedButton";

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
    transition: { duration: 0.6, ease: easeOut },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease:
       easeOut },
  }),
};

// Capability items data
const capabilityItems = [
  {
    icon: Code2,
    title: "Custom Build",
    description: "Systems tailored to workflows, operations, and business logic.",
    color: "#D4A017",
  },
  {
    icon: Brain,
    title: "AI Enablement",
    description: "Automation, copilots, dashboards, and intelligent workflows.",
    color: "#D4A017",
  },
  {
    icon: Rocket,
    title: "Platform Scale",
    description: "Architecture, performance, observability, and security maturity.",
    color: "#D4A017",
  },
];

// Technology partners
const techPartners = [
  { name: "AWS", icon: Cloud, level: "Premier Partner" },
  { name: "Microsoft Azure", icon: Database, level: "Gold Partner" },
  { name: "Google Cloud", icon: Globe, level: "Partner" },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [capabilitiesRef, capabilitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-label="Services"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/5 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section with Capabilities */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-end"
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              title="Service tracks built around real product outcomes."
              description="From custom software and AI automation to commerce, cloud, and DevOps, Vortica helps teams launch faster and scale with more confidence."
              align="left"
            />
            
            {/* Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center gap-2"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="size-4 text-[#D4A017]" />
                ))}
              </div>
              <span className="text-sm text-[#a1a1aa]/60">
                Trusted by 500+ innovative companies
              </span>
            </motion.div>
          </motion.div>

          {/* Capabilities Cards */}
          <motion.div
            ref={capabilitiesRef}
            variants={containerVariants}
            initial="hidden"
            animate={capabilitiesInView ? "visible" : "hidden"}
            className="grid gap-4 sm:grid-cols-3"
          >
            {capabilityItems.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 backdrop-blur transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-xl"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/0 via-[#D4A017]/5 to-[#D4A017]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="rounded-lg bg-[#D4A017]/10 p-2 w-fit">
                    <item.icon className="size-5 text-[#D4A017]" />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#D4A017]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]/80">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="mt-20"
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Sparkles className="size-4 text-[#D4A017]" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/70">
                Comprehensive Solutions
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              End-to-end technology services
            </h3>
            <p className="mt-2 text-[#a1a1aa]/60">
              From strategy to execution, we&apos;ve got you covered
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 backdrop-blur"
        >
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#D4A017]">
                Technology Partners
              </p>
              <h4 className="mt-2 text-xl font-bold text-white">
                Certified expertise across leading platforms
              </h4>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {techPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <partner.icon className="size-8 text-[#D4A017]" />
                  </div>
                  <p className="text-sm font-medium text-white">{partner.name}</p>
                  <p className="text-xs text-[#a1a1aa]/50">{partner.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-[#D4A017]/10 via-[#B8860B]/10 to-transparent p-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h4 className="text-xl font-bold text-white">
                Ready to transform your business?
              </h4>
              <p className="mt-2 text-[#a1a1aa]/70">
                Let&apos;s discuss how our services can help you achieve your goals
              </p>
            </div>
            <AnimatedButton
              href="/contact"
              variant="primary"
            >
              Start a Conversation
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
