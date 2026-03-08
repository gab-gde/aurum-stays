"use client";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { useParallax } from "@/lib/hooks";

export function CTASection() {
  const offset = useParallax(0.15);

  return (
    <section className="py-44 lg:py-56 relative overflow-hidden border-t border-white/[0.03]">
      <div className="absolute inset-0" style={{ transform: `translateY(${offset}px)` }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark)] via-transparent to-[var(--dark)]" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium mb-10">Begin Your Journey</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-light leading-[0.95] mb-10">
            Your Next<br />
            <em className="text-[var(--gold)]">Extraordinary</em><br />
            Stay Awaits
          </h2>
          <p className="text-white/30 text-lg max-w-lg mx-auto mb-14 font-light leading-relaxed">
            From cliff-side Mediterranean villas to Alpine chalets, discover residences curated for the exceptional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/properties" className="btn-gold">
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-gold !border-white/[0.08] !text-white/40 hover:!text-white hover:!border-white/20">
              <span>Contact Us</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
