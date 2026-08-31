import React from "react";
import { motion } from "motion/react";

const Project1 = () => {
  return (
    <section className="px-5 py-16 lg:py-20 lg:px-10 bg-[#FAF9F8] text-start overflow-hidden">
      <motion.div 
        className="max-w-2xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold font-heading text-[#002068]">
          Our Portfolio
        </h1>
        <motion.p 
          className="mt-4 text-[#5E5E5D] font-body"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Exploring structural precision across commercial, residential, and
          infrastructure domains. Each project represents our commitment to
          architectural excellence and engineering integrity.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Project1;
