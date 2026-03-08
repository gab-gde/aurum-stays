"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
];

export function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());

  // Ensure we always have at least 5 images - fill gaps with fallbacks
  const rawImgs = images?.length ? images : [FALLBACK_IMAGES[0]];
  const imgs: string[] = [];
  for (let i = 0; i < Math.max(5, rawImgs.length); i++) {
    imgs.push(rawImgs[i] || FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]);
  }

  function handleError(index: number) {
    setImgErrors(prev => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }

  function getSrc(index: number) {
    if (imgErrors.has(index)) {
      return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
    }
    return imgs[index];
  }

  return (
    <>
      {/* Grid layout: 1 large + up to 4 small */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[2px] h-[50vh] md:h-[75vh]">
        {/* Main image */}
        <div
          className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden"
          onClick={() => setLightbox(0)}
        >
          <img
            src={getSrc(0)}
            alt={title}
            onError={() => handleError(0)}
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
          <div className="absolute bottom-6 right-6 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-black/10">
            <Maximize2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Secondary images */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden hidden md:block"
            onClick={() => setLightbox(i)}
          >
            <img
              src={getSrc(i)}
              alt={`${title} ${i + 1}`}
              onError={() => handleError(i)}
              className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
            {i === 4 && imgs.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-[2px]">
                <span className="font-display text-2xl text-white font-light">+{imgs.length - 5}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={() => setLightbox(null)}>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-20"
          >
            <X className="w-6 h-6" strokeWidth={1} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + imgs.length) % imgs.length); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % imgs.length); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <img
            src={getSrc(lightbox)}
            alt={`${title} ${lightbox + 1}`}
            onError={() => handleError(lightbox)}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain animate-scale-in"
          />

          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {imgs.slice(0, 10).map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`transition-all duration-300 ${
                  i === lightbox
                    ? 'w-8 h-[3px] bg-[var(--gold)]'
                    : 'w-4 h-[2px] bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="absolute top-8 left-8 text-white/20 text-xs tracking-wider z-20">
            {lightbox + 1} / {imgs.length}
          </p>
        </div>
      )}
    </>
  );
}
