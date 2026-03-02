import {
  Waves, ChefHat, Dumbbell, Wifi, Car, Tv,
  AirVent, Wine, Mountain, Flame, Anchor,
  TreePine, Shirt, Music, Coffee, Wind,
  Bath, Sparkles, Shield, Sun, Warehouse, Globe, Utensils, Snowflake, Eye, Dog, Baby, Accessibility
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Pool: Waves, "Private Pool": Waves, "Infinity Pool": Waves,
  "Private Chef": ChefHat, Chef: ChefHat, Kitchen: Utensils,
  Gym: Dumbbell, Fitness: Dumbbell,
  WiFi: Wifi, "High-Speed WiFi": Wifi,
  Parking: Car, Garage: Car,
  TV: Tv, "Home Cinema": Tv, Cinema: Tv,
  "Air Conditioning": AirVent, AC: AirVent,
  "Wine Cellar": Wine, Bar: Wine,
  "Mountain View": Mountain, "Sea View": Eye, "Ocean View": Eye,
  Fireplace: Flame, "Fire Pit": Flame,
  "Beach Access": Anchor, Marina: Anchor,
  Garden: TreePine, Terrace: Sun,
  Laundry: Shirt, "Walk-in Closet": Shirt,
  "Sound System": Music, Piano: Music,
  "Coffee Machine": Coffee, Espresso: Coffee,
  Washer: Wind, Dryer: Wind,
  Spa: Bath, Sauna: Bath, Jacuzzi: Bath, "Hot Tub": Bath,
  "Concierge": Sparkles, Butler: Sparkles,
  Security: Shield, Safe: Shield, CCTV: Shield,
  "Heated Pool": Snowflake, "Ski Access": Snowflake,
  "Pet Friendly": Dog, Pets: Dog,
  "Baby Friendly": Baby, Crib: Baby,
  Elevator: Accessibility, "Wheelchair Access": Accessibility,
  Helipad: Globe, "Private Jet": Globe,
};

export function PropertyAmenities({ amenities }: { amenities: string[] }) {
  if (!amenities?.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.02]">
      {amenities.map((a) => {
        const Icon = ICON_MAP[a] || Sparkles;
        return (
          <div key={a} className="bg-[var(--dark)] p-5 group hover:bg-[#111] transition-all duration-500 flex items-center gap-4">
            <Icon className="w-4 h-4 text-[var(--gold)]/30 group-hover:text-[var(--gold)] transition-colors duration-500 flex-shrink-0" strokeWidth={1} />
            <span className="text-white/40 text-sm group-hover:text-white/70 transition-colors duration-500">{a}</span>
          </div>
        );
      })}
    </div>
  );
}
