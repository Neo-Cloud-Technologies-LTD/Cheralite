import React from 'react';
import { motion } from 'motion/react';

const About1 = () => {
  return (
    <section className="min-h-fit bg-fixed bg-cover lg:bg-contain bg-no-repeat bg-top overflow-hidden" style={{backgroundImage: "url(/images/about1-bg.png)"}}>
      <div className="flex flex-col gap-10 h-full w-full py-20 lg:py-40 px-10 lg:px-32 backdrop-blur-sm bg-white/55">
        <motion.div 
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Architectural Precision
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Corporate Reliability
          </motion.h1>
        </motion.div>
        <motion.p 
          className="font-body text-base lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          We build the foundation of tomorrow with uncompromising quality and visionary design.
        </motion.p>
      </div>
    </section>
  );
};

export default About1;
