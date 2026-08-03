// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className=''>
//       Navbar
//       </div>
//   )
// }

// export default Navbar
import logo from '../../assets/cheralite-logo.png'


function Navbar (){

  return (
    <div className="w-full h-full absolute">
      <header className="flex justify-between items-center text-black py-6 px-8" md:px-32 bg-white drop-shadow-md>

    <a href=""><img src="{logo}" alt="" className='w-52 hover:scale-105 transition-all'/></a>

    <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
      <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Home</li>
      <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>About</li>
      <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Projects</li>
      <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Services</li>
      <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Contact Us</li>
    </ul>
      </header>

    </div>
  )
}

export default Navbar