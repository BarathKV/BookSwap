import React from "react";
import PurchasesCard from "../Components/PurchasesCard";
import Navbar from "../Components/Navbar";

import useFetchPurchases from "../hooks/useFetchPurchases";

const MyPurchases = () => {
  const { purchases, loading, error } = useFetchPurchases();

  if (loading) {
    return (
      <div className="bg-[#eaecff]">
        <Navbar />
        <div className="flex justify-center items-center min-h-screen bg-[#eaecff]">
          Loading...
        </div>
      </div>
    );
  }
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
              <PurchasesCard purchase={purchase} key={purchase.purchseId} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPurchases;
