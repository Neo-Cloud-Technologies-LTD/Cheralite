import React from 'react';

const projectData = [
  {
    id: 1,
    image: '/images/The-zenith-tower.png',
    category: 'High Rise Commercial',
    title: 'The Zenith Tower',
  },
  {
    id: 2,
    image: '/images/Opus-residences-lobby.png',
    category: 'Luxury Interior',
    title: 'Opus Residencies Lobby',
  },
  {
    id: 3,
    image: '/images/horizon-tech-campus.png',
    category: 'Commercial Office',
    title: 'Horizon Tech Campus',
  },
  {
    id: 4,
    image: '/images/port-authority-terminal.png',
    category: 'Infrastructure Project',
    title: 'Port Authority Terminal',
  },
  {
    id: 5,
    image: '/images/the-core-pavillion.png',
    category: 'Modern Detail',
    title: 'Core Pavilion',
  },
  {
    id: 6,
    image: '/images/verde-estates.png',
    category: 'Residential Development',
    title: 'Verde Estates',
  },
];

const ProjectCard = ({ image, category, title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase">{category}</p>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Our Recent Projects</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Full Portfolio
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              category={project.category}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;