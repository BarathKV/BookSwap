import React from "react";
import PostCard from "../Components/PostCard";
import Navbar from "../Components/Navbar"; // Import the Navbar component
import SearchBar from "../Components/SearchBar";

import useFetchRecent from "../hooks/useFetchRecent"; // Import the custom hook

const Home = () => {
  const { posts, loading, error } = useFetchRecent(); // Use the custom hook to fetch posts
  if (loading) {
    return <div>Loading...</div>; // Loading state
  }
  return (
    <div className="bg-[#eaecff]">
      {/* Navbar Component */}
      <Navbar />

      {/* SearchBar Component */}
      <SearchBar />

      {/* Wrapper for Top Picks Section */}
      <div className="wrapper flex flex-col items-center">
        {/* Centered "Top Picks" Heading */}
        <h1 className="text-[30px] py-6 font-bold">Top Picks</h1>

        {/* Responsive Grid for PostCard Components */}
        <div className="py-[20px] w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-4">
            {/* Render multiple PostCard components */}
            {/* You can replace the array with your actual data */}
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
