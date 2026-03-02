"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS } from "@/lib/constants";
import { Menu } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? "glass py-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "bg-transparent py-2"
    }`}>
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group relative">
            <span className="font-display text-2xl font-bold gold-text tracking-[0.15em]">AURUM</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-full" />
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}
                className="group relative text-[13px] text-gray-400 hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase font-medium">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-5">
            <Link href="/login" className="text-[13px] text-gray-400 hover:text-white transition-all duration-300 tracking-wide">
              Sign In
            </Link>
            <Link href="/register" className="btn-gold text-[13px] !py-2.5 !px-5 tracking-wide">
              Register
            </Link>
          </div>
          <button onClick={() => setMenuOpen(true)} className="md:hidden text-gray-400 hover:text-[#D4A843] transition-colors p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </Container>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
