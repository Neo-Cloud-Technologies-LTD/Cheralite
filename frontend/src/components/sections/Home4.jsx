import React from 'react'
import ProjectCard from './ProjectCard'
import PortfolioSection from './PortfolioSection'
import {projects} from './projects'
import zenithtower from '../../frontend\public\The zenith tower.png'
import opusresidencies from '../../frontend\public\Opus residences lobby.png'
import horizontechcampus from '../../frontend\public\horizon tech campus.png'
import portauthorityterminal from '../..frontend\public\port authority terminal.png'
import verdeestates from '../../frontend\public\verde estates.png'
import corepavilion from '../../frontend\public\the core pavillion.png'

const PortfolioSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Our Recent Projects</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Full Portfolio
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        </div>
      </div>
    </section>
  );
};

const ProjectCard = () => {
  return(
    <div className='bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform'>
      <img src={zenithtower} alt="zenith tower" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase">High Rise Commercial</p>
        <h3 className="text-lg font-semibold text-gray-800">The Zenith Tower</h3>
      </div>
    </div>
  )
  return(
     <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={opusresidencies} alt={'opus residencies lobby'} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase">Luxury Interior</p>
        <h3 className="text-lg font-semibold text-gray-800">Opus Residencies Lobby</h3>
      </div>
    </div>
  )
  return(
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={horizontechcampus} alt={'horizon tech campus'} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase">Commercial Office</p>
        <h3 className="text-lg font-semibold text-gray-800">Horizon Tech Campus</h3>
      </div>
    </div>
  )
  return(
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={portauthorityterminal} alt={'port authority terminal'} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase">Infrastructure Project</p>
        <h3 className="text-lg font-semibold text-gray-800">Port Authority Terminal</h3>
      </div>
    </div>
  )
  return(
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={corepavilion} alt={'core pavilion'} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase">Residential Development</p>
        <h3 className="text-lg font-semibold text-gray-800">Verde Estates</h3>
      </div>
    </div>
  )
  return(
     <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={verdeestates} alt={'verde estates'} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase">Modern Detail</p>
        <h3 className="text-lg font-semibold text-gray-800">Core Pavilion</h3>
      </div>
    </div>
  )
}




export default ProjectCard;
export default PortfolioSection;






