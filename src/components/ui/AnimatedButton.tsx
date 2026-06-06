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
      ? "border border-[#E8C96A]/80 bg-[linear-gradient(135deg,#EDD97A_0%,#E8C96A_55%,#C9A84C_100%)] text-[#0a0a0a] font-semibold shadow-[0_8px_32px_rgba(232,201,106,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(232,201,106,0.35),inset_0_1px_0_rgba(255,255,255,0.2)]"
      : "border border-white/10 bg-[rgba(255,255,255,0.05)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:-translate-y-1 hover:border-[#E8C96A]/40 hover:bg-[rgba(232,201,106,0.08)]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C96A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] ${className}`}
    >
      {children}
    </Link>
  );
}
