"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CheckCircle2, 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Star,
  TrendingUp,
  Target,
  Eye,
  Code2,
  Rocket,
  Heart,
  ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps, trustPoints } from "@/content/home";
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

import { easeOut, easeInOut } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeInOut },
  }),
};

const trustPointVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeOut },
  }),
};

// Enhanced process steps with icons
const enhancedProcessSteps = processSteps.map((step, index) => ({
  ...step,
  icon: getStepIcon(index),
  color: getStepColor(index),
}));

function getStepIcon(index: number) {
  const icons = [Target, Eye, Code2, Rocket];
  return icons[index % icons.length];
}

function getStepColor(index: number) {
  const colors = ["#5B6BC4", "#5B6BC4", "#5B6BC4", "#5B6BC4"];
  return colors[index % colors.length];
}

// Enhanced trust points with icons and metrics
const enhancedTrustPoints = [
  {
    title: "Client-first delivery",
    description: "We work as an extension of your team, not just a vendor",
    icon: Heart,
    metric: null,
    metricLabel: null,
    color: "#5B6BC4",
  },
  {
    title: "Growing project portfolio",
    description: "Proven execution across product, AI, and cloud engagements",
    icon: Rocket,
    metric: null,
    metricLabel: null,
    color: "#5B6BC4",
  },
  {
    title: "24/7 Expert Support",
    description: "Round-the-clock technical assistance",
    icon: Clock,
    metric: "24/7",
    metricLabel: "Support Available",
    color: "#5B6BC4",
  },
  {
    title: "Security-first engineering",
    description: "Security and quality built into every stage of delivery",
    icon: Shield,
    metric: null,
    metricLabel: null,
    color: "#5B6BC4",
  },
  ...trustPoints.map((point, index) => ({
    title: point,
    description: getTrustDescription(index),
    icon: getTrustIcon(index),
    metric: getTrustMetric(index),
    metricLabel: getTrustMetricLabel(index),
    color: "#5B6BC4",
  })),
];

function getTrustIcon(index: number) {
  const icons = [Award, Users, Star, TrendingUp, Shield, Clock];
  return icons[index % icons.length];
}

function getTrustDescription(index: number) {
  const descriptions = [
    "Recognized for excellence in technology delivery",
    "Trusted by industry leaders worldwide",
    "Consistently rated 5-star by clients",
    "Driving measurable business outcomes",
    "Bank-grade security protocols",
    "Rapid response times guaranteed",
  ];
  return descriptions[index % descriptions.length];
}

function getTrustMetric(index: number) {
  return null;
}

function getTrustMetricLabel(index: number) {
  return null;
}

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  const processRef = useRef(null);
  const processInView = useInView(processRef, {
    once: true,
  });

  const trustRef = useRef(null);
  const trustInView = useInView(trustRef, {
    once: true,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-label="Why choose Vortica"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-[#000000]" />
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1 }}
          className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#5B6BC4]/5 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.3 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#5B6BC4]/10 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-center lg:mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2 mb-6">
            <Shield className="size-4 text-[#5B6BC4]" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/50">
              Why Choose Us
            </span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SectionHeading
              title="A clearer process, stronger trust signals, and less guesswork for clients."
              description="We believe in transparency, collaboration, and delivering measurable results. Here's how we build successful partnerships."
              align="center"
              className="text-white"
            />
          </motion.div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Process Steps Column */}
          <motion.div
            ref={processRef}
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#5B6BC4]/5 via-transparent to-transparent blur-2xl" />
            
            <div className="relative rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6 backdrop-blur sm:p-8">
              {/* Section Label */}
              <div className="mb-6 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#5B6BC4]/50 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5B6BC4]">
                  Our Process
                </p>
              </div>

              <div className="space-y-4">
                {enhancedProcessSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      custom={index}
                      variants={stepVariants}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                      className="group relative rounded-xl border border-[rgba(160,175,255,0.15)] bg-gradient-to-br from-[#0D1824] to-[#08111A] p-5 transition-all duration-300 hover:border-[#5B6BC4]/30 hover:shadow-xl"
                    >
                      {/* Step Number Background */}
                      <div className="absolute right-4 top-4 text-6xl font-bold text-white/5">
                        0{index + 1}
                      </div>
                      
                      <div className="relative flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#5B6BC4]/30 bg-[#5B6BC4]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5B6BC4]/20">
                          <Icon className="size-6 text-[#5B6BC4]" />
                        </div>
                        
                        <div className="flex-1">
                          <p className="text-xs font-medium uppercase tracking-wider text-[#5B6BC4]">
                            {step.eyebrow}
                          </p>
                          <h3 className="mt-2 text-xl font-bold text-white group-hover:text-[#5B6BC4] transition-colors">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-white/60">
                            {step.description}
                          </p>
                          
                          {/* Progress Indicator */}
                          {index < enhancedProcessSteps.length - 1 && (
                            <div className="absolute -bottom-4 left-6 hidden h-8 w-px bg-gradient-to-b from-[#5B6BC4]/30 to-transparent lg:block" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Trust Points Column */}
          <motion.div
            ref={trustRef}
            variants={containerVariants}
            initial="hidden"
            animate={trustInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {/* Section Label */}
            <div className="mb-6 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-[#5B6BC4]/50 to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B6BC4]">
                Trust Signals
              </p>
            </div>

            {enhancedTrustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  custom={index}
                  variants={trustPointVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-5 transition-all duration-300 hover:border-[#5B6BC4]/30 hover:shadow-xl"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5B6BC4]/0 via-[#5B6BC4]/5 to-[#5B6BC4]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5B6BC4]/10 transition-all duration-300 group-hover:scale-110">
                      <Icon className="size-6 text-[#5B6BC4]" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-white group-hover:text-[#5B6BC4] transition-colors">
                          {point.title}
                        </h3>
                        {point.metric && (
                          <div className="text-right">
                            <p className="text-lg font-bold text-[#5B6BC4]">
                              {point.metric}
                            </p>
                            <p className="text-[10px] uppercase tracking-wider text-white/35">
                              {point.metricLabel}
                            </p>
                          </div>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-white/50">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Trust Badge */}
            <motion.div
              variants={trustPointVariants}
              custom={enhancedTrustPoints.length}
              className="mt-6 rounded-xl border border-[#5B6BC4]/20 bg-gradient-to-r from-[#5B6BC4]/10 to-transparent p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-[#5B6BC4] text-[#5B6BC4]" />
                  ))}
                </div>
                <p className="text-sm font-medium text-white">
                  Highly rated by our clients
                </p>
              </div>
              <p className="mt-2 text-xs text-white/40">
                &ldquo;Best technology partner we&apos;ve ever worked with&rdquo; - Enterprise Client
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-8 backdrop-blur sm:flex-row sm:gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-6 text-[#5B6BC4]" />
              <span className="text-sm text-white/60">
                Ready to start your transformation?
              </span>
            </div>
            <AnimatedButton
              href="/contact"
              // className="bg-gradient-to-r from-[#5B6BC4] to-[#5B6BC4] text-white"
            >
              Start a Conversation
              <ArrowRight className="ml-2 size-4" />
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
