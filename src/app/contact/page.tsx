"use client";

import { useRef, useState } from "react";
import { motion, useInView, easeOut } from "framer-motion";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Calendar,
  User,
  Building,
  FileText
} from "lucide-react";
import PageShell from "@/components/ui/page-shell";
import PageHero from "@/components/ui/page-hero";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

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

// Contact information
const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Indore, Madhya Pradesh, India"],
    action: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 7354489974"],
    action: { label: "Call now", href: "tel:+917354489974" },
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["connect.vortica@gmail.com"],
    action: { label: "Send email", href: "mailto:connect.vortica@gmail.com" },
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM IST", "Saturday: 10:00 AM - 4:00 PM IST"],
    action: null,
  },
];

// FAQ items
const faqs = [
  {
    question: "What's the typical response time?",
    answer: "We usually respond within 24 hours during business days. For urgent inquiries, please call us directly.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a free 30-minute consultation to discuss your project requirements and provide initial recommendations.",
  },
  {
    question: "What information should I include?",
    answer: "Please include your project goals, timeline expectations, and any specific requirements. The more details, the better we can assist you.",
  },
];

// Service options for dropdown
const serviceOptions = [
  "Select a service",
  "AI & Machine Learning",
  "Cloud Solutions",
  "Cybersecurity",
  "Digital Transformation",
  "Mobile Development",
  "IT Consulting",
  "Other",
];

// Budget options
const budgetOptions = [
  "Select budget range",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus("submitting");
    
    // Track form submission
    trackEvent(AnalyticsEvents.FORM_SUBMIT, { 
      form_name: "contact_form", 
      location: "contact",
      service: formData.service,
      budget: formData.budget 
    });
    
    // Simulate form submission (replace with actual API call)
    try {
      // In production, replace with your API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For formsubmit.co integration
      const formElement = e.target as HTMLFormElement;
      formElement.submit();
      
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
      console.error("Form submission error:", error);
    }
  };

  return (
    <PageShell className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 size-56 rounded-full bg-[#E8C96A]/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-72 rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="mb-12">
          <PageHero
            eyebrow="Contact"
            title="Let's talk about your project."
            description="Share your goals and we will get back with a roadmap and estimate within 24 hours."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-[rgba(36,14,48,0.72)] to-[rgba(20,4,24,0.82)] p-6 backdrop-blur sm:p-8"
            >
              <div className="mb-6 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#E8C96A]/50 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E8C96A]">
                  Get in Touch
                </p>
              </div>

              <form
                action="https://formsubmit.co/connect.vortica@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Formsubmit hidden fields */}
                <input type="hidden" name="_next" value="https://vortica.in/thank-you" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - Vortica" />
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Name Field */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#a1a1aa]">
                    <User className="size-4" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${
                      errors.name ? "border-red-500/50" : "border-white/10"
                    } bg-white/[0.04] px-4 py-3 text-white placeholder:text-[#a1a1aa]/50 focus:border-[#E8C96A] focus:outline-none focus:ring-2 focus:ring-[#E8C96A]/20`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="size-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#a1a1aa]">
                    <Mail className="size-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${
                      errors.email ? "border-red-500/50" : "border-white/10"
                    } bg-white/[0.04] px-4 py-3 text-white placeholder:text-[#a1a1aa]/50 focus:border-[#E8C96A] focus:outline-none focus:ring-2 focus:ring-[#E8C96A]/20`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="size-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#a1a1aa]">
                    <Building className="size-4" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-[#a1a1aa]/50 focus:border-[#E8C96A] focus:outline-none focus:ring-2 focus:ring-[#E8C96A]/20"
                    placeholder="Your Company"
                  />
                </div>

                {/* Service & Budget Row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#a1a1aa]">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus:border-[#E8C96A] focus:outline-none focus:ring-2 focus:ring-[#E8C96A]/20"
                    >
                      {serviceOptions.map(option => (
                        <option key={option} value={option} className="bg-[#0a0a0a]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#a1a1aa]">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus:border-[#E8C96A] focus:outline-none focus:ring-2 focus:ring-[#E8C96A]/20"
                    >
                      {budgetOptions.map(option => (
                        <option key={option} value={option} className="bg-[#0a0a0a]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#a1a1aa]">
                    <FileText className="size-4" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    } bg-white/[0.04] px-4 py-3 text-white placeholder:text-[#a1a1aa]/50 focus:border-[#E8C96A] focus:outline-none focus:ring-2 focus:ring-[#E8C96A]/20`}
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="size-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#E8C96A] to-[#E8C96A] px-6 py-3.5 font-medium text-white transition-all hover:shadow-lg hover:shadow-[#E8C96A]/20 disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {formStatus === "submitting" ? (
                      <>
                        <div className="size-4 animate-spin rounded-full border-2 border-[#0a0a0a] border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                {/* Success Message */}
                {formStatus === "success" && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-3 text-green-400">
                    <CheckCircle2 className="size-4" />
                    <span className="text-sm">Message sent successfully! We&apos;ll get back to you soon.</span>
                  </div>
                )}

                {/* Error Message */}
                {formStatus === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-red-400">
                    <AlertCircle className="size-4" />
                    <span className="text-sm">Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 transition-all duration-300 hover:border-[#E8C96A]/30 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#E8C96A]/10 p-2">
                      <Icon className="size-5 text-[#E8C96A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="mt-1 text-sm text-[#a1a1aa]/70">
                          {detail}
                        </p>
                      ))}
                      {info.action && (
                        <a
                          href={info.action.href}
                          className="mt-2 inline-flex items-center gap-1 text-sm text-[#E8C96A] transition-all hover:gap-2"
                        >
                          {info.action.label}
                          <ArrowRight className="size-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* FAQ Section */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="size-5 text-[#E8C96A]" />
                <h3 className="font-semibold text-white">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="cursor-pointer text-sm font-medium text-[#a1a1aa] transition-colors hover:text-[#E8C96A]">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-sm text-[#a1a1aa]/70 pl-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>

            {/* Response Guarantee */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-[#E8C96A]/20 bg-gradient-to-r from-[#E8C96A]/10 to-transparent p-6 text-center"
            >
              <Sparkles className="mx-auto mb-3 size-8 text-[#E8C96A]" />
              <h3 className="text-lg font-semibold text-white">24-Hour Response Guarantee</h3>
              <p className="mt-2 text-sm text-[#a1a1aa]/70">
                We respond to all inquiries within one business day. For urgent matters, please call us directly.
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href="tel:+917354489974"
                  className="flex items-center gap-2 text-sm text-[#E8C96A] hover:underline"
                >
                  <Phone className="size-3" />
                  Call Now
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#E8C96A] hover:underline"
                >
                  <Calendar className="size-3" />
                  Schedule Call
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
}
