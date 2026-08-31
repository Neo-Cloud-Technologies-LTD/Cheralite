import { Link } from "react-router-dom";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <img
                src="/Cheralite-logo-white.png"
                alt="Cheralite Limited"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Delivering high-quality construction, engineering, procurement, and project management services.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/" className="hover:text-white transition inline-block hover:translate-x-1 duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition inline-block hover:translate-x-1 duration-200">About</Link></li>
              <li><Link to="/projects" className="hover:text-white transition inline-block hover:translate-x-1 duration-200">Projects</Link></li>
              <li><Link to="/services" className="hover:text-white transition inline-block hover:translate-x-1 duration-200">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition inline-block hover:translate-x-1 duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <p className="mt-2 text-sm">info@cheralite.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Cheralite Limited. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};