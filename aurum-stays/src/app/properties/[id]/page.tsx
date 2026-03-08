import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyAmenities } from "@/components/property/PropertyAmenities";
import { PropertyReviews } from "@/components/property/PropertyReviews";
import { BookingForm } from "@/components/booking/BookingForm";
import { PropertyCard } from "@/components/property/PropertyCard";
import { formatPrice } from "@/lib/utils";
import { Bed, Bath, Users, Maximize, MapPin, Star } from "lucide-react";

export default async function PropertyPage({ params }: { params: any }) {
  const { id } = await params;
  const property = await prisma.property.findUnique({
    where: { id },
    include: { reviews: { include: { user: true }, orderBy: { createdAt: "desc" } } },
  });
  if (!property) notFound();

  // Similar properties (same type or country, excluding current)
  const similar = await prisma.property.findMany({
    where: {
      id: { not: property.id },
      OR: [{ type: property.type }, { country: property.country }],
    },
    take: 3,
  });

  return (
    <>
      <Header />
      <main className="pt-24">
        <PropertyGallery images={property.images} title={property.title} />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              {/* Title block */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-[var(--gold)]/30" />
                  <p className="text-[var(--gold)] text-[10px] tracking-[0.4em] uppercase font-medium">{property.type}</p>
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-6">{property.title}</h1>
                <div className="flex items-center gap-2 text-white/25 text-sm">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1} />
                  <span>{property.location}, {property.country}</span>
                </div>

                <div className="flex flex-wrap gap-10 py-10 mt-8 border-y border-white/[0.04]">
                  {[
                    { icon: Bed, label: "Bedrooms", value: property.bedrooms },
                    { icon: Bath, label: "Bathrooms", value: property.bathrooms },
                    { icon: Users, label: "Guests", value: property.maxGuests },
                    { icon: Maximize, label: "Area", value: `${property.area || "\u2014"} m\u00B2` },
                    { icon: Star, label: "Rating", value: property.rating?.toFixed(1) || "New" },
                  ].map(s => (
                    <div key={s.label} className="flex items-center gap-3">
                      <s.icon className="w-4 h-4 text-[var(--gold)]/30" strokeWidth={1} />
                      <div>
                        <p className="text-white text-sm font-medium">{String(s.value)}</p>
                        <p className="text-white/15 text-[10px] uppercase tracking-[0.2em]">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-[var(--gold)]/20" />
                  <h2 className="font-display text-2xl text-white font-light">About This <em className="text-[var(--gold)]">Property</em></h2>
                </div>
                <p className="text-white/30 leading-[2] text-[15px] font-light">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-[var(--gold)]/20" />
                  <h2 className="font-display text-2xl text-white font-light">Amenities &amp; <em className="text-[var(--gold)]">Features</em></h2>
                </div>
                <PropertyAmenities amenities={property.amenities} />
              </div>

              {/* Reviews */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-[var(--gold)]/20" />
                  <h2 className="font-display text-2xl text-white font-light">Guest <em className="text-[var(--gold)]">Reviews</em></h2>
                </div>
                <PropertyReviews reviews={property.reviews} propertyId={property.id} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="border border-white/[0.04] p-8 bg-[#0D0D0D]">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-4xl text-[var(--gold)]">{formatPrice(property.price)}</span>
                    <span className="text-white/15 text-xs uppercase tracking-wider">/ night</span>
                  </div>
                  <p className="text-white/15 text-xs mb-8">Taxes and fees included</p>
                  <BookingForm propertyId={property.id} price={property.price} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <section className="py-24 border-t border-white/[0.03]">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-8 h-[1px] bg-[var(--gold)]/20" />
                <h2 className="font-display text-3xl text-white font-light">You May Also <em className="text-[var(--gold)]">Love</em></h2>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                {similar.map(p => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
