import React from 'react';
import { useState } from 'react';
import logo from '../Assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000959] text-white p-4 flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          className="h-10 w-10"
        />
        <span className="text-xl font-bold">BookSwap</span>
      </div>

      {/* Navigation Links (Desktop View) */}
      <div className="hidden md:flex space-x-4">
        <a
          href="#"
          className="px-4 py-2 rounded-full bg-[#dfe2ff] text-indigo-900 font-medium"
        >
          Home
        </a>
        <a href="#" className="px-4 py-2 rounded-full hover:bg-[#dfe2ff] hover:text-indigo-900 transition duration-300 ease-in-out">
          Wishlist
        </a>
        <a href="#" className="px-4 py-2 rounded-full hover:bg-[#dfe2ff] hover:text-indigo-900 transition duration-300 ease-in-out">
          My Posts
        </a>
        <a href="#" className="px-4 py-2 rounded-full hover:bg-[#dfe2ff] hover:text-indigo-900 transition duration-300 ease-in-out">
          Purchases
        </a>
      </div>

      {/* Hamburger Menu (Mobile View) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-16 right-0 w-48 bg-indigo-900 text-white py-2 px-4 shadow-md">
            <a
              href="#"
              className="block px-4 py-2 rounded-full bg-purple-200 text-indigo-900 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-full hover:bg-purple-200 hover:text-indigo-900 transition duration-300 ease-in-out"
            >
              Wishlist
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-full hover:bg-purple-200 hover:text-indigo-900 transition duration-300 ease-in-out"
            >
              My Posts
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-full hover:bg-purple-200 hover:text-indigo-900 transition duration-300 ease-in-out"
            >
              Purchases
            </a>
          </div>
        )}
      </div>

      {/* Profile Icon */}
      <div className="flex items-center">
        
        <img
          src="https://source.unsplash.com/random/30x30/?profile"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />

        <div className='ml-[20px] mr-[20px] text-[20px]'>Profile</div>
      </div>
    </nav>
  );
};

export default Navbar;