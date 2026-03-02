import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PropertyCard } from "@/components/property/PropertyCard";

export default async function HomePage() {
  const featured = await prisma.property.findMany({ where: { featured: true }, take: 4 });
  const totalProperties = await prisma.property.count();
  const totalBookings = await prisma.booking.count();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111217]/60 via-[#111217]/40 to-[#111217]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111217]" />
          <Container className="relative z-10 text-center">
            <p className="text-[#D4A843] tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
              Curated Luxury Collection
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
              Where Luxury<br />
              <span className="gold-text">Finds Home</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in">
              Discover handpicked estates, villas and residences in the world&#39;s most coveted destinations.
            </p>
            <Link href="/properties" className="btn-gold text-lg inline-block animate-slide-up">
              Explore Collection
            </Link>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-20 border-y border-white/5">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: `${totalProperties}+`, label: "Luxury Properties" },
                { value: `${totalBookings}+`, label: "Happy Stays" },
                { value: "12", label: "Countries" },
                { value: "24/7", label: "Concierge" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-display font-bold gold-text">{s.value}</p>
                  <p className="text-gray-500 mt-2 text-sm uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured */}
        <section className="py-24">
          <Container>
            <div className="text-center mb-16">
              <p className="text-[#D4A843] tracking-[0.2em] uppercase text-sm mb-3">Handpicked</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Properties</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featured.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/properties" className="btn-gold inline-block">View All Properties</Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
