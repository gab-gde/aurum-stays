"use client";
import { useRef, useState, useEffect } from "react";

const steps = [
  { title: "Curated", subtitle: "Not listed. Chosen.", desc: "Every property in our collection is personally visited, rigorously inspected, and handpicked by our team of luxury travel experts." },
  { title: "Immersive", subtitle: "Not a stay. An experience.", desc: "From private chef dinners under the stars to helicopter transfers over the Alps, we transform every moment into an unforgettable memory." },
  { title: "Effortless", subtitle: "Not a booking. A journey.", desc: "Our 24/7 concierge anticipates your every need before you even express it. Pure, frictionless luxury from first click to checkout." },
];

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const sectionH = ref.current.offsetHeight - window.innerHeight;
      if (sectionH <= 0) return;
      const p = Math.max(0, Math.min(1, -rect.top / sectionH));
      setProgress(p);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Which step is active (0-2)
  const activeIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);

  return (
    <section ref={ref} className="relative" style={{ height: `${(steps.length + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 transition-all duration-1000"
          style={{ background: `radial-gradient(ellipse at ${30 + progress * 40}% 50%, rgba(201,168,76,0.025) 0%, transparent 60%)` }} />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Text content */}
            <div className="lg:col-span-3 relative min-h-[350px]">
              {steps.map((step, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={i}
                    className="absolute top-0 left-0 max-w-xl transition-all duration-700"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(${isActive ? 0 : i < activeIndex ? -40 : 40}px)`,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    <p className="text-[var(--gold)]/40 text-[10px] tracking-[0.5em] uppercase font-medium mb-6">0{i + 1}</p>
                    <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 leading-[0.9]">
                      {step.title}
                    </h2>
                    <p className="font-display text-2xl md:text-3xl text-[var(--gold)] italic font-light mb-8">
                      {step.subtitle}
                    </p>
                    <p className="text-white/25 text-[15px] leading-[2] font-light">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right: progress indicator */}
            <div className="lg:col-span-2 hidden lg:flex justify-center">
              <div className="relative h-[250px] flex flex-col justify-between items-center">
                {/* Vertical line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/[0.04]">
                  <div className="w-full bg-[var(--gold)]/30 transition-all duration-500" style={{ height: `${progress * 100}%` }} />
                </div>
                {/* Dots */}
                {steps.map((step, i) => {
                  const isReached = i <= activeIndex;
                  return (
                    <div key={i} className="relative z-10 flex items-center gap-6">
                      <div className={`w-3 h-3 rounded-full border transition-all duration-500 ${
                        isReached ? 'border-[var(--gold)] bg-[var(--gold)]/20 scale-100' : 'border-white/10 bg-transparent scale-75'
                      }`} />
                      <span className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${
                        i === activeIndex ? 'text-[var(--gold)] opacity-100' : 'text-white/10 opacity-50'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
