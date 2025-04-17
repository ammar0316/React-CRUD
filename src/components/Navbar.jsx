import React from 'react'
import { FaFacebookF, FaInstagram,  } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[50px] bg-gray-200  shadow-lg   px-3 '>
      <h1 className='text-2xl font-bold'>Blogging</h1>
      <ul className='  font-bold flex justify-around items-center h-[40px] w-[250px] '>
        <li>Home</li>
        <li>Contect</li>
        <li>About Us</li>

      </ul>
      <ul className=' font-bold flex justify-around items-center h-[40px] w-[150px]'>
        <li><a href="#"><FaInstagram className="hover:text-white" /></a></li>
        <li><a href="#"><FaFacebookF className="hover:text-white" /></a></li>
      </ul>
    </div>
  )
}

export default Navbar
