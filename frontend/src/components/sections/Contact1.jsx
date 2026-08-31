import React from "react";
import { motion } from "motion/react";

const Contact1 = () => {
  return (
    <section className="w-full border-b border-gray-200 bg-white overflow-hidden">
      <div className="px-6 pt-[96px] pb-[66px]">
        <motion.p 
          className="mb-5 text-[14px] font-bold tracking-[0.5px] text-[#00256f]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          CONTACT
        </motion.p>
        <motion.h1 
          className="mb-6 text-[48px] font-bold leading-[1.1] tracking-[-1.5px] text-[#00256f] md:text-[64px]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className="max-w-[700px] text-[18px] font-normal leading-[1.6] tracking-[0.2px] text-[#666666]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Whether you're inquiring about our architectural services, structural
          engineering capabilities, or looking to discuss a potential project
          collaboration, our team of experts is ready to assist you with
          precision and dedication.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact1;