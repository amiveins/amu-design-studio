import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[var(--color-stone)] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded p-1">
                <Image src="/logo.png" alt="AMU Design Studio Logo" fill className="object-contain" />
              </div>
              <span className="font-display font-semibold text-2xl md:text-3xl tracking-wide uppercase text-white group-hover:text-[var(--color-terracotta)] transition-colors">
                AMU Design Studio
              </span>
            </Link>
            <p className="text-[var(--color-slate)] text-sm leading-relaxed max-w-xs">
              We design an artful life. Transforming spaces into beautiful, livable experiences across India.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs mb-6 text-[var(--color-terracotta)]">Information</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs mb-6 text-[var(--color-terracotta)]">Our Projects</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/portfolio/pastel-dew" className="hover:text-white transition-colors">Pastel Dew</Link></li>
              <li><Link href="/portfolio/heritage-hue" className="hover:text-white transition-colors">Heritage Hue</Link></li>
              <li><Link href="/portfolio/april-bloom" className="hover:text-white transition-colors">April Bloom</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors text-[var(--color-terracotta)]">See All &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs mb-6 text-[var(--color-terracotta)]">Follow Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="https://instagram.com/amu.designs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-slate)]">
          <p>&copy; {new Date().getFullYear()} AMU Design Studio, Noida. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
