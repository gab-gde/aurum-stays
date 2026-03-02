import {
  Waves, Eye, ChefHat, Plane, Wine, Sparkles, Landmark,
  Sun, Bell, Film, Dumbbell, Thermometer, Mountain, Bath,
  Flame, Footprints, Umbrella, Target, Grape, Home, Palette,
  ParkingCircle, Snowflake, WashingMachine, Church, TreePine,
  BookOpen, CircleDot, GlassWater
} from "lucide-react";

const ICONS: Record<string, any> = {
  Pool: Waves, "Sea View": Eye, Chef: ChefHat, Helipad: Plane,
  "Wine Cellar": Wine, Spa: Sparkles, "Eiffel View": Landmark,
  Terrace: Sun, Concierge: Bell, "Home Cinema": Film,
  Gym: Dumbbell, Sauna: Thermometer, "Ski Access": Mountain,
  "Hot Tub": Bath, Fireplace: Flame, "Boot Room": Footprints,
  "Private Beach": Umbrella, Tennis: Target, Vineyard: Grape,
  "Staff Quarters": Home, "Designer Interior": Palette,
  Parking: ParkingCircle, AC: Snowflake, Washer: WashingMachine,
  Chapel: Church, Gardens: TreePine, Library: BookOpen,
  "Billiard Room": CircleDot, "Wine Cave": GlassWater,
};

export function PropertyAmenities({ amenities }: { amenities: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {amenities.map((a) => {
        const Icon = ICONS[a] || Sparkles;
        return (
          <div key={a} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:border-[#D4A843]/20 hover:bg-[#D4A843]/[0.03] transition-all duration-300 group">
            <Icon className="w-4 h-4 text-[#D4A843]/70 group-hover:text-[#D4A843] transition-colors" strokeWidth={1.5} />
            <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{a}</span>
          </div>
        );
      })}
    </div>
  );
}
