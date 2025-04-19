import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import useAddPost from "../hooks/useAddPost";
import useUploadImage from "../hooks/useUploadImage";

const AddPost = () => {
  const { addPost, loading } = useAddPost();
  const { uploadImage, uploading } = useUploadImage();

  const [isImageUploaded, setIsImageUploaded] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    isbn: "",
    author: "",
    description: "",
    condition: "New",
    price: "",
    image: "", // This will store the filename
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(formData);
    setIsImageUploaded(false);
  };

  const handleImageUpload = async () => {
    if (!selectedFile) return;
  
    try {
      const filename = await uploadImage(selectedFile);
      setFormData((prev) => ({ ...prev, image: filename }));
      setIsImageUploaded(true); // Mark image as uploaded
      setIsModalOpen(false);
      setSelectedFile(null);
    } catch (err) {
      alert("Image upload failed.");
    }
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

          {/* Image Upload via Modal */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Image Upload
            </h2>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              disabled={isImageUploaded}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-200">
              Upload Image
            </button>
            {formData.image && (
              <p className="text-sm text-green-600 mt-2">
                Uploaded: {formData.image}
              </p>
            )}
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

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Upload Book Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
                console.log("Selected file:", e.target.files[0]);
              }}
              className="mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
                Cancel
              </button>
              <button
                onClick={handleImageUpload}
                disabled={!selectedFile || uploading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPost;
