"use client";

import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle2,
  Code2,
  Gauge,
  ShieldCheck,
  Layers,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { qualityPillars, qualityCommitments } from "@/content/home";

// Map pillar index to a lucide icon
const PILLAR_ICONS = [Code2, Gauge, ShieldCheck, Layers];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeOut },
  }),
};

const checkVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: easeOut },
  }),
};

export default function QualitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [pillarsRef, pillarsInView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });
  const [checkRef, checkInView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-label="Quality and standards"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#000000]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 100%, rgba(91,107,196,0.10), transparent 70%)",
        }}
      />
      {/* Subtle top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5B6BC4]/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Header ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14 text-center lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2"
          >
            <ShieldCheck className="size-4 text-[#5B6BC4]" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/50">
              Quality &amp; Standards
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SectionHeading
              title="Professional delivery is not optional — it is the baseline."
              description="Every project we ship reflects the same commitment: clean code, measurable performance, rigorous testing, and standards that hold up long after handover."
              align="center"
              className="text-white"
            />
          </motion.div>
        </motion.div>

        {/* ── Four Pillars Grid ── */}
        <motion.div
          ref={pillarsRef}
          variants={containerVariants}
          initial="hidden"
          animate={pillarsInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {qualityPillars.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index % PILLAR_ICONS.length];
            return (
              <motion.div
                key={pillar.title}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6 transition-all duration-300 hover:border-[#5B6BC4]/35 hover:shadow-[0_0_28px_rgba(91,107,196,0.18)]"
              >
                {/* Hover shimmer */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5B6BC4]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-col gap-4">
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl border border-[#5B6BC4]/25 bg-[#5B6BC4]/10 p-2.5 transition-all duration-300 group-hover:bg-[#5B6BC4]/20">
                      <Icon className="size-5 text-[#5B6BC4]" />
                    </div>
                    {/* Metric badge */}
                    <div className="text-right">
                      <p className="text-lg font-bold leading-none text-[#5B6BC4]">
                        {pillar.metric}
                      </p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/35">
                        {pillar.metricLabel}
                      </p>
                    </div>
                  </div>

                  {/* Eyebrow + Heading */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#5B6BC4]">
                      {pillar.eyebrow}
                    </p>
                    <h3 className="mt-1.5 text-base font-bold text-white transition-colors duration-200 group-hover:text-[#A0AFFF]">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/55">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Commitments + CTA Row ── */}
        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-12">
          {/* Commitments checklist */}
          <motion.div
            ref={checkRef}
            variants={containerVariants}
            initial="hidden"
            animate={checkInView ? "visible" : "hidden"}
            className="rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-[#5B6BC4]/50 to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B6BC4]">
                What we commit to on every engagement
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {qualityCommitments.map((commitment, index) => (
                <motion.li
                  key={commitment}
                  custom={index}
                  variants={checkVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#5B6BC4]" />
                  <span className="text-sm leading-relaxed text-white/65">
                    {commitment}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={checkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.55, ease: easeOut }}
            className="flex flex-col justify-between gap-6 rounded-2xl border border-[#5B6BC4]/20 bg-gradient-to-br from-[#5B6BC4]/10 via-[#5B6BC4]/5 to-transparent p-6 sm:p-8 lg:min-w-[280px]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B6BC4]">
                Ready to work together?
              </p>
              <h4 className="mt-2 text-xl font-bold text-white">
                See what a quality-first build looks like.
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Let us walk you through our process and show you how we apply these standards to a real project.
              </p>
            </div>

            <AnimatedButton href="/contact" variant="primary">
              Start a Conversation
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
