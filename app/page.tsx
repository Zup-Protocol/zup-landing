import React from 'react';

import HeroSection from 'components/sections/hero';
import CardsSection from 'components/sections/cards';
import BlockchainsSection from 'components/sections/blockchains';
import GridSection from 'components/sections/grid';
import PartnersSection from 'components/sections/partners';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-full min-h-screen">
      <HeroSection />
      <CardsSection />
      <BlockchainsSection />
      <GridSection />
      <PartnersSection />
    </div>
  );
}