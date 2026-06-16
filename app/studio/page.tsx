import { GlassCard } from "@/components/ui/GlassCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Studio | AMU Design Studio",
  description: "Inside our design studio and production facility.",
};

export default function StudioPage() {
  return (
    <div className="bg-[var(--color-ivory)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-carbon)] mb-6">
          Our <span className="italic text-[var(--color-terracotta)]">Studio</span>
        </h1>
        <p className="text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
          Where ideas become reality. We operate our own state-of-the-art production facility to ensure absolute quality control.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden mb-16 relative shadow-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542621334-a2542d773e41?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="p-8 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-2xl mb-4 text-[var(--color-carbon)]">In-House Production</h3>
            <p className="text-[var(--color-slate)]">Unlike aggregators, we don't outsource. Our modular factory uses German machinery for precision cutting and edge-banding.</p>
          </GlassCard>
          <GlassCard className="p-8 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-2xl mb-4 text-[var(--color-carbon)]">Material Library</h3>
            <p className="text-[var(--color-slate)]">Visit our experience center to touch and feel thousands of laminates, veneers, fabrics, and hardware finishes.</p>
          </GlassCard>
          <GlassCard className="p-8 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-2xl mb-4 text-[var(--color-carbon)]">Quality Control</h3>
            <p className="text-[var(--color-slate)]">Every unit is pre-assembled in the factory before shipping to your site, ensuring zero surprises during installation.</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
