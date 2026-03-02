"use client";
import { useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/lib/hooks";

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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("relative bg-[#16171F] border border-white/10 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slide-up", className)}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition">&#x2715;</button>
        {children}
      </div>
    </div>
  );
}
