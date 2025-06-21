"use client";
import React from "react";
import Image from "next/image";
import Button from "components/ui/button";
import { motion } from "framer-motion";

import ethereum from "public/assets/cryptos/ethereum.svg";
import scroll from "public/assets/cryptos/scroll.svg";
import globe from "public/assets/icons/globe.svg";

const cryptos = [
  {
    name: "Ethereum",
    icon: ethereum,
  },
  {
    name: "Scroll",
    icon: scroll,
  },
];

const blockChainList = [
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
      type: 'spring' as const,
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
          className="h-48 w-full border-b border-b-gray-200 flex flex-col items-center justify-center space-y-2 text-center px-4"
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

        <div className="h-36 w-full border-b border-b-gray-200 flex justify-evenly ">
          {/* Esquerda (vazia) */}
          <div className="w-1/3 hidden lg:block" />

          <div className="lg:w-1/3 flex flex-row items-center justify-evenly space-x-4">
            {cryptos.map((crypto) => (
              <motion.div key={crypto.name} variants={logoVariants}>
                <Image src={crypto.icon} alt={crypto.name} height={70} width={70} />
              </motion.div>
            ))}
          </div>

          <motion.div className="md:w-1/3 flex items-center justify-end" variants={itemVariants}>
            <span className="text-gray-400 text-right">More coming soon...</span>
          </motion.div>
        </div>

        <div className="h-36 w-full border-b border-b-gray-200 flex justify-evenly ">
          <div className="w-1/3 hidden lg:block" />
          <div className="lg:w-1/3 flex flex-row items-center justify-evenly space-x-4">
            {blockChainList.map((dex) => (
              <motion.div
                key={dex.name}
                className="flex flex-row items-center justify-center gap-2"
                variants={logoVariants}
              >
                <img src={dex.icon} alt={`${dex.name} logo`} className="h-6 w-6" />
                <span className="hidden sm:inline">{dex.name}</span>
              </motion.div>
            ))}
          </div>
          <motion.div className="w-1/3 flex justify-end items-center" variants={itemVariants}>
            <Button url={''} text={'View Full List'} variant="secondary" />
          </motion.div>
        </div>

      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="h-48 w-full border-b border-b-gray-200"></div>
        <div className="h-36 w-full border-b border-b-gray-200"></div>
        <div className="h-36 w-full border-b border-b-gray-200"></div>
      </div>
    </motion.section>
  );
}