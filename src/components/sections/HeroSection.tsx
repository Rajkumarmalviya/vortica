"use client";

import { ArrowRight, Sparkles, CheckCircle2, Zap, Shield, Cloud, Cpu, TrendingUp } from "lucide-react";
import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { homeStats } from "@/content/home";
import { siteCopy } from "@/content/site-copy";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const statVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: easeInOut } }),
};

export default function HeroSection() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pt-32"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Atmospheric glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(160,175,255,0.18), transparent 60%)" }}
      />

      {/* Ambient orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 2.5 }}
        className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(91,107,196,0.2), transparent)" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 0.7 } : {}}
        transition={{ duration: 2.5, delay: 0.3 }}
        className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(160,175,255,0.12), transparent)" }}
      />

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5B6BC4]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(91,107,196,0.3)] bg-[rgba(91,107,196,0.1)] px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#A0AFFF]">
                <Sparkles className="size-3.5 text-[#5B6BC4]" />
                {siteCopy.tagline || "Enterprise Technology Partner"}
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-8 text-[2.8rem] font-bold tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[3.6rem]"
              style={{ lineHeight: 1.05 }}
            >
              Transform Your Business With
              <span className="block mt-2">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #5B6BC4, #A0AFFF)" }}
                >
                  Intelligent Technology
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              {siteCopy.heroSubtitle || "We help enterprises scale with AI-powered solutions, cloud-native architecture, and end-to-end digital transformation. From concept to deployment, we're your technology partner."}
            </motion.p>

            {/* Trust indicators */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-5">
              {[
                { icon: CheckCircle2, text: "Enterprise-grade" },
                { icon: Shield, text: "Security-first delivery" },
                { icon: TrendingUp, text: "Product-minded teams" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="size-4 text-[#5B6BC4]" />
                  <span className="text-sm text-white/60">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
              <AnimatedButton href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </AnimatedButton>
              <AnimatedButton href="/services" variant="secondary">
                Explore Services
              </AnimatedButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="mt-16 grid grid-cols-2 gap-4 border-t border-[rgba(160,175,255,0.15)] pt-8 sm:grid-cols-3"
            >
              {homeStats.map((stat, index) => (
                <motion.div key={stat.label} custom={index} variants={statVariants} className="relative">
                  <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/40 font-medium">{stat.label}</p>
                  {index === 0 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={statsInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="absolute -top-8 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#5B6BC4] to-transparent"
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
            <div className="absolute -inset-4 rounded-[40px] blur-2xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(91,107,196,0.15), transparent)" }} />

            <div className="relative overflow-hidden rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-6 shadow-[0_0_40px_rgba(91,107,196,0.08)]">
              {/* Header */}
              <div className="flex items-start justify-between border-b border-[rgba(160,175,255,0.1)] pb-6">
                <div>
                  <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A0AFFF]">
                    <Zap className="size-3 text-[#5B6BC4]" />
                    Our Delivery Model
                  </p>
                  <h2 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl">
                    One Partner for{" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(90deg, #5B6BC4, #A0AFFF)" }}
                    >
                      Product, AI & Cloud
                    </span>
                  </h2>
                </div>
                <div className="rounded-full border border-[rgba(91,107,196,0.3)] bg-[rgba(91,107,196,0.1)] p-3">
                  <ArrowRight className="size-5 text-[#5B6BC4]" />
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="rounded-xl border border-[rgba(160,175,255,0.1)] bg-[#0D1824] p-5 transition-all duration-300 hover:border-[#5B6BC4]/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#5B6BC4]/15 p-2">
                      <Cpu className="size-5 text-[#5B6BC4]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wider text-[#A0AFFF]">Discovery</p>
                      <p className="mt-1 text-sm text-white/60">Roadmaps grounded in business goals, scope clarity, and practical technical direction.</p>
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Cloud, label: "Build", desc: "Cross-functional delivery with visible sprint progress." },
                    { icon: TrendingUp, label: "Scale", desc: "Architecture, release quality, and operations designed for growth." },
                  ].map(({ icon: Icon, label, desc }) => (
                    <motion.div
                      key={label}
                      whileHover={{ scale: 1.01 }}
                      className="rounded-xl border border-[rgba(160,175,255,0.1)] bg-[#0D1824] p-5 transition-all duration-300 hover:border-[#5B6BC4]/40"
                    >
                      <div className="rounded-lg bg-[#5B6BC4]/15 p-2 w-fit">
                        <Icon className="size-5 text-[#5B6BC4]" />
                      </div>
                      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-[#A0AFFF]">{label}</p>
                      <p className="mt-1 text-sm text-white/60">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="rounded-xl border border-[rgba(91,107,196,0.25)] bg-gradient-to-r from-[#5B6BC4]/10 to-transparent p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#5B6BC4]/20 p-2">
                      <Sparkles className="size-5 text-[#5B6BC4]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wider text-[#A0AFFF]">Conversion Focus</p>
                      <p className="mt-1 text-sm text-white/70">From value proposition to proof, capability depth, trust, and action — we optimize every stage.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-[#5B6BC4] via-[#5B6BC4]/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
