"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({ page, total, perPage = 12, onChange }: {
  page: number; total: number; perPage?: number; onChange: (p: number) => void;
}) {
  const pages = Math.ceil(total / perPage);
  if (pages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-16">
      <button onClick={() => onChange(page - 1)} disabled={page <= 1}
        className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed">
        <ChevronLeft className="w-4 h-4" />
      </button>
      {Array.from({ length: pages }, (_, i) => (
        <button key={i} onClick={() => onChange(i + 1)}
          className={`w-10 h-10 border text-sm transition-all duration-300 ${
            page === i + 1 ? 'border-[var(--gold)] text-[var(--gold)]' : 'border-white/10 text-white/30 hover:text-white hover:border-white/20'
          }`}>
          {i + 1}
        </button>
      ))}
      <button onClick={() => onChange(page + 1)} disabled={page >= pages}
        className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
