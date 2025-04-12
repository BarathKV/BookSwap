import React from 'react';
import Navbar from '../Components/Navbar'; // Import the Navbar component
import SearchBar from '../Components/SearchBar';
import BookCard from '../Components/BookCard';

const Home = () => {
  return (
    <div className='bg-[#eaecff]'>
      {/* Navbar Component */}
      <Navbar />

      {/* SearchBar Component */}
      <SearchBar />

      {/* Wrapper for Top Picks Section */}
      <div className="wrapper flex flex-col items-center">
        {/* Centered "Top Picks" Heading */}
        <h1 className="text-[30px] py-6 ">Top Picks</h1>

        {/* Responsive Grid for BookCard Components */}
        <div className="py-[20px] w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-4">
            {/* Render multiple BookCard components */}
            {Array.from({ length: 8 }).map((_, index) => (
              <BookCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;