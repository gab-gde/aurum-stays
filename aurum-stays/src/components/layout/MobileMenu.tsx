"use client";
import Link from "next/link";
import { useScrollLock } from "@/lib/hooks";
import { useAuth } from "@/components/providers/AuthProvider";
import { NAV_LINKS } from "@/lib/constants";
import { X, LogOut } from "lucide-react";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useScrollLock(open);
  const { user, logout } = useAuth();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="absolute inset-0 flex flex-col justify-center items-center animate-fade-in">
        <button onClick={onClose} className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors">
          <X className="w-6 h-6" strokeWidth={1} />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={onClose}
              style={{ animationDelay: `${i * 100 + 100}ms` }}
              className="font-display text-4xl text-white/80 hover:text-[var(--gold)] transition-colors duration-500 opacity-0 animate-fade-in-up italic font-light">
              {l.label}
            </Link>
          ))}
          <div className="w-12 h-[1px] bg-[var(--gold)]/30 my-4" />
          {user ? (
            <>
              <Link href="/dashboard" onClick={onClose} className="text-xs text-white/40 hover:text-white tracking-[0.2em] uppercase">Dashboard</Link>
              <button onClick={() => { logout(); onClose(); }} className="text-xs text-white/40 hover:text-red-400 tracking-[0.2em] uppercase flex items-center gap-2">
                <LogOut className="w-3 h-3" /> Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={onClose} className="text-xs text-white/40 hover:text-white tracking-[0.2em] uppercase">Sign In</Link>
              <Link href="/register" onClick={onClose} className="btn-gold text-[10px]"><span>Register</span></Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
