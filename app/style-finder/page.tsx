import { StyleFinder } from "@/components/features/StyleFinder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Finder Quiz | AMU Design Studio",
  description: "Take our 2-minute quiz to discover your interior design style and get a personalized moodboard.",
};

export default function StyleFinderPage() {
  return (
    <div className="bg-[var(--color-ivory)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-carbon)] mb-6">
          Find Your <span className="italic text-[var(--color-terracotta)]">Style</span>
        </h1>
        <p className="text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
          Not sure what you want? Take our quick 2-minute visual quiz. We'll analyze your preferences and send you a personalized moodboard to kickstart your dream home.
        </p>
      </div>

      <StyleFinder />
    </div>
  );
}
