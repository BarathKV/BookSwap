import React from "react";
import PostCard from "../Components/PostCard";
import Navbar from "../Components/Navbar";
import ReviewCard from "../Components/ReviewCard";

const Seller = () => {
  // Number of books and reviews
  const numberOfBooks = 8;
  const numberOfReviews = 5;

  return (
    <div className="relative min-h-screen h-full">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${require("../Assets/BG_Seller.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}></div>

      {/* Scrollable Content */}
      <div className="relative">
        <Navbar />

        {/* Profile Section */}
        <div className="w-full flex justify-center px-4 mt-8 md:mt-16">
          <div className="w-full max-w-2xl bg-[#E7E9FF] rounded-xl overflow-hidden shadow-lg">
            <div className="p-6">
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <img
                  src="https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif"
                  alt="Profile"
                  className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* Name */}
              <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
                JASON BROADY
              </h1>

              {/* Separator */}
              <hr className="border-gray-300 my-4" />

              {/* Contact Information */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
                  CONTACT INFORMATION
                </h2>
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row">
                    <span className="text-gray-600 font-medium md:w-24">
                      Email:
                    </span>
                    <span className="text-gray-800">
                      richardjameswap@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <span className="text-gray-600 font-medium md:w-24">
                      Phone:
                    </span>
                    <span className="text-gray-800">+1 123 456 7890</span>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <span className="text-gray-600 font-medium md:w-24">
                      Address:
                    </span>
                    <span className="text-gray-800">
                      57th Cross, Richmond Circle, Church Road, London
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Books Section */}
        <div className="w-full px-4 my-8">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-center mb-6 text-gray-100">
              Books for Sale
            </h2>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-10 md:gap-16 w-max px-2">
                {Array.from({ length: numberOfBooks }).map((_, index) => (
                  <div key={index} className="w-60 md:w-72 flex-shrink-0">
                    <PostCard />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="w-full px-4 my-8 pb-12">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-center mb-6 text-gray-100">
              Reviews
            </h2>
            <div className="space-y-6">
              {Array.from({ length: numberOfReviews }).map((_, index) => (
                <div key={index} className="flex justify-center">
                  <ReviewCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
