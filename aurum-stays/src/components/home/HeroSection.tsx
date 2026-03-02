"use client";
import Link from "next/link";
import { useParallax } from "@/lib/hooks";
import { Container } from "@/components/layout/Container";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const offset = useParallax(0.4);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 scale-110" style={{ transform: `translateY(${offset}px) scale(1.1)` }}>
        <div className="absolute inset-0 bg-[url(\'/hero-bg.jpg\')] bg-cover bg-center"
          style={{ backgroundImage: "url(\'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80\')" }} />
      </div>
      <div className="absolute inset-0 bg-[#111217]/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111217]/30 via-transparent to-[#111217]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111217]/40 via-transparent to-[#111217]/40" />

      <Container className="relative z-10 text-center">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <p className="text-[#D4A843] tracking-[0.4em] uppercase text-xs font-medium mb-8">
            Curated Luxury Collection
          </p>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 leading-[1.05] opacity-0 animate-fade-in-up"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          Where Luxury<br />
          <span className="gold-text">Finds Home</span>
        </h1>
        <p className="text-gray-300/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up font-light"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          Discover handpicked estates, villas and residences in the world&#39;s most coveted destinations.
        </p>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
          <Link href="/properties" className="btn-gold text-sm inline-flex items-center gap-3 tracking-[0.1em]">
            Explore Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}>
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-float" />
        </div>
      </div>

      <div className="absolute top-10 left-10 w-16 h-16 border-l border-t border-[#D4A843]/20 opacity-0 animate-fade-in hidden md:block" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }} />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-r border-b border-[#D4A843]/20 opacity-0 animate-fade-in hidden md:block" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }} />
    </section>
  );
}
