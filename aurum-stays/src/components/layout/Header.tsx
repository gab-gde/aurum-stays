"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS } from "@/lib/constants";
import { useAuth } from "@/components/providers/AuthProvider";
import { Menu, User, LogOut, LayoutDashboard, Shield } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = () => setDropdownOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [dropdownOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
      scrolled ? "glass" : "bg-transparent"
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="group">
            <span className="font-display text-2xl font-light tracking-[0.3em] text-white uppercase">Aurum</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}
                className="group relative text-[11px] text-white/60 hover:text-white transition-colors duration-500 tracking-[0.2em] uppercase font-medium">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--gold)] transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-8">
            {loading ? (
              <div className="w-20 h-8" />
            ) : user ? (
              <div className="relative">
                <button onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen); }}
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <div className="w-9 h-9 rounded-full border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)] text-[10px] font-semibold tracking-wider">
                    {user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
                  </div>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-4 w-60 bg-[#111] border border-white/[0.06] py-2 animate-fade-in">
                    <div className="px-5 py-3 border-b border-white/[0.04]">
                      <p className="text-white text-sm">{user.name}</p>
                      <p className="text-white/30 text-xs mt-0.5">{user.email}</p>
                    </div>
                    <Link href="/dashboard" className="flex items-center gap-3 px-5 py-3 text-xs text-white/50 hover:text-white hover:bg-white/[0.03] transition-all tracking-wider uppercase">
                      <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
                    </Link>
                    {user.role === "ADMIN" && (
                      <Link href="/admin" className="flex items-center gap-3 px-5 py-3 text-xs text-white/50 hover:text-white hover:bg-white/[0.03] transition-all tracking-wider uppercase">
                        <Shield className="w-3.5 h-3.5" /> Admin
                      </Link>
                    )}
                    <button onClick={logout} className="flex items-center gap-3 px-5 py-3 text-xs text-white/50 hover:text-red-400 hover:bg-white/[0.03] transition-all w-full text-left tracking-wider uppercase">
                      <LogOut className="w-3.5 h-3.5" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="text-[11px] text-white/50 hover:text-white transition-all duration-500 tracking-[0.2em] uppercase">
                  Sign In
                </Link>
                <Link href="/register" className="btn-gold !py-3 !px-8 text-[10px]">
                  <span>Book Now</span>
                </Link>
              </>
            )}
          </div>

          <button onClick={() => setMenuOpen(true)} className="lg:hidden text-white/60 hover:text-white transition-colors">
            <Menu className="w-5 h-5" strokeWidth={1} />
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
