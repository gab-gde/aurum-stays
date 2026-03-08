"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParallax } from "@/lib/hooks";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const offset = useParallax(0.25);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen flex items-end pb-20 lg:pb-28 overflow-hidden">
      {/* Parallax BG */}
      <div className="absolute inset-0" style={{ transform: `translateY(${offset}px) scale(1.15)` }}>
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85')" }} />
      </div>

      {/* Multi-layer overlays for depth */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-[var(--dark)]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)]/60 via-transparent to-transparent" />

      {/* Left vertical text */}
      <div className={`absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-[2s] ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1600ms' }}>
        <p className="text-white/[0.08] text-[10px] tracking-[0.5em] uppercase [writing-mode:vertical-lr] rotate-180">
          Curated luxury since 2020
        </p>
      </div>

      {/* Right side decorative line */}
      <div className={`absolute right-6 lg:right-12 top-32 bottom-32 w-[1px] hidden lg:block transition-all duration-[2s] ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1800ms', background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.1), transparent)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className={`flex items-center gap-6 mb-8 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '400ms' }}>
            <div className="w-12 h-[1px] bg-[var(--gold)]" />
            <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">
              Curated Luxury Collection
            </p>
          </div>

          {/* Title with staggered text reveal */}
          <h1 className="font-display font-light leading-[0.9] mb-10">
            <span className="block overflow-hidden">
              <span className={`block text-[clamp(3.5rem,8vw,8rem)] text-white transition-all duration-[1.6s] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                style={{ transitionDelay: '600ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                Where Luxury
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className={`block text-[clamp(3.5rem,8vw,8rem)] text-[var(--gold)] italic transition-all duration-[1.6s] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                style={{ transitionDelay: '800ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                Finds Home
              </span>
            </span>
          </h1>

          {/* Description */}
          <div className="max-w-xl">
            <p className={`text-white/40 text-lg md:text-xl leading-[1.7] mb-12 font-light transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '1000ms' }}>
              Discover handpicked estates, villas and residences in the world&#39;s most coveted destinations.
              Each property tells a story. Each stay becomes a memory.
            </p>

            {/* Double CTA */}
            <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '1200ms' }}>
              <Link href="/properties" className="btn-gold">
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="text-white/30 text-[10px] tracking-[0.3em] uppercase hover:text-white/60 transition-colors duration-500">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll line */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '2000ms' }}>
        <span className="text-white/15 text-[8px] tracking-[0.5em] uppercase mb-4">Scroll</span>
        <div className="w-[1px] h-16 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-[var(--gold)]/40 to-transparent animate-float" />
        </div>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-28 right-12 hidden lg:block transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1500ms' }}>
        <div className="w-20 h-20 border-r border-t border-[var(--gold)]/10" />
      </div>
      <div className={`absolute bottom-28 left-12 hidden lg:block transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1500ms' }}>
        <div className="w-20 h-20 border-l border-b border-[var(--gold)]/10" />
      </div>
    </section>
  );
}
