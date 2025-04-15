import React from "react";
import PurchasesCard from "../Components/PurchasesCard";
import Navbar from "../Components/Navbar";
const MyPurchases = () => {
  const numberOfRows = 5;
  const purchases = [
    {
      id:1,
      title: "The Mind Of A Leader",
      author: "Kevin Anderson",
      price: "899",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s",
      condition: "New",
      seller: "Jason Brodie",
      date: "19-5-25",

    },
    {
      id:1,
      title: "The Mind Of A Leader",
      author: "Kevin Anderson",
      price: "899",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s",
      condition: "New",
      seller: "Jason Brodie",
      date: "19-5-25",

    }
  ]

  return (
    <div className="bg-[#eaecff]">
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#eaecff] ">
        <div className="flex justify-center items-center font-bold text-3xl my-12">
          My Purchases
        </div>

        {/* Container for the wishlist cards */}
        <div className="w-full max-w-4xl px-4">
          <div className="space-y-4">
            {purchases.map((purchase) => (
              <PurchasesCard purchase={purchase} key={purchase.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPurchases;
