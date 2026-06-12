"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Shield,
  Rocket,
  Sparkles,
  Mail,
  Phone,
  Star,
} from "lucide-react";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeOut },
  }),
};

// Benefit items
const benefits = [
  {
    icon: Calendar,
    title: "Fast alignment",
    description:
      "Share your goals and constraints upfront. Get matched with the right experts within 24 hours.",
    metric: "24h",
    metricLabel: "Response Time",
  },
  {
    icon: TrendingUp,
    title: "Clear recommendations",
    description:
      "Get a practical plan for roadmap, team shape, and delivery timeline with actionable next steps.",
    metric: "100%",
    metricLabel: "Actionable Plans",
  },
  {
    icon: Rocket,
    title: "Execution confidence",
    description:
      "Move forward with a partner who can ship and scale, backed by our delivery guarantee.",
    metric: "98%",
    metricLabel: "Success Rate",
  },
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFlow Inc",
    quote:
      "Vortica transformed our product development process. The roadmap they provided was spot-on.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "VP of Engineering, DataCore",
    quote:
      "Best technology partner we've worked with. They delivered ahead of schedule and under budget.",
    rating: 5,
  },
];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.1,
  });

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      // Handle email submission
      console.log("Email submitted:", email);
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28"
      aria-label="Call to action"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-[#000000]" />

      {/* Glowing Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.6, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -left-32 -top-32 size-96 rounded-full bg-[#5B6BC4]/20 blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.4, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute -right-32 -bottom-32 size-96 rounded-full bg-[#5B6BC4]/20 blur-[100px]"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl border border-[#5B6BC4]/20 bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] shadow-2xl backdrop-blur"
        >
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B6BC4]/0 via-[#5B6BC4]/10 to-[#5B6BC4]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Content Container */}
          <div className="relative p-8 sm:p-12 lg:p-16">
            {/* Header Section */}
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <motion.div variants={itemVariants}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#5B6BC4]/30 bg-[#5B6BC4]/10 px-4 py-2 backdrop-blur-sm">
                  <Sparkles className="size-4 text-[#5B6BC4] animate-pulse" />
                  <span className="text-xs font-medium uppercase tracking-wider text-[#5B6BC4]">
                    Limited Availability
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to turn product ambition into
                  <span className="relative mt-2 block">
                    <span className="bg-gradient-to-r from-[#5B6BC4] to-[#5B6BC4] bg-clip-text text-transparent">
                      clearer roadmap & stronger execution?
                    </span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#5B6BC4] to-transparent"
                    />
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
                  Tell us your goals and we will propose the right roadmap, team shape, and delivery
                  timeline. Get started with a free consultation call.
                </p>

                {/* Trust Indicators */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-[#5B6BC4]" />
                    <span className="text-sm text-white/50">No obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-[#5B6BC4]" />
                    <span className="text-sm text-white/50">30-min consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#5B6BC4]" />
                    <span className="text-sm text-white/50">Free strategy session</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="flex lg:justify-end">
                <AnimatedButton
                  href="/contact"
                  // className="group relative overflow-hidden bg-gradient-to-r from-[#5B6BC4] to-[#5B6BC4] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-[#5B6BC4]/25"
                >
                  <span className="relative z-10 flex items-center">
                    Talk to an expert
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5B6BC4] to-[#5B6BC4] opacity-0 transition-opacity group-hover:opacity-100" />
                </AnimatedButton>
              </motion.div>
            </div>

            {/* Benefits Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    custom={index}
                    variants={cardVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative overflow-hidden rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-5 transition-all duration-300 hover:border-[#5B6BC4]/30 hover:shadow-xl"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5B6BC4]/0 via-[#5B6BC4]/5 to-[#5B6BC4]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="rounded-lg bg-[#5B6BC4]/10 p-2">
                          <Icon className="size-5 text-[#5B6BC4]" />
                        </div>
                        {benefit.metric && (
                          <div className="text-right">
                            <p className="text-lg font-bold text-[#5B6BC4]">{benefit.metric}</p>
                            <p className="text-[10px] uppercase tracking-wider text-white/35">
                              {benefit.metricLabel}
                            </p>
                          </div>
                        )}
                      </div>
                      <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#5B6BC4]">
                        {benefit.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Quick Contact & Testimonials Row */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-12 grid gap-6 border-t border-[rgba(160,175,255,0.15)] pt-8 lg:grid-cols-2"
            >
              {/* Quick Contact Form */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="size-4 text-[#5B6BC4]" />
                  <p className="text-sm font-medium text-white">Quick contact</p>
                </div>
                <form onSubmit={handleQuickContact} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-0 flex-1 rounded-lg border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#5B6BC4] focus:outline-none focus:ring-1 focus:ring-[#5B6BC4]/30"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#5B6BC4]/10 px-4 py-2.5 text-sm font-medium text-[#5B6BC4] transition-all hover:bg-[#5B6BC4]/20 sm:w-auto sm:shrink-0"
                  >
                    {submitted ? "Sent!" : "Send"}
                  </button>
                </form>
                <p className="mt-2 text-xs text-white/35">
                  Get a free consultation within 24 hours
                </p>
              </motion.div>

              {/* Testimonials */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="size-4 text-[#5B6BC4]" />
                  <p className="text-sm font-medium text-white">What clients say</p>
                </div>
                <div className="space-y-3">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="border-l-2 border-[#5B6BC4] pl-3">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="size-3 fill-[#5B6BC4] text-[#5B6BC4]" />
                        ))}
                      </div>
                      <p className="text-sm text-white/60">&ldquo;{testimonial.quote}&rdquo;</p>
                      <p className="mt-1 text-xs text-white/35">
                        {testimonial.name}, {testimonial.role}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Additional Contact Options */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              <div className="flex flex-col items-start gap-2 rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-4 text-left sm:items-center sm:text-center">
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <Phone className="size-4 text-[#5B6BC4]" />
                  <span>Or call us directly</span>
                </div>
                <a
                  href="tel:+917354489974"
                  className="break-all text-base font-medium text-[#5B6BC4] hover:underline sm:break-normal"
                >
                  7354489974
                </a>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-4 text-left sm:items-center sm:text-center">
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <Clock className="size-4 text-[#5B6BC4]" />
                  <span>Response time</span>
                </div>
                <p className="text-base font-medium text-[#5B6BC4]">
                  Within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
