import { GlassCard } from "@/components/ui/GlassCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AMU Design Studio",
  description: "Interior design tips, trends, and inspiration.",
};

export default function BlogPage() {
  return (
    <div className="bg-[var(--color-ivory)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-carbon)] mb-6">
          Design <span className="italic text-[var(--color-terracotta)]">Journal</span>
        </h1>
        <p className="text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
          Insights, tips, and trends from our expert designers.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {[
          { title: "The Liquid Glass Trend: Why Fluted Glass is Here to Stay", date: "Oct 12, 2023", category: "Trends" },
          { title: "Maximizing Storage in Compact Urban Apartments", date: "Sep 28, 2023", category: "Tips" },
          { title: "Choosing the Right Lighting Temperature for Every Room", date: "Sep 15, 2023", category: "Guide" },
        ].map((post, i) => (
          <GlassCard key={i} className="p-8 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer hover:border-[var(--color-terracotta)] transition-colors shadow-sm hover:shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)] mb-2 block">{post.category}</span>
              <h3 className="font-display text-2xl text-[var(--color-carbon)] mb-2 group-hover:text-[var(--color-terracotta)] transition-colors">{post.title}</h3>
              <p className="text-[var(--color-slate)] text-sm">{post.date}</p>
            </div>
            <div className="mt-4 md:mt-0 text-[var(--color-terracotta)] group-hover:translate-x-2 transition-transform">
              &rarr;
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
