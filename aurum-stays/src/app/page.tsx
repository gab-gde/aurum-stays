import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomeClient } from "@/components/home/HomeClient";

export default async function HomePage() {
  const featured = await prisma.property.findMany({ where: { featured: true }, take: 4 });
  const allProperties = await prisma.property.findMany({ take: 6, orderBy: { rating: "desc" } });
  const totalProperties = await prisma.property.count();
  const totalBookings = await prisma.booking.count();

  return (
    <>
      <Header />
      <HomeClient
        featured={featured}
        allProperties={allProperties}
        totalProperties={totalProperties}
        totalBookings={totalBookings}
      />
      <Footer />
    </>
  );
}
