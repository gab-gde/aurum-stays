"use client";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const destinations = [
  { name: "Italy", properties: 2, image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=85", query: "Italy" },
  { name: "France", properties: 3, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85", query: "France" },
  { name: "Switzerland", properties: 1, image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=85", query: "Switzerland" },
];

export function DestinationsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-32 lg:py-44 border-t border-white/[0.03]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-20 lg:mb-28">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-[1px] bg-[var(--gold)]/30" />
            <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Destinations</p>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            Explore by <em className="text-[var(--gold)]">Region</em>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Floating image that follows hovered item */}
          <div className={`fixed top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[500px] pointer-events-none z-40 transition-all duration-700 hidden lg:block ${
            hovered !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {destinations.map((d, i) => (
              <img key={i} src={d.image} alt={d.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered === i ? 'opacity-100' : 'opacity-0'}`} />
            ))}
          </div>

          {/* Destination list */}
          <div className="divide-y divide-white/[0.03]">
            {destinations.map((d, i) => (
              <ScrollReveal key={d.name} delay={i * 100}>
                <Link href={`/properties?search=${d.query}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group flex items-center justify-between py-10 lg:py-14 transition-all duration-500 hover:pl-4">
                  <div className="flex items-baseline gap-6 lg:gap-10">
                    <span className="text-white/[0.08] text-sm font-mono">0{i + 1}</span>
                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white/70 group-hover:text-white transition-colors duration-500 italic">
                      {d.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-white/15 text-xs tracking-[0.2em] uppercase hidden sm:block">{d.properties} properties</span>
                    <div className="w-10 h-10 border border-white/[0.06] flex items-center justify-center group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-black transition-colors duration-500" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
