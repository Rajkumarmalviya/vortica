// components/ui/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/content/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-2xl"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/0 via-[#D4A017]/5 to-[#D4A017]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Icon */}
      <div className="relative rounded-lg bg-[#D4A017]/10 p-3 w-fit">
        {service.icon ? (
          <img src={service.icon} alt="" className="size-6" />
        ) : (
          <div className="size-6 rounded-full bg-[#D4A017]/20" />
        )}
      </div>

      {/* Title */}
      <h3 className="relative mt-4 text-xl font-bold text-white group-hover:text-[#D4A017] transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative mt-2 text-sm leading-relaxed text-[#a1a1aa]/80">
        {service.summary}
      </p>

      {/* Features */}
      {service.capabilities.length > 0 && (
        <div className="relative mt-4 space-y-2">
          {service.capabilities.slice(0, 2).map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckCircle2 className="size-3 text-[#D4A017]" />
              <span className="text-xs text-[#a1a1aa]/70">{feature}</span>
            </div>
          ))}
        </div>
      )}

      {/* Link */}
      <Link
        href={`/services/${service.slug}`}
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D4A017] transition-all hover:gap-3"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.div>
  );
}
