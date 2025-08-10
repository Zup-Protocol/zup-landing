"use client";
import { motion } from "framer-motion"; // 1. Importar motion
import Image from "next/image";

import Button from "components/ui/button";
import FloatingIcon from "components/ui/floatingIcon"; // Usaremos a versão animada

// Importação dos ícones...
import { appUrl } from "core/constants";
import glass from "public/assets/icons/magGlass.svg";
import token2 from "public/assets/icons/tokenBlack.svg";
import token3 from "public/assets/icons/tokenCVG.svg";
import token4 from "public/assets/icons/tokenJoe.svg";
import token1 from "public/assets/icons/tokenPancake.svg";
import token5 from "public/assets/icons/tokenRounded.svg";
import token6 from "public/assets/icons/tokenUni.svg";

const tokens = [
  { name: "Pancake", icon: token1, x: 45, y: 70 },
  { name: "Black", icon: token2, x: 75, y: 5 },
  { name: "CVG", icon: token3, x: 60, y: 30 },
  { name: "Joe", icon: token4, x: 15, y: 80 },
  { name: "Rounded", icon: token5, x: 85, y: 60 },
  { name: "Uni", icon: token6, x: 5, y: 18 },
];

// 2. Definir variantes para a animação sequencial
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
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="flex flex-col gap-4 text-center max-w-7xl px-4 z-10 -translate-y-10 md:translate-y-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium"
        >
          <h1 className="text-[var(--purple-dark)]">Too Many Pools,</h1>
          <h1 className="bg-gradient-to-b from-[var(--black)] to-[var(--gray)] bg-clip-text text-transparent">
            Too Little Time...
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700"
        >
          <Image
            src={glass}
            alt="Magnifying Glass"
            width={24}
            height={24}
            className="inline-block mr-2 align-middle"
          />
          Deposit in the best Liquidity Pool in less than a minute.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button text={"Try it now"} url={appUrl} variant={"secondary"} />
        </motion.div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full">
        {tokens.map((token, index) => (
          <FloatingIcon
            key={index}
            icon={token.icon}
            x={token.x}
            y={token.y}
            index={index}
            alt={`${token.name} token icon`}
          />
        ))}
      </div>
    </section>
  );
}
