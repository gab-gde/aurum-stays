"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";

export function PhilosophySection() {
  return (
    <section className="py-32 lg:py-44">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <ImageReveal
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85"
                alt="Luxury interior"
                className="aspect-[4/5] w-full"
              />
              {/* Floating accent */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-[var(--gold)]/10 hidden lg:block" />
              <div className="absolute -top-8 -left-8 w-24 h-24 border border-[var(--gold)]/5 hidden lg:block" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="lg:pl-8">
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-[1px] bg-[var(--gold)]/30" />
                <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Our Philosophy</p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-10">
                Not Just a Stay.<br />
                <em className="text-[var(--gold)]">An Experience.</em>
              </h2>
              <p className="text-white/35 text-[15px] leading-[2] font-light mb-8">
                We believe luxury is not defined by price, but by the feeling of being
                somewhere truly extraordinary. Every Aurum property has been personally
                visited, rigorously inspected, and chosen for its ability to create
                moments that transcend the ordinary.
              </p>
              <p className="text-white/35 text-[15px] leading-[2] font-light mb-12">
                From the thread count of the linens to the provenance of the art on the
                walls, we obsess over every detail so you don&#39;t have to. Our dedicated
                concierge team transforms your preferences into seamless reality.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="font-display text-4xl text-[var(--gold)] font-light">6+</p>
                  <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase mt-1">Years of Excellence</p>
                </div>
                <div className="w-[1px] h-12 bg-white/[0.06]" />
                <div>
                  <p className="font-display text-4xl text-[var(--gold)] font-light">100%</p>
                  <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase mt-1">Personally Inspected</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
