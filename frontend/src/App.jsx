import React from 'react'
import Navbar from './components/layout/Navbar'
import logo from './assets/cheralite-logo.png'


const App = () => {

  return (

    <div className="w-full h-full absolute">
      <header className="flex justify-between items-center text-black py-6 px-8" md:px-32 bg-white drop-shadow-md>

    <img src="{logo}" alt="" className='w-52 h-22 hover:scale-105 transition-all'/>

    <ul className='hidden xl:flex ml-50 items-center gap-12 font-semibold text-base justify-center'>
      <li className='p-3 text-gray-600  hover:text-black rounded-md transition-all cursor-pointer'>Home</li>
      <li className='p-3 text-gray-600 hover:text-black rounded-md transition-all cursor-pointer'>About</li>
      <li className='p-3 text-gray-600 hover:text-black rounded-md transition-all cursor-pointer'>Projects</li>
      <li className='p-3 text-gray-600 hover:text-black rounded-md transition-all cursor-pointer'>Services</li>
      {/* <li className='p-3 bg-blue-900 hover:text-gray-600 ml-auto rounded-md transition-all cursor-pointer'>Contact Us</li> */}
    </ul>

    <ul className='hidden xl:flex ml-auto items-center gap-12 font-semibold text-base justify-center'>
    <li className='p-3 bg-blue-900 hover:text-gray-600 ml-auto rounded-md transition-all cursor-pointer'>Contact Us</li> 
    </ul>

    
      </header>

    </div>
  )
}

export default App