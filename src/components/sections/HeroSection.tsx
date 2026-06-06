"use client";

import { ArrowRight, Sparkles, CheckCircle2, Zap, Shield, Cloud, Cpu, TrendingUp } from "lucide-react";
import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { homeStats } from "@/content/home";
import { siteCopy } from "@/content/site-copy";

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
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeInOut },
  }),
};

export default function HeroSection() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pt-32"
      aria-label="Hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#12051C] to-[#1A0A24]" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#8b5cf6]/5 to-transparent" />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={heroInView ? { opacity: 0.4, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -left-32 top-20 size-96 rounded-full bg-[#8b5cf6]/20 blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={heroInView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute -right-32 bottom-20 size-[600px] rounded-full bg-[#6d28d9]/30 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/5 blur-[100px]"
      />

      {/* Top Border Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* Left Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#8b5cf6] backdrop-blur-sm">
                <Sparkles className="size-3.5 animate-pulse" />
                {siteCopy.tagline || "Enterprise Technology Partner"}
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-8 text-[2.5rem] font-bold tracking-[-0.03em] text-white sm:text-[2.5rem]"
            >
              Transform Your Business With
              <span className="relative mt-2 block">
                <span className="bg-gradient-to-r from-[#8b5cf6] via-[#FFE55C] to-[#8b5cf6] bg-clip-text text-transparent">
                  Intelligent Technology
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={heroInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#8b5cf6] to-transparent"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base leading-relaxed text-[#a1a1aa]/80 sm:text-lg md:text-xl"
            >
              {siteCopy.heroSubtitle || "We help enterprises scale with AI-powered solutions, cloud-native architecture, and end-to-end digital transformation. From concept to deployment, we're your technology partner."}
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              {[
                { icon: CheckCircle2, text: "Enterprise-grade" },
                { icon: Shield, text: "ISO 27001 Certified" },
                { icon: TrendingUp, text: "98% Client Retention" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="size-4 text-[#8b5cf6]" />
                  <span className="text-sm text-[#a1a1aa]/70">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <AnimatedButton
                href="/contact"
              >
                Start Your Project
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </AnimatedButton>
              <AnimatedButton
                href="/services"
                variant="secondary"
              >
                Explore Services
              </AnimatedButton>
            </motion.div>
          

            {/* Stats Section */}
            <motion.div
              ref={statsRef}
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3"
            >
              {homeStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  custom={index}
                  variants={statVariants}
                  className="relative"
                >
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/60">
                    {stat.label}
                  </p>
                  {index === 0 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={statsInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="absolute -top-8 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#8b5cf6] to-transparent"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-[#8b5cf6]/20 via-[#6d28d9]/20 to-transparent blur-2xl" />
            
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[rgba(36,14,48,0.95)] to-[rgba(20,4,24,0.9)] p-6 shadow-2xl backdrop-blur-xl">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/0 via-[#8b5cf6]/30 to-[#8b5cf6]/0 opacity-0 transition-opacity group-hover:opacity-100" />
              
              {/* Header */}
              <div className="relative flex items-start justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#8b5cf6]">
                    <Zap className="size-3" />
                    Our Delivery Model
                  </p>
                  <h2 className="mt-3 text-xl font-bold leading-tight text-white sm:text-2xl">
                    One Partner for
                    <span className="block text-[#8b5cf6]">
                      Product, AI & Cloud
                    </span>
                  </h2>
                </div>
                <div className="rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 p-3">
                  <ArrowRight className="size-5 text-[#8b5cf6]" />
                </div>
              </div>

              {/* Features Grid */}
              <div className="relative mt-6 space-y-4">
                {/* Discovery */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#8b5cf6]/10 p-2">
                      <Cpu className="size-5 text-[#8b5cf6]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold uppercase tracking-wider text-[#8b5cf6]">
                        Discovery
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]/80">
                        Roadmaps grounded in business goals, scope clarity, and practical technical direction.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Build & Scale Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-white/[0.05]"
                  >
                    <div className="rounded-lg bg-[#8b5cf6]/10 p-2">
                      <Cloud className="size-5 text-[#8b5cf6]" />
                    </div>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#8b5cf6]">
                      Build
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]/80">
                      Cross-functional delivery with visible sprint progress.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-white/[0.05]"
                  >
                    <div className="rounded-lg bg-[#8b5cf6]/10 p-2">
                      <TrendingUp className="size-5 text-[#8b5cf6]" />
                    </div>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#8b5cf6]">
                      Scale
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]/80">
                      Architecture, release quality, and operations designed for growth.
                    </p>
                  </motion.div>
                </div>

                {/* Highlighted Section */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-[#8b5cf6]/20 bg-gradient-to-r from-[#8b5cf6]/10 to-transparent p-5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#8b5cf6]/20 p-2">
                      <Sparkles className="size-5 text-[#8b5cf6]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold uppercase tracking-wider text-[#8b5cf6]">
                        Conversion Focus
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#FFF6D4]">
                        From value proposition to proof, capability depth, trust, and action — we optimize every stage.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute -bottom-20 -right-20 size-40 rounded-full bg-[#8b5cf6]/5 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-[#a1a1aa]/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-10 w-[2px] bg-gradient-to-b from-[#8b5cf6] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
