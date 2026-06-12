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
      ? "bg-[#5B6BC4] text-white border border-[#5B6BC4] hover:bg-[#6B7DD4] hover:shadow-[0_0_30px_rgba(160,175,255,0.35)] hover:-translate-y-0.5 font-medium"
      : "bg-transparent text-white border border-[#5B6BC4] hover:bg-[#5B6BC4] hover:-translate-y-0.5 font-medium";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[0.78rem] uppercase tracking-[0.1em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B6BC4] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${className}`}
    >
      {children}
    </Link>
  );
}
