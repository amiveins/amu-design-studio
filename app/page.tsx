import { HeroCarousel } from "@/components/features/HeroCarousel";
import { TestimonialCarousel } from "@/components/features/TestimonialCarousel";
import { CitiesMap } from "@/components/features/CitiesMap";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import Link from "next/link";
import { Paintbrush, Hammer, Sofa, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[var(--color-ivory)]">
      {/* 1. Hero */}
      <HeroCarousel />

      {/* 2. Studio Introduction */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-carbon)] mb-8 leading-tight">
              We design <br/><span className="italic text-[var(--color-slate)]">your space.</span>
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-12">
              <GlassCard className="p-6 text-center">
                <div className="font-display text-4xl text-[var(--color-terracotta)] mb-2">11</div>
                <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-slate)]">Years</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <div className="font-display text-4xl text-[var(--color-terracotta)] mb-2">208+</div>
                <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-slate)]">Happy Customers</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <div className="font-display text-4xl text-[var(--color-terracotta)] mb-2">10</div>
                <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-slate)]">Awards</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <div className="font-display text-4xl text-[var(--color-terracotta)] mb-2">20+</div>
                <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-slate)]">Cities</div>
              </GlassCard>
            </div>
            <Link href="/about">
              <MagneticWrapper>
                <Button variant="secondary" className="group">
                  Read Our Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticWrapper>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Process */}
      <section className="py-24 bg-[var(--color-stone)] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl italic mb-4">It's Easy to Book Us</h2>
            <p className="text-[var(--color-slate)]">Four simple steps to your dream home.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[rgba(255,255,255,0.1)] -translate-y-1/2 z-0 border-t border-dashed border-[rgba(255,255,255,0.3)]" />
            
            {[
              { step: "01", title: "Meet Designer", desc: "Initial consultation and requirement gathering." },
              { step: "02", title: "Discuss Ideas", desc: "We present moodboards, 3D renders, and material choices." },
              { step: "03", title: "Get Free Quote", desc: "Transparent breakdown with our budget estimator." },
              { step: "04", title: "Book Us", desc: "Pay 10% to begin production at our in-house facility." }
            ].map((item, i) => (
              <div key={item.step} className="relative z-10">
                <GlassCard dark className="p-8 h-full text-center hover:-translate-y-2 transition-transform duration-[var(--duration-base)] group">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-terracotta)] text-white flex items-center justify-center font-display text-xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80')] bg-cover bg-center pointer-events-none rounded-3xl" />
        <div className="text-center mb-16 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-terracotta)] block mb-4">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--color-carbon)] mb-4">What we do best.</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          {[
            { title: "Interior Designing", icon: <Sparkles className="w-8 h-8"/>, desc: "End-to-end interior design solutions for residential and commercial spaces." },
            { title: "Home Renovation", icon: <Hammer className="w-8 h-8"/>, desc: "Complete civil, plumbing, and electrical overhauls." },
            { title: "Furniture Design", icon: <Sofa className="w-8 h-8"/>, desc: "Custom modular and carpentry units built in our own factory." },
            { title: "Styling & Decor", icon: <Paintbrush className="w-8 h-8"/>, desc: "Curating the perfect soft furnishings, art, and accessories." },
          ].map((srv, i) => (
            <GlassCard key={i} className="p-8 flex gap-6 items-start group cursor-pointer hover:bg-white/40">
              <div className="p-4 bg-[var(--color-blush)] text-[var(--color-terracotta)] rounded-xl group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-[var(--color-carbon)] mb-2">{srv.title}</h3>
                <p className="text-sm text-[var(--color-slate)] mb-4">{srv.desc}</p>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)] group-hover:text-[var(--color-terracotta-hover)] flex items-center">
                  Explore <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 5. Featured Projects & Style Finder */}
      <section className="py-24 bg-[var(--color-carbon)] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-terracotta)] block mb-4">Portfolio</span>
              <h2 className="font-display text-4xl md:text-5xl italic">Featured Work</h2>
            </div>
            <Link href="/style-finder" className="glass-card-dark px-6 py-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors group">
              <div>
                <h4 className="text-sm font-medium mb-1 group-hover:text-[var(--color-terracotta)] transition-colors">Not sure what you want?</h4>
                <span className="text-xs text-gray-400">Take our 2-minute quiz &rarr;</span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Grid layout */}
            <div className="md:col-span-2 relative aspect-[16/9] md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="bg-[var(--color-blush)] text-[var(--color-carbon)] text-xs font-bold uppercase px-3 py-1 rounded-full mb-3 inline-block">Residential</span>
                <h3 className="font-display text-3xl mb-1">Pastel Dew</h3>
                <p className="text-gray-300">Lotus Boulevard, Noida</p>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-3 inline-block border border-white/30">Renovation</span>
                <h3 className="font-display text-2xl mb-1">Heritage Hue</h3>
                <p className="text-gray-300">Sunset House</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="secondary" className="!border-[var(--color-crystal)] !text-white hover:!bg-white hover:!text-[var(--color-carbon)]">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 md:py-32 bg-[var(--color-ivory)] overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[var(--color-carbon)] mb-4">Client Stories</h2>
        </div>
        <TestimonialCarousel />
      </section>

      {/* 7. Press & Awards (Marquee) */}
      <section className="py-12 border-y border-[var(--color-crystal)] bg-white overflow-hidden">
        <div className="flex space-x-16 items-center animate-pulse opacity-60 px-4">
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-slate)] whitespace-nowrap">Featured in Elle Décor India</h3>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-slate)] whitespace-nowrap">India Today Home</h3>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-slate)] whitespace-nowrap">5× Best of Houzz</h3>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-slate)] whitespace-nowrap">10+ Industry Awards</h3>
        </div>
      </section>
      

      {/* 9. Contact CTA Banner */}
      <section className="py-24 bg-[var(--color-stone)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-carbon)] to-transparent opacity-50" />
        <div className="max-w-4xl mx-auto relative z-10 glass-card-dark p-12 md:p-16 text-center rounded-3xl">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6 italic">Ready to transform your space?</h2>
          <p className="text-gray-300 mb-10 text-lg">Let's discuss your vision and make it a reality.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <MagneticWrapper>
                <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">Get Free Quote</Button>
              </MagneticWrapper>
            </Link>
            <a href="tel:+919999999999">
              <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg !border-white !text-white hover:!bg-white hover:!text-[var(--color-carbon)]">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
