import React from "react";
import PostCard from "../Components/PostCard";
import Navbar from "../Components/Navbar";
import useUserPosts from "../hooks/useUserPosts"; // Custom hook to fetch user posts

const MyBooks = () => {
  const { myposts, loading } = useUserPosts();

  if (loading)
    return <div className="text-center mt-10 text-xl">Loading...</div>; // Loading state

  return (
    <div className="bg-[#E7E9FF] min-h-screen">
      <Navbar />
      {/* Wrapper for My Books Section */}
      <div className="wrapper flex flex-col items-center">
        {/* Centered Heading */}
        <h1 className="text-[30px] py-6 font-bold">My Books</h1>

        {/* Responsive Grid for PostCard Components */}
        <div className="py-[20px] w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-4">
            {myposts.map((book) => (
              <PostCard post={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
