export function MarqueeSection() {
  const items = ["Villa Amalfi", "Penthouse Paris", "Chalet Verbier", "Estate Saint-Tropez", "Mansion Bordeaux", "Apartment Milan"];

  return (
    <section className="py-6 border-y border-white/[0.03] overflow-hidden bg-[#0D0D0D]">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10 px-10">
            <span className="font-display text-2xl md:text-3xl text-white/[0.04] italic font-light whitespace-nowrap hover:text-white/[0.08] transition-colors duration-500 cursor-default">{item}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--gold)]/20 flex-shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
