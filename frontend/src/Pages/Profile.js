import React from "react";
import Navbar from "../Components/Navbar";


const Profile = () =>{
    return(
        <div>
        <Navbar />
        <div className='h-[881px] bg-gray-100 flex items-center justify-center flex-col ' style={{
            backgroundImage: `url(${require('../Assets/BG_Profile.png')})`, // Path to your image
            backgroundSize: 'cover', // Ensures the image covers the entire background
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat' // Prevents the image from repeating
          }}>

<div className="max-w-md mx-auto bg-[#E7E9FF] rounded-xl  overflow-hidden md:max-w-2xl m-4 shadow-[1px_4px_4px_0_rgba(0,0,0,0.99)] ">
      <div className="p-8">
    <div className="wrapper max-w-md flex justify-center items-center">
      <div to="/profile" className="flex justify-center items-center mb-4 h-20 w-20">
        <img
          src="https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif"
          alt="Profile"
          className="h-20 w-20 rounded-full"
        />
      </div>
      </div>

        {/* Contact Information Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center ">CONTACT INFORMATION</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-gray-600 font-medium w-24">Email id:</span>
              <span className="text-gray-800">richardjameswap@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 font-medium w-24">Phone:</span>
              <span className="text-gray-800">+1 123 456 7890</span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-600 font-medium w-24">Address:</span>
              <span className="text-gray-800">57th Cross, Richmond<br />Circle, Church Road, London</span>
            </div>
          </div>
        </div>

        {/* Basic Information Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">BASIC INFORMATION</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-gray-600 font-medium w-24">Gender:</span>
              <span className="text-gray-800">Male</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 font-medium w-24">Birthday:</span>
              <span className="text-gray-800">20 July, 2024</span>
            </div>
          </div>
        </div>
          <div className="flex justify-center text-[#000959]"> 
        <button className="bg-[#000959] transform transition duration-300 hover:scale-105 text-[#E7E9FF] font-medium py-2 px-6 rounded-lg ">
            My Books
          </button>
          </div>
        {/* Action Buttons */}
        
      </div>
    </div>
            
        <div className="flex space-x-4">
          <button className="bg-[#E7E9FF] transform transition duration-300 hover:scale-105 text-[#000959] font-medium py-2 px-6 rounded-lg ">
            My Books
          </button>
          <button className="bg-[#E7E9FF] transform transition duration-300 hover:scale-105 text-[#000959] font-medium py-2 px-6 rounded-lg ">
            Wishlist
          </button>
        </div>

        </div>


        </div>
    
);
};

export default Profile;