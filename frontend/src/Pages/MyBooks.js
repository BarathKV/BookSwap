import React from "react";
import PostCard from "../Components/PostCard";
import Navbar from "../Components/Navbar";

const MyBooks = () => {
  const myBooks = [
    {
      id: 1,
      title: "Boys tiger heart",
      author: "Linda Coggin",
      price: "899",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s",
      condition: "New",
    },
    {
      id: 2,
      title: "Boys tiger heart",
      author: "Linda Coggin",
      price: "899",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s",
      condition: "New",
    },
    {
      id: 3,
      title: "Boys tiger heart",
      author: "Linda Coggin",
      price: "899",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s",
      condition: "New",
    },
  ];
  return (
    <div className="bg-[#E7E9FF]">
      <Navbar />
      {/* Wrapper for Top Picks Section */}
      <div className="wrapper flex flex-col items-center">
        {/* Centered "Top Picks" Heading */}
        <h1 className="text-[30px] py-6 font-bold">My Books</h1>

        {/* Responsive Grid for PostCard Components */}
        <div className="py-[20px] w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-4">
            {myBooks.map((book) => (
              <PostCard post={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
