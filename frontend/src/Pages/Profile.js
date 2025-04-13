import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div
                className="min-h-[calc(100vh-4rem)] bg-gray-100 flex items-center justify-center py-8 px-4 sm:px-8"
                style={{
                    backgroundImage: `url(${require('../Assets/BG_Profile.png')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="w-full max-w-2xl">
                    {/* Profile Card */}
                    <div className="w-full bg-[#ffffff] rounded-xl overflow-hidden shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] mb-6">
                        <div className="p-6 sm:p-8">
                            {/* Profile Image */}
                            <div className="flex justify-center mb-2">
                                <img
                                    src="https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif"
                                    alt="Profile"
                                    className="h-32 w-32 sm:h-24 sm:w-24 rounded-full border-4 border-white shadow-md"
                                />
                            </div>

                            <div className="flex justify-center text-3xl font-bold mb-2">JASON BROADY</div>

                            <div className="h-[1px] bg-black"></div>

                            {/* Contact Information Section */}
                            <div className="mb-6 sm:mb-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center mt-5">CONTACT INFORMATION</h2>
                                <div className="space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <span className="text-gray-600 font-medium sm:w-24">Email id:</span>
                                        <span className="text-gray-800 sm:ml-4">richardjameswap@gmail.com</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <span className="text-gray-600 font-medium sm:w-24">Phone:</span>
                                        <span className="text-gray-800 sm:ml-4">+1 123 456 7890</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-start">
                                        <span className="text-gray-600 font-medium sm:w-24">Address:</span>
                                        <span className="text-gray-800 sm:ml-4">57th Cross, Richmond<br />Circle, Church Road, London</span>
                                    </div>
                                </div>
                            </div>

                            {/* Basic Information Section */}
                            <div className="mb-6 sm:mb-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">BASIC INFORMATION</h2>
                                <div className="space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <span className="text-gray-600 font-medium sm:w-24">Gender:</span>
                                        <span className="text-gray-800 sm:ml-4">Male</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <span className="text-gray-600 font-medium sm:w-24">Birthday:</span>
                                        <span className="text-gray-800 sm:ml-4">20 July, 2024</span>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons - Add Books and Logout (Same Line) */}
                            <div className="flex justify-center gap-4">
                                <Link
                                    to="/addbooks"
                                    className="bg-[#000959] transform transition duration-300 hover:scale-105 text-[#E7E9FF] font-medium py-2 px-6 rounded-lg shadow-md inline-block text-center"
                                >
                                    + Add Books
                                </Link>
                                <Link
                                    to="/login"
                                    className="bg-red-500 transform transition duration-300 hover:scale-105 text-white font-medium py-2 px-6 rounded-lg shadow-md inline-block text-center"
                                >
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                        <Link
                            to="/mybooks"
                            className="bg-[#E7E9FF] transform transition duration-300 hover:scale-105 text-[#000959] font-medium py-2 px-6 rounded-lg shadow-md"
                        >
                            My Books
                        </Link>
                        <Link
                            to="/wishlist"
                            className="bg-[#E7E9FF] transform transition duration-300 hover:scale-105 text-[#000959] font-medium py-2 px-6 rounded-lg shadow-md"
                        >
                            Wishlist
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;