"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Bed, Bath } from "lucide-react";

export function HorizontalProperties({ properties }: { properties: any[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current || !trackRef.current) return;
      const section = sectionRef.current.getBoundingClientRect();
      const sectionTop = -section.top;
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;

      if (sectionTop < 0 || sectionHeight <= 0) {
        setProgress(0);
        setTranslateX(0);
        return;
      }

      const p = Math.min(sectionTop / sectionHeight, 1);
      setProgress(p);

      // How far to scroll: track width - viewport width
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = trackWidth - viewportWidth;

      setTranslateX(-p * maxTranslate);
    };

    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    handler();
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  const cards = properties.length;
  // Each card takes 100vh of vertical scroll space + 1 for padding
  const sectionHeight = (cards + 1.5) * 100;

  return (
    <section
      ref={sectionRef}
      style={{ height: `${sectionHeight}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute top-16 left-6 md:left-12 z-10">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-12 h-[1px] bg-[var(--gold)]/30" />
            <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Featured Collection</p>
          </div>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex items-center h-full will-change-transform"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {properties.map((p, i) => (
            <div key={p.id} className="flex-shrink-0 w-[85vw] md:w-[80vw] lg:w-[70vw] px-4 md:px-8 first:pl-6 first:md:pl-12">
              <Link href={`/properties/${p.id}`} className="group grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                {/* Image */}
                <div className="relative h-[40vh] lg:h-[60vh] overflow-hidden">
                  <img
                    src={p.images?.[0]}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-5 right-5 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-black/10">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <span className="text-[var(--gold)]/60 text-[10px] tracking-[0.3em] uppercase">{p.type}</span>
                  </div>
                </div>
                {/* Info */}
                <div className="relative">
                  <p className="text-white/[0.04] font-display text-[7rem] lg:text-[10rem] font-light absolute -top-16 -right-4 select-none hidden lg:block leading-none">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-light mb-3 group-hover:text-[var(--gold)] transition-colors duration-700 relative">
                    {p.title}
                  </h3>
                  <p className="text-white/20 text-sm mb-5">{p.location}, {p.country}</p>
                  <p className="text-white/20 text-sm leading-[1.9] font-light mb-6 line-clamp-3">{p.description}</p>
                  <div className="flex items-center gap-5 text-white/15 text-xs mb-6">
                    <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" /> {p.bedrooms} beds</span>
                    <span className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" /> {p.bathrooms} baths</span>
                  </div>
                  <span className="font-display text-2xl lg:text-3xl text-[var(--gold)]">
                    {formatPrice(p.price)}
                    <span className="text-white/10 text-sm font-sans"> /night</span>
                  </span>
                </div>
              </Link>
            </div>
          ))}

          {/* Last card: CTA */}
          <div className="flex-shrink-0 w-[60vw] md:w-[50vw] flex items-center justify-center px-8">
            <div className="text-center">
              <h3 className="font-display text-4xl md:text-5xl text-white font-light mb-8 leading-[1.1]">
                Discover the<br /><em className="text-[var(--gold)]">Entire Collection</em>
              </h3>
              <Link href="/properties" className="btn-gold">
                <span>View All Properties</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-10 left-6 md:left-12 right-6 md:right-12 h-[1px] bg-white/[0.04]">
          <div className="h-full bg-[var(--gold)]/30 transition-[width] duration-75" style={{ width: `${progress * 100}%` }} />
        </div>

        {/* Counter */}
        <div className="absolute bottom-14 right-6 md:right-12 text-white/15 text-xs tracking-wider font-mono">
          <span className="text-[var(--gold)]">
            {String(Math.max(1, Math.min(Math.ceil(progress * (cards + 1)), cards + 1))).padStart(2, '0')}
          </span>
          <span className="mx-2">/</span>
          <span>{String(cards + 1).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
