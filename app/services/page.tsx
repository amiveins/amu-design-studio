import { BudgetEstimator } from "@/components/features/BudgetEstimator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | AMU Design Studio",
  description: "End-to-end interior design and renovation services.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--color-ivory)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-carbon)] mb-6">
          Our <span className="italic text-[var(--color-terracotta)]">Services</span>
        </h1>
        <p className="text-lg text-[var(--color-slate)] max-w-2xl mx-auto mb-16">
          End-to-end interior design, renovation, and styling services. Get a quick estimate below.
        </p>
        <BudgetEstimator />
      </div>
    </div>
  );
}
