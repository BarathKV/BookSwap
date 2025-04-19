import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import useAddPost from "../hooks/useAddPost";

const AddPost = () => {
  //TODO: Call the Add post API
  const { addPost, loading } = useAddPost();

  const [formData, setFormData] = useState({
    name: "The Great Gatsby",
    isbn: "XXXXXXXXX",
    author: "Arnold",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du",
    condition: "New",
    price: "699",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(formData);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${require("../Assets/BG_AddBooks.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <Navbar />
      <div className="mt-[-20px] mb-[-100px] max-w-2xl scale-90 mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Enter Book Details
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Book Name */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Book Title
            </h2>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ISBN */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">ISBN</h2>
            <input
              type="text"
              name="isbn"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Author */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Author</h2>
            <input
              type="text"
              name="author"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Description
            </h2>
            <textarea
              name="description"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
          </div>

          {/* Condition */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Condition
            </h2>
            <select
              name="condition"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="New">New</option>
              <option value="Used">Like New</option>
              <option value="Damaged">Good</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Price</h2>
            <input
              type="text"
              name="price"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Image upload
            </h2>
            <div className="flex items-center">
              <label className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 cursor-pointer hover:bg-gray-200">
                Choose file
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  required
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="wrapper flex justify-center items-center">
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-[200px] bg-[#000959] text-white font-medium py-2 px-4 rounded-md transform transition duration-300 hover:scale-105">
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
