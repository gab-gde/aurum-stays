"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll-based transforms
  const scale = 1 + scrollY * 0.0003;
  const blur = Math.min(scrollY * 0.01, 8);
  const opacity = Math.max(1 - scrollY * 0.001, 0);
  const textY = scrollY * 0.4;

  return (
    <section ref={ref} className="relative h-[120vh] flex items-center overflow-hidden">
      {/* BG with scroll-based zoom + blur */}
      <div className="absolute inset-0 will-change-transform"
        style={{ transform: `scale(${scale})`, filter: `blur(${blur}px)` }}>
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85')" }} />
      </div>

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[var(--dark)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Vertical side text */}
      <div className={`absolute left-8 lg:left-14 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-[2s] ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1800ms', opacity: opacity * 0.4 }}>
        <p className="text-white/[0.06] text-[9px] tracking-[0.6em] uppercase [writing-mode:vertical-lr] rotate-180">
          Curated luxury since 2020
        </p>
      </div>

      {/* Right decorative line */}
      <div className="absolute right-8 lg:right-14 top-40 bottom-40 w-[1px] hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.08), transparent)', opacity }} />

      {/* Content with parallax text */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full" style={{ transform: `translateY(${textY}px)`, opacity }}>
        <div className="max-w-5xl">
          {/* Animated gold line + eyebrow */}
          <div className={`flex items-center gap-6 mb-10 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '500ms' }}>
            <div className={`h-[1px] bg-[var(--gold)] transition-all duration-[1500ms] ${loaded ? 'w-16' : 'w-0'}`}
              style={{ transitionDelay: '600ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }} />
            <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">
              Curated Luxury Collection
            </p>
          </div>

          {/* Title with staggered word reveal */}
          <h1 className="font-display font-light leading-[0.88] mb-12">
            <span className="block overflow-hidden">
              <span className={`block text-[clamp(3.5rem,9vw,9rem)] text-white transition-all duration-[1.8s] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`}
                style={{ transitionDelay: '700ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                Where Luxury
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className={`block text-[clamp(3.5rem,9vw,9rem)] text-[var(--gold)] italic transition-all duration-[1.8s] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`}
                style={{ transitionDelay: '900ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                Finds Home
              </span>
            </span>
          </h1>

          {/* Description + CTA */}
          <div className={`max-w-lg transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1200ms' }}>
            <p className="text-white/35 text-lg md:text-xl leading-[1.8] mb-14 font-light">
              Discover handpicked estates, villas and residences in the world&#39;s most coveted destinations.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <Link href="/properties" className="btn-gold">
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="text-white/20 text-[10px] tracking-[0.4em] uppercase hover:text-white/50 transition-colors duration-700 group flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-[var(--gold)]/30 transition-all duration-500" />
                <span>Our Story</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        style={{ opacity: Math.max(1 - scrollY * 0.005, 0) }}>
        <span className="text-white/10 text-[8px] tracking-[0.6em] uppercase mb-5">Scroll to explore</span>
        <div className="w-[1px] h-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold)]/30 to-transparent animate-float" />
        </div>
      </div>
    </section>
  );
}
