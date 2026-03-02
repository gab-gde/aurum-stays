import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Rating } from "@/components/ui/Rating";
import { Bed, Bath, Users, ArrowUpRight } from "lucide-react";

export function PropertyCard({ property }: { property: any }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="relative h-80 overflow-hidden mb-5">
        <img
          src={property.images?.[0] || "/placeholder.jpg"}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute top-4 right-4 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 bg-black/20 backdrop-blur-sm">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>
      <div>
        <p className="text-[var(--gold)] text-[10px] tracking-[0.3em] uppercase mb-2">{property.type}</p>
        <h3 className="font-display text-2xl text-white font-light mb-2 group-hover:text-[var(--gold)] transition-colors duration-500">{property.title}</h3>
        <p className="text-white/30 text-sm mb-4">{property.location}, {property.country}</p>
        <div className="flex items-center gap-5 text-white/25 text-xs mb-4">
          <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" /> {property.bedrooms}</span>
          <span className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" /> {property.bathrooms}</span>
          <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {property.maxGuests}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
          <p className="text-[var(--gold)] font-display text-xl">{formatPrice(property.price)}</p>
          <span className="text-white/20 text-[10px] tracking-wider uppercase">per night</span>
        </div>
      </div>
    </Link>
  );
}
