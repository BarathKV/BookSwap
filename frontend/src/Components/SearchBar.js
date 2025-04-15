import React, { useState } from "react";

const SearchBar = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleInputClick = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const [isbn, setIsbn] = useState("");

  const handleIsbnChange = (e) => {
    const value = e.target.value;

    // Allow only up to 13 characters
    if (value.length <= 13) {
      setIsbn(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    if (isbn) {
      console.log("ISBN:", isbn);
    }
    // Add your submit logic here
  };

  return (
    <>
      {/* Main Search Section */}
      <div
        className="flex items-center justify-center h-[250px] w-full"
        style={{
          backgroundImage: `url(${require("../Assets/BG_Search.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="z-10 w-[450px] px-6 justify-between items-center">
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder="Search on click"
              className="flex-1 px-2 py-2 rounded-[12px] bg-[#ecefff] border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleInputClick}
              readOnly // prevents typing, since it triggers the overlay
            />

            {/* <button className="px-2 py-2 rounded-[20px] bg-[#ecefff] border border-gray-300 shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>

      {/* Overlay Form */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={closeOverlay}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none">
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-6 text-center">
              Search for a Book
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Book Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. The Alchemist"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Author
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Paulo Coelho"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  ISBN (Optional)
                </label>
                <input
                  type="text"
                  value={isbn}
                  onChange={handleIsbnChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 9780061122415"
                />
                {isbn.length > 0 && isbn.length < 13 && (
                  <p className="text-red-500 text-sm mt-1">
                    ISBN must be exactly 13 characters if provided.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#000959] text-white font-semibold py-2 px-4 rounded-lg transition">
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
