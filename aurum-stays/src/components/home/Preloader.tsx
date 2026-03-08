"use client";
import { useState, useEffect } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  // Phase 0: black screen
  // Phase 1: gold line grows
  // Phase 2: AURUM text reveals
  // Phase 3: subtitle fades in
  // Phase 4: everything exits up

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 3000),
      setTimeout(() => onComplete(), 3800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center transition-all duration-[1200ms] ${
      phase >= 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="relative flex flex-col items-center">
        {/* Gold line */}
        <div className={`h-[1px] bg-[var(--gold)] mb-10 transition-all duration-[1000ms] ease-out ${
          phase >= 1 ? 'w-24 opacity-100' : 'w-0 opacity-0'
        }`} />

        {/* AURUM text */}
        <div className="overflow-hidden">
          <h1 className={`font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.5em] text-white uppercase transition-all duration-[1200ms] ${
            phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`} style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
            Aurum
          </h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden mt-6">
          <p className={`text-[var(--gold)]/60 text-[10px] tracking-[0.6em] uppercase transition-all duration-[1000ms] ${
            phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`} style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
            Luxury Stays
          </p>
        </div>

        {/* Bottom line */}
        <div className={`h-[1px] bg-[var(--gold)]/30 mt-10 transition-all duration-[1000ms] ease-out ${
          phase >= 3 ? 'w-16 opacity-100' : 'w-0 opacity-0'
        }`} style={{ transitionDelay: '200ms' }} />
      </div>

      {/* Corner decorations */}
      <div className={`absolute top-12 left-12 w-16 h-16 border-l border-t border-[var(--gold)]/[0.07] transition-all duration-[1000ms] ${
        phase >= 2 ? 'opacity-100' : 'opacity-0'
      }`} />
      <div className={`absolute bottom-12 right-12 w-16 h-16 border-r border-b border-[var(--gold)]/[0.07] transition-all duration-[1000ms] ${
        phase >= 2 ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
}
