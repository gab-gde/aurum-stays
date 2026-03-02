export function PropertyMap({ latitude, longitude, title }: {
  latitude: number | null; longitude: number | null; title: string;
}) {
  if (!latitude || !longitude) return null;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01},${latitude-0.01},${longitude+0.01},${latitude+0.01}&layer=mapnik&marker=${latitude},${longitude}`;
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10">
      <iframe src={src} width="100%" height="300" className="border-0" loading="lazy"
        title={`Map of ${title}`} />
    </div>
  );
}
