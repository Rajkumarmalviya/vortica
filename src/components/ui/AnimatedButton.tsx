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
      ? "border border-[#8b5cf6]/90 bg-[linear-gradient(135deg,#a78bfa_0%,#8b5cf6_55%,#7c3aed_100%)] text-white shadow-[0_16px_40px_rgba(139,92,246,0.18)] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(139,92,246,0.22)]"
      : "border border-[rgba(255,255,255,0.10)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-[#a1a1aa] hover:-translate-y-1 hover:border-[#6d28d9] hover:bg-[linear-gradient(180deg,rgba(88,28,135,0.52),rgba(30,10,50,0.4))]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] ${className}`}
    >
      {children}
    </Link>
  );
}
