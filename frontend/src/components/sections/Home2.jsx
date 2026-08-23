import React from "react";

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

const ExpertiseCard = ({ icon, expertise, description }) => {
  return (
    <div className="flex flex-col justify-center gap-5 p-5 min-h-fit sm:min-h-fit md:min-h-[450px] lg:min-h-[300px] w-full lg:w-[33%] m-auto bg-[#FFFFFF] drop-shadow-2xl rounded-md  text-[#1A1C1E]">
      <svg className="bg-gray-100 h-12 w-12 p-2 flex items-center justify-center rounded">
        <use xlinkHref={icon}></use>
      </svg>
      <h2 className="text-2xl font-bold font-heading">{expertise}</h2>
      <p className="font-body sm:w-[80%]">{description}</p>
    </div>
  );
};

const Home2 = () => {
  return (
    <section className="flex flex-col min-h-fit bg-[#FAF9F8] py-24 px-5 md:px-16 gap-10 shadow-inner">
      <div className="flex flex-col">
        <h2 className="text-[#003299] text-xl font-heading font-semibold tracking-wide">OUR FULL RANGE OF EXPERTISE</h2>
        <hr className="w-12 border border-[#003299]" />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {companyExpertise.map((expertise) => (
          <ExpertiseCard
            key={expertise.id}
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
