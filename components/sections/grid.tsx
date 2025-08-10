// src/components/FeaturesSection.tsx
"use client"; // Necessário para usar hooks do Framer Motion

import { GridCard } from "components/ui/gridCard";
import { appUrl } from "core/constants";
import { motion } from "framer-motion";
import { BrainCircuit, DatabaseZap, Globe, ShieldCheck } from "lucide-react";

// Dados dos cards para manter o componente limpo
const featuresData = [
  {
    icon: (
      <BrainCircuit className="w-8 h-8 text-brand-purple" strokeWidth={1} />
    ),
    title: "Smarter Yields",
    description: "We find the best one for you, always.",
    class: "row-span-3",
  },

  {
    icon: <DatabaseZap className="w-8 h-8 text-brand-purple" strokeWidth={1} />,
    title: "Reliable data",
    description:
      "Powered by subgraphs, our data is pulled directly from the Blockchain, making it a way less error-prone and real-timed. Making sure you always receive the latest data.",
    linkText: "View Subgraphs",
    linkHref:
      "https://zupprotocol.gitbook.io/documentation/technical/zup-protocol-subgraphs",
    class: "col-span-2 row-span-4",
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-purple" strokeWidth={1} />,
    title: "Multi-chain",
    description:
      "Search yields from many blockchains, across many DEXs. Do not lose any yield, anywhere.",
    linkText: "View all Blockchains supported",
    linkHref: appUrl,
    class: "row-span-4 row-start-4",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-purple" strokeWidth={1} />,
    title: "Non-custodial",
    description:
      "We don't have any access to your LP Position, we only intermediate the add liquidity transaction in the destination DEX.",
    class: "col-span-2 row-span-3 col-start-2 row-start-5",
  },
];

// Variantes para o container do grid, para escalonar a animação dos filhos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre a animação de cada card
    },
  },
};

const bar = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
};

export default function GridSection() {
  return (
    <section className="w-full md:pb-20 relative px-4 lg:px-0 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="absolute top-0 -left-16 w-full h-1/2 rounded-full opacity-50 blur-3xl -z-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-0 -right-16 w-full h-1/2 rounded-full opacity-50 blur-3xl -z-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        {/* Grid de Features */}
        <motion.div
          className="flex flex-col gap-5 md:grid md:grid-cols-3 mt-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // A animação começa quando 30% estiver visível
        >
          {featuresData.map((feature, index) => (
            <GridCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              linkHref={feature.linkHref}
              className={feature.class}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
