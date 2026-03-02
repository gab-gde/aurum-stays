import Link from "next/link";
import { Container } from "./Container";
import { SITE_NAME } from "@/lib/constants";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const columns = [
    { title: "Properties", links: [
      { href: "/properties", label: "Browse All" },
      { href: "/properties?type=VILLA", label: "Villas" },
      { href: "/properties?type=CHALET", label: "Chalets" },
      { href: "/properties?type=PENTHOUSE", label: "Penthouses" },
    ]},
    { title: "Company", links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press" },
    ]},
    { title: "Support", links: [
      { href: "#", label: "Help Center" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" },
    ]},
  ];

  return (
    <footer className="border-t border-white/[0.04] py-20 mt-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#D4A843]/30 to-transparent" />
      <Container>
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <p className="font-display text-2xl font-bold gold-text tracking-[0.15em]">{SITE_NAME}</p>
            <p className="text-gray-500 text-sm mt-5 leading-relaxed">
              Curated luxury properties in the world&apos;s most exclusive destinations.
            </p>
            <div className="flex flex-col gap-3 mt-6 text-gray-600 text-xs">
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#D4A843]/60" /> Paris, France</span>
              <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#D4A843]/60" /> hello@aurumstays.com</span>
              <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#D4A843]/60" /> +33 1 42 68 00 00</span>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="group text-gray-500 text-sm hover:text-[#D4A843] transition-colors duration-300 flex items-center gap-2">
                      <span className="w-0 h-px bg-[#D4A843] transition-all duration-300 group-hover:w-3" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="gold-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-xs tracking-wide">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="text-gray-700">Crafted with precision</p>
        </div>
      </Container>
    </footer>
  );
}
