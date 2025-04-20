import React, { useState } from "react";
import WishlistCard from "../Components/WishlistCard.js";
import Navbar from "../Components/Navbar";
import useRmFavorite from "../hooks/useRmFavorite";
import useFetchFavorite from "../hooks/useFetchFavorite.js";

const Wishlist = () => {
  const { removeFromWishlist, loading } = useRmFavorite();
  const { purchases, loading: fetchLoading, error } = useFetchFavorite();

  const [wishlistItems, setWishlistItems] = useState(purchases || []);

  React.useEffect(() => {
    setWishlistItems(purchases);
  }, [purchases]);

  const handleRemove = async (id) => {
    try {
      await removeFromWishlist(id);
      setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Failed to remove from wishlist:", err);
    }
  };

  return (
    <div className="bg-[#eaecff] min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center py-12">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

        <div className="w-full max-w-4xl px-4">
          {wishlistItems.length === 0 ? (
            <p className="text-center text-gray-600">Your wishlist is empty.</p>
          ) : (
            <div className="space-y-4">
              {wishlistItems.map((fav) => (
                console.log(fav),
                <div key={fav.favoriteId} className="bg-white rounded-lg shadow-md p-4">
                  <WishlistCard post={fav} onRemove={() => handleRemove(fav.post.postId)}/>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
