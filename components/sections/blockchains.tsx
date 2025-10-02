"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import base from "public/assets/blockchains/base.svg";
import ethereum from "public/assets/blockchains/ethereum.svg";
import hyperliquid from "public/assets/blockchains/hyperliquid.svg";
import plasma from "public/assets/blockchains/plasma.svg";
import scroll from "public/assets/blockchains/scroll.svg";
import unichain from "public/assets/blockchains/unichain.svg";
import globe from "public/assets/icons/globe.svg";

const blockchains = [
  {
    name: "Ethereum",
    icon: ethereum,
  },
  {
    name: "Scroll",
    icon: scroll,
  },
  {
    name: "Unichain",
    icon: unichain,
  },
  {
    name: "Base",
    icon: base,
  },
  {
    name: "Hyperliquid",
    icon: hyperliquid,
  },
  {
    name: "Plasma",
    icon: plasma,
  },
];

const dexs = [
  {
    name: "Uniswap",
    icon: "https://uniswap.org/favicon.ico",
  },
  {
    name: "PancakeSwap",
    icon: "https://pancakeswap.finance/favicon.ico",
  },
  {
    name: "SushiSwap",
    icon: "https://sushi.com/favicon.ico",
  },
  {
    name: "Nuri Exchange",
    icon: "https://www.nuri.exchange/favicon/favicon.ico",
  },
  {
    name: "Zebra",
    icon: "https://zebra.xyz/favicon.png",
  },
  {
    name: "Aerodrome",
    icon: "https://aerodrome.finance/svg/AERO/favicon.svg",
  },
  {
    name: "Alien Base",
    icon: "https://alienbase.xyz/favicon/favicon-32x32.png",
  },
  {
    name: "Base Swap",
    icon: "https://baseswap.fi/faviconsBase/favicon.ico",
  },
  {
    name: "Gliquid",
    icon: "https://www.gliquid.xyz/assets/favicon-DUUJci_D.ico",
  },
  {
    name: "Honeypop",
    icon: "https://honeypop.app/favicon.png",
  },
  {
    name: "Hybra",
    icon: "https://www.hybra.finance/images/hybra_new_logo.png",
  },
  {
    name: "HyperSwap",
    icon: "https://hyperswap.exchange/favicon.png",
  },
  {
    name: "ProjectX",
    icon: "https://www.prjx.com/favicon.jpg",
  },
  {
    name: "Velodrome",
    icon: "https://velodrome.finance/svg/VELO/favicon.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const logoVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function BlockchainsSection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-36 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="w-full max-w-7xl flex flex-col items-center justify-center z-20">
        <motion.div
          className="h-48 w-full flex flex-col items-center justify-center space-y-2 text-center px-4"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-col items-center justify-center gap-2">
            <Image alt="" src={globe} />
            <h2 className="text-3xl md:text-4xl font-medium text-indigo-600">
              Optimizing liquidity across multiple blockchains
            </h2>
          </div>
          <p className="text-2xl text-gray-500">and DEXs</p>
        </motion.div>

        <div className="w-full flex justify-center">
          <div className="flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 px-4 sm:px-10 py-4">
            {blockchains.map((blockchain) => (
              <motion.div key={blockchain.name} variants={logoVariants}>
                <Image
                  src={blockchain.icon}
                  alt={blockchain.name}
                  height={70}
                  width={70}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-20 w-full w-screen flex justify-evenly ">
          <div className="w-1/3 hidden lg:block" />
          <div className="flex items-center justify-center">
            <div className="marquee w-full overflow-hidden">
              <div className="marquee-content">
                {[...Array(10)].flatMap(() =>
                  dexs.map((dex, idx) => (
                    <span
                      key={dex.name + idx}
                      style={{ opacity: 0.3 }}
                      className="inline-flex items-center gap-2 mx-8"
                    >
                      <img
                        src={dex.icon}
                        alt={`${dex.name} logo`}
                        className="h-6 w-6"
                      />
                      <span>{dex.name}</span>
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="h-48 w-full border-b border-b-gray-200"></div>
        <div className="h-36 w-full border-b border-b-gray-200"></div>
        <div className="h-36 w-full border-b border-b-gray-200"></div>
      </div> */}
    </motion.section>
  );
}
