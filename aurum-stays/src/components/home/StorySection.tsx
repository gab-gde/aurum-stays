"use client";
import { useSectionProgress } from "@/lib/useScrollProgress";

const steps = [
  { title: "Curated", subtitle: "Not listed. Chosen.", desc: "Every property in our collection is personally visited, rigorously inspected, and handpicked by our team of luxury travel experts." },
  { title: "Immersive", subtitle: "Not a stay. An experience.", desc: "From private chef dinners under the stars to helicopter transfers over the Alps, we transform every moment into an unforgettable memory." },
  { title: "Effortless", subtitle: "Not a booking. A journey.", desc: "Our 24/7 concierge anticipates your every need before you even express it. Pure, frictionless luxury from first click to checkout." },
];

export function StorySection() {
  const { ref, progress } = useSectionProgress();

  return (
    <section ref={ref} className="relative min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background that shifts */}
        <div className="absolute inset-0 transition-all duration-700"
          style={{ background: `radial-gradient(ellipse at ${30 + progress * 40}% ${40 + progress * 20}%, rgba(201,168,76,0.03) 0%, transparent 60%)` }} />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: stepping through words */}
            <div>
              {steps.map((step, i) => {
                const stepProgress = progress * 3 - i;
                const isActive = stepProgress > 0.3 && stepProgress < 1.3;
                const opacity = isActive ? Math.min(1, (stepProgress - 0.3) * 3, (1.3 - stepProgress) * 3) : 0;
                const translateY = isActive ? (1 - opacity) * 30 : 40;

                return (
                  <div key={i} className="absolute max-w-lg transition-all duration-500"
                    style={{ opacity, transform: `translateY(${translateY}px)` }}>
                    <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium mb-4">0{i + 1}</p>
                    <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 leading-[0.9]">
                      {step.title}
                    </h2>
                    <p className="font-display text-2xl md:text-3xl text-[var(--gold)] italic font-light mb-8">
                      {step.subtitle}
                    </p>
                    <p className="text-white/30 text-[15px] leading-[2] font-light max-w-md">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right: visual indicator */}
            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="relative h-[300px] w-[1px]">
                <div className="absolute inset-0 bg-white/[0.03]" />
                <div className="absolute top-0 w-full bg-[var(--gold)]/40 transition-all duration-300"
                  style={{ height: `${progress * 100}%` }} />
                {/* Step dots */}
                {steps.map((_, i) => {
                  const dotPos = (i + 0.5) / 3;
                  const isActive = progress > dotPos - 0.15;
                  return (
                    <div key={i} className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border transition-all duration-500 ${
                      isActive ? 'border-[var(--gold)] bg-[var(--gold)]/20 scale-100' : 'border-white/10 scale-75'
                    }`} style={{ top: `${dotPos * 100}%` }} />
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
