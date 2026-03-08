"use client";
import { useState } from "react";
import Link from "next/link";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";
import { ArrowUpRight, Check } from "lucide-react";

export function PropertyServices() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? SERVICES.slice(0, 6) : SERVICES.filter(s => s.category === cat).slice(0, 6);
  const categories = SERVICE_CATEGORIES.filter(c => c !== "All");

  return (
    <div>
      {/* Mini filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button onClick={() => setCat("All")}
          className={`px-3 py-1.5 text-[9px] tracking-[0.2em] uppercase border transition-all duration-300 ${
            cat === "All" ? 'border-[var(--gold)]/30 text-[var(--gold)]' : 'border-white/[0.06] text-white/20 hover:text-white/40'
          }`}>All</button>
        {categories.map(c => (
          <button key={c} onClick={() => setCat(c)}
            className={`px-3 py-1.5 text-[9px] tracking-[0.2em] uppercase border transition-all duration-300 ${
              cat === c ? 'border-[var(--gold)]/30 text-[var(--gold)]' : 'border-white/[0.06] text-white/20 hover:text-white/40'
            }`}>{c}</button>
        ))}
      </div>

      {/* Services grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(s => (
          <Link key={s.id} href={`/services/${s.id}`}
            className="group flex gap-4 p-4 border border-white/[0.03] hover:border-white/[0.08] transition-all duration-500 bg-[var(--dark)] hover:bg-[#0D0D0D]">
            <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm font-medium group-hover:text-[var(--gold)] transition-colors duration-500 truncate">{s.title}</h4>
              <p className="text-white/15 text-xs mt-0.5 truncate">{s.tagline}</p>
              <p className="text-[var(--gold)]/50 font-display text-sm mt-2">{s.price}</p>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-[var(--gold)]/50 flex-shrink-0 mt-1 transition-colors duration-500" />
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link href="/services" className="text-[var(--gold)]/50 text-[10px] tracking-[0.3em] uppercase hover:text-[var(--gold)] transition-colors duration-500">
          View all services &rarr;
        </Link>
      </div>
    </div>
  );
}
