import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const WishlistCard = () => {
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s';

    return (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col sm:flex-row h-auto">
            {/* Book Cover Image - Left Side */}
            <div className="flex items-center justify-center w-full sm:w-[30%]">
                <Link to="/details"> {/* Wrap the image with Link */}
                    <img
                        src={imageUrl}
                        alt="Book Cover"
                        className="w-full h-auto sm:h-[250px] sm:w-auto object-cover p-4 cursor-pointer" // Add cursor-pointer for hover effect
                    />
                </Link>
            </div>

            {/* Book Details - Right Side */}
            <div className="w-full sm:w-[70%] p-6 flex flex-col justify-between">
                {/* Top Section */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">The Mind Of A Leader</h1>
                    <p className="text-base sm:text-lg text-gray-600 mb-2">By Kevin Anderson</p>

                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-0">
                        <div className="flex gap-2 items-center">
                            <img
                                src="https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif"
                                alt="Profile"
                                className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
                            />
                            <span className="font-semibold text-sm sm:text-base">Jason Brodie</span>
                        </div>
                        <span className="text-gray-500 text-xs sm:text-sm ml-2">Added on 19-5-25</span>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    <p className="text-lg sm:text-xl font-bold text-gray-800">Rs. 899/-</p>
                    <button className="bg-[#000959] text-white font-medium py-2 px-6 rounded-md transition duration-300 hover:scale-105 mt-2 sm:mt-0">
                        Buy Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;