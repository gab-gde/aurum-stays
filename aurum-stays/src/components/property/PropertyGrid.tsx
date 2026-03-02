import { PropertyCard } from "./PropertyCard";

export function PropertyGrid({ properties }: { properties: any[] }) {
  if (!properties.length) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}
