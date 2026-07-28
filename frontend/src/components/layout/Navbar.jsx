import React from 'react'
import './Navbar.css'
import logo from '../../assets/cheralite-logo.png'



const Navbar = () => {
  return (
    <div className='navbar'>

    {/* <img src={logo} alt="" className='logo'/> */}
    <ul>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>PROJECTS</li>
      <li>SERVICES</li>
      <li className='contact'>CONTACT US</li>
    </ul>

    
    </div>

    
    
  )
}

export default Navbar











// import { Link } from "react-router-dom";
// import './Navbar.css'

// export const Navbar = () => {
//   return (
    
      
//     <nav className="bg-primary text-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">
//           YourLogo
//         </Link>

//         {/* Navigation Links */}
//         <div className="space-x-6 hidden md:flex">
//           <Link to="/" className="hover:text-accent transition">Home</Link>
//           <Link to="/about" className="hover:text-accent transition">About</Link> 
//           <Link to="/services" className="hover:text-accent transition">Services</Link>
//           <Link to="/contact" className="hover:text-accent transition">Contact</Link>
//         </div>

//         {/* Mobile Hamburger (Intern can finish this later) */}
//         <button className="md:hidden text-white">
//           ☰
//         </button>
//       </div>
//     </nav>
//   );
// };