import Link from "next/link";
import { ReactNode } from "react";

type AnimatedButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function AnimatedButton({ href, children, variant = "primary" }: AnimatedButtonProps) {
  const className =
    variant === "primary"
      ? "border border-[#D4A017]/80 bg-[linear-gradient(135deg,#F5C518_0%,#D4A017_55%,#B8860B_100%)] text-[#0a0a0a] font-semibold shadow-[0_8px_32px_rgba(212,160,23,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,160,23,0.35)]"
      : "border border-white/10 bg-[rgba(255,255,255,0.05)] text-white hover:-translate-y-1 hover:border-[#D4A017]/40 hover:bg-[rgba(212,160,23,0.08)]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] ${className}`}
    >
      {children}
    </Link>
  );
}
