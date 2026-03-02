"use client";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FeaturedSection({ properties }: { properties: any[] }) {
  return (
    <section className="py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <ScrollReveal className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium mb-6">Handpicked</p>
              <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05]">
                Featured<br />
                <em className="text-[var(--gold)]">Properties</em>
              </h2>
            </div>
            <Link href="/properties" className="btn-gold self-start md:self-auto">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Asymmetric grid */}
        {properties.length >= 2 && (
          <div className="grid lg:grid-cols-2 gap-4 mb-4">
            {/* Large card */}
            <ScrollReveal direction="left" className="group">
              <Link href={`/properties/${properties[0].id}`} className="block relative h-[600px] overflow-hidden">
                <ImageReveal src={properties[0].images?.[0]} alt={properties[0].title} className="absolute inset-0 h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-[var(--gold)] text-[10px] tracking-[0.3em] uppercase mb-3">{properties[0].type}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-white font-light mb-2">{properties[0].title}</h3>
                  <p className="text-white/50 text-sm mb-4">{properties[0].location}, {properties[0].country}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--gold)] font-display text-2xl">{formatPrice(properties[0].price)}<span className="text-white/30 text-sm font-sans"> /night</span></span>
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Right card */}
            <ScrollReveal direction="right" delay={200} className="group">
              <Link href={`/properties/${properties[1].id}`} className="block relative h-[600px] overflow-hidden">
                <ImageReveal src={properties[1].images?.[0]} alt={properties[1].title} className="absolute inset-0 h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-[var(--gold)] text-[10px] tracking-[0.3em] uppercase mb-3">{properties[1].type}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-white font-light mb-2">{properties[1].title}</h3>
                  <p className="text-white/50 text-sm mb-4">{properties[1].location}, {properties[1].country}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--gold)] font-display text-2xl">{formatPrice(properties[1].price)}<span className="text-white/30 text-sm font-sans"> /night</span></span>
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        )}

        {/* Bottom row */}
        {properties.length >= 4 && (
          <div className="grid md:grid-cols-3 gap-4">
            {properties.slice(2, 4).map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 150} className="group">
                <Link href={`/properties/${p.id}`} className="block relative h-[400px] overflow-hidden">
                  <ImageReveal src={p.images?.[0]} alt={p.title} className="absolute inset-0 h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[var(--gold)] text-[10px] tracking-[0.3em] uppercase mb-2">{p.type}</p>
                    <h3 className="font-display text-2xl text-white font-light mb-1">{p.title}</h3>
                    <p className="text-white/40 text-xs">{p.location}</p>
                    <p className="text-[var(--gold)] font-display text-xl mt-3">{formatPrice(p.price)}<span className="text-white/30 text-xs font-sans"> /night</span></p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            {/* Third spot: Browse All */}
            <ScrollReveal delay={300} className="group">
              <Link href="/properties" className="flex flex-col items-center justify-center h-[400px] border border-white/[0.04] hover:border-[var(--gold)]/20 transition-all duration-700 bg-[var(--dark-card)]">
                <p className="font-display text-3xl text-white/20 group-hover:text-white/60 transition-colors duration-500 italic font-light mb-4">Explore All</p>
                <div className="w-12 h-12 border border-[var(--gold)]/30 flex items-center justify-center group-hover:bg-[var(--gold)] transition-all duration-500">
                  <ArrowRight className="w-5 h-5 text-[var(--gold)] group-hover:text-black transition-colors" />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
}
