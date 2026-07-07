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
  // { label: "Work", href: "/work" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "Custom Software Development", href: "/services/custom-software-development" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Enterprise & Cloud", href: "/services/enterprise-cloud" },
  { label: "E-Commerce & CMS", href: "/services/ecommerce-cms" },
  { label: "UI/UX & Product Design", href: "/services/product-design" },
  { label: "DevOps & Security", href: "/services/devops-security" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/contact" },
  { label: "Terms of Service", href: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/vortica", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/vortica", label: "Twitter" },
  { icon: Github, href: "https://github.com/Rajkumarmalviya", label: "GitHub" },
  { icon: Youtube, href: "https://www.youtube.com/@Vortica", label: "YouTube" },
];

// Badges data
const badges = [
  { icon: Shield, label: "Security-first", text: "Built-in" },
  { icon: Clock, label: "24/7 Support", text: "Available" },
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-[rgba(160,175,255,0.15)] bg-[#000000]"
      aria-label="Footer"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.3 } : {}}
          transition={{ duration: 1 }}
          className="absolute -left-32 bottom-0 size-96 rounded-full bg-[#5B6BC4]/5 blur-[100px]"
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
              <span className="text-xl font-bold tracking-[-0.02em] text-white transition-colors group-hover:text-[#A0AFFF]">
                Vortica
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed text-white/50">
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
                    className="flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-3 py-1.5"
                  >
                    <Icon className="size-3 text-[#5B6BC4]" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-white">
                        {badge.label}
                      </p>
                      <p className="text-[8px] text-white/35">{badge.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#5B6BC4]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/50 transition-all hover:text-[#A0AFFF]"
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#5B6BC4]">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3">
              {servicesLinks.slice(0, 5).map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/50 transition-all hover:text-[#A0AFFF]"
                  >
                    <ChevronRight className="size-3 transition-transform group-hover:translate-x-1" />
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#5B6BC4] transition-all hover:gap-2"
                >
                  View all services
                  <ArrowUpRight className="size-3" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#5B6BC4]">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-[#5B6BC4]" />
                <span className="text-sm text-white/50">
                  Indore, Madhya Pradesh, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+917354489974"
                  className="group flex items-center gap-3 text-sm text-white/50 transition-all hover:text-[#A0AFFF]"
                >
                  <Phone className="size-4 text-[#5B6BC4]" />
                  <span className="group-hover:underline">+91 7354489974</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:connect.vortica@gmail.com"
                  className="group flex items-center gap-3 text-sm text-white/50 transition-all hover:text-[#A0AFFF]"
                >
                  <Mail className="size-4 text-[#5B6BC4]" />
                  <span className="group-hover:underline">connect.vortica@gmail.com</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/35">
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
                      className="rounded-lg border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-2 text-white/50 transition-all hover:border-[#5B6BC4]/30 hover:bg-[#5B6BC4]/10 hover:text-[#A0AFFF]"
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
          className="mt-12 rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-6"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-start gap-3 text-left sm:flex-row sm:items-center">
              <div className="rounded-full bg-[#5B6BC4]/10 p-2">
                <Send className="size-5 text-[#5B6BC4]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Subscribe to our newsletter
                </h4>
                <p className="text-xs text-white/40">
                  Get the latest tech insights and updates
                </p>
              </div>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-lg border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#5B6BC4] focus:outline-none focus:ring-1 focus:ring-[#5B6BC4]/30"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[#5B6BC4] px-4 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#5B6BC4]/20 sm:w-auto sm:shrink-0 transition-all hover:shadow-lg hover:shadow-[#5B6BC4]/20 sm:w-auto sm:shrink-0"
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
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgba(160,175,255,0.15)] pt-8 md:flex-row"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-white/35">
            © {new Date().getFullYear()} Vortica.in. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/35 transition-colors hover:text-[#A0AFFF]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-white/35">
            <Sparkles className="size-3" />
            <span>Crafted with precision</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
