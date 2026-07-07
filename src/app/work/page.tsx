"use client";

import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart3,
  ChevronRight,
  Sparkles,
  Filter,
  X,
  ArrowUpRight
} from "lucide-react";
import PageShell from "@/components/ui/page-shell";
import { caseStudies } from "@/content/home";

// Enhanced types
interface CaseStudy {
  category: string;
  title: string;
  summary: string;
  metrics?: {
    value: string;
    label: string;
    type?: string;
  };
  tags?: string[];
  image?: string;
  result?: string;
  client?: string;
  year?: string;
  challenge?: string;
  solution?: string;
  impact?: string[];
}

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeInOut },
  }),
};

// Categories for filtering
const categories = [
  "All",
  "AI & Automation",
  "Cloud Transformation",
  "Product Development",
  "Digital Experience",
];

// Enhanced Page Hero Component
function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
          className="inline-flex items-center gap-2 rounded-full border border-[#5B6BC4]/30 bg-[#5B6BC4]/10 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="size-4 text-[#5B6BC4]" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#5B6BC4]">
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
        className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg"
      >
        {description}
      </motion.p>

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <div className="flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2">
          <TrendingUp className="size-4 text-[#5B6BC4]" />
          <span className="text-sm text-white/50">Growing project portfolio</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2">
          <Users className="size-4 text-[#5B6BC4]" />
          <span className="text-sm text-white/50">Client-first delivery</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-4 py-2">
          <Clock className="size-4 text-[#5B6BC4]" />
          <span className="text-sm text-white/50">Delivering since 2024</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Enhanced Case Study Card Component
function CaseStudyCard({ study, index, isFeatured }: { study: CaseStudy; index: number; isFeatured: boolean }) {
  // Get metric icon
  const getMetricIcon = (type?: string) => {
    switch (type) {
      case "revenue": return TrendingUp;
      case "time": return Clock;
      case "users": return Users;
      case "performance": return BarChart3;
      default: return TrendingUp;
    }
  };

  const MetricIcon = study.metrics?.type ? getMetricIcon(study.metrics.type) : TrendingUp;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-2xl border border-[rgba(160,175,255,0.15)] backdrop-blur transition-all duration-300 hover:border-[#5B6BC4]/30 hover:shadow-2xl ${
        isFeatured
          ? "bg-gradient-to-br from-[#5B6BC4]/10 via-white/[0.03] to-transparent"
          : "bg-[#0D1824]"
      }`}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5B6BC4]/0 via-[#5B6BC4]/5 to-[#5B6BC4]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute right-6 top-6 z-10 rounded-full bg-[#5B6BC4]/20 px-3 py-1 backdrop-blur">
          <span className="text-xs font-medium text-[#5B6BC4]">Featured</span>
        </div>
      )}

      <div className="relative p-7">
        {/* Category */}
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-[#5B6BC4]/50 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5B6BC4]">
            {study.category}
          </p>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white group-hover:text-[#A0AFFF] transition-colors">
          {study.title}
        </h2>

        {/* Summary */}
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {study.summary}
        </p>

        {/* Metrics */}
        {study.metrics && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-5 rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-4"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#5B6BC4]/10 p-2">
                <MetricIcon className="size-5 text-[#5B6BC4]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {study.metrics.value}
                </p>
                <p className="text-xs text-white/40">
                  {study.metrics.label}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tags */}
        {study.tags && study.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgba(160,175,255,0.15)] bg-[#08111A] px-2.5 py-1 text-[10px] font-medium text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Client & Year */}
        {(study.client || study.year) && (
          <div className="mt-4 flex items-center gap-3 text-xs text-white/35">
            {study.client && <span>Client: {study.client}</span>}
            {study.year && <span>Year: {study.year}</span>}
          </div>
        )}

        {/* Read More Link */}
        <Link
          href={`/work/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#5B6BC4] transition-all hover:gap-3"
        >
          {study.result || "Read case study"}
          <ChevronRight className="size-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0 h-20 w-20 overflow-hidden">
        <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-[#5B6BC4]/5 blur-2xl" />
      </div>
    </motion.article>
  );
}

// Main Work Page Component
export default function WorkPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>(caseStudies);

  // Filter case studies based on category
  const filterStudies = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredStudies(caseStudies);
    } else {
      const filtered = caseStudies.filter((study: CaseStudy) => 
        study.category === category || 
        (study.tags && study.tags.includes(category))
      );
      setFilteredStudies(filtered);
    }
  };

  return (
    <PageShell>
      {/* Hero Section */}
      <div className="mb-12">
        <PageHero
          eyebrow="Selected work"
          title="Representative outcomes across automation, cloud, and product experiences."
          description="The work examples highlight the kind of measurable improvements Vortica helps clients achieve across product operations, modernization, and conversion-focused UX."
        />
      </div>

      {/* Filter Bar */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-8 flex flex-wrap items-center gap-3"
      >
        <div className="flex items-center gap-2">
          <Filter className="size-4 text-white/35" />
          <span className="text-sm text-white/35">Filter by:</span>
        </div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterStudies(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-[#5B6BC4] text-white shadow-lg"
                : "border border-[rgba(160,175,255,0.15)] bg-[#08111A] text-white/50 hover:border-[#5B6BC4]/30 hover:text-[#A0AFFF]"
            }`}
          >
            {category}
          </button>
        ))}
        {selectedCategory !== "All" && (
          <button
            onClick={() => filterStudies("All")}
            className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/35 transition-all hover:text-[#A0AFFF]"
          >
            <X className="size-3" />
            Clear
          </button>
        )}
      </motion.div>

      {/* Results Count */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
        className="mb-6 text-sm text-white/35"
      >
        Showing {filteredStudies.length} {filteredStudies.length === 1 ? "project" : "projects"}
      </motion.p>

      {/* Case Studies Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr]"
      >
        {filteredStudies.map((study, index) => (
          <CaseStudyCard
            key={study.title}
            study={study}
            index={index}
            isFeatured={index === 0 && selectedCategory === "All"}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredStudies.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center rounded-2xl border border-[rgba(160,175,255,0.15)] bg-[#08111A] p-12 text-center"
        >
          <div className="rounded-full bg-[#5B6BC4]/10 p-3">
            <Sparkles className="size-8 text-[#5B6BC4]" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">No projects found</h3>
          <p className="mt-2 text-white/50">
            Try adjusting your filter to see more results
          </p>
          <button
            onClick={() => filterStudies("All")}
            className="mt-6 rounded-full bg-[#5B6BC4]/10 px-6 py-2 text-sm font-medium text-[#5B6BC4] transition-all hover:bg-[#5B6BC4]/20"
          >
            View all projects
          </button>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 rounded-2xl bg-gradient-to-r from-[#5B6BC4]/10 via-[#5B6BC4]/10 to-transparent p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-white">
          Ready to create your success story?
        </h3>
        <p className="mt-2 text-white/50">
          Let&apos;s discuss how we can help you achieve similar results
        </p>
        <Link
          href="/contact"
          className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5B6BC4] to-[#5B6BC4] px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#5B6BC4]/20"
        >
          Start a Project
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </motion.div>
    </PageShell>
  );
}
