import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Landmark, Users, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: Landmark, title: "Curation", text: "Every property is hand-selected and personally inspected by our team of luxury travel experts." },
  { icon: Users, title: "Service", text: "24/7 dedicated concierge ensuring every detail of your stay exceeds expectations." },
  { icon: ShieldCheck, title: "Trust", text: "Secure transactions, verified owners, and transparent pricing with no hidden fees." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-24">
            <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium mb-6">Our Story</p>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-10">
              Redefining<br/><em className="text-[var(--gold)]">Luxury</em> Travel
            </h1>
            <p className="text-white/40 text-lg leading-relaxed font-light">
              Founded in 2020, Aurum Stays was born from a passion for extraordinary places and unforgettable
              experiences. We connect discerning travelers with the world&#39;s most exceptional properties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.04] mb-24">
            {pillars.map((p) => (
              <div key={p.title} className="bg-[var(--dark)] p-12 group hover:bg-[var(--dark-card)] transition-all duration-700">
                <p.icon className="w-6 h-6 text-[var(--gold)]/50 mb-8 group-hover:text-[var(--gold)] transition-colors duration-500" strokeWidth={1} />
                <h3 className="font-display text-2xl text-white font-light mb-4">{p.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="text-center py-20 border-t border-b border-white/[0.04]">
            <p className="font-display text-3xl md:text-4xl text-white italic font-light leading-relaxed max-w-3xl mx-auto">
              &ldquo;Luxury is not about the price tag. It&#39;s about the feeling of being somewhere truly special.&rdquo;
            </p>
            <cite className="text-[var(--gold)] text-[10px] mt-8 block not-italic tracking-[0.3em] uppercase">The Aurum Philosophy</cite>
          </blockquote>
        </div>
      </main>
      <Footer />
    </>
  );
}
