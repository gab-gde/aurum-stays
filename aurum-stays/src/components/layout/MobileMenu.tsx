"use client";
import Link from "next/link";
import { useScrollLock } from "@/lib/hooks";
import { NAV_LINKS } from "@/lib/constants";
import { X } from "lucide-react";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useScrollLock(open);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#16171F] border-l border-white/5 p-8 animate-slide-right">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-[#D4A843] transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="mt-16 flex flex-col gap-6">
          <p className="font-display text-lg gold-text tracking-wider mb-2">AURUM</p>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={onClose}
              className="text-lg text-gray-300 hover:text-[#D4A843] transition-colors tracking-wide">
              {l.label}
            </Link>
          ))}
          <div className="gold-divider my-2" />
          <Link href="/login" onClick={onClose} className="text-gray-400 hover:text-white transition">Sign In</Link>
          <Link href="/register" onClick={onClose} className="btn-gold text-center text-sm">Register</Link>
        </div>
      </div>
    </div>
  );
}
