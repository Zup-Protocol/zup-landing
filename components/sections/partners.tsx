'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

import bootCampLogo from 'public/assets/partners/bootCamp.svg';
import speezardLogo from 'public/assets/partners/speed.svg';
import scrollLogo from 'public/assets/partners/scroll.svg';

const partners = [
  {
    name: 'Startupbootcamp',
    logo: bootCampLogo,
    width: 160,
    height: 40,
  },
  {
    name: 'Speezard',
    logo: speezardLogo,
    width: 140,
    height: 40,
  },
  {
    name: 'Scroll',
    logo: scrollLogo,
    width: 100,
    height: 40,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PartnersSection() {
  return (
    <section className="flex py-10 md:my-40 w-full items-center justify-center p-4">
      <motion.div
        className="w-full max-w-7xl rounded-2xl bg-white p-8 border border-gray-300 md:p-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col items-center gap-10">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-light text-gray-400"
          >
            Partners & stakeholders
          </motion.h2>

          <div className="flex w-full flex-wrap items-center justify-around gap-x-12 gap-y-6 md:justify-center md:gap-x-16">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                className="flex-shrink-0"
                variants={itemVariants}
              >
                <Image
                  src={partner.logo}
                  alt={`Logo da ${partner.name}`}
                  width={partner.width}
                  height={partner.height}
                  className="h-auto w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}