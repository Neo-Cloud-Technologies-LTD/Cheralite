import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Home1 = () => {
  return (
    <section className="min-h-fit flex flex-col-reverse items-center justify-center gap-16 py-20 px-7 lg:px-16 lg:grid md:grid-cols-2 overflow-hidden">
      <motion.article 
        className="flex flex-col items-start gap-7 z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold font-heading">
          <motion.h1 
            className="text-[#1A1C1E]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Professional.
          </motion.h1>
          <motion.h1 
            className="text-[#1A1C1E]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Innovative.
          </motion.h1>
          <motion.h1 
            className="text-[#003299]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Trusted.
          </motion.h1>
        </div>
        <motion.p 
          className="font-body sm:text-lg sm:max-w-[70%] lg:max-w-[80%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Cheralite Limited is a dynamic and innovative general contracting
          company committed to delivering high-quality construction,
          engineering, procurement, and project management services.
        </motion.p>
        <motion.div 
          className="hover:scale-105 active:scale-95 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            className="text-white bg-[#1A1C1E] py-3 px-4 rounded-md inline-block shadow-lg hover:shadow-xl transition-shadow"
            to="/projects"
          >
            View Our Projects
          </Link>
        </motion.div>
      </motion.article>

      {/* === Crane Images ===*/}
      <motion.div 
        className="flex gap-4 w-[65vw] lg:w-full lg:min-h-[80vh] justify-center items-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="overflow-hidden h-[25vh] md:h-[40vh] lg:h-[45vh] w-1/3 bg-cover bg-left bg-scroll lg:bg-fixed lg:bg-center rounded shadow-lg"
          style={{ backgroundImage: "url(/images/cranes-wideshot.png)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        ></motion.div>
        <motion.div
          className="overflow-hidden h-[40vh] md:h-[60vh] lg:h-[70vh] w-1/3 bg-cover bg-center bg-scroll lg:bg-fixed lg:bg-center rounded shadow-2xl"
          style={{ backgroundImage: "url(/images/cranes-wideshot.png)" }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        ></motion.div>
        <motion.div
          className="overflow-hidden h-[25vh] md:h-[40vh] lg:h-[45vh] w-1/3 bg-cover bg-right bg-scroll lg:bg-fixed lg:bg-center rounded shadow-lg"
          style={{ backgroundImage: "url(/images/cranes-wideshot.png)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Home1;
