'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const navLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of use', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Contact us', href: '#' },
  ];

  const socialLinks = [
    { icon: <FaXTwitter />, href: '#', name: 'Twitter' },
    { icon: <FaDiscord />, href: '#', name: 'Discord' },
    { icon: <FaGithub />, href: '#', name: 'GitHub' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  } as const;

  const itemVariants = {
    hover: { y: -3, scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (

    <div className="flex items-center justify-center border-t border-gray-200 py-2">
      <motion.footer
        className="w-full max-w-7xl py-4 rounded-lg"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-4">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-gray-500 hover:text-gray-900 transition-colors text-xl"
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;