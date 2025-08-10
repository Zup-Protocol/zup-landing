import BlockchainsSection from "components/sections/blockchains";
import CardsSection from "components/sections/cards";
import GridSection from "components/sections/grid";
import HeroSection from "components/sections/hero";
import PartnersSection from "components/sections/partners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zup Protocol | Your Liquidity Pool Aggregator",
  description: "Find & Deposit in the best liquidity pool in a minute.",

  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
};

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
