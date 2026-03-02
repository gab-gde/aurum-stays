import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { PropertyFilters } from "@/components/property/PropertyFilters";

export default async function PropertiesPage({ searchParams }: { searchParams: any }) {
  const params = await searchParams;
  const where: any = {};
  if (params.search) where.OR = [
    { title: { contains: params.search, mode: "insensitive" } },
    { location: { contains: params.search, mode: "insensitive" } },
  ];
  if (params.type) where.type = params.type;
  if (params.minPrice) where.price = { ...where.price, gte: +params.minPrice };
  if (params.maxPrice) where.price = { ...where.price, lte: +params.maxPrice };

  let orderBy: any = { createdAt: "desc" };
  if (params.sort === "price_asc") orderBy = { price: "asc" };
  if (params.sort === "price_desc") orderBy = { price: "desc" };
  if (params.sort === "rating") orderBy = { rating: "desc" };

  const properties = await prisma.property.findMany({ where, orderBy });

  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <Container>
          <div className="text-center mb-14">
            <p className="text-[#D4A843] tracking-[0.3em] uppercase text-xs font-medium mb-4">Our Collection</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold">Luxury <span className="gold-text">Properties</span></h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A843] to-transparent mx-auto mt-6" />
          </div>
          <PropertyFilters />
          <PropertyGrid properties={properties} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
