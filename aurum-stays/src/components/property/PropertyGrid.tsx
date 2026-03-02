import { PropertyCard } from "./PropertyCard";

export function PropertyGrid({ properties }: { properties: any[] }) {
  if (!properties.length) {
    return (
      <div className="text-center py-32">
        <p className="font-display text-2xl text-white/20 italic font-light">No properties found.</p>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}
