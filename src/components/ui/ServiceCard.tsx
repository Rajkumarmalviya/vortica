"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/content/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative h-full overflow-hidden rounded-xl border border-[rgba(160,175,255,0.15)] bg-[#0D1824] p-6 transition-all duration-300 hover:border-[#A0AFFF] hover:shadow-[0_0_20px_rgba(160,175,255,0.12)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#5B6BC4]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-xl" />

      <div className="relative rounded-lg bg-[#5B6BC4]/15 p-3 w-fit">
        <span className="text-2xl leading-none" role="img" aria-hidden="true">{service.icon}</span>
      </div>

      <h3 className="relative mt-4 text-xl font-semibold text-white group-hover:text-[#A0AFFF] transition-colors">
        {service.title}
      </h3>

      <p className="relative mt-2 text-sm leading-relaxed text-white/60">
        {service.summary}
      </p>

      {service.capabilities.length > 0 && (
        <div className="relative mt-4 space-y-2">
          {service.capabilities.slice(0, 2).map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckCircle2 className="size-3 text-[#5B6BC4]" />
              <span className="text-xs text-white/50">{feature}</span>
            </div>
          ))}
        </div>
      )}

      <Link
        href={`/services/${service.slug}`}
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#A0AFFF] transition-all hover:gap-3 hover:text-white"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
