"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EditorialSection() {
  return (
    <section className="py-32 lg:py-44 border-t border-white/[0.03]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Row 1: Image left, text right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-32 lg:mb-44">
          <ScrollReveal direction="left" className="lg:col-span-7">
            <div className="img-zoom relative">
              <ImageReveal
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85"
                alt="Luxury estate"
                className="aspect-[16/10] w-full"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={300} className="lg:col-span-5">
            <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium mb-6">The Art of Living</p>
            <h3 className="font-display text-3xl md:text-4xl font-light leading-[1.2] mb-6">
              Spaces Designed<br />for <em className="text-[var(--gold)]">Living Beautifully</em>
            </h3>
            <p className="text-white/30 text-sm leading-[2] font-light mb-8">
              Each Aurum property is a masterwork of architecture and interior design.
              We partner with the world&#39;s leading designers to ensure every space
              inspires, comforts, and delights.
            </p>
            <Link href="/properties" className="inline-flex items-center gap-3 text-[var(--gold)] text-[10px] tracking-[0.3em] uppercase group">
              <span>Discover More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Row 2: Text left, image right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <ScrollReveal direction="left" delay={100} className="lg:col-span-5 lg:order-1">
            <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium mb-6">Concierge</p>
            <h3 className="font-display text-3xl md:text-4xl font-light leading-[1.2] mb-6">
              Your Wishes,<br /><em className="text-[var(--gold)]">Anticipated</em>
            </h3>
            <p className="text-white/30 text-sm leading-[2] font-light mb-8">
              Our 24/7 concierge team doesn&#39;t just respond to requests — they anticipate them.
              From securing impossible dinner reservations to arranging private helicopter
              transfers, we transform every detail of your journey.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 text-[var(--gold)] text-[10px] tracking-[0.3em] uppercase group">
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right" className="lg:col-span-7 lg:order-2">
            <div className="img-zoom relative">
              <ImageReveal
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85"
                alt="Luxury service"
                className="aspect-[16/10] w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
