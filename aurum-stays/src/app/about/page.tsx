import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export default function AboutPage() {
  const pillars = [
    { icon: "\ud83c\udfdb\ufe0f", title: "Curation", text: "Every property is hand-selected and personally inspected by our team of luxury travel experts." },
    { icon: "\ud83e\udd1d", title: "Service", text: "24/7 dedicated concierge ensuring every detail of your stay exceeds expectations." },
    { icon: "\ud83d\udd12", title: "Trust", text: "Secure transactions, verified owners, and transparent pricing with no hidden fees." },
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-[#D4A843] tracking-[0.2em] uppercase text-sm mb-3">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Redefining Luxury Travel</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Founded in 2020, Aurum Stays was born from a passion for extraordinary places and unforgettable
              experiences. We connect discerning travelers with the world&#39;s most exceptional properties.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pillars.map((p) => (
              <Card key={p.title} className="text-center !p-8">
                <span className="text-4xl mb-4 block">{p.icon}</span>
                <h3 className="font-display text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
              </Card>
            ))}
          </div>
          <blockquote className="text-center border-l-0 border-t border-b border-[#D4A843]/20 py-10">
            <p className="font-display text-2xl text-white italic leading-relaxed">
              &ldquo;Luxury is not about the price tag. It&#39;s about the feeling of being somewhere truly special.&rdquo;
            </p>
            <cite className="text-[#D4A843] text-sm mt-4 block not-italic">&#8212; The Aurum Philosophy</cite>
          </blockquote>
        </Container>
      </main>
      <Footer />
    </>
  );
}
