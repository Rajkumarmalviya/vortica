"use client";

import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  ArrowUpRight,
  Shield,
  Award,
  Clock,
  Send,
  ChevronRight,
  Sparkles
} from "lucide-react";

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

// Footer links data
const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const servicesLinks = [
  { label: "AI & Machine Learning", href: "/services/ai-ml" },
  { label: "Cloud Solutions", href: "/services/cloud" },
  { label: "Cybersecurity", href: "/services/security" },
  { label: "Digital Transformation", href: "/services/digital-transformation" },
  { label: "Mobile Development", href: "/services/mobile" },
  { label: "IT Consulting", href: "/services/consulting" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "GDPR Compliance", href: "/gdpr" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

// Badges data
const badges = [
  { icon: Shield, label: "ISO 27001", text: "Certified" },
  { icon: Award, label: "AWS Partner", text: "Advanced Tier" },
  { icon: Clock, label: "24/7 Support", text: "Global Coverage" },
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-[rgba(236,216,213,0.08)] bg-gradient-to-b from-[rgba(17,4,18,0.96)] to-[rgba(10,2,12,0.98)]"
      aria-label="Footer"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.3 } : {}}
          transition={{ duration: 1 }}
          className="absolute -left-32 bottom-0 size-96 rounded-full bg-[#D4A017]/5 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Company Info Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.10)] bg-gradient-to-br from-white/10 to-white/5 p-1.5 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Vortica logo"
                  width={34}
                  height={34}
                  className="size-7 object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-[-0.02em] text-white transition-colors group-hover:text-[#D4A017]">
                Vortica
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed text-[#a1a1aa]/70">
              Engineering-focused product team for custom software, AI, and cloud solutions. 
              We help businesses transform ideas into scalable, high-performance applications.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
                  >
                    <Icon className="size-3 text-[#D4A017]" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-white">
                        {badge.label}
                      </p>
                      <p className="text-[8px] text-[#a1a1aa]/50">{badge.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4A017]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-[#a1a1aa]/70 transition-all hover:text-[#D4A017]"
                  >
                    <ChevronRight className="size-3 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4A017]">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3">
              {servicesLinks.slice(0, 5).map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1 text-sm text-[#a1a1aa]/70 transition-all hover:text-[#D4A017]"
                  >
                    <ChevronRight className="size-3 transition-transform group-hover:translate-x-1" />
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#D4A017] transition-all hover:gap-2"
                >
                  View all services
                  <ArrowUpRight className="size-3" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4A017]">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-[#D4A017]" />
                <span className="text-sm text-[#a1a1aa]/70">
                  Indore, Madhya Pradesh, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+917354489974"
                  className="group flex items-center gap-3 text-sm text-[#a1a1aa]/70 transition-all hover:text-[#D4A017]"
                >
                  <Phone className="size-4 text-[#D4A017]" />
                  <span className="group-hover:underline">+91 7354489974</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:connect.vortica@gmail.com"
                  className="group flex items-center gap-3 text-sm text-[#a1a1aa]/70 transition-all hover:text-[#D4A017]"
                >
                  <Mail className="size-4 text-[#D4A017]" />
                  <span className="group-hover:underline">connect.vortica@gmail.com</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/50">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/10 bg-white/5 p-2 text-[#a1a1aa]/70 transition-all hover:border-[#D4A017]/30 hover:bg-[#D4A017]/10 hover:text-[#D4A017]"
                      aria-label={social.label}
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-start gap-3 text-left sm:flex-row sm:items-center">
              <div className="rounded-full bg-[#D4A017]/10 p-2">
                <Send className="size-5 text-[#D4A017]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Subscribe to our newsletter
                </h4>
                <p className="text-xs text-[#a1a1aa]/60">
                  Get the latest tech insights and updates
                </p>
              </div>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[#a1a1aa]/50 focus:border-[#D4A017]/50 focus:outline-none focus:ring-1 focus:ring-[#D4A017]/50"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#F5C518] to-[#B8860B] px-4 py-2.5 text-sm font-medium text-[#0a0a0a] transition-all hover:shadow-lg hover:shadow-[#D4A017]/20 sm:w-auto sm:shrink-0 transition-all hover:shadow-lg hover:shadow-[#D4A017]/20 sm:w-auto sm:shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-[#a1a1aa]/40">
            © {new Date().getFullYear()} Vortica.in. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-[#a1a1aa]/50 transition-colors hover:text-[#D4A017]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-[#a1a1aa]/40">
            <Sparkles className="size-3" />
            <span>Crafted with precision</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
