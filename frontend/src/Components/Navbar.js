import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000959] text-white p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <img src={logo} className="h-10 w-10" alt="BookSwap Logo" />
        <span className="text-xl font-bold">BookSwap</span>
      </div>

      {/* Navigation Links (Desktop View) */}
      <div className="hidden md:flex space-x-4">
        <Link
          to="/home"
          className="px-4 py-2 rounded-full hover:bg-[#dfe2ff] hover:text-indigo-900 transition duration-300 ease-in-out">
          Home
        </Link>
        <Link
          to="/wishlist"
          className="px-4 py-2 rounded-full hover:bg-[#dfe2ff] hover:text-indigo-900 transition duration-300 ease-in-out">
          Wishlist
        </Link>
        <Link
          to="/mybooks"
          className="px-4 py-2 rounded-full hover:bg-[#dfe2ff] hover:text-indigo-900 transition duration-300 ease-in-out">
          My Books
        </Link>
        <Link
          to="/mypurchases"
          className="px-4 py-2 rounded-full hover:bg-[#dfe2ff] hover:text-indigo-900 transition duration-300 ease-in-out">
          Purchases
        </Link>
      </div>

      {/* Hamburger Menu (Mobile View) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-16 right-0 w-48 bg-indigo-900 text-white py-2 px-4 shadow-md rounded-lg">
            <Link
              to="/home"
              className="block px-4 py-2 rounded-full bg-purple-200 text-indigo-900 font-medium">
              Home
            </Link>
            <Link
              to="/wishlist"
              className="block px-4 py-2 rounded-full hover:bg-purple-200 hover:text-indigo-900 transition duration-300 ease-in-out">
              Wishlist
            </Link>
            <Link
              to="/mybooks"
              className="block px-4 py-2 rounded-full hover:bg-purple-200 hover:text-indigo-900 transition duration-300 ease-in-out">
              My Books
            </Link>
            <Link
              to="/mypurchases"
              className="block px-4 py-2 rounded-full hover:bg-purple-200 hover:text-indigo-900 transition duration-300 ease-in-out">
              Purchases
            </Link>
          </div>
        )}
      </div>

      {/* Profile Icon */}
      <Link to="/profile" className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWi6fx13t3nmhNDxOwxj80l8QTzZrnf2_lA&s"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
        <div className="ml-5 mr-5 text-xl">Profile</div>
      </Link>
    </nav>
  );
};

export default Navbar;
