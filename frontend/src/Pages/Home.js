import React from 'react';
import Navbar from '../Components/Navbar'; // Import the Navbar component
import SearchBar from '../Components/SearchBar';
const Home = () => {
  return (
    <div>
      {/* Include the Navbar at the top */}
      <Navbar />
      <SearchBar/>
    </div>
  );
};

export default Home;