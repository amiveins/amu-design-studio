import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | AMU Design Studio",
  description: "Explore our recent interior design projects.",
};

const projects = [
  { slug: "pastel-dew", title: "Pastel Dew", category: "Residential", location: "Noida", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" },
  { slug: "heritage-hue", title: "Heritage Hue", category: "Renovation", location: "Delhi", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80" },
  { slug: "april-bloom", title: "April Bloom", category: "Villa", location: "Gurugram", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" },
  { slug: "urban-zen", title: "Urban Zen", category: "Commercial", location: "Mumbai", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
];

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--color-ivory)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-carbon)] mb-6">
          Selected <span className="italic text-[var(--color-terracotta)]">Works</span>
        </h1>
        <p className="text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
          Explore our recent projects across India. Every space is uniquely tailored to the people who inhabit it.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
            <GlassCard className="overflow-hidden p-0 h-full border-[var(--color-crystal)] hover:border-[var(--color-terracotta)] transition-colors duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
                  style={{ backgroundImage: `url(${p.image})` }} 
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)] mb-2 block">{p.category}</span>
                <h3 className="font-display text-2xl text-[var(--color-carbon)] mb-1">{p.title}</h3>
                <p className="text-[var(--color-slate)] text-sm">{p.location}</p>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
