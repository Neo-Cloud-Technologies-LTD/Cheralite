import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          YourLogo
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-accent transition">Home</Link>
          <Link to="/about" className="hover:text-accent transition">About</Link>
          <Link to="/services" className="hover:text-accent transition">Services</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </div>

        {/* Mobile Hamburger (Intern can finish this later) */}
        <button className="md:hidden text-white">
          ☰
        </button>
      </div>
    </nav>
  );
};