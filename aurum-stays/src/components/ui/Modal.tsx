"use client";
import { useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/lib/hooks";
import { X } from "lucide-react";

export function Modal({ open, onClose, children, className }: {
  open: boolean; onClose: () => void; children: React.ReactNode; className?: string;
}) {
  useScrollLock(open);

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className={cn("relative bg-[#16171F] border border-white/[0.06] rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in", className)}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-[#D4A843] transition-colors">
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
