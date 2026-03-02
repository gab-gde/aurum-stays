export function MarqueeSection() {
  const items = ["Villa Amalfi", "Penthouse Paris", "Chalet Verbier", "Estate Saint-Tropez", "Mansion Bordeaux", "Apartment Milan"];

  return (
    <section className="py-8 border-y border-white/[0.04] overflow-hidden">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-2xl md:text-3xl text-white/[0.06] italic font-light whitespace-nowrap">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]/30 flex-shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
