"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  { name: "Anjali M.", role: "Homeowner", location: "Noida", rating: 5, text: "AMU transformed our 3BHK beyond our wildest dreams. Rohit's eye for detail and the quality of their in-house carpentry is unmatched.", projectSlug: "pastel-dew" },
  { name: "Karan S.", role: "NRI Investor", location: "Gurugram", rating: 5, text: "Managing a renovation from abroad is terrifying, but AMU's transparency and process made it seamless. The final result is spectacular.", projectSlug: "heritage-hue" },
  { name: "Priya V.", role: "Homeowner", location: "Delhi", rating: 5, text: "The team understood exactly what we wanted before we even did. Their 3D renders were exactly what was delivered.", projectSlug: "april-bloom" }
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto px-4 sm:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 md:p-12 text-center border-[var(--color-crystal)]"
          >
            <div className="flex justify-center mb-6 text-[var(--color-terracotta)]">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} fill="currentColor" size={20} className="mx-1" />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-[var(--color-carbon)] font-display italic mb-8 leading-relaxed">
              "{testimonials[current].text}"
            </p>
            <div className="mb-6">
              <h4 className="font-bold text-[var(--color-carbon)] tracking-wide">{testimonials[current].name}</h4>
              <p className="text-sm text-[var(--color-slate)]">{testimonials[current].role}, {testimonials[current].location}</p>
            </div>
            <Link 
              href={`/portfolio/${testimonials[current].projectSlug}`}
              className="inline-flex items-center text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-hover)] transition-colors group"
            >
              See their project 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 p-2 md:p-3 rounded-full bg-white shadow-lg text-[var(--color-slate)] hover:text-[var(--color-terracotta)] transition-colors z-10">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-4 p-2 md:p-3 rounded-full bg-white shadow-lg text-[var(--color-slate)] hover:text-[var(--color-terracotta)] transition-colors z-10">
        <ChevronRight size={20} />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[var(--color-terracotta)]' : 'w-2 bg-[var(--color-crystal)] hover:bg-[var(--color-slate)]'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
