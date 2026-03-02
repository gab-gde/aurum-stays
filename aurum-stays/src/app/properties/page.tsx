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
      <main className="pt-28 pb-16">
        <Container>
          <div className="text-center mb-12">
            <p className="text-[#D4A843] tracking-[0.2em] uppercase text-sm mb-3">Our Collection</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold">Luxury Properties</h1>
          </div>
          <PropertyFilters />
          <PropertyGrid properties={properties} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
