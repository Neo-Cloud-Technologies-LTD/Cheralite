import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';

const ProjectCard = ({ slug, id, image, category, title, description }) => {
  return (
    <Link
      to={`/projects/${slug || id}`}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col cursor-pointer border border-gray-100"
    >
      <div className="overflow-hidden h-48 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-primary font-heading text-xs font-semibold px-3 py-1.5 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Case Study →
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">{category}</p>
          <h3 className="text-lg font-semibold text-gray-800 font-heading group-hover:text-secondary transition-colors mt-1">
            {title}
          </h3>
          {description && (
            <p className="text-xs text-gray-500 font-body mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-secondary font-medium font-body">
          <span>Explore Details</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
};

const PortfolioSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Proven Architectural Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-heading mt-1">
              Our Recent Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-block self-start sm:self-auto bg-[#002068] text-white px-5 py-2.5 rounded-lg hover:bg-secondary transition shadow-sm font-body text-sm font-medium"
          >
            View Full Portfolio →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              slug={project.slug}
              image={project.image}
              category={project.categoryDisplay || project.category}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;