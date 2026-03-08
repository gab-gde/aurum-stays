"use client";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const featured = SERVICES.slice(0, 4);

export function ServicesPreview() {
  return (
    <section className="py-32 lg:py-44 border-t border-white/[0.03]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
            <div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-[1px] bg-[var(--gold)]/30" />
                <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Bespoke Experiences</p>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-light leading-[1.05]">
                Elevate Your<br /><em className="text-[var(--gold)]">Stay</em>
              </h2>
            </div>
            <Link href="/services" className="btn-gold self-start md:self-auto">
              <span>All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 100}>
              <Link href={`/services/${s.id}`}
                className="group block relative h-[420px] overflow-hidden">
                <img src={s.image} alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--gold)]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Category tag */}
                <div className="absolute top-5 left-5">
                  <span className="px-2.5 py-1 bg-black/30 backdrop-blur-sm text-[8px] text-white/50 tracking-[0.3em] uppercase border border-white/[0.06]">
                    {s.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-5 right-5 w-8 h-8 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-white font-light mb-1 group-hover:text-[var(--gold)] transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-white/30 text-xs font-light mb-3">{s.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--gold)]/70 font-display text-sm">{s.price}</span>
                    <span className="text-white/10 text-[9px] tracking-wider uppercase">{s.options.length} packages</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
