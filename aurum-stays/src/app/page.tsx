import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PropertyCard } from "@/components/property/PropertyCard";
import { StatsSection } from "@/components/home/StatsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  const featured = await prisma.property.findMany({ where: { featured: true }, take: 4 });
  const totalProperties = await prisma.property.count();
  const totalBookings = await prisma.booking.count();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection totalProperties={totalProperties} totalBookings={totalBookings} />

        <section className="py-28 relative">
          <div className="absolute inset-0 bg-radial-gold opacity-30" />
          <Container className="relative">
            <div className="text-center mb-20">
              <p className="text-[#D4A843] tracking-[0.3em] uppercase text-xs font-medium mb-4">Handpicked</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Featured <span className="gold-text">Properties</span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A843] to-transparent mx-auto mt-6" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featured.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href="/properties" className="btn-gold text-sm inline-flex items-center gap-2 tracking-wide">
                View Entire Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111217] via-transparent to-[#111217]" />
          <Container className="relative text-center max-w-3xl">
            <p className="text-[#D4A843] tracking-[0.3em] uppercase text-xs font-medium mb-6">Exclusive Access</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Your Next Extraordinary<br/>Stay Awaits
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              From cliff-side Mediterranean villas to Alpine chalets, discover residences
              curated for those who appreciate the exceptional.
            </p>
            <Link href="/properties" className="btn-gold text-sm inline-flex items-center gap-2 tracking-wide">
              Explore Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
