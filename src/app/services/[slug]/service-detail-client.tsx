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
  { value: "5+", label: "Projects Delivered", icon: Briefcase },
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "2+", label: "Years Experience", icon: Award },
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
        <div className="absolute left-0 top-0 size-56 rounded-full bg-[#5B6BC4]/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-72 rounded-full bg-[#5B6BC4]/10 blur-3xl" />
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
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#5B6BC4]/30 bg-gradient-to-br from-[#5B6BC4]/20 to-[#5B6BC4]/5">
              <IconComponent className="size-10 text-[#5B6BC4]" />
            </div>

            <div className="mb-4 flex items-center gap-2 text-sm text-white/40">
              <Link href="/services" className="transition-colors hover:text-[#A0AFFF]">
                Services
              </Link>
              <ChevronRight className="size-3" />
              <span className="text-[#5B6BC4]">{service.title}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
              {service.summary}
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2">
              <Star className="size-4 text-[#5B6BC4]" />
              <span className="text-sm text-white/50">Trusted by 5+ growing teams</span>
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
                className="rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6 text-center transition-all duration-300 hover:border-[#5B6BC4]/30 hover:shadow-xl"
              >
                <div className="mb-3 flex justify-center">
                  <div className="rounded-lg bg-[#5B6BC4]/10 p-2">
                    <MetricIcon className="size-6 text-[#5B6BC4]" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-white sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-sm text-white/40">{metric.label}</p>
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
                <div className="h-px flex-1 bg-gradient-to-r from-[#5B6BC4]/50 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5B6BC4]">
                  Key Outcomes
                </p>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                What you&apos;ll achieve
              </h2>
              <p className="mt-2 text-white/40">
                Measurable results our clients experience with this service
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {service.outcomes.map((outcome) => (
                <motion.div
                  key={outcome}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-5 transition-all duration-300 hover:border-[#5B6BC4]/30 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5B6BC4]/0 via-[#5B6BC4]/5 to-[#5B6BC4]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 text-[#5B6BC4]" />
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
                <div className="h-px flex-1 bg-gradient-to-r from-[#5B6BC4]/50 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5B6BC4]">
                  Capabilities
                </p>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                What we deliver
              </h2>
              <p className="mt-2 text-white/40">
                Comprehensive capabilities under this service track
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((capability) => (
                <motion.div
                  key={capability}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="group rounded-xl border border-[rgba(160,175,255,0.15)] bg-gradient-to-br from-[#0D1824] to-[rgba(20,4,24,0.82)] px-4 py-3.5 transition-all duration-300 hover:border-[#5B6BC4]/30"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-[#5B6BC4]" />
                    <span className="text-sm text-white/60">{capability}</span>
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2">
              <Rocket className="size-4 text-[#5B6BC4]" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                Our Process
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              How we deliver excellence
            </h2>
            <p className="mt-2 text-white/40">
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
                  className="group relative overflow-hidden rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6 transition-all duration-300 hover:border-[#5B6BC4]/30 hover:shadow-xl"
                >
                  <div className="absolute right-4 top-4 text-4xl font-bold text-white/5">
                    {step.step}
                  </div>
                  <div className="relative">
                    <div className="w-fit rounded-lg bg-[#5B6BC4]/10 p-2">
                      <StepIcon className="size-5 text-[#5B6BC4]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
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
              <div className="h-px flex-1 bg-gradient-to-r from-[#5B6BC4]/50 to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B6BC4]">
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
              className="rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#5B6BC4]/10 p-2">
                  <Users className="size-5 text-[#5B6BC4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Expert Team</h3>
                  <p className="mt-2 text-sm text-white/50">
                    Dedicated specialists with deep expertise in this domain
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#5B6BC4]/10 p-2">
                  <Clock className="size-5 text-[#5B6BC4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Fast Delivery</h3>
                  <p className="mt-2 text-sm text-white/50">
                    Agile methodology ensures rapid time-to-market
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#5B6BC4]/10 p-2">
                  <Shield className="size-5 text-[#5B6BC4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Enterprise Security</h3>
                  <p className="mt-2 text-sm text-white/50">
                    ISO 27001 certified security practices
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#5B6BC4]/10 p-2">
                  <BarChart3 className="size-5 text-[#5B6BC4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Measurable Results</h3>
                  <p className="mt-2 text-sm text-white/50">
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
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2">
                <Sparkles className="size-4 text-[#5B6BC4]" />
                <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                  Explore More
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Related Services
              </h2>
              <p className="mt-2 text-white/40">
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
                    className="group rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6 transition-all duration-300 hover:border-[#5B6BC4]/30 hover:shadow-xl"
                  >
                    <div className="w-fit rounded-lg bg-[#5B6BC4]/10 p-2">
                      <RelatedIcon className="size-5 text-[#5B6BC4]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-[#A0AFFF]">
                      {relatedService.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/50">
                      {relatedService.summary}
                    </p>
                    <Link
                      href={`/services/${relatedService.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#5B6BC4] transition-all hover:gap-3"
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
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#5B6BC4]/10 via-[#5B6BC4]/10 to-transparent p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            Ready to discuss this service?
          </h3>
          <p className="mt-2 text-white/50">
            Let&apos;s talk about how we can help you achieve your goals with {service.title}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <AnimatedButton href="/contact">
              Start a Conversation
              <MessageSquare className="ml-2 size-4" />
            </AnimatedButton>
            {/* <AnimatedButton href="/work" variant="secondary">
              View Case Studies
              <Briefcase className="ml-2 size-4" />
            </AnimatedButton> */}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/35">
            <Clock className="size-4" />
            <span>Free 30-minute consultation • No obligation</span>
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}
