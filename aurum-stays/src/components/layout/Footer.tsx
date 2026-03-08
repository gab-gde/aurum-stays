"use client";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.03] pt-32 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Newsletter section */}
        <ScrollReveal className="mb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium mb-6">Stay Connected</p>
              <h3 className="font-display text-4xl md:text-5xl font-light leading-[1.1]">
                Receive Our<br /><em className="text-[var(--gold)]">Curated Updates</em>
              </h3>
            </div>
            <div>
              <div className="flex gap-0">
                <input type="email" placeholder="Enter your email"
                  className="flex-1 px-6 py-5 bg-transparent border border-white/[0.06] border-r-0 text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-[var(--gold)]/30 transition-all duration-500" />
                <button className="px-8 bg-[var(--gold)] text-[var(--dark)] hover:bg-[var(--gold-light)] transition-all duration-500 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  <span className="hidden sm:inline">Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-white/10 text-xs mt-4">No spam. Unsubscribe anytime. We respect your privacy.</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="hr-gold mb-20" />

        {/* Large brand watermark */}
        <div className="mb-20 overflow-hidden">
          <h2 className="font-display text-[clamp(4rem,10vw,10rem)] font-light leading-none text-white/[0.02] uppercase tracking-[0.3em]">
            Aurum Stays
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <p className="font-display text-lg text-white tracking-[0.15em] uppercase font-light mb-6">{SITE_NAME}</p>
            <p className="text-white/20 text-sm leading-[1.9] font-light mb-6">
              Curated luxury properties in the world&apos;s most exclusive destinations. Every stay, extraordinary.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/20 text-sm">
                <MapPin className="w-3.5 h-3.5 text-[var(--gold)]/30" strokeWidth={1} />
                <span>42 Avenue Montaigne, Paris</span>
              </div>
              <div className="flex items-center gap-3 text-white/20 text-sm">
                <Mail className="w-3.5 h-3.5 text-[var(--gold)]/30" strokeWidth={1} />
                <span>hello@aurumstays.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/20 text-sm">
                <Phone className="w-3.5 h-3.5 text-[var(--gold)]/30" strokeWidth={1} />
                <span>+33 1 42 68 00 00</span>
              </div>
            </div>
          </div>
          {[
            { title: "Collection", links: [
              { href: "/properties", label: "All Properties" },
              { href: "/properties?type=VILLA", label: "Villas" },
              { href: "/properties?type=CHALET", label: "Chalets" },
              { href: "/properties?type=PENTHOUSE", label: "Penthouses" },
              { href: "/properties?type=ESTATE", label: "Estates" },
            ]},
            { title: "Company", links: [
              { href: "/about", label: "About Aurum" },
              { href: "/contact", label: "Contact" },
              { href: "#", label: "Careers" },
              { href: "#", label: "Press" },
            ]},
            { title: "Legal", links: [
              { href: "#", label: "Privacy Policy" },
              { href: "#", label: "Terms of Service" },
              { href: "#", label: "Cookie Policy" },
            ]},
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-[10px] text-white/20 uppercase tracking-[0.4em] mb-8 font-medium">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/25 text-sm hover:text-[var(--gold)] transition-colors duration-500 font-light">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hr-gold mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/10 text-[10px] tracking-[0.2em] uppercase">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Crafted with precision &amp; passion</p>
        </div>
      </div>
    </footer>
  );
}
