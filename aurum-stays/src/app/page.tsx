import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeSection } from "@/components/home/MarqueeSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";

export default async function HomePage() {
  const featured = await prisma.property.findMany({ where: { featured: true }, take: 4 });
  const totalProperties = await prisma.property.count();
  const totalBookings = await prisma.booking.count();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <FeaturedSection properties={featured} />
        <StatsSection totalProperties={totalProperties} totalBookings={totalBookings} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
