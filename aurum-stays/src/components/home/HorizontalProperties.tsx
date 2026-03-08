"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Bed, Bath } from "lucide-react";

export function HorizontalProperties({ properties }: { properties: any[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionH = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / sectionH));
      setScrollX(progress);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const totalCards = properties.length + 1;
  const translateX = scrollX * (totalCards - 1) * -100 / totalCards;

  return (
    <section ref={sectionRef} style={{ height: `${(totalCards + 1) * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Header */}
        <div className="absolute top-16 left-6 md:left-12 z-10">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-12 h-[1px] bg-[var(--gold)]/30" />
            <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Featured Collection</p>
          </div>
        </div>

        {/* Horizontal track */}
        <div className="flex h-[70vh] transition-transform duration-100 will-change-transform"
          style={{ transform: `translateX(${translateX}vw)`, width: `${totalCards * 100}vw` }}>
          {properties.map((p, i) => (
            <div key={p.id} className="w-screen flex-shrink-0 px-6 md:px-12 flex items-center">
              <Link href={`/properties/${p.id}`} className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-[1400px] mx-auto">
                {/* Image */}
                <div className="relative h-[50vh] lg:h-[65vh] overflow-hidden">
                  <img src={p.images?.[0]} alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <span className="text-[var(--gold)]/60 text-[10px] tracking-[0.3em] uppercase">{p.type}</span>
                  </div>
                </div>
                {/* Info */}
                <div className="lg:pl-8">
                  <p className="text-white/[0.06] font-display text-[8rem] font-light absolute -top-8 right-0 select-none hidden lg:block">0{i + 1}</p>
                  <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4 group-hover:text-[var(--gold)] transition-colors duration-700">
                    {p.title}
                  </h3>
                  <p className="text-white/20 text-sm mb-6">{p.location}, {p.country}</p>
                  <p className="text-white/25 text-sm leading-[2] font-light mb-8 line-clamp-3">{p.description}</p>
                  <div className="flex items-center gap-6 text-white/20 text-xs mb-8">
                    <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" /> {p.bedrooms} beds</span>
                    <span className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" /> {p.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-display text-3xl text-[var(--gold)]">{formatPrice(p.price)}<span className="text-white/15 text-sm font-sans"> /night</span></span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {/* Last card: CTA */}
          <div className="w-screen flex-shrink-0 px-6 md:px-12 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-display text-5xl md:text-6xl text-white font-light mb-8 leading-[1.05]">
                Discover the<br /><em className="text-[var(--gold)]">Entire Collection</em>
              </h3>
              <Link href="/properties" className="btn-gold">
                <span>View All Properties</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Progress bar bottom */}
        <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 h-[1px] bg-white/[0.04]">
          <div className="h-full bg-[var(--gold)]/40 transition-all duration-100" style={{ width: `${scrollX * 100}%` }} />
        </div>

        {/* Counter */}
        <div className="absolute bottom-16 right-6 md:right-12 text-white/15 text-xs tracking-wider">
          <span className="text-[var(--gold)]">{String(Math.min(Math.ceil(scrollX * totalCards), totalCards)).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(totalCards).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
