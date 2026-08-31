import React from "react";
import { motion } from "motion/react";

const About2 = () => {
  return (
    <section className="flex flex-col gap-16 lg:gap-0 bg-[#FAF9F8] lg:grid lg:grid-cols-2 items-center justify-center min-h-screen py-20 px-12 overflow-hidden">
      <motion.div 
        className="flex relative items-center h-full w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="hidden xl:block size-60 bg-blue-900 shadow-black shadow-2xl absolute rounded-md bottom-7 right-14 z-0"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
        <motion.div 
          className="rounded-lg overflow-hidden h-fit m-auto shadow-black shadow-2xl z-10"
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <img className="h-[50vh] lg:h-[75vh] object-cover" src="/images/about2-bg.png" alt="A blueprint being worked on in a calm and serious planning room" />
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex flex-col lg:w-[80%] text-start m-auto gap-0 lg:gap-5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="tracking-wider font-heading font-bold text-[#003299] text-lg">OUR STORY</p>
        <h1 className="text-4xl lg:text-6xl font-heading font-semibold">
          Building Legacies Since
          <br />
          <span className="border-b-4 border-[#003299]">1998</span>
        </h1>
        <motion.p 
          className="mt-4 font-body text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cheralite Limited began with a singular vision: to redefine the
          skyline with structures that stand as testaments to engineering
          excellence and aesthetic grace. For over two decades, we have
          partnered with visionary developers to bring complex commercial and
          residential projects to life.
        </motion.p>
        <motion.p 
          className="mt-4 font-body text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Our journey is marked by a relentless pursuit of perfection, adopting
          cutting-edge technologies while adhering to the timeless principles of
          architectural integrity. Every project we undertake is a commitment to
          our clients, our community, and our craft.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About2;
