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
    { country: { contains: params.search, mode: "insensitive" } },
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
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85')" }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-[var(--dark)]/30" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-[1px] bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Our Collection</p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light">
              Luxury <em className="text-[var(--gold)]">Properties</em>
            </h1>
            <p className="text-white/30 text-lg mt-4 font-light">{properties.length} exceptional residences</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <PropertyFilters />
            <PropertyGrid properties={properties} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
