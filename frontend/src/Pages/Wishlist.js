import React from "react";
import Navbar from "../Components/Navbar";
import WishlistCard from "../Components/WishlistCard";

const Wishlist = () => {
  // Number of rows you want (change 5 to your desired number)
  const numberOfRows = 5;

  return (
    <div className="bg-[#eaecff]">
    <Navbar />
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#eaecff] ">
      
      <div className="flex justify-center items-center font-bold text-3xl my-12">
        My Wishlist
      </div>

      {/* Container for the wishlist cards */}
      <div className="w-full max-w-4xl px-4">
        <div className="space-y-4"> {/* Use space-y-4 for vertical spacing */}
          {Array.from({ length: numberOfRows }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <WishlistCard />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Wishlist;