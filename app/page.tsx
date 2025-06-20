import React from 'react';

import HeroSection from 'components/sections/hero';
import CardsSection from 'components/sections/cards';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-full min-h-screen">
      <HeroSection />
      <CardsSection />
    </div>
  );
}