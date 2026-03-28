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
      ? "border border-[#F3DB3F]/90 bg-[linear-gradient(135deg,#F5E7CF_0%,#F3DB3F_55%,#D5B640_100%)] text-[#1A0718] shadow-[0_16px_40px_rgba(243,219,63,0.18)] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(243,219,63,0.22)]"
      : "border border-[rgba(236,216,213,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-[#ECD8D5] hover:-translate-y-1 hover:border-[#8E5F74] hover:bg-[linear-gradient(180deg,rgba(75,37,83,0.52),rgba(38,16,63,0.4))]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBE408] focus-visible:ring-offset-2 focus-visible:ring-offset-[#190019] ${className}`}
    >
      {children}
    </Link>
  );
}
