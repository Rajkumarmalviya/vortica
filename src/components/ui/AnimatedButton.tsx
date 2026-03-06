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
      ? "bg-cyan-500 hover:bg-cyan-400 text-black"
      : "bg-transparent border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${className}`}
    >
      {children}
    </Link>
  );
}
