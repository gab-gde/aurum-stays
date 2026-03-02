export function PropertyMap({ location, country }: { location: string; country: string }) {
  return (
    <div className="border border-white/[0.04] p-8 bg-[#111]">
      <h3 className="font-display text-xl text-white font-light mb-4">Location</h3>
      <p className="text-white/30 text-sm">{location}, {country}</p>
      <div className="mt-6 h-64 bg-white/[0.02] flex items-center justify-center">
        <p className="text-white/10 text-xs uppercase tracking-widest">Map View</p>
      </div>
    </div>
  );
}
