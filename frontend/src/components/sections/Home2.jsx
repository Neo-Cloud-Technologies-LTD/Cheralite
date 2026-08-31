import React from "react";
import { motion } from "motion/react";

const companyExpertise = [
  {
    id: 1,
    icon: "/icons.svg#figma-building",
    expertise: "Building Construction",
    description: "Residential, commercial, and industrial facilities with precision engineering.",
  },
  {
    id: 2,
    icon: "/icons.svg#figma-cube",
    expertise: "Architectural Design",
    description: "Innovative, sustainable, and functional architectural solutions from concept to blueprint.",
  },
  {
    id: 3,
    icon: "/icons.svg#figma-gear",
    expertise: "Facilities Maintenance",
    description: "Comprehensive property and facility support for longevity and optimal performance.",
  },
];

const ExpertiseCard = ({ icon, expertise, description, index }) => {
  return (
    <motion.div 
      className="flex flex-col justify-center gap-5 p-5 min-h-fit sm:min-h-fit md:min-h-[450px] lg:min-h-[300px] w-full lg:w-[33%] m-auto bg-[#FFFFFF] drop-shadow-2xl rounded-md text-[#1A1C1E] transition-shadow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      <motion.svg 
        className="bg-gray-100 h-12 w-12 p-2 flex items-center justify-center rounded"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <use xlinkHref={icon}></use>
      </motion.svg>
      <h2 className="text-2xl font-bold font-heading">{expertise}</h2>
      <p className="font-body sm:w-[80%]">{description}</p>
    </motion.div>
  );
};

const Home2 = () => {
  return (
    <section className="flex flex-col min-h-fit bg-[#FAF9F8] py-24 px-5 md:px-16 gap-10 shadow-inner overflow-hidden">
      <motion.div 
        className="flex flex-col"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[#003299] text-xl font-heading font-semibold tracking-wide">OUR FULL RANGE OF EXPERTISE</h2>
        <motion.hr 
          className="w-12 border border-[#003299]"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>
      <div className="flex flex-col md:flex-row gap-5">
        {companyExpertise.map((expertise, index) => (
          <ExpertiseCard
            key={expertise.id}
            index={index}
            icon={expertise.icon}
            expertise={expertise.expertise}
            description={expertise.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Home2;
