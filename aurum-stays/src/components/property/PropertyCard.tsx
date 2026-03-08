import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Bed, Bath, Users, ArrowUpRight } from "lucide-react";

export function PropertyCard({ property }: { property: any }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden mb-6 img-zoom">
        <img
          src={property.images?.[0] || "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute top-5 right-5 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 backdrop-blur-sm bg-black/10">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
        <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
          <div className="flex items-center gap-4 text-white/70 text-[11px]">
            <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {property.bedrooms}</span>
            <span className="flex items-center gap-1"><Bath className="w-3 h-3" /> {property.bathrooms}</span>
            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {property.maxGuests}</span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[var(--gold)]/60 text-[10px] tracking-[0.3em] uppercase mb-2">{property.type} &middot; {property.country}</p>
        <h3 className="font-display text-2xl text-white font-light mb-2 group-hover:text-[var(--gold)] transition-colors duration-500">{property.title}</h3>
        <p className="text-white/20 text-sm mb-5 font-light">{property.location}</p>
        <div className="flex items-center justify-between pt-5 border-t border-white/[0.04]">
          <p className="font-display text-xl text-[var(--gold)]">{formatPrice(property.price)}</p>
          <span className="text-white/15 text-[10px] tracking-[0.2em] uppercase">per night</span>
        </div>
      </div>
    </Link>
  );
}
