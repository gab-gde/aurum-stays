"use client";
import { cn } from "@/lib/utils";

export function Pagination({ currentPage, totalPages, onPageChange }: {
  currentPage: number; totalPages: number; onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
        className="px-3 py-2 rounded-lg text-gray-400 hover:text-white disabled:opacity-30 transition">
        &#8592;
      </button>
      {pages.map((p) => (
        <button key={p} onClick={() => onPageChange(p)}
          className={cn(
            "w-10 h-10 rounded-lg text-sm font-medium transition-all",
            p === currentPage ? "bg-[#D4A843] text-[#111217]" : "text-gray-400 hover:text-white hover:bg-white/5"
          )}>
          {p}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-lg text-gray-400 hover:text-white disabled:opacity-30 transition">
        &#8594;
      </button>
    </div>
  );
}
