import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-white">
          Vortica.in
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-gray-300 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <AnimatedButton href="/contact">Get estimate</AnimatedButton>
        </div>
      </div>
    </header>
  );
}
