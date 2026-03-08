"use client";
import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";
import Link from "next/link";
import { ArrowUpRight, Search, SlidersHorizontal, X } from "lucide-react";

export default function ServicesPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<"all" | "low" | "mid" | "high">("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return SERVICES.filter(s => {
      if (category !== "All" && s.category !== category) return false;
      if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.tagline.toLowerCase().includes(search.toLowerCase())) return false;
      if (priceRange === "low" && s.options[0].price > 500) return false;
      if (priceRange === "mid" && (s.options[0].price < 500 || s.options[0].price > 1500)) return false;
      if (priceRange === "high" && s.options[0].price < 1500) return false;
      return true;
    });
  }, [category, search, priceRange]);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85')" }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-[var(--dark)]/30" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-[1px] bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Bespoke Experiences</p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
              Luxury <em className="text-[var(--gold)]">Services</em>
            </h1>
            <p className="text-white/30 text-lg mt-4 font-light max-w-xl">
              Elevate every moment of your stay with our curated collection of premium services, each delivered by the finest professionals.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            {/* Filters bar */}
            <div className="mb-16">
              {/* Category pills */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                {SERVICE_CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setCategory(cat)}
                    className={`px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase transition-all duration-500 border ${
                      category === cat
                        ? 'border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/5'
                        : 'border-white/[0.06] text-white/30 hover:text-white/60 hover:border-white/15'
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search + advanced filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" strokeWidth={1} />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-transparent border border-white/[0.06] text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-[var(--gold)]/30 transition-all duration-500"
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <button onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-6 py-3.5 border text-[10px] tracking-[0.2em] uppercase transition-all duration-500 ${
                    showFilters ? 'border-[var(--gold)]/30 text-[var(--gold)]' : 'border-white/[0.06] text-white/30 hover:text-white/50'
                  }`}>
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                </button>
              </div>

              {/* Extended filters */}
              <div className={`overflow-hidden transition-all duration-700 ${showFilters ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <div className="border border-white/[0.04] p-6">
                  <p className="text-[10px] text-white/20 tracking-[0.25em] uppercase mb-4">Price Range</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: "all" as const, label: "All Prices" },
                      { value: "low" as const, label: "Under \u20AC500" },
                      { value: "mid" as const, label: "\u20AC500 \u2013 \u20AC1,500" },
                      { value: "high" as const, label: "\u20AC1,500+" },
                    ].map(opt => (
                      <button key={opt.value} onClick={() => setPriceRange(opt.value)}
                        className={`px-4 py-2 text-xs tracking-wider transition-all duration-300 border ${
                          priceRange === opt.value
                            ? 'border-[var(--gold)]/40 text-[var(--gold)] bg-[var(--gold)]/5'
                            : 'border-white/[0.06] text-white/25 hover:text-white/50'
                        }`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between mb-10">
              <p className="text-white/15 text-xs tracking-wider">
                {filtered.length} service{filtered.length !== 1 ? 's' : ''} found
              </p>
              {(category !== "All" || search || priceRange !== "all") && (
                <button onClick={() => { setCategory("All"); setSearch(""); setPriceRange("all"); }}
                  className="text-[var(--gold)]/60 text-[10px] tracking-[0.2em] uppercase hover:text-[var(--gold)] transition-colors">
                  Clear all filters
                </button>
              )}
            </div>

            {/* Service grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-32">
                <p className="font-display text-2xl text-white/15 italic font-light mb-4">No services match your criteria.</p>
                <button onClick={() => { setCategory("All"); setSearch(""); setPriceRange("all"); }}
                  className="text-[var(--gold)] text-sm underline">Reset filters</button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((service, i) => (
                  <ScrollReveal key={service.id} delay={i * 80}>
                    <Link href={`/services/${service.id}`}
                      className="group block border border-white/[0.03] hover:border-white/[0.08] transition-all duration-700 bg-[var(--dark)] hover:bg-[#0D0D0D]">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img src={service.image} alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-black/30 backdrop-blur-sm text-[9px] text-[var(--gold)] tracking-[0.3em] uppercase border border-[var(--gold)]/10">
                            {service.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 w-9 h-9 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 backdrop-blur-sm">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className="text-[var(--gold)] font-display text-lg">{service.price}</span>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-display text-2xl text-white font-light mb-2 group-hover:text-[var(--gold)] transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-white/25 text-sm font-light leading-relaxed mb-4">{service.tagline}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-white/10 text-[10px] tracking-[0.2em] uppercase">{service.options.length} options available</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
