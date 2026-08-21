import React, { useState, useEffect } from "react";
import { companyProjects } from "../../data/projectData";


const ProjectCardMain = ({ image, title, description, categoryBanner }) => {
  return (
    <div className="bg-white relative shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-72 object-cover" />
      <p className="absolute top-2 left-2 text-sm text-white uppercase backdrop-blur-sm backdrop-brightness-[50%] p-1 px-2 w-fit rounded-sm">{categoryBanner}</p>
      <div className="flex flex-col p-8 gap-7">
        <h1 className="text-start text-3xl font-bold text-[#002068] font-heading">{title}</h1>
        <p className="text-[#5E5E5D] w-3/4 text-start font-body">{description}</p>
        <button className="font-body font-medium text-[#002068] w-fit hover:scale-105 hover:border-b-2 hover:border-[#002068] transition-all active:scale-95">View Case Study →</button>
      </div>
    </div>
  );

};

const Project2 = () => {

  const [activeFilter, setActiveFilter] = useState('All Projects'); // useState to make the filter state reactive

  useEffect(() => {
    // Filter Functionality to be added here later
  }, [activeFilter])

  return (
    <section className="flex flex-col gap-5 px-5 lg:px-10 py-10 bg-[#FEFFFF] text-white text-center box-border">
      <div id="filterBar" className="flex flex-col gap-2">
        <div id="filterOptions" className="flex w-full justify-between sm:justify-start sm:gap-10 font-medium font-body text-[#5E5E5D] text-sm lg:text-base">
          <button type="button" className={`bg-transparent border-none p-0 font-inherit ${activeFilter === 'All Projects' ? 'text-[#002068] border-[#002068] border-b-2' : ''}`} onClick={() => setActiveFilter('All Projects')}>All Projects</button>
          <button type="button" className={`bg-transparent border-none p-0 font-inherit ${activeFilter === 'Commercial' ? 'text-[#002068] border-[#002068] border-b-2' : ''}`} onClick={() => setActiveFilter('Commercial')}>Commercial</button>
          <button type="button" className={`bg-transparent border-none p-0 font-inherit ${activeFilter === 'Residential' ? 'text-[#002068] border-[#002068] border-b-2' : ''}`} onClick={() => setActiveFilter('Residential')}>Residential</button>
          <button type="button" className={`bg-transparent border-none p-0 font-inherit ${activeFilter === 'Infrastructure' ? 'text-[#002068] border-[#002068] border-b-2' : ''}`} onClick={() => setActiveFilter('Infrastructure')}>Infrastructure</button>
        </div>
        <hr className="border-b-1 border-[#717170]"/>
      </div>
      <div id="projectList" className="flex flex-col xl:w-[95%] m-auto gap-10 sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-10">
        {companyProjects.map((project) => (
          <ProjectCardMain
            key={project.id}
            image={project.image}
            categoryBanner={project.category}
            title={project.title}
            description={project.description}
          />
          ))}
      </div>
      <button className="mt-20 m-auto p-3 text-[#002068] border border-[#002068] rounded-md hover:text-white hover:bg-[#002068] hover:scale-110 transition-all active:scale-95 font-body">Load More Projects</button>
    </section>
  );
};

export default Project2;
