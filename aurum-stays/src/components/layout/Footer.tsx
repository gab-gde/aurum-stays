import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] pt-24 pb-12 mt-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Large brand */}
        <div className="mb-20">
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-light leading-none text-white/[0.04] uppercase tracking-[0.2em]">
            Aurum Stays
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <p className="font-display text-xl text-white tracking-[0.1em] uppercase font-light mb-4">{SITE_NAME}</p>
            <p className="text-white/30 text-sm leading-relaxed">
              Curated luxury properties in the world&apos;s most exclusive destinations.
            </p>
          </div>
          {[
            { title: "Explore", links: [
              { href: "/properties", label: "Properties" },
              { href: "/properties?type=VILLA", label: "Villas" },
              { href: "/properties?type=CHALET", label: "Chalets" },
            ]},
            { title: "Company", links: [
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ]},
            { title: "Legal", links: [
              { href: "#", label: "Privacy" },
              { href: "#", label: "Terms" },
            ]},
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-6 font-medium">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/40 text-sm hover:text-[var(--gold)] transition-colors duration-500">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04] text-white/20 text-xs tracking-wider">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}</p>
          <p>Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
}
