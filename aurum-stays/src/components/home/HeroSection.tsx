"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParallax } from "@/lib/hooks";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const offset = useParallax(0.3);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen flex items-end pb-24 overflow-hidden">
      {/* BG with parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${offset}px)` }}>
        <div className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85')" }} />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-[var(--dark)]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)]/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <div className={`overflow-hidden mb-6 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '300ms' }}>
            <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium">
              Curated Luxury Collection
            </p>
          </div>

          {/* Title */}
          <h1 className="font-display font-light leading-[0.95] mb-8">
            <span className={`block text-[clamp(3rem,7vw,7rem)] text-white overflow-hidden`}>
              <span className={`block transition-all duration-[1.4s] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                style={{ transitionDelay: '500ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                Where Luxury
              </span>
            </span>
            <span className="block text-[clamp(3rem,7vw,7rem)] overflow-hidden">
              <span className={`block text-[var(--gold)] italic transition-all duration-[1.4s] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                style={{ transitionDelay: '700ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                Finds Home
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className={`text-white/50 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '900ms' }}>
            Discover handpicked estates, villas and residences in the world&#39;s most coveted destinations.
          </p>

          {/* CTA */}
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1100ms' }}>
            <Link href="/properties" className="btn-gold">
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1500ms' }}>
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--gold)]/50 to-transparent" />
        </div>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-24 right-12 transition-all duration-1000 hidden lg:block ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1300ms' }}>
        <div className="w-24 h-24 border-r border-t border-[var(--gold)]/15" />
      </div>
    </section>
  );
}
