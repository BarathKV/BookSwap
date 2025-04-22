import React from "react";
import PostCard from "../Components/PostCard";
import Navbar from "../Components/Navbar";
import ReviewCard from "../Components/ReviewCard";
import { useParams } from "react-router-dom";
import useFetchSellerProfile from "../hooks/useFetchSellerProfile.js";
import useFetchSellerReview from "../hooks/useFetchSellerReview.js";
import useFetchSellerPost from "../hooks/useFetchSellerPost.js";

const Seller = () => {
  const { seller } = useParams(); // Assuming 'seller' is sellerId or username

  const { profile, loadingProfile } = useFetchSellerProfile(seller);
  const { reviews, reviewloading } = useFetchSellerReview(seller);
  const { posts, postloading } = useFetchSellerPost(seller);

  return (
    <div className="relative min-h-screen h-full">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${require("../Assets/BG_Seller.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}></div>

      <div className="relative">
        <Navbar />

        {/* Profile Section */}
        <div className="w-full flex justify-center px-4 mt-8 md:mt-16">
          <div className="w-full max-w-2xl bg-[#E7E9FF] rounded-xl overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWi6fx13t3nmhNDxOwxj80l8QTzZrnf2_lA&s"
                  alt="Profile"
                  className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white shadow-md"
                />
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
                {loadingProfile
                  ? "Loading..."
                  : profile?.userType || "Unknown User"}
              </h1>

              <hr className="border-gray-300 my-4" />

              <div className="mb-6">
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row">
                    <span className="text-gray-600 font-medium md:w-24">
                      Name:
                    </span>
                    <span className="text-gray-800">
                      {profile?.username || "Not Provided"}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <span className="text-gray-600 font-medium md:w-24">
                      Email:
                    </span>
                    <span className="text-gray-800">
                      {profile?.email || "Not Provided"}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <span className="text-gray-600 font-medium md:w-24">
                      Location:
                    </span>
                    <span className="text-gray-800">
                      {profile?.location || "Not specified"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="w-full px-4 my-8 pb-12">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-100 ">
              Reviews
            </h2>
            <div className="space-y-6">
              {reviewloading ? (
                "Loading..."
              ) : reviews.length === 0 ? (
                <p className="text-center text-gray-300">No reviews yet.</p>
              ) : (
                reviews.map((review, index) => {
                  console.log(review); // See what 'writer' contains
                  return (
                    <div key={index} className="flex justify-center">
                      <ReviewCard review={review} />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-6 text-gray-100 ">
          Books for Sale
        </h2>
        {/* Books Section */}
        <div className="w-full flex justify-center">
          <div className="bg-[#E7E9FF] w-[1200px] rounded-xl px-4 my-8">
            <div className="w-full max-w-6xl mx-auto mt-10">
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-10 md:gap-16 w-[1200px] px-2 mb-6">
                  {postloading ? (
                    <p className="text-center text-gray-300">Loading...</p>
                  ) : posts.length === 0 ? (
                    <p className="text-center text-gray-300">
                      No books available.
                    </p>
                  ) : (
                    posts.map((post, index) => {
                      return (
                        <div key={index} className="w-60 md:w-72 flex-shrink-0">
                          <PostCard post={post} />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
