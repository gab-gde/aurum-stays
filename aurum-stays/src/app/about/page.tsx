"use client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Landmark, Users, ShieldCheck, Globe, Heart, Eye } from "lucide-react";

const values = [
  { icon: Landmark, title: "Curation", text: "Every property is hand-selected and personally inspected by our team. We reject 95% of submissions." },
  { icon: Users, title: "Service", text: "24/7 dedicated concierge ensuring every detail of your stay exceeds expectations, before you even ask." },
  { icon: ShieldCheck, title: "Trust", text: "Secure transactions, verified owners, transparent pricing. No hidden fees, no surprises, ever." },
  { icon: Eye, title: "Taste", text: "We work with leading architects and designers to ensure every property meets our exacting aesthetic standards." },
  { icon: Heart, title: "Passion", text: "Founded by travelers, for travelers. Our love for extraordinary places drives everything we do." },
  { icon: Globe, title: "Reach", text: "From the Amalfi Coast to the Swiss Alps, our curated collection spans the world's most coveted destinations." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=85')" }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-[var(--dark)]/30" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-[1px] bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Our Story</p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
              Redefining<br/><em className="text-[var(--gold)]">Luxury</em> Travel
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-32 lg:py-44">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal direction="left">
                <ImageReveal
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85"
                  alt="Luxury detail"
                  className="aspect-[3/4] w-full"
                />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={200}>
                <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium mb-8">Founded 2020</p>
                <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.1] mb-10">
                  Born From a Passion for<br /><em className="text-[var(--gold)]">Extraordinary</em> Places
                </h2>
                <div className="space-y-6 text-white/30 text-[15px] leading-[2] font-light">
                  <p>
                    Aurum Stays was born from a simple observation: even the world&#39;s most beautiful properties
                    often fail to deliver the seamless, personalized experience that discerning travelers deserve.
                  </p>
                  <p>
                    We set out to change that. By combining meticulous property curation with white-glove concierge
                    service, we created a platform where every stay is not just luxurious, but truly transformative.
                  </p>
                  <p>
                    Today, our collection spans the Mediterranean, the Alps, and beyond — each property a testament
                    to our unwavering commitment to excellence.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values grid */}
        <section className="py-32 border-t border-white/[0.03]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <ScrollReveal className="mb-20">
              <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium mb-6">What Defines Us</p>
              <h2 className="font-display text-4xl md:text-6xl font-light">Our <em className="text-[var(--gold)]">Values</em></h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.02]">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 80}>
                  <div className="bg-[var(--dark)] p-10 lg:p-14 group hover:bg-[var(--dark-card)] transition-all duration-700 h-full">
                    <v.icon className="w-5 h-5 text-[var(--gold)]/25 mb-8 group-hover:text-[var(--gold)]/60 transition-colors duration-700" strokeWidth={1} />
                    <h3 className="font-display text-2xl text-white font-light mb-4 group-hover:text-[var(--gold)] transition-colors duration-700">{v.title}</h3>
                    <p className="text-white/25 text-sm leading-[1.9] font-light">{v.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-32 lg:py-44 border-t border-white/[0.03] relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80')" }} />
          <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
            <ScrollReveal>
              <blockquote className="text-center max-w-4xl mx-auto">
                <p className="font-display text-3xl md:text-4xl lg:text-5xl text-white/80 italic font-light leading-[1.4]">
                  &ldquo;Luxury is not about the price tag.<br />
                  It&#39;s about the feeling of being somewhere<br />
                  <span className="text-[var(--gold)]">truly special.</span>&rdquo;
                </p>
                <div className="mt-12">
                  <div className="w-8 h-[1px] bg-[var(--gold)]/30 mx-auto mb-6" />
                  <cite className="text-[var(--gold)] text-[10px] not-italic tracking-[0.4em] uppercase">The Aurum Philosophy</cite>
                </div>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
