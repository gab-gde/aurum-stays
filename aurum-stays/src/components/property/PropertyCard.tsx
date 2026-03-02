import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";

export function PropertyCard({ property }: { property: any }) {
  return (
    <Link href={`/properties/${property.id}`} className="luxury-card group block">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images?.[0] || "/placeholder.jpg"}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111217]/80 via-transparent to-transparent" />
        <Badge variant="gold" className="absolute top-4 left-4">{property.type}</Badge>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-xl font-bold text-white">{property.title}</h3>
          <p className="text-gray-300 text-sm">{property.location}, {property.country}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>{property.bedrooms} beds</span>
            <span>{property.bathrooms} baths</span>
            <span>{property.maxGuests} guests</span>
          </div>
          <Rating value={property.rating} />
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <p className="text-[#D4A843] font-display text-xl font-bold">{formatPrice(property.price)}</p>
          <span className="text-gray-600 text-sm">/ night</span>
        </div>
      </div>
    </Link>
  );
}
