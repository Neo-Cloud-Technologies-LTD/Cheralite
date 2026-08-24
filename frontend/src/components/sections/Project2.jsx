import React, { useState } from "react";
import { Link } from "react-router-dom";
import { companyProjects } from "../../data/projectData";

const ProjectCardMain = ({ id, slug, image, title, description, categoryBanner }) => {
  return (
    <Link
      to={`/projects/${slug || id}`}
      className="bg-white relative shadow-md rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left group border border-gray-100 cursor-pointer"
    >
      <div>
        <div className="relative overflow-hidden h-72">
          <img
            src={image}
            alt={title}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <p className="absolute top-3 left-3 text-xs font-semibold text-white uppercase backdrop-blur-md bg-black/60 py-1 px-3 rounded-md shadow-sm">
            {categoryBanner}
          </p>
        </div>
        <div className="flex flex-col p-6 lg:p-8 gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#002068] font-heading group-hover:text-secondary transition-colors">
            {title}
          </h2>
          <p className="text-[#5E5E5D] text-sm lg:text-base font-body line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between font-body font-semibold text-[#002068] text-sm group-hover:text-secondary">
          <span>View Case Study</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
};

const Project2 = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = companyProjects.filter((project) => {
    if (activeFilter === "All Projects") return true;
    return project.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section className="flex flex-col gap-8 px-5 lg:px-10 py-12 bg-[#FEFFFF] text-left box-border max-w-7xl mx-auto w-full">
      <div id="filterBar" className="flex flex-col gap-3">
        <div
          id="filterOptions"
          className="flex w-full flex-wrap gap-4 sm:gap-8 font-medium font-body text-[#717170] text-sm lg:text-base"
        >
          {["All Projects", "Commercial", "Residential", "Infrastructure"].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`pb-2 transition-colors font-body ${
                activeFilter === cat
                  ? "text-[#002068] font-bold border-[#002068] border-b-2"
                  : "text-[#717170] hover:text-[#002068]"
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <hr className="border-b border-gray-200" />
      </div>

      <div
        id="projectList"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {filteredProjects.map((project) => (
          <ProjectCardMain
            key={project.id}
            id={project.id}
            slug={project.slug}
            image={project.image}
            categoryBanner={project.categoryDisplay || project.category}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-gray-500 font-body">
          No projects found under this category.
        </div>
      )}
    </section>
  );
};

export default Project2;
