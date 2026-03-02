import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyAmenities } from "@/components/property/PropertyAmenities";
import { PropertyMap } from "@/components/property/PropertyMap";
import { PropertyReviews } from "@/components/property/PropertyReviews";
import { BookingForm } from "@/components/booking/BookingForm";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Bed, Bath, Users, Maximize } from "lucide-react";

export default async function PropertyPage({ params }: { params: any }) {
  const { id } = await params;
  const property = await prisma.property.findUnique({
    where: { id },
    include: { reviews: { include: { user: { select: { name: true, avatar: true } } }, orderBy: { createdAt: "desc" } } },
  });
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <PropertyGallery images={property.images} />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="gold">{property.type}</Badge>
                  <Rating value={property.rating} size="md" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-white">{property.title}</h1>
                <p className="text-gray-400 mt-1">{property.location}, {property.country}</p>
                <div className="flex gap-6 mt-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-[#D4A843]/60" /> {property.bedrooms} Bedrooms</span>
                  <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-[#D4A843]/60" /> {property.bathrooms} Bathrooms</span>
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[#D4A843]/60" /> {property.maxGuests} Guests</span>
                  <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4 text-[#D4A843]/60" /> {property.area} m\u00b2</span>
                </div>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white mb-4">About this property</h2>
                <p className="text-gray-400 leading-relaxed">{property.description}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white mb-4">Amenities</h2>
                <PropertyAmenities amenities={property.amenities} />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white mb-4">Location</h2>
                <PropertyMap latitude={property.latitude} longitude={property.longitude} title={property.title} />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white mb-4">Reviews ({property.reviews.length})</h2>
                <PropertyReviews reviews={property.reviews} />
              </div>
            </div>
            <div>
              <BookingForm property={property} />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
