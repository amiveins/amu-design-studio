"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const slides = [
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80", title: "We design an artful life", subtitle: "Bring your dream home to life." },
  { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80", title: "You visualize, we actualize", subtitle: "Book us to tailor your space." },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80", title: "We design a space you love", subtitle: "Show us your style." },
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", title: "We furnish to perfection", subtitle: "Beautiful home is just a click away." }
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-[var(--color-stone)] -mt-20">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.04 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1, ease: "linear" },
            scale: { duration: 8, ease: "linear" } 
          }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-[var(--color-mocha)]" />

      <div className="absolute bottom-16 md:bottom-32 left-4 right-4 md:left-24 md:right-auto z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card !bg-[var(--glass-tier1-bg)] backdrop-blur-[var(--glass-tier1-blur)] p-6 md:p-12 max-w-2xl rounded-2xl border-[rgba(255,255,255,0.2)] shadow-2xl"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight italic">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" className="w-full sm:w-auto !bg-white !text-[var(--color-carbon)] hover:!bg-[var(--color-terracotta)] hover:!text-white border-none shadow-lg">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/style-finder">
                <Button variant="secondary" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-[var(--color-carbon)] backdrop-blur-sm">
                  Find Your Style
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-white/70 text-[10px] md:text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 md:h-12 bg-gradient-to-b from-white/70 to-transparent"
        />
      </div>
    </div>
  );
}
