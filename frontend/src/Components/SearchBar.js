import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleInputClick = () => setShowOverlay(true);
  const closeOverlay = () => setShowOverlay(false);

  const handleIsbnChange = (e) => {
    const value = e.target.value;
    if (value.length <= 13) {
      setIsbn(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isIsbnSearch = isbn.trim().length > 0;
    const isFieldConflict = isIsbnSearch && (title.trim() || author.trim());

    if (isFieldConflict) {
      alert("If ISBN is provided, Title and Author must be empty.");
      return;
    }

    const params = new URLSearchParams();
    if (isIsbnSearch && isbn.length === 13) {
      params.append("isbn", isbn);
    } else {
      if (title.trim()) params.append("title", title);
      if (author.trim()) params.append("author", author);
    }

    navigate(`/result?${params.toString()}`);
    setShowOverlay(false);
  };

  return (
    <>
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
              readOnly
            />
          </div>
        </div>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative animate-fade-in">
            <button
              onClick={closeOverlay}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none">
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-6 text-center">
              Search for a Book
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Book Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={isbn.length > 0}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isbn.length > 0 ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  placeholder="e.g. The Alchemist"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Author
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  disabled={isbn.length > 0}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isbn.length > 0 ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  placeholder="e.g. Paulo Coelho"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  ISBN
                </label>
                <input
                  type="text"
                  value={isbn}
                  onChange={handleIsbnChange}
                  disabled={title.trim() || author.trim()}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    title.trim() || author.trim()
                      ? "bg-gray-100 cursor-not-allowed"
                      : ""
                  }`}
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
