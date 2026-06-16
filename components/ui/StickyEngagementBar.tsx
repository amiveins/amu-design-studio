"use client";

import { useState } from "react";
import { MessageCircle, Phone, X, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function StickyEngagementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        className="fixed bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 left-0 right-0 md:left-auto md:right-6 z-40 p-4 md:p-0 flex justify-center w-full md:w-auto"
      >
        <div className="glass-card !bg-[var(--glass-tier3-bg)] backdrop-blur-[var(--glass-tier3-blur)] p-2 md:p-3 rounded-full md:rounded-2xl shadow-xl flex md:flex-col items-center gap-4 relative w-full md:w-auto justify-between md:justify-center">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md text-gray-500 hover:text-black hidden md:block"
          >
            <X size={12} />
          </button>
          
          <div className="flex items-center md:flex-col gap-4 pl-2 md:pl-0">
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I'd%20like%20to%20discuss%20an%20interior%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform shadow-lg group relative"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={22} />
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[var(--color-carbon)] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                WhatsApp
              </span>
            </a>
            
            <a
              href="tel:+919999999999"
              className="p-3 bg-[var(--color-slate)] text-white rounded-full hover:scale-110 transition-transform shadow-lg group relative"
              aria-label="Call Us"
            >
              <Phone size={22} />
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[var(--color-carbon)] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Call Us
              </span>
            </a>

            <Link href="/contact" className="hidden md:flex p-3 bg-[var(--color-terracotta)] text-white rounded-full hover:scale-110 transition-transform shadow-lg group relative" aria-label="Get Free Quote">
              <ClipboardList size={22} />
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[var(--color-carbon)] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Get Quote
              </span>
            </Link>
          </div>

          <div className="md:hidden flex-1 flex justify-center">
            <Link href="/contact" className="bg-[var(--color-terracotta)] text-white px-6 py-2 rounded-full text-sm font-medium w-full text-center">
              Get Free Quote
            </Link>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-black md:hidden p-2 pr-4"
          >
            <X size={20} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
