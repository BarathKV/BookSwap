import { useState } from "react";
import axios from "axios";

const useAddPost = () => {
  const [loading, setLoading] = useState(false);

  const addPost = async (formData) => {
    setLoading(true);

    try {
      // Extract only the required fields and rename "name" to "title"
      const payload = {
        title: formData.name,
        author: formData.author,
        isbn: formData.isbn,
        condition: formData.condition.toUpperCase(),
        price: parseFloat(formData.price),
        description: formData.description,
        imageFile: formData.image,
      };

      const response = await axios.post("http://localhost:3300/post/add", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("Post added:", response.data);
      alert("Post submitted successfully!");
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to submit post.");
    } finally {
      setLoading(false);
    }
  };

  return { addPost, loading };
};

export default useAddPost;
