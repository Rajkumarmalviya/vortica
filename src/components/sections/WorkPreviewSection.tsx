"use client";

import Link from "next/link";
import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowUpRight, 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart3,
  Rocket,
  Star,
  ChevronRight,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies } from "@/content/home";
import AnimatedButton from "@/components/ui/AnimatedButton";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      delay: i * 0.1, 
      duration: 0.5,
      ease: easeOut
    },
  }),
};

// Metrics icons mapping
const getMetricIcon = (metricType?: string) => {
  switch (metricType) {
    case "revenue":
      return TrendingUp;
    case "time":
      return Clock;
    case "users":
      return Users;
    case "performance":
      return BarChart3;
    default:
      return Rocket;
  }
};

interface CaseStudy {
  category: string;
  title: string;
  summary: string;
  metrics?: {
    value: string;
    label: string;
    type?: string;
  };
  tags?: string[];
  image?: string;
  result?: string;
}

interface EnhancedCaseStudy extends CaseStudy {
  metrics: {
    value: string;
    label: string;
    type?: string;
  };
  tags: string[];
  result: string;
}

export default function WorkPreviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  // Enhanced case studies with additional data
  const enhancedCaseStudies: EnhancedCaseStudy[] = caseStudies.map((study, index) => ({
    ...study,
    metrics: (study as Partial<EnhancedCaseStudy>).metrics || getDefaultMetrics(index),
    tags: (study as Partial<EnhancedCaseStudy>).tags || getDefaultTags(index),
    result: (study as Partial<EnhancedCaseStudy>).result || "See how we transformed their business",
  }));

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-label="Selected work"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1 }}
        className="absolute -left-32 bottom-0 size-96 rounded-full bg-[#B8860B]/20 blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -right-32 top-0 size-96 rounded-full bg-[#D4A017]/10 blur-[100px]"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <motion.div variants={itemVariants} className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
              <Sparkles className="size-4 text-[#D4A017]" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/70">
                Success Stories
              </span>
            </div>
            <SectionHeading
              title="Representative outcomes across product, cloud, and automation."
              description="Real results from real clients. See how we've helped businesses transform their operations and achieve remarkable growth."
              align="left"
              className="text-white"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium uppercase tracking-wider text-[#a1a1aa]/86 backdrop-blur transition-all duration-300 hover:border-[#D4A017]/50 hover:bg-[#D4A017]/10 hover:text-[#D4A017]"
            >
              View all work
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr]"
        >
          {enhancedCaseStudies.map((item, index) => {
            const MetricIcon = item.metrics?.type ? getMetricIcon(item.metrics.type) : TrendingUp;
            
            return (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-2xl ${
                  index === 0
                    ? "bg-gradient-to-br from-[#D4A017]/10 via-white/[0.03] to-transparent"
                    : "bg-gradient-to-br from-white/[0.04] to-white/[0.02]"
                }`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/0 via-[#D4A017]/5 to-[#D4A017]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Featured Badge for First Item */}
                {index === 0 && (
                  <div className="absolute right-6 top-6 rounded-full bg-[#D4A017]/20 px-3 py-1 backdrop-blur">
                    <span className="text-xs font-medium text-[#D4A017]">Featured</span>
                  </div>
                )}

                <div className="relative p-7">
                  {/* Category */}
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-[#D4A017]/50 to-transparent" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
                      {item.category}
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white group-hover:text-[#D4A017] transition-colors">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]/80">
                    {item.summary}
                  </p>

                  {/* Metrics Card */}
                  {item.metrics && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-[#D4A017]/10 p-2">
                          <MetricIcon className="size-5 text-[#D4A017]" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">
                            {item.metrics.value}
                          </p>
                          <p className="text-xs text-[#a1a1aa]/60">
                            {item.metrics.label}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-[#a1a1aa]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Result Link */}
                  <Link
                    href={`/work/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D4A017] transition-all hover:gap-3"
                  >
                    {item.result || "Read case study"}
                    <ChevronRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 h-20 w-20 overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-[#D4A017]/5 blur-2xl" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-[#D4A017] text-[#D4A017]" />
              ))}
            </div>
            <span className="text-sm text-[#a1a1aa]/70">4.9/5 from 500+ reviews</span>
          </div>
          
          <div className="h-8 w-px bg-white/10" />
          
          <div className="flex items-center gap-2">
            <TrendingUp className="size-5 text-[#D4A017]" />
            <span className="text-sm text-[#a1a1aa]/70">98% client retention rate</span>
          </div>
          
          <div className="h-8 w-px bg-white/10" />
          
          <div className="flex items-center gap-2">
            <Clock className="size-5 text-[#D4A017]" />
            <span className="text-sm text-[#a1a1aa]/70">50+ successful deliveries in 2024</span>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <AnimatedButton
            href="/work"
            variant="secondary"
          >
            Explore All Case Studies
            <ArrowUpRight className="ml-2 size-4" />
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}

// Helper functions for default data
function getDefaultMetrics(index: number) {
  const metrics = [
    { value: "3.5x", label: "Increase in operational efficiency", type: "performance" },
    { value: "60%", label: "Reduction in deployment time", type: "time" },
    { value: "2M+", label: "Active users impacted", type: "users" },
  ];
  return metrics[index % metrics.length];
}

function getDefaultTags(index: number) {
  const tagsList = [
    ["AI/ML", "Cloud Migration", "Enterprise"],
    ["DevOps", "Automation", "Scale"],
    ["Product Dev", "UX Design", "Analytics"],
  ];
  return tagsList[index % tagsList.length];
}