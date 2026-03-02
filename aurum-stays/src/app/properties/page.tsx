import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
      <main className="pt-40 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-20">
            <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium mb-6">Our Collection</p>
            <h1 className="font-display text-5xl md:text-7xl font-light">
              Luxury <em className="text-[var(--gold)]">Properties</em>
            </h1>
          </div>
          <PropertyFilters />
          <PropertyGrid properties={properties} />
        </div>
      </main>
      <Footer />
    </>
  );
}
