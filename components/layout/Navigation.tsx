"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Studio", href: "/studio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[var(--glass-tier3-bg)] backdrop-blur-[var(--glass-tier3-blur)] border-b border-[var(--color-crystal)] shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image src="/amu-design-studio/logo.png" alt="AMU Design Studio Logo" fill className="object-contain" priority />
              </div>
              <span className="font-display font-semibold text-xl md:text-2xl tracking-wide uppercase text-[var(--color-carbon)] group-hover:text-[var(--color-terracotta)] transition-colors">
                AMU Design Studio
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm text-[var(--color-slate)] hover:text-[var(--color-terracotta)] transition-colors relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[var(--color-terracotta)] transition-all duration-[var(--duration-fast)] group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <Button variant="primary">Get Free Quote</Button>
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-[var(--color-carbon)] hover:text-[var(--color-terracotta)] focus:outline-none p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[var(--glass-tier1-bg)] backdrop-blur-[var(--glass-tier1-blur)]"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--color-carbon)] hover:text-[var(--color-terracotta)] p-2"
              >
                <X className="h-8 w-8" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-[80vh] space-y-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-4xl text-[var(--color-carbon)] hover:text-[var(--color-terracotta)]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="px-8 py-4 text-lg">Get Free Quote</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
