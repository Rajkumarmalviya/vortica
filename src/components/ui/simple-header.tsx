"use client";

import Link from "next/link";
import React, { memo, useCallback, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuToggle } from "@/components/ui/menu-toggle";
import { cn } from "@/lib/utils";
import { 
  ChevronDown, 
  Shield, 
  Cpu, 
  Cloud, 
  Smartphone,
  Database,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

// Types
interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  isExternal?: boolean;
  megaMenu?: MegaMenuItem[];
}

interface MegaMenuItem {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

interface SimpleHeaderProps {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
  companyName?: string;
  phoneNumber?: string;
  email?: string;
}

// Mega Menu Data
const MEGA_MENU_ITEMS: Record<string, MegaMenuItem[]> = {
  services: [
    {
      label: "Custom Software Development",
      href: "/services/custom-software-development",
      description: "Web, mobile, desktop, and API systems built around your workflows",
      icon: <Database className="size-5" />,
      tags: ["Web", "Mobile", "API"]
    },
    {
      label: "AI & Automation",
      href: "/services/ai-automation",
      description: "Intelligent automation, copilots, and data-driven workflows",
      icon: <Cpu className="size-5" />,
      tags: ["LLM", "Computer Vision", "NLP"]
    },
    {
      label: "Enterprise & Cloud Solutions",
      href: "/services/enterprise-cloud",
      description: "Cloud-native systems and modernization programs for long-term growth",
      icon: <Cloud className="size-5" />,
      tags: ["Multi-cloud", "DevOps", "Kubernetes"]
    },
    {
      label: "E-Commerce & CMS",
      href: "/services/ecommerce-cms",
      description: "Commerce experiences and content platforms optimized for conversion",
      icon: <Smartphone className="size-5" />,
      tags: ["Shopify", "WooCommerce", "Headless"]
    },
    {
      label: "UI/UX & Product Design",
      href: "/services/product-design",
      description: "Research-led product experiences that are accessible and conversion-oriented",
      icon: <Smartphone className="size-5" />,
      tags: ["UX", "Prototype", "Responsive"]
    },
    {
      label: "DevOps & Security",
      href: "/services/devops-security",
      description: "Delivery pipelines, observability, and security hardening",
      icon: <Shield className="size-5" />,
      tags: ["Zero Trust", "SOC", "Pen Testing"]
    }
  ]
};

// Main Navigation Links
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { 
    label: "Services", 
    href: "/services",
    megaMenu: MEGA_MENU_ITEMS.services
  },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Mega Menu Component
const MegaMenu = memo(({ 
  items, 
  isOpen, 
  onClose 
}: { 
  items: MegaMenuItem[]; 
  isOpen: boolean;
  onClose: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full mt-2 w-[720px] rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(17,4,18,0.98)] to-[rgba(29,10,34,0.98)] backdrop-blur-xl shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-4 p-6">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group rounded-xl p-4 transition-all duration-200 hover:bg-white/5"
                onClick={onClose}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-[#F3DB3F]/10 p-2 text-[#F3DB3F] transition-all duration-200 group-hover:bg-[#F3DB3F]/20">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white group-hover:text-[#F3DB3F] transition-colors">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-[#ECD8D5]/60">
                      {item.description}
                    </p>
                    {item.tags && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[#ECD8D5]/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-white/10 p-4">
            <Link
              href="/services"
              className="group flex items-center justify-between text-sm text-[#F3DB3F] hover:text-[#F3DB3F]/80"
              onClick={onClose}
            >
              <span>View all services</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

MegaMenu.displayName = "MegaMenu";

// Desktop Nav Link Component
const DesktopNavLink = memo(({ 
  link, 
  isActive,
  onMegaMenuOpen,
  activeMegaMenu
}: { 
  link: NavLink; 
  isActive: boolean;
  onMegaMenuOpen: (label: string | null) => void;
  activeMegaMenu: string | null;
}) => {
  const hasMegaMenu = !!link.megaMenu;
  const isOpen = activeMegaMenu === link.label;

  return (
    <div className="relative">
      {hasMegaMenu ? (
        <button
          onClick={() => onMegaMenuOpen(isOpen ? null : link.label)}
          className={cn(
            "group flex items-center gap-1 rounded-full px-4 py-2 text-[0.9rem] font-medium tracking-[-0.01em] transition-all duration-200",
            "hover:bg-gradient-to-b hover:from-[rgba(75,37,83,0.56)] hover:to-[rgba(38,16,63,0.36)]",
            isActive || isOpen
              ? "text-[#F3DB3F] bg-gradient-to-b from-[rgba(75,37,83,0.56)] to-[rgba(38,16,63,0.36)]"
              : "text-[#ECD8D5]/82 hover:text-[#F3DB3F]"
          )}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          {link.label}
          <ChevronDown className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </button>
      ) : (
        <Link
          href={link.href}
          className={cn(
            "group flex items-center gap-1 rounded-full px-4 py-2 text-[0.9rem] font-medium tracking-[-0.01em] transition-all duration-200",
            "hover:bg-gradient-to-b hover:from-[rgba(75,37,83,0.56)] hover:to-[rgba(38,16,63,0.36)]",
            isActive
              ? "text-[#F3DB3F] bg-gradient-to-b from-[rgba(75,37,83,0.56)] to-[rgba(38,16,63,0.36)]"
              : "text-[#ECD8D5]/82 hover:text-[#F3DB3F]"
          )}
        >
          {link.label}
        </Link>
      )}
      
      {hasMegaMenu && link.megaMenu && (
        <MegaMenu 
          items={link.megaMenu} 
          isOpen={isOpen}
          onClose={() => onMegaMenuOpen(null)}
        />
      )}
    </div>
  );
});

DesktopNavLink.displayName = "DesktopNavLink";

// Contact Info Component
const ContactInfo = memo(() => (
  <div className="hidden lg:flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
    <a
      href="tel:+917354489974"
      className="flex items-center gap-2 text-sm text-[#ECD8D5]/70 hover:text-[#F3DB3F] transition-colors"
    >
      <Phone className="size-4" />
      <span>7354489974</span>
    </a>
  </div>
));

ContactInfo.displayName = "ContactInfo";

// Main Header Component
export const SimpleHeader = memo(function SimpleHeader({ 
  className = "",
  logoSrc = "/logo.png",
  logoAlt = "Vortica logo",
  companyName = "Vortica",
  phoneNumber = "7354489974",
  email = "connect.vortica@gmail.com"
}: SimpleHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMegaMenu(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = useCallback(() => {
    setOpen(false);
    setActiveMegaMenu(null);
  }, []);

  const handleMegaMenuOpen = useCallback((label: string | null) => {
    setActiveMegaMenu(label);
  }, []);

  const isActiveLink = useCallback((href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  }, [pathname]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "border-b border-[rgba(236,216,213,0.08)]",
        scrolled 
          ? "bg-gradient-to-b from-[rgba(17,4,18,0.95)] to-[rgba(29,10,34,0.92)] backdrop-blur-xl shadow-2xl"
          : "bg-gradient-to-b from-[rgba(17,4,18,0.88)] to-[rgba(29,10,34,0.72)] backdrop-blur-lg",
        className
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-6 xl:px-3 2xl:px-0">
        {/* Logo Section */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3DB3F]/50 rounded-xl transition-all duration-200"
          onClick={handleLinkClick}
          aria-label={`${companyName} homepage`}
        >
          <div className="relative size-10 overflow-hidden rounded-xl border border-[rgba(236,216,213,0.14)] bg-gradient-to-br from-white/10 to-white/5 shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={40}
              height={40}
              className="object-cover"
              priority
              quality={100}
            />
          </div>
          <div>
            <p className="text-xl font-bold tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-[#F3DB3F]">
              {companyName}
            </p>
            <p className="text-[10px] font-medium tracking-wide text-[#ECD8D5]/50">
              TECHNOLOGY PARTNERS
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <DesktopNavLink
              key={link.label}
              link={link}
              isActive={isActiveLink(link.href)}
              onMegaMenuOpen={handleMegaMenuOpen}
              activeMegaMenu={activeMegaMenu}
            />
          ))}
        </div>

        {/* Right Side - Contact & CTA */}
        <div className="flex items-center gap-3">
          <ContactInfo />
          
          {/* Desktop CTA Button */}
          <Button
            className="hidden lg:flex bg-gradient-to-r from-[#F3DB3F] to-[#E5C82E] text-[#1A041F] font-semibold hover:shadow-lg hover:shadow-[#F3DB3F]/20 transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = "/contact"}
          >
            Start a Project
            <ArrowRight className="ml-2 size-4" />
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              className={cn(
                "border-[rgba(236,216,213,0.12)] bg-white/5",
                "text-[#ECD8D5]/82 hover:text-[#F3DB3F]",
                "hover:bg-gradient-to-b hover:from-[rgba(75,37,83,0.56)] hover:to-[rgba(38,16,63,0.36)]",
                "transition-all duration-200 lg:hidden",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3DB3F]/50"
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <MenuToggle
                strokeWidth={2.5}
                open={open}
                onOpenChange={setOpen}
                className="size-6"
              />
            </Button>

            {/* Mobile Navigation Sheet */}
            <SheetContent
              className={cn(
                "gap-0 border-r border-[rgba(236,216,213,0.08)]",
                "bg-gradient-to-b from-[rgba(17,4,18,0.98)] to-[rgba(29,10,34,0.98)]",
                "text-[#ECD8D5] backdrop-blur-xl",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
              )}
              showClose={false}
              side="left"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="border-b border-[rgba(236,216,213,0.08)] px-6 py-5">
                  <Link 
                    href="/" 
                    className="flex items-center gap-3"
                    onClick={handleLinkClick}
                  >
                    <div className="relative size-10">
                      <Image
                        src={logoSrc}
                        alt={logoAlt}
                        width={40}
                        height={40}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-white">
                        {companyName}
                      </span>
                      <p className="text-[9px] text-[#ECD8D5]/50">
                        TECHNOLOGY PARTNERS
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto px-6 py-8">
                  {NAV_LINKS.map((link) => (
                    <div key={link.label} className="mb-2">
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] font-medium transition-all duration-200",
                          isActiveLink(link.href)
                            ? "bg-gradient-to-r from-[#F3DB3F]/10 to-transparent text-[#F3DB3F]"
                            : "text-[#ECD8D5]/82 hover:bg-white/5 hover:text-[#F3DB3F]"
                        )}
                        onClick={handleLinkClick}
                      >
                        {link.label}
                        {link.megaMenu && (
                          <ChevronDown className="size-4" />
                        )}
                      </Link>
                      
                      {/* Mobile Mega Menu Items */}
                      {link.megaMenu && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                          {link.megaMenu.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-start gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-white/5"
                              onClick={handleLinkClick}
                            >
                              <div className="mt-0.5 rounded-lg bg-[#F3DB3F]/10 p-1.5 text-[#F3DB3F]">
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-white">
                                  {item.label}
                                </p>
                                <p className="text-xs text-[#ECD8D5]/60">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact & CTA */}
                <div className="border-t border-[rgba(236,216,213,0.08)] p-6 space-y-4">
                  <div className="space-y-3">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center gap-3 text-sm text-[#ECD8D5]/70 hover:text-[#F3DB3F] transition-colors"
                    >
                      <Phone className="size-4" />
                      <span>{phoneNumber}</span>
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-3 text-sm text-[#ECD8D5]/70 hover:text-[#F3DB3F] transition-colors"
                    >
                      <Mail className="size-4" />
                      <span>{email}</span>
                    </a>
                  </div>
                  
                  <Button
                    className="w-full bg-gradient-to-r from-[#F3DB3F] to-[#E5C82E] text-[#1A041F] font-semibold hover:shadow-lg"
                    onClick={() => {
                      handleLinkClick();
                      window.location.href = "/contact";
                    }}
                  >
                    Start a Project
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
});

SimpleHeader.displayName = "SimpleHeader";
