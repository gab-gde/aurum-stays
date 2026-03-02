import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyAmenities } from "@/components/property/PropertyAmenities";
import { PropertyReviews } from "@/components/property/PropertyReviews";
import { BookingForm } from "@/components/booking/BookingForm";
import { formatPrice } from "@/lib/utils";
import { Bed, Bath, Users, Maximize, MapPin, Star } from "lucide-react";

export default async function PropertyPage({ params }: { params: any }) {
  const { id } = await params;
  const property = await prisma.property.findUnique({ where: { id }, include: { reviews: { include: { user: true }, orderBy: { createdAt: "desc" } } } });
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="pt-24">
        <PropertyGallery images={property.images} title={property.title} />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-16">
                <p className="text-[var(--gold)] text-[10px] tracking-[0.4em] uppercase font-medium mb-4">{property.type}</p>
                <h1 className="font-display text-4xl md:text-6xl font-light leading-[1.1] mb-6">{property.title}</h1>
                <div className="flex items-center gap-2 text-white/30 text-sm mb-8">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1} />
                  <span>{property.location}, {property.country}</span>
                </div>

                <div className="flex flex-wrap gap-8 py-8 border-y border-white/[0.04]">
                  {[
                    { icon: Bed, label: "Bedrooms", value: property.bedrooms },
                    { icon: Bath, label: "Bathrooms", value: property.bathrooms },
                    { icon: Users, label: "Guests", value: property.maxGuests },
                    { icon: Maximize, label: "Area", value: `${property.area || "\u2014"} m\u00B2` },
                    { icon: Star, label: "Rating", value: property.rating?.toFixed(1) || "New" },
                  ].map(s => (
                    <div key={s.label} className="flex items-center gap-3">
                      <s.icon className="w-4 h-4 text-[var(--gold)]/40" strokeWidth={1} />
                      <div>
                        <p className="text-white text-sm font-medium">{String(s.value)}</p>
                        <p className="text-white/20 text-[10px] uppercase tracking-wider">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-20">
                <h2 className="font-display text-2xl text-white font-light mb-6">About This <em className="text-[var(--gold)]">Property</em></h2>
                <p className="text-white/40 leading-[1.8] text-[15px] font-light">{property.description}</p>
              </div>

              <div className="mb-20">
                <h2 className="font-display text-2xl text-white font-light mb-8">Amenities &amp; <em className="text-[var(--gold)]">Features</em></h2>
                <PropertyAmenities amenities={property.amenities} />
              </div>

              <div>
                <h2 className="font-display text-2xl text-white font-light mb-8">Guest <em className="text-[var(--gold)]">Reviews</em></h2>
                <PropertyReviews reviews={property.reviews} propertyId={property.id} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="border border-white/[0.04] p-8 bg-[#111]">
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="font-display text-4xl text-[var(--gold)]">{formatPrice(property.price)}</span>
                    <span className="text-white/20 text-xs uppercase tracking-wider">/ night</span>
                  </div>
                  <BookingForm propertyId={property.id} price={property.price} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
