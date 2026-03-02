"use client";
import { useEffect } from "react";
import { X } from "lucide-react";

export function Modal({ open, onClose, title, children }: {
  open: boolean; onClose: () => void; title?: string; children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative bg-[#111] border border-white/[0.06] w-full max-w-lg max-h-[85vh] overflow-auto animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-white/[0.04]">
          {title && <h3 className="font-display text-xl text-white font-light">{title}</h3>}
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors ml-auto">
            <X className="w-5 h-5" strokeWidth={1} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
