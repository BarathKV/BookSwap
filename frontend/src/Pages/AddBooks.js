import React from "react";
import Navbar from "../Components/Navbar";

const AddBooks= () =>{
    return(

        <div  style={{
            backgroundImage: `url(${require('../Assets/BG_AddBooks.png')})`, // Path to your image
            backgroundSize: 'cover', // Ensures the image covers the entire background
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat' // Prevents the image from repeating
          }}>
            <Navbar/>
            <div className="mt-[-20px] mb-[-100px]  max-w-2xl scale-90 mx-auto p-6 bg-white rounded-lg shadow-md" 
           
            >
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Enter Book Details</h1>
      
      <form className="space-y-6">
        {/* Book Name */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Book Name</h2>
          <input
            type="text"
            defaultValue="The Great Gatsby"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* ISBN */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">ISBN</h2>
          <input
            type="text"
            defaultValue="XXXXXXXXX"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Author */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Author</h2>
          <input
            type="text"
            defaultValue="Arnold"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Genre */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Genre</h2>
          <input
            type="text"
            defaultValue="Crime Drama"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
          <textarea
            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          />
        </div>

        {/* Condition */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Condition</h2>
          <input
            type="text"
            defaultValue="New"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Price</h2>
          <input
            type="text"
            defaultValue="699"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Image upload</h2>
          <div className="flex items-center">
            <label className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 cursor-pointer hover:bg-gray-200">
              Choose file
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Quantity</h2>
          <input
            type="text"
            defaultValue="20"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
          <div className="wrapper flex justify-center items-center">
        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-[200px] bg-[#000959] hover: text-white font-medium py-2 px-4 rounded-md transform transition duration-300 hover:scale-105" 
          >
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
        </div>
    );
}

export default AddBooks;