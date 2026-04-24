'use client';

import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { PlatformPaths } from '@/components/platform-paths';
import { MarketSection } from '@/components/market-intelligence/market-section';
import { OperatingLayer } from '@/components/operating-layer';
import { OwnershipSection } from '@/components/ownership-section';
import { AgingJourney } from '@/components/aging/aging-journey';
import { AgingSimulator } from '@/components/aging/aging-simulator';
import { SingleBarrelSection } from '@/components/single-barrel-section';
import { ContactSection } from '@/components/contact-section';

export default function StudioPage() {
  return (
    <main className="overflow-x-hidden bg-sand text-ink">
      <Nav />
      <Hero />
      <PlatformPaths />
      <MarketSection />
      <OperatingLayer />
      <OwnershipSection />
      <AgingJourney />
      <AgingSimulator />
      <SingleBarrelSection />
      <ContactSection />
    </main>
  );
}
