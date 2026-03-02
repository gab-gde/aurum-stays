"use client";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark)] via-transparent to-[var(--dark)]" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium mb-8">Exclusive Access</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8">
            Your Next<br />
            <em className="text-[var(--gold)]">Extraordinary</em> Stay
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-14 font-light leading-relaxed">
            From cliff-side Mediterranean villas to Alpine chalets, discover residences curated for the exceptional.
          </p>
          <Link href="/properties" className="btn-gold">
            <span>Explore Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
