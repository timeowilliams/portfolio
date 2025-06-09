'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from './Logo';
import { BridgeAnimation } from './BridgeAnimation';

// Temporary placeholder image
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23556B2F'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24'%3ETW%3C/text%3E%3C/svg%3E";

const bridgeAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary/30 to-secondary" />
        <div className="absolute inset-0 bg-[url('/images/bridge-pattern.svg')] opacity-10" />
      </div>

      {/* Logo in top left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99]
        }}
        className="absolute top-8 left-8 z-20"
      >
        <Logo 
          size="md" 
          withBackground
          className="hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-accent mb-4">
            The Living Bridge
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-sans">
            Built to carry others. Formed in fire. Led by faith.
          </p>
        </motion.div>

        {/* Bridge Animation */}
        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="mb-12"
        >
          <BridgeAnimation />
        </motion.div>

        {/* Portrait */}
        <motion.div
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-accent/20"
        >
          <Image
            src="/images/portrait.jpeg"
            alt="Timeo Williams"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Animated Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
} 