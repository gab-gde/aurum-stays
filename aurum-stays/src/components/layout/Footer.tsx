import Link from "next/link";
import { Container } from "./Container";
import { SITE_NAME } from "@/lib/constants";

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
    <footer className="border-t border-white/5 py-16 mt-24">
      <Container>
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <p className="font-display text-2xl font-bold gold-text tracking-wider">{SITE_NAME}</p>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Curated luxury properties in the world&apos;s most exclusive destinations.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-gray-500 text-sm hover:text-[#D4A843] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
