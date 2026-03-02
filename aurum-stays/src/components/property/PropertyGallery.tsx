"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function PropertyGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <div className="relative h-[500px] rounded-2xl overflow-hidden cursor-pointer" onClick={() => setLightbox(true)}>
          <img src={images[selected] || "/placeholder.jpg"} alt="Property" className="w-full h-full object-cover" />
        </div>
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className={cn("flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all",
                  i === selected ? "border-[#D4A843]" : "border-transparent opacity-60 hover:opacity-100")}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(false)}>
          <button onClick={() => setLightbox(false)} className="absolute top-6 right-6 text-white text-2xl">&#x2715;</button>
          <button onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}
            className="absolute left-6 text-white text-3xl hover:text-[#D4A843]">&#8592;</button>
          <img src={images[selected]} alt="" className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}
            className="absolute right-6 text-white text-3xl hover:text-[#D4A843]">&#8594;</button>
        </div>
      )}
    </>
  );
}
