import BlockchainsSection from "components/sections/blockchains";
import CardsSection from "components/sections/cards";
import GridSection from "components/sections/grid";
import HeroSection from "components/sections/hero";
import PartnersSection from "components/sections/partners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zup Protocol | Your Liquidity Pool Aggregator",
  description: "Find and deposit in the best liquidity pools in a minute. Zup Protocol aggregates top DeFi pools for optimal yield and security.",
  applicationName: "Zup Protocol",
  keywords: [
    "Zup Protocol",
    "DeFi",
    "Liquidity Pool",
    "Yield Farming",
    "Crypto",
    "Aggregator",
    "Blockchain",
    "Web3",
  ],
  authors: [{ name: "Zup Protocol Team", url: "https://zupprotocol.xyz" }],
  creator: "Zup Protocol",
  themeColor: "#7357FF",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Zup Protocol | Your Liquidity Pool Aggregator",
    description: "Find and deposit in the best liquidity pools in a minute. Zup Protocol aggregates top DeFi pools for optimal yield and security.",
    url: "https://zupprotocol.xyz",
    siteName: "Zup Protocol",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zup Protocol Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zup Protocol | Your Liquidity Pool Aggregator",
    description: "Find and deposit in the best liquidity pools in a minute. Zup Protocol aggregates top DeFi pools for optimal yield and security.",
    site: "@zup_protocol",
    creator: "@zup_protocol",
    images: ["/og-image.png"],
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
