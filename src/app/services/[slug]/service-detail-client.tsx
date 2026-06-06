"use client";

import { motion, easeOut } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  TrendingUp,
  Users,
  Shield,
  Rocket,
  MessageSquare,
  ChevronRight,
  Star,
  Award,
  BarChart3,
  Briefcase,
  Target,
  Eye,
  Code2,
  Cloud,
  Brain,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageShell from "@/components/ui/page-shell";
import type { Service } from "@/content/services";

type ServiceDetailClientProps = {
  service: Service;
  relatedServices: Service[];
};

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

const serviceIcons: Record<string, LucideIcon> = {
  Brain,
  Cloud,
  Shield,
  Code2,
  Rocket,
  Target,
  Eye,
  Zap,
  BarChart3,
  Award,
  Briefcase,
};

const getIconComponent = (iconName: string) => serviceIcons[iconName] || Sparkles;

const getServiceMetrics = () => [
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "3x", label: "Faster Delivery", icon: Clock },
  { value: "50+", label: "Successful Projects", icon: Briefcase },
];

export default function ServiceDetailClient({
  service,
  relatedServices,
}: ServiceDetailClientProps) {
  const metrics = getServiceMetrics();
  const IconComponent = getIconComponent(service.icon);

  return (
    <PageShell className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 size-56 rounded-full bg-[#D4A017]/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-72 rounded-full bg-[#B8860B]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#D4A017]/30 bg-gradient-to-br from-[#D4A017]/20 to-[#D4A017]/5">
              <IconComponent className="size-10 text-[#D4A017]" />
            </div>

            <div className="mb-4 flex items-center gap-2 text-sm text-[#a1a1aa]/60">
              <Link href="/services" className="transition-colors hover:text-[#D4A017]">
                Services
              </Link>
              <ChevronRight className="size-3" />
              <span className="text-[#D4A017]">{service.title}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#a1a1aa]/80 sm:text-lg">
              {service.summary}
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Star className="size-4 text-[#D4A017]" />
              <span className="text-sm text-[#a1a1aa]/70">Trusted by 50+ innovative companies</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {metrics.map((metric) => {
            const MetricIcon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 text-center transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-xl"
              >
                <div className="mb-3 flex justify-center">
                  <div className="rounded-lg bg-[#D4A017]/10 p-2">
                    <MetricIcon className="size-6 text-[#D4A017]" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-white sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-sm text-[#a1a1aa]/60">{metric.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {service.outcomes.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#D4A017]/50 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
                  Key Outcomes
                </p>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                What you&apos;ll achieve
              </h2>
              <p className="mt-2 text-[#a1a1aa]/60">
                Measurable results our clients experience with this service
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {service.outcomes.map((outcome) => (
                <motion.div
                  key={outcome}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/0 via-[#D4A017]/5 to-[#D4A017]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 text-[#D4A017]" />
                    <p className="text-sm leading-relaxed text-[#FFF7EF]">{outcome}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {service.capabilities.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#D4A017]/50 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
                  Capabilities
                </p>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                What we deliver
              </h2>
              <p className="mt-2 text-[#a1a1aa]/60">
                Comprehensive capabilities under this service track
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((capability) => (
                <motion.div
                  key={capability}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="group rounded-xl border border-white/10 bg-gradient-to-br from-[rgba(36,14,48,0.72)] to-[rgba(20,4,24,0.82)] px-4 py-3.5 transition-all duration-300 hover:border-[#D4A017]/30"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-[#D4A017]" />
                    <span className="text-sm text-[#a1a1aa]/80">{capability}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Rocket className="size-4 text-[#D4A017]" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/70">
                Our Process
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              How we deliver excellence
            </h2>
            <p className="mt-2 text-[#a1a1aa]/60">
              A proven methodology tailored to your success
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Discovery",
                description: "Deep dive into your goals, challenges, and opportunities",
                step: "01",
              },
              {
                icon: Code2,
                title: "Development",
                description: "Agile implementation with continuous feedback",
                step: "02",
              },
              {
                icon: Rocket,
                title: "Launch",
                description: "Enterprise-grade deployment with quality assurance",
                step: "03",
              },
              {
                icon: TrendingUp,
                title: "Optimize",
                description: "Continuous improvement and scaling support",
                step: "04",
              },
            ].map((step) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-xl"
                >
                  <div className="absolute right-4 top-4 text-4xl font-bold text-white/5">
                    {step.step}
                  </div>
                  <div className="relative">
                    <div className="w-fit rounded-lg bg-[#D4A017]/10 p-2">
                      <StepIcon className="size-5 text-[#D4A017]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#a1a1aa]/70">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4A017]/50 to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
                Why Choose This Service
              </p>
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              The Vortica difference
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#D4A017]/10 p-2">
                  <Users className="size-5 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Expert Team</h3>
                  <p className="mt-2 text-sm text-[#a1a1aa]/70">
                    Dedicated specialists with deep expertise in this domain
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#D4A017]/10 p-2">
                  <Clock className="size-5 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Fast Delivery</h3>
                  <p className="mt-2 text-sm text-[#a1a1aa]/70">
                    Agile methodology ensures rapid time-to-market
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#D4A017]/10 p-2">
                  <Shield className="size-5 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Enterprise Security</h3>
                  <p className="mt-2 text-sm text-[#a1a1aa]/70">
                    ISO 27001 certified security practices
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#D4A017]/10 p-2">
                  <BarChart3 className="size-5 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Measurable Results</h3>
                  <p className="mt-2 text-sm text-[#a1a1aa]/70">
                    Data-driven approach with clear KPIs and reporting
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {relatedServices.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <motion.div variants={itemVariants} className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Sparkles className="size-4 text-[#D4A017]" />
                <span className="text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/70">
                  Explore More
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Related Services
              </h2>
              <p className="mt-2 text-[#a1a1aa]/60">
                Discover other services that complement this offering
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = getIconComponent(relatedService.icon);
                return (
                  <motion.div
                    key={relatedService.slug}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-xl"
                  >
                    <div className="w-fit rounded-lg bg-[#D4A017]/10 p-2">
                      <RelatedIcon className="size-5 text-[#D4A017]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-[#D4A017]">
                      {relatedService.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-[#a1a1aa]/70">
                      {relatedService.summary}
                    </p>
                    <Link
                      href={`/services/${relatedService.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#D4A017] transition-all hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="size-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#D4A017]/10 via-[#B8860B]/10 to-transparent p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            Ready to discuss this service?
          </h3>
          <p className="mt-2 text-[#a1a1aa]/70">
            Let&apos;s talk about how we can help you achieve your goals with {service.title}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <AnimatedButton href="/contact">
              Start a Conversation
              <MessageSquare className="ml-2 size-4" />
            </AnimatedButton>
            <AnimatedButton href="/work" variant="secondary">
              View Case Studies
              <Briefcase className="ml-2 size-4" />
            </AnimatedButton>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#a1a1aa]/50">
            <Clock className="size-4" />
            <span>Free 30-minute consultation • No obligation</span>
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}
