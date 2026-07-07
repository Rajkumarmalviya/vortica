"use client";

import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Cloud, Database, Sparkles, CheckCircle2, Globe, Code2, Brain, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/content/services";
import AnimatedButton from "@/components/ui/AnimatedButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: easeOut } }),
};

const capabilityItems = [
  { icon: Code2, title: "Custom Build", description: "Systems tailored to workflows, operations, and business logic." },
  { icon: Brain, title: "AI Enablement", description: "Automation, copilots, dashboards, and intelligent workflows." },
  { icon: Rocket, title: "Platform Scale", description: "Architecture, performance, observability, and security maturity." },
];

const techPartners = [
  { name: "AWS", icon: Cloud, level: "Cloud Platform" },
  { name: "Microsoft Azure", icon: Database, level: "Cloud Platform" },
  { name: "Google Cloud", icon: Globe, level: "Cloud Platform" },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [capabilitiesRef, capabilitiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-label="Services">
      <div className="absolute inset-0 bg-[#000000]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(91,107,196,0.12), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
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
            <motion.div variants={itemVariants} className="mt-6 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="size-4 text-[#5B6BC4]" />
                ))}
              </div>
              <span className="text-sm text-white/40">Built for startups and growing businesses</span>
            </motion.div>
          </motion.div>

          {/* Capability cards */}
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
                className="group relative overflow-hidden rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-5 transition-all duration-300 hover:border-[#5B6BC4]/50 hover:shadow-[0_0_20px_rgba(91,107,196,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5B6BC4]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />
                <div className="relative">
                  <div className="rounded-lg bg-[#5B6BC4]/15 p-2 w-fit">
                    <item.icon className="size-5 text-[#5B6BC4]" />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#A0AFFF]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{item.description}</p>
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
          <motion.div variants={itemVariants} className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#5B6BC4]/10 px-4 py-2">
              <Sparkles className="size-4 text-[#5B6BC4]" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#A0AFFF]">Comprehensive Solutions</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">End-to-end technology services</h3>
            <p className="mt-2 text-white/40">From strategy to execution, we&apos;ve got you covered</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div key={service.slug} custom={index} variants={cardVariants} whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#A0AFFF]">Technology Partners</p>
              <h4 className="mt-2 text-xl font-bold text-white">Certified expertise across leading platforms</h4>
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
                  <div className="rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-3">
                    <partner.icon className="size-8 text-[#5B6BC4]" />
                  </div>
                  <p className="text-sm font-medium text-white">{partner.name}</p>
                  <p className="text-xs text-white/35">{partner.level}</p>
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
          className="mt-16 overflow-hidden rounded-2xl border border-[#5B6BC4]/25 bg-gradient-to-r from-[#5B6BC4]/10 via-[#5B6BC4]/5 to-transparent p-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h4 className="text-xl font-bold text-white">Ready to transform your business?</h4>
              <p className="mt-2 text-white/50">Let&apos;s discuss how our services can help you achieve your goals</p>
            </div>
            <AnimatedButton href="/contact" variant="primary">
              Start a Conversation
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
