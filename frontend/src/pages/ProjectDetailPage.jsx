import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { getProjectBySlugOrId, projectData } from "../data/projectData";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlugOrId(slug);

  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-[#FAF9F8]">
        <motion.div 
          className="bg-white p-10 rounded-xl shadow-lg max-w-lg border border-gray-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-blue-50 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            !
          </div>
          <h1 className="text-3xl font-bold text-primary font-heading mb-3">
            Project Not Found
          </h1>
          <p className="text-gray-600 font-body mb-6">
            The project you are looking for might have been moved or does not exist in our portfolio.
          </p>
          <Link
            to="/projects"
            className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-secondary transition-colors font-body shadow-sm"
          >
            ← View All Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  // Related projects (excluding current one)
  const relatedProjects = projectData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  return (
    <div className="bg-[#FAF9F8] min-h-screen overflow-hidden">
      {/* Top Breadcrumb & Hero Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb Navigation */}
          <motion.nav 
            className="flex items-center text-sm font-body text-gray-500 mb-6 space-x-2 flex-wrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-secondary transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">{project.title}</span>
          </motion.nav>

          {/* Back Button & Title Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary bg-blue-50 rounded-full border border-blue-100">
                  {project.categoryDisplay || project.category}
                </span>
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 rounded-full border border-emerald-100">
                  {project.status}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary font-heading">
                {project.title}
              </h1>
              {project.tagline && (
                <p className="text-gray-600 text-lg md:text-xl font-body mt-2 max-w-3xl">
                  {project.tagline}
                </p>
              )}
            </motion.div>

            <motion.button
              onClick={() => navigate(-1)}
              className="self-start md:self-auto flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors font-body px-4 py-2 rounded-lg border border-gray-200 hover:border-secondary bg-white hover:bg-blue-50/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </motion.button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Showcase Image Gallery */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] md:aspect-[21/9] bg-gray-900 border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={galleryImages[activeImage] || project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-300 font-semibold">
                  Featured Project Case Study
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-heading">
                  {project.title}
                </h2>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm text-gray-200">{project.location}</p>
                <p className="text-xs text-gray-300">Completed in {project.year}</p>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip if multiple images exist */}
          {galleryImages.length > 1 && (
            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {galleryImages.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx
                      ? "border-secondary ring-2 ring-secondary/40 scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={img} alt={`${project.title} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Project Key Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { label: "Client", val: project.client, isSec: false },
            { label: "Location", val: project.location, isSec: false },
            { label: "Year", val: project.year, isSec: false },
            { label: "Duration", val: project.duration, isSec: false },
            { label: "Project Value", val: project.value, isSec: true },
            { label: "Total Area", val: project.area, isSec: false },
          ].map((item, idx) => (
            <motion.div 
              key={item.label}
              className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-body">{item.label}</p>
              <p className={`text-sm font-bold ${item.isSec ? 'text-secondary' : 'text-primary'} font-heading mt-1 truncate`} title={item.val}>
                {item.val}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main Body (2 Columns) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Project Overview */}
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-primary font-heading mb-4 pb-2 border-b border-gray-100">
                Project Overview
              </h2>
              <p className="text-gray-700 font-body leading-relaxed text-base md:text-lg mb-4">
                {project.fullOverview || project.description}
              </p>
            </motion.div>

            {/* Engineering Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenges && (
                  <motion.div 
                    className="bg-white p-6 rounded-2xl border border-red-50 shadow-sm border-l-4 border-l-amber-500"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                        ⚡
                      </div>
                      <h3 className="text-lg font-bold text-primary font-heading">
                        The Challenge
                      </h3>
                    </div>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">
                      {project.challenges}
                    </p>
                  </motion.div>
                )}

                {project.solutions && (
                  <motion.div 
                    className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm border-l-4 border-l-secondary"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-secondary flex items-center justify-center font-bold">
                        ✓
                      </div>
                      <h3 className="text-lg font-bold text-primary font-heading">
                        Our Solution
                      </h3>
                    </div>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">
                      {project.solutions}
                    </p>
                  </motion.div>
                )}
              </div>
            )}

            {/* Key Project Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-primary font-heading mb-6 pb-2 border-b border-gray-100">
                  Key Highlights & Innovations
                </h2>
                <ul className="space-y-4 font-body">
                  {project.highlights.map((highlight, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-secondary flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-normal">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Results / Impact */}
            {project.results && (
              <motion.div 
                className="bg-gradient-to-r from-blue-900 to-[#002068] text-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  Project Outcome
                </span>
                <h3 className="text-2xl font-bold font-heading mt-1 mb-3">
                  Measurable Impact & Recognition
                </h3>
                <p className="text-blue-100 font-body leading-relaxed">
                  {project.results}
                </p>
              </motion.div>
            )}
          </div>

          {/* Sticky Sidebar (1 Column) */}
          <div className="space-y-6 lg:sticky lg:top-8">
            {/* Services Delivered Card */}
            {project.services && project.services.length > 0 && (
              <motion.div 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-bold text-primary font-heading mb-4">
                  Services Provided
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-secondary rounded-lg text-xs font-medium border border-gray-200 transition-colors font-body"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Quick Contact & Consultation CTA Box */}
            <motion.div 
              className="bg-white p-6 rounded-2xl border border-blue-100 shadow-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-secondary flex items-center justify-center text-xl mb-4 font-bold">
                🏗️
              </div>
              <h3 className="text-xl font-bold text-primary font-heading mb-2">
                Have a Similar Project?
              </h3>
              <p className="text-gray-600 font-body text-sm mb-6">
                Consult with our engineering and project management team to bring your architectural vision to life.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="w-full block text-center bg-[#002068] text-white font-medium py-3 rounded-lg hover:bg-secondary transition-all shadow-md font-body"
                >
                  Schedule a Consultation →
                </Link>
              </motion.div>
            </motion.div>

            {/* Share / Back Link */}
            <div className="text-center pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors font-body"
              >
                ← Explore More Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  More From Our Portfolio
                </span>
                <h2 className="text-3xl font-bold text-primary font-heading mt-1">
                  Related Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-secondary font-medium hover:underline text-sm font-body hidden sm:inline-block"
              >
                View Full Portfolio →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((rel, idx) => (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <Link
                    to={`/projects/${rel.slug || rel.id}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-xs uppercase font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                        {rel.categoryDisplay || rel.category}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-primary font-heading group-hover:text-secondary transition-colors">
                          {rel.title}
                        </h3>
                        <p className="text-gray-500 font-body text-xs mt-1 line-clamp-2">
                          {rel.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-secondary font-semibold font-body">
                        <span>View Project Details</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
