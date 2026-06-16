"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

// Dummy internal config table for budget estimation (Price per sqft)
const rates = {
  Apartment: {
    Essential: { "Full home": 1500, "Few rooms": 800, "Furniture only": 600 },
    Premium: { "Full home": 2500, "Few rooms": 1500, "Furniture only": 1000 },
    Luxury: { "Full home": 4000, "Few rooms": 2500, "Furniture only": 1800 },
  },
  Villa: {
    Essential: { "Full home": 1800, "Few rooms": 1000, "Furniture only": 800 },
    Premium: { "Full home": 3000, "Few rooms": 1800, "Furniture only": 1200 },
    Luxury: { "Full home": 5000, "Few rooms": 3000, "Furniture only": 2200 },
  },
  Office: {
    Essential: { "Full home": 1200, "Few rooms": 700, "Furniture only": 500 },
    Premium: { "Full home": 2000, "Few rooms": 1200, "Furniture only": 800 },
    Luxury: { "Full home": 3500, "Few rooms": 2000, "Furniture only": 1500 },
  }
};

const timelines = {
  Essential: "45 - 60 Days",
  Premium: "60 - 90 Days",
  Luxury: "90 - 120 Days"
};

export function BudgetEstimator() {
  const [propertyType, setPropertyType] = useState<"Apartment" | "Villa" | "Office">("Apartment");
  const [size, setSize] = useState<number>(1000);
  const [scope, setScope] = useState<"Full home" | "Few rooms" | "Furniture only">("Full home");
  const [finish, setFinish] = useState<"Essential" | "Premium" | "Luxury">("Premium");

  const calculateEstimate = () => {
    const rate = rates[propertyType][finish][scope];
    const min = rate * size;
    const max = min * 1.25; // 25% variance
    
    const formatCurrency = (val: number) => {
      if (val >= 10000000) return `₹${(val/10000000).toFixed(2)} Cr`;
      if (val >= 100000) return `₹${(val/100000).toFixed(2)} L`;
      return `₹${val.toLocaleString('en-IN')}`;
    };

    return {
      min: formatCurrency(min),
      max: formatCurrency(max),
      timeline: timelines[finish]
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="glass-card p-6 md:p-10 w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[var(--color-terracotta)] mb-4">1. Property Type</label>
            <div className="flex gap-2">
              {["Apartment", "Villa", "Office"].map((type) => (
                <button
                  key={type}
                  onClick={() => setPropertyType(type as any)}
                  className={clsx(
                    "flex-1 py-2 px-2 md:px-4 rounded-md text-sm transition-colors border",
                    propertyType === type 
                      ? "bg-[var(--color-terracotta)] text-white border-[var(--color-terracotta)]" 
                      : "bg-transparent text-[var(--color-slate)] border-[var(--color-crystal)] hover:border-[var(--color-terracotta)]"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[var(--color-terracotta)] mb-4">2. Size (Sq Ft): {size}</label>
            <input 
              type="range" 
              min="300" max="10000" step="100"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full accent-[var(--color-terracotta)] h-2 bg-[var(--color-blush)] rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[var(--color-slate)] mt-2">
              <span>300 sqft</span>
              <span>10,000+ sqft</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[var(--color-terracotta)] mb-4">3. Scope</label>
            <div className="flex flex-wrap gap-2">
              {["Full home", "Few rooms", "Furniture only"].map((s) => (
                <button
                  key={s}
                  onClick={() => setScope(s as any)}
                  className={clsx(
                    "flex-1 py-2 px-2 md:px-4 rounded-md text-sm transition-colors border whitespace-nowrap",
                    scope === s 
                      ? "bg-[var(--color-terracotta)] text-white border-[var(--color-terracotta)]" 
                      : "bg-transparent text-[var(--color-slate)] border-[var(--color-crystal)] hover:border-[var(--color-terracotta)]"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[var(--color-terracotta)] mb-4">4. Finish Level</label>
            <div className="flex gap-2">
              {["Essential", "Premium", "Luxury"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFinish(f as any)}
                  className={clsx(
                    "flex-1 py-2 px-2 md:px-4 rounded-md text-sm transition-colors border",
                    finish === f 
                      ? "bg-[var(--color-terracotta)] text-white border-[var(--color-terracotta)]" 
                      : "bg-transparent text-[var(--color-slate)] border-[var(--color-crystal)] hover:border-[var(--color-terracotta)]"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="glass-card !bg-[var(--glass-tier1-bg)] p-8 text-center rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-transparent pointer-events-none" />
            
            <p className="text-[var(--color-slate)] text-sm mb-2 relative z-10 font-bold uppercase tracking-wide">Estimated Investment</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${estimate.min}-${estimate.max}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-display text-4xl md:text-5xl text-[var(--color-carbon)] mb-6 relative z-10 py-4"
              >
                {estimate.min} - {estimate.max}
              </motion.div>
            </AnimatePresence>

            <p className="text-[var(--color-slate)] text-sm mb-2 relative z-10 font-bold uppercase tracking-wide">Estimated Timeline</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={estimate.timeline}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-lg font-medium text-[var(--color-terracotta)] mb-8 relative z-10"
              >
                {estimate.timeline}
              </motion.div>
            </AnimatePresence>

            <div className="p-4 bg-[var(--color-warning)]/10 border border-[var(--color-warning)]/30 rounded-md mb-8 relative z-10 text-left">
              <p className="text-xs text-[var(--color-carbon)] leading-relaxed">
                <strong className="text-[var(--color-warning)]">Disclaimer:</strong> This is an estimate only. Final quotation depends on material selection, site condition, and detailed design consultation.
              </p>
            </div>

            <a 
              href={`mailto:hello@amudesignstudio.com?subject=Project Estimate Request&body=Hi, I'd like a formal quote for my ${propertyType}.%0D%0ASize: ${size} sqft%0D%0AScope: ${scope}%0D%0AFinish: ${finish}%0D%0AEstimated Budget: ${estimate.min} - ${estimate.max}`}
              className="inline-block w-full bg-[var(--color-carbon)] text-white py-4 rounded-md font-medium hover:bg-black transition-colors relative z-10"
            >
              Get Exact Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
