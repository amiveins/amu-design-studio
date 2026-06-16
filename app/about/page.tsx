import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AMU Design Studio",
  description: "Learn about our story and mission to transform spaces.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-ivory)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-carbon)] mb-6">
          Our <span className="italic text-[var(--color-terracotta)]">Story</span>
        </h1>
        <p className="text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
          We believe that interior design should be accessible, transparent, and beautifully tailored to your lifestyle.
        </p>
      </div>
    </div>
  );
}
