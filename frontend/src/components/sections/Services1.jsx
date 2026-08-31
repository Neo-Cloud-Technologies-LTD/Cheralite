import React from 'react';
import { motion } from 'motion/react';

const Services1 = () => {
  return (
    <section className="flex flex-col gap-5 py-10 lg:py-20 px-5 lg:px-12 bg-[#F4F3F3] overflow-hidden">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Our Services
      </motion.h1>
      <motion.p 
        className="font-body max-w-3xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Delivering architectural precision and corporate reliability across a spectrum of structural disciplines. We build foundations for the future.
      </motion.p>
    </section>
  );
};

export default Services1;
