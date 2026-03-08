"use client";
import { useState, useCallback } from "react";
import { Preloader } from "./Preloader";
import { HeroSection } from "./HeroSection";
import { MarqueeSection } from "./MarqueeSection";
import { StorySection } from "./StorySection";
import { HorizontalProperties } from "./HorizontalProperties";
import { ServicesPreview } from "./ServicesPreview";
import { DestinationsSection } from "./DestinationsSection";
import { StatsSection } from "./StatsSection";
import { EditorialSection } from "./EditorialSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CTASection } from "./CTASection";

export function HomeClient({ featured, allProperties, totalProperties, totalBookings }: {
  featured: any[]; allProperties: any[]; totalProperties: number; totalBookings: number;
}) {
  const [ready, setReady] = useState(false);
  const onComplete = useCallback(() => setReady(true), []);

  return (
    <>
      <Preloader onComplete={onComplete} />
      <main className={`transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <MarqueeSection />
        <StorySection />
        <HorizontalProperties properties={allProperties} />
        <ServicesPreview />
        <DestinationsSection />
        <StatsSection totalProperties={totalProperties} totalBookings={totalBookings} />
        <EditorialSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
}
