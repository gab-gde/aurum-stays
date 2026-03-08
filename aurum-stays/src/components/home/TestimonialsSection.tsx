"use client";
import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote: "Aurum Stays redefined what we thought luxury travel could be. Every single detail was immaculate.",
    author: "Isabella & James W.",
    location: "Villa Amalfi, Italy",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
  },
  {
    quote: "The concierge team arranged experiences we didn\u2019t even know existed. It felt like having a guardian angel.",
    author: "Charlotte de V.",
    location: "Estate Saint-Tropez, France",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
  },
  {
    quote: "We\u2019ve stayed at five-star hotels around the world. Aurum is something beyond that entirely.",
    author: "Alexander K.",
    location: "Chalet Verbier, Switzerland",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 lg:py-44 relative overflow-hidden">
      {/* Background images - crossfade */}
      {testimonials.map((t, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-[2s] ${active === i ? 'opacity-[0.06]' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${t.image}')` }} />
        </div>
      ))}

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-[1px] bg-[var(--gold)]/30" />
            <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Testimonials</p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto text-center min-h-[300px] flex flex-col items-center justify-center">
          {testimonials.map((t, i) => (
            <div key={i} className={`absolute transition-all duration-[1.5s] w-full max-w-4xl px-4 ${
              active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.3] text-white/80 mb-12">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-[var(--gold)] text-sm tracking-wider">{t.author}</p>
                <p className="text-white/20 text-xs tracking-[0.2em] uppercase mt-2">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-20">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`h-[2px] transition-all duration-700 ${active === i ? 'w-12 bg-[var(--gold)]' : 'w-6 bg-white/10 hover:bg-white/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
