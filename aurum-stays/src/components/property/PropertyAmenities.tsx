const ICONS: Record<string, string> = {
  Pool: "\ud83c\udfca", "Sea View": "\ud83c\udf0a", Chef: "\ud83d\udc68\u200d\ud83c\udf73", Helipad: "\ud83d\ude81",
  "Wine Cellar": "\ud83c\udf77", Spa: "\ud83d\udec1", "Eiffel View": "\ud83c\uddeb\ud83c\uddf7",
  Terrace: "\ud83c\udf07", Concierge: "\ud83d\udd14", "Home Cinema": "\ud83c\udfac",
  Gym: "\ud83c\udfcb\ufe0f", Sauna: "\ud83e\uddd6", "Ski Access": "\u26f7\ufe0f",
  "Hot Tub": "\ud83d\udec0", Fireplace: "\ud83d\udd25", "Boot Room": "\ud83e\udd7e",
  "Private Beach": "\ud83c\udfd6\ufe0f", Tennis: "\ud83c\udfbe", Vineyard: "\ud83c\udf47",
  "Staff Quarters": "\ud83c\udfe0", "Designer Interior": "\ud83c\udfa8", Parking: "\ud83c\udd7f\ufe0f",
  AC: "\u2744\ufe0f", Washer: "\ud83e\uddf9", Chapel: "\u26ea", Gardens: "\ud83c\udf3b",
  Library: "\ud83d\udcda", "Billiard Room": "\ud83c\udfb1", "Wine Cave": "\ud83c\udf77",
};

export function PropertyAmenities({ amenities }: { amenities: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {amenities.map((a) => (
        <div key={a} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
          <span className="text-xl">{ICONS[a] || "\u2728"}</span>
          <span className="text-gray-300 text-sm">{a}</span>
        </div>
      ))}
    </div>
  );
}
