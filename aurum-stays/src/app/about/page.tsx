import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Landmark, Handshake, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: Landmark, title: "Curation", text: "Every property is hand-selected and personally inspected by our team of luxury travel experts." },
  { icon: Handshake, title: "Service", text: "24/7 dedicated concierge ensuring every detail of your stay exceeds expectations." },
  { icon: ShieldCheck, title: "Trust", text: "Secure transactions, verified owners, and transparent pricing with no hidden fees." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <Container className="max-w-4xl">
          <div className="text-center mb-20">
            <p className="text-[#D4A843] tracking-[0.3em] uppercase text-xs font-medium mb-4">Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Redefining <span className="gold-text">Luxury</span> Travel</h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A843] to-transparent mx-auto mb-8" />
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Founded in 2020, Aurum Stays was born from a passion for extraordinary places and unforgettable
              experiences. We connect discerning travelers with the world&#39;s most exceptional properties.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {pillars.map((p) => (
              <Card key={p.title} className="text-center !p-8 group">
                <div className="w-12 h-12 rounded-xl bg-[#D4A843]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#D4A843]/20 transition-colors">
                  <p.icon className="w-5 h-5 text-[#D4A843]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
              </Card>
            ))}
          </div>
          <blockquote className="text-center border-t border-b border-[#D4A843]/10 py-12">
            <p className="font-display text-2xl md:text-3xl text-white italic leading-relaxed">
              &ldquo;Luxury is not about the price tag. It&#39;s about the feeling of being somewhere truly special.&rdquo;
            </p>
            <cite className="text-[#D4A843] text-sm mt-5 block not-italic tracking-wider uppercase">The Aurum Philosophy</cite>
          </blockquote>
        </Container>
      </main>
      <Footer />
    </>
  );
}
