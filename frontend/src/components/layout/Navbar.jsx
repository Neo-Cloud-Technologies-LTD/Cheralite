import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout: 3 columns for exact centering */}
        <div className="grid grid-cols-3 items-center h-20">
          {/* --- Left: Logo --- */}
          <Link to="/" className="flex items-center h-full justify-self-start">
            <img
              src="/Cheralite-logo.png"
              alt="Cheralite logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* --- Center: Navigation Links --- */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
            <Link to="/" className="hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition font-medium">
              About
            </Link>
            <Link to="/projects" className="hover:text-blue-600 transition font-medium">
              Projects
            </Link>
            <Link to="/services" className="hover:text-blue-600 transition font-medium">
              Services
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition font-medium">
              Contact
            </Link>
          </div>

          {/* --- Right: Contact Us button + Mobile hamburger --- */}
          <div className="flex items-center justify-self-end gap-4">
            {/* Desktop Contact button */}
            <Link
              to="/contact"
              className="hidden md:inline-block bg-[#0b2b4a] text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (slide down) */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 px-4 pb-6 space-y-3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="block text-gray-800 font-medium hover:text-blue-600 transition"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block text-gray-800 font-medium hover:text-blue-600 transition"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/projects"
          className="block text-gray-800 font-medium hover:text-blue-600 transition"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/services"
          className="block text-gray-800 font-medium hover:text-blue-600 transition"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="block text-gray-800 font-medium hover:text-blue-600 transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/contact"
          className="inline-block bg-[#0b2b4a] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};