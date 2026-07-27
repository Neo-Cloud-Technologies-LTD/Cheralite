import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-bold text-lg">YourLogo</h3>
            <p className="mt-2 text-sm">Building amazing web experiences.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <p className="mt-2 text-sm">email@example.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} YourLogo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};