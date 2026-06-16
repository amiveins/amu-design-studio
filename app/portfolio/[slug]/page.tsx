import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: 'pastel-dew' },
    { slug: 'heritage-hue' },
    { slug: 'minimalist-haven' }
  ];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <div className="bg-[var(--color-ivory)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Link href="/portfolio" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[var(--color-slate)] hover:text-[var(--color-terracotta)] transition-colors mb-12">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Portfolio
        </Link>
        
        <h1 className="font-display text-4xl md:text-6xl text-[var(--color-carbon)] mb-6 capitalize">
          {resolvedParams.slug.replace(/-/g, ' ')}
        </h1>
        
        <div className="flex flex-wrap gap-8 mb-16 border-y border-[var(--color-crystal)] py-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-slate)] block mb-1">Location</span>
            <span className="text-[var(--color-carbon)] font-medium">Noida, India</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-slate)] block mb-1">Type</span>
            <span className="text-[var(--color-carbon)] font-medium">Residential</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-slate)] block mb-1">Timeline</span>
            <span className="text-[var(--color-carbon)] font-medium">60 Days</span>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-3xl mb-6 text-[var(--color-carbon)]">The Transformation</h2>
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
            afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            className="w-full aspect-[16/9]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl mb-4 text-[var(--color-carbon)]">The Brief</h2>
            <p className="text-[var(--color-slate)] leading-relaxed">
              The client wanted a clean, uncluttered space that still felt warm and inviting. We focused on a soft pastel palette with natural wood accents to bring in the warmth.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl mb-4 text-[var(--color-carbon)]">Materials</h2>
            <p className="text-[var(--color-slate)] leading-relaxed mb-4">
              We used fluted glass panels, matte finish laminates, and custom brass hardware to achieve the liquid glass aesthetic.
            </p>
            <ul className="list-disc pl-5 text-[var(--color-slate)] space-y-2">
              <li>Custom oak veneer</li>
              <li>Italian marble flooring</li>
              <li>Brushed brass fixtures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
