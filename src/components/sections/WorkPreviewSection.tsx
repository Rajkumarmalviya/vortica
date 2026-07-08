"use client";

import Link from "next/link";
import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowUpRight, 
  TrendingUp, 
  Clock, 
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

export default function WorkPreviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-label="Selected work"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1 }}
        className="absolute -left-32 bottom-0 size-96 rounded-full bg-[#5B6BC4]/20 blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -right-32 top-0 size-96 rounded-full bg-[#5B6BC4]/10 blur-[100px]"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2 mb-6">
              <Sparkles className="size-4 text-[#5B6BC4]" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/50">
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
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-6 py-3 text-sm font-medium uppercase tracking-wider text-white/75/86 backdrop-blur transition-all duration-300 hover:border-[#5B6BC4]/40 hover:bg-[#5B6BC4]/10 hover:text-[#5B6BC4]"
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
          {caseStudies.map((item, index) => (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative overflow-hidden rounded-2xl border border-[rgba(160,175,255,0.15)] backdrop-blur transition-all duration-300 hover:border-[#5B6BC4]/30 hover:shadow-2xl ${
                  index === 0
                    ? "bg-gradient-to-br from-[#5B6BC4]/10 via-white/[0.03] to-transparent"
                    : "bg-[#0D1824]"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5B6BC4]/0 via-[#5B6BC4]/5 to-[#5B6BC4]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative p-7">
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-[#5B6BC4]/50 to-transparent" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5B6BC4]">
                      {item.category}
                    </p>
                    {index === 0 && (
                      <div className="rounded-full bg-[#5B6BC4]/20 px-2.5 py-0.5">
                        <span className="text-[10px] font-medium text-[#A0AFFF]">Featured</span>
                      </div>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white group-hover:text-[#5B6BC4] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.summary}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-2.5 py-1 text-[10px] font-medium text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/work/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#5B6BC4] transition-all hover:gap-3"
                  >
                    {item.result ?? "Read case study"}
                    <ChevronRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                <div className="absolute bottom-0 right-0 h-20 w-20 overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-[#5B6BC4]/5 blur-2xl" />
                </div>
              </motion.article>
            ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-[#5B6BC4] text-[#5B6BC4]" />
              ))}
            </div>
            <span className="text-sm text-white/50">Highly rated by our clients</span>
          </div>
          
          <div className="h-8 w-px bg-white/10" />
          
          <div className="flex items-center gap-2">
            <TrendingUp className="size-5 text-[#5B6BC4]" />
            <span className="text-sm text-white/50">Long-term client partnerships</span>
          </div>
          
          <div className="h-8 w-px bg-white/10" />
          
          <div className="flex items-center gap-2">
            <Clock className="size-5 text-[#5B6BC4]" />
            <span className="text-sm text-white/50">Active delivery since 2024</span>
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