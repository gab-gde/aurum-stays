"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const imgs = images?.length ? images : ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200"];

  return (
    <>
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-1 h-[60vh] md:h-[75vh]">
        <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden" onClick={() => setLightbox(0)}>
          <img src={imgs[0]} alt={title} className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
          <div className="absolute bottom-6 right-6 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
            <Maximize2 className="w-4 h-4 text-white" />
          </div>
        </div>
        {imgs.slice(1, 5).map((img, i) => (
          <div key={i} className="relative group cursor-pointer overflow-hidden hidden md:block" onClick={() => setLightbox(i + 1)}>
            <img src={img} alt={`${title} ${i + 2}`} className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
            {i === 3 && imgs.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="font-display text-2xl text-white font-light">+{imgs.length - 5}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
          <button onClick={() => setLightbox(null)}
            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-10">
            <X className="w-6 h-6" strokeWidth={1} />
          </button>

          <button onClick={() => setLightbox((lightbox - 1 + imgs.length) % imgs.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button onClick={() => setLightbox((lightbox + 1) % imgs.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all z-10">
            <ChevronRight className="w-5 h-5" />
          </button>

          <img src={imgs[lightbox]} alt={title} className="max-w-[90vw] max-h-[85vh] object-contain animate-scale-in" />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {imgs.map((_, i) => (
              <button key={i} onClick={() => setLightbox(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightbox ? 'bg-[var(--gold)] w-6' : 'bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>

          <p className="absolute top-8 left-8 text-white/20 text-xs tracking-wider">{lightbox + 1} / {imgs.length}</p>
        </div>
      )}
    </>
  );
}
