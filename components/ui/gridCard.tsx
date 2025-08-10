// src/components/FeatureCard.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

// Tipagem para as props do nosso card
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
  index?: number;
};

// Variantes de animação para o Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
} as const;

export const GridCard = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  className,
  index,
}: FeatureCardProps) => {
  return (
    <motion.div
      key={index}
      variants={cardVariants}
      className={`z-20 bg-white p-8 rounded-2xl flex flex-col h-full shadow-sm border border-[var(--purple)] hover:shadow-lg transition-shadow duration-300 ${
        className ?? ""
      }`}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="flex justify-start items-center gap-2">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mt-2 flex-grow text-gray-400">{description}</p>
      <div className="flex justify-end">
        {linkText && linkHref && (
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href={linkHref}
            className="text-[var(--purple)] font-semibold mt-6 flex items-center group"
          >
            {linkText}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};
