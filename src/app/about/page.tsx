"use client";

import { motion, useInView, cubicBezier } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Shield,
  Rocket,
  Sparkles,
  Code2,
  CheckCircle2,
  ArrowRight,
  Quote,
  Calendar,
  Briefcase
} from "lucide-react";
import PageShell from "@/components/ui/page-shell";

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
    transition: { duration: 0.5, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
  }),
};

// Company values data
const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "We focus on outcomes that matter, aligning technology with business goals to deliver measurable impact.",
    color: "#D4A017",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships through trust, transparency, and results.",
    color: "#D4A017",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies to solve complex challenges and create competitive advantages.",
    color: "#D4A017",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Enterprise-grade security, reliability, and performance are baked into everything we build.",
    color: "#D4A017",
  },
];

// Team members data
const teamMembers = [
  {
    name: "Raj Malvi",
    role: "Founder & CEO",
    bio: "10+ years of experience in product engineering and digital transformation.",
    image: "/team/raj.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Former AWS architect specializing in scalable cloud solutions and AI/ML.",
    image: "/team/sarah.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Michael Chen",
    role: "Head of Product",
    bio: "Product strategist with expertise in B2B SaaS and enterprise platforms.",
    image: "/team/michael.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

// Company milestones
const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to transform digital product development.",
    icon: Calendar,
  },
  {
    year: "2021",
    title: "First Enterprise Client",
    description: "Secured first Fortune 500 client and delivered successful transformation.",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "AWS Partnership",
    description: "Became certified AWS Advanced Consulting Partner.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations to serve clients across North America and Europe.",
    icon: TrendingUp,
  },
];

// Statistics
const stats = [
  { value: "50+", label: "Projects Delivered", icon: Code2 },
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "24/7", label: "Support Available", icon: Shield },
  { value: "5+", label: "Years Experience", icon: Award },
];

// Enhanced Page Hero Component
function EnhancedPageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative max-w-4xl"
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="size-4 text-[#D4A017]" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#D4A017]">
            {eyebrow}
          </span>
        </motion.div>
      )}
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-4 text-base leading-relaxed text-[#a1a1aa]/80 sm:text-lg"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.1 });
  const milestonesRef = useRef<HTMLDivElement>(null);
  const milestonesInView = useInView(milestonesRef, { once: true, amount: 0.1 });
  const teamRef = useRef<HTMLDivElement>(null);
  const teamInView = useInView(teamRef, { once: true, amount: 0.1 });

  return (
    <PageShell className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 size-56 rounded-full bg-[#D4A017]/5 blur-3xl" />
        <div className="absolute right-0 top-20 size-72 rounded-full bg-[#B8860B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 size-96 -translate-x-1/2 rounded-full bg-[#D4A017]/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="mb-16">
          <EnhancedPageHero
            eyebrow="About Us"
            title="A product engineering partner built for measurable digital growth."
            description="We are a product engineering partner helping teams turn ideas into secure, scalable digital products. With a focus on innovation and excellence, we deliver solutions that drive real business impact."
          />
        </div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                custom={index}
                variants={cardVariants}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="rounded-lg bg-[#D4A017]/10 p-2">
                    <Icon className="size-6 text-[#D4A017]" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-[#a1a1aa]/60">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What We Do & How We Work */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 grid gap-6 lg:grid-cols-2"
        >
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[rgba(36,14,48,0.72)] to-[rgba(20,4,24,0.82)] p-8 transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/0 via-[#D4A017]/5 to-[#D4A017]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-[#D4A017]/10 p-2">
                  <Target className="size-5 text-[#D4A017]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
                  What we do
                </p>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#a1a1aa]/80">
                Our team combines design, engineering, cloud, and delivery excellence to build products that drive measurable impact. 
                We specialize in AI/ML, cloud transformation, and scalable product development.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">AI/ML</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">Cloud Native</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">DevOps</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">Product Design</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/0 via-[#D4A017]/5 to-[#D4A017]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-[#D4A017]/10 p-2">
                  <Eye className="size-5 text-[#D4A017]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
                  How we work
                </p>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#a1a1aa]/80">
                We work in transparent sprint cycles with clear milestones, enabling faster learning and predictable execution. 
                Agile methodology meets enterprise-grade delivery.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#D4A017]" />
                <span className="text-sm text-[#a1a1aa]/70">2-week sprints</span>
                <span className="text-[#a1a1aa]/30">•</span>
                <CheckCircle2 className="size-4 text-[#D4A017]" />
                <span className="text-sm text-[#a1a1aa]/70">Daily standups</span>
                <span className="text-[#a1a1aa]/30">•</span>
                <CheckCircle2 className="size-4 text-[#D4A017]" />
                <span className="text-sm text-[#a1a1aa]/70">Weekly demos</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          ref={valuesRef}
          variants={containerVariants}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Heart className="size-4 text-[#D4A017]" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/70">
                Our Values
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              What drives us
            </h2>
            <p className="mt-2 text-[#a1a1aa]/60">
              Core principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 text-center transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-xl"
                >
                  <div className="flex justify-center">
                    <div className="rounded-lg bg-[#D4A017]/10 p-3 transition-all duration-300 group-hover:scale-110">
                      <Icon className="size-6 text-[#D4A017]" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#a1a1aa]/70">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Company Milestones */}
        <motion.div
          ref={milestonesRef}
          variants={containerVariants}
          initial="hidden"
          animate={milestonesInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <TrendingUp className="size-4 text-[#D4A017]" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/70">
                Our Journey
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Milestones that matter
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-[#D4A017]/30 to-transparent" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div
                    key={milestone.year}
                    custom={index}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-4 md:gap-8`}
                  >
                    <div className="flex-1 md:text-right">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-2">
                        <Icon className="size-4 text-[#D4A017]" />
                        <span className="text-sm font-semibold text-[#D4A017]">{milestone.year}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-white">{milestone.title}</h3>
                      <p className="text-sm text-[#a1a1aa]/70">{milestone.description}</p>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A017]">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          ref={teamRef}
          variants={containerVariants}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Users className="size-4 text-[#D4A017]" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/70">
                Leadership Team
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Meet the experts
            </h2>
            <p className="mt-2 text-[#a1a1aa]/60">
              Passionate professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 text-center transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-xl"
              >
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-[#D4A017]/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-[#D4A017]">{member.role}</p>
                <p className="mt-2 text-sm text-[#a1a1aa]/70">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-3">
                  <a href={member.social.linkedin} className="text-[#a1a1aa]/50 hover:text-[#D4A017]">
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-[#D4A017]/10 via-[#B8860B]/10 to-transparent p-8 text-center"
        >
          <Quote className="mx-auto mb-4 size-8 text-[#D4A017]" />
          <h3 className="text-2xl font-bold text-white">
            Ready to build something great together?
          </h3>
          <p className="mt-2 text-[#a1a1aa]/70">
            Let&apos;s discuss how we can help you achieve your goals
          </p>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017] to-[#D4A017] px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#D4A017]/20"
          >
            Start a Conversation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </PageShell>
  );
}
