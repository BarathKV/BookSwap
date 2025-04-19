import React from "react";
import PostCard from "../Components/PostCard";
import Navbar from "../Components/Navbar";

import useSearchFilter from "../hooks/useSearchFilter";

const SearchResult = () => {
  const title = new URLSearchParams(window.location.search).get("title");
  const author = new URLSearchParams(window.location.search).get("author");
  const isbn = new URLSearchParams(window.location.search).get("isbn");

  console.log("Title:", title);
  console.log("Author:", author);
  console.log("ISBN:", isbn);

  const filters = {
    ...(title && { title }),
    ...(author && { author }),
    ...(isbn && { isbn }),
  };

  const { results: posts, loading } = useSearchFilter({ filters });

  if(loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="bg-[#eaecff]">
      {/* Navbar Component */}
      <Navbar />

      {/* Wrapper for Top Picks Section */}
      <div className="wrapper flex flex-col items-center">
        {/* Centered "Top Picks" Heading */}
        <h1 className="text-[30px] py-6 font-bold">Search Result</h1>

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

export default SearchResult;
