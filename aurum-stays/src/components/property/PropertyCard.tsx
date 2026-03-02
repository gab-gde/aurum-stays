import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Bed, Bath, Users, ArrowUpRight } from "lucide-react";

export function PropertyCard({ property }: { property: any }) {
  return (
    <Link href={`/properties/${property.id}`} className="luxury-card group block">
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.images?.[0] || "/placeholder.jpg"}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-[#111217]/20 to-transparent" />
        <Badge variant="gold" className="absolute top-4 left-4">{property.type}</Badge>
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-xl font-bold text-white mb-1">{property.title}</h3>
          <p className="text-gray-300/80 text-sm">{property.location}, {property.country}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-gray-500 text-xs">
            <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" /> {property.bedrooms}</span>
            <span className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" /> {property.bathrooms}</span>
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {property.maxGuests}</span>
          </div>
          <Rating value={property.rating} />
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
          <p className="text-[#D4A843] font-display text-xl font-bold">{formatPrice(property.price)}</p>
          <span className="text-gray-600 text-xs tracking-wide">per night</span>
        </div>
      </div>
    </Link>
  );
}
