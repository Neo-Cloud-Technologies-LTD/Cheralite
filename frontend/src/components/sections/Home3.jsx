import React from "react";
import { motion } from "motion/react";

const Home3 = () => {
  return (
    <section className="bg-[#FEFFFF] min-h-fit py-16 px-5 min-w-full max-w-full space-x-5 overflow-hidden">
      <div className="flex flex-col min-h-screen max-w-[100vw] space-y-16 lg:grid xl:grid grid-cols-2">
        <motion.div 
          className="aspect-[4/5] md:aspect-auto lg:aspect-auto xl:aspect-[4/5] h-[45vh] lg:h-fit xl:h-fit xl:max-h-[90vh] w-auto max-w-[90vw] m-auto rounded-xl shadow-black shadow-2xl overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <img
            className="object-contain lg:object-contain xl:object-contain lg:w-auto"
            src="/images/about-img-new.png"
            alt="A Metropolitan City with a Massive Modern Complex shaped Glass Skyscraper, and a plane flying across the sky"
          />
        </motion.div>

        <motion.div 
          className="flex flex-col px-10 lg:h-screen w-[90vw] lg:w-[46vw] space-y-5 lg:space-y-10 justify-center m-auto"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl xl:text-6xl font-medium font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building the Future with Precision and Trust
          </motion.h1>

          <motion.p 
            className="text-base md:text-lg xl:text-lg text-black font-body text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            At Cheralite Limited, we turn ambitious visions into reality through
            innovative engineering and sustainable construction practices. Our
            dedicated team prioritizes strict safety standards and rigorous
            project management at every phase of development.
          </motion.p>

          <div className="flex flex-col h-fit p-2 font-body space-y-5">
            {/* Item 01 */}
            <motion.div
              className="flex space-x-7 items-center cursor-pointer p-2 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: 8, backgroundColor: "rgba(240, 246, 255, 0.7)", transition: { duration: 0.2 } }}
            >
              <div
                className="font-semibold text-sm lg:text-base flex justify-center items-center min-h-8 lg:h-10 min-w-8 lg:w-10 rounded-full select-none transition-color bg-blue-100 text-blue-700"
              >
                01
              </div>
              <div className="flex-col">
                <h2 className="text-black lg:text-lg font-medium">
                  Award-Winning Safety Standards
                </h2>
                <p className="text-gray-500 text-sm lg:text-base">
                  Recognized globally for strict onsite security and rigorous
                  protocols.
                </p>
              </div>
            </motion.div>

            {/* Item 02 */}
            <motion.div
              className="flex space-x-7 items-center cursor-pointer p-2 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ x: 8, backgroundColor: "rgba(240, 246, 255, 0.7)", transition: { duration: 0.2 } }}
            >
              <div
                className="font-semibold text-sm lg:text-base flex justify-center items-center min-h-8 lg:h-10 min-w-8 lg:w-10 rounded-full select-none transition-color bg-blue-100 text-blue-700"
              >
                02
              </div>
              <div className="flex-col">
                <h2 className="text-black lg:text-lg font-medium">
                  Sustainable Building Practices
                </h2>
                <p className="text-gray-500 text-sm lg:text-base">
                  Utilizing eco-friendly materials and energy-efficient
                  engineering solutions.
                </p>
              </div>
            </motion.div>

            {/* Item 03 */}
            <motion.div
              className="flex space-x-7 items-center cursor-pointer p-2 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ x: 8, backgroundColor: "rgba(240, 246, 255, 0.7)", transition: { duration: 0.2 } }}
            >
              <div
                className="font-semibold text-sm lg:text-base flex justify-center items-center min-h-8 lg:h-10 min-w-8 lg:w-10 rounded-full select-none transition-color bg-blue-100 text-blue-700"
              >
                03
              </div>
              <div className="flex-col">
                <h2 className="text-black lg:text-lg font-medium">
                  Export Project Management
                </h2>
                <p className="text-gray-500 text-sm lg:text-base">
                  Ensuring on-time delivery, budget adherence and quality
                  control at every stage.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home3;

