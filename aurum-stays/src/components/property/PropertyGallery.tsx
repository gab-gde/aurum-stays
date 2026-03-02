"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export function PropertyGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <div className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setLightbox(true)}>
          <img src={images[selected] || "/placeholder.jpg"} alt="Property"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Maximize2 className="w-4 h-4 text-white" />
          </div>
        </div>
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className={cn("flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300",
                  i === selected ? "border-[#D4A843] shadow-[0_0_15px_rgba(212,168,67,0.2)]" : "border-transparent opacity-60 hover:opacity-100")}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(false)}>
          <button onClick={() => setLightbox(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}
            className="absolute left-6 text-gray-400 hover:text-[#D4A843] transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img src={images[selected]} alt="" className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}
            className="absolute right-6 text-gray-400 hover:text-[#D4A843] transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}
