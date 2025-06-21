'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FloatingIcon = ({ icon, x, y, index, alt }) => {
  const randomDuration = 3 + Math.random() * 2;
  const randomDelay = index * 0.15;

  return (
    <motion.div
      className="absolute"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -15, 0], // Move 15px para cima e volta para a posição original
      }}

      transition={{
        // Transição para a opacidade e escala (entrada)
        opacity: { duration: 0.5, delay: 0.5 + randomDelay },
        scale: { duration: 0.5, delay: 0.5 + randomDelay },
        y: {
          duration: randomDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: 0.5 + randomDelay,
        },
      }}
    >
      <Image src={icon} alt={alt} width={64} height={64} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
    </motion.div>
  );
};

export default FloatingIcon;