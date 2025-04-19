import { useState } from "react";
import axiosInterface from "../axiosInstance";

const useAddPost = () => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found in local storage");
    return { addPost: () => {}, loading: false };
  }
  const addPost = async (formData) => {
    setLoading(true);
    try {
      let uploadedImageFileName = "E:/SEM6/ITK.ITK.jpg";

      // STEP 1: Upload image
      if (formData.image) {
        const uploadData = new FormData();
        uploadData.append("file", formData.image);

        const uploadResponse = await axiosInterface.post("/upload/image", {
            ...uploadData,
            }, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!uploadResponse.ok) {
          throw new Error("Image upload failed");
        }

        const uploadResult = await uploadResponse.json();
        console.log("Upload result:", uploadResult);
        uploadedImageFileName = uploadResult.imageFile; // <- assuming backend returns this field
      }

      // STEP 2: Prepare final payload with uploaded image filename
      const postData = {
        title: formData.name,
        author: formData.author,
        isbn: formData.isbn,
        condition: formData.condition.toUpperCase(),
        price: Number(formData.price),
        description: formData.description,
        imageFile: uploadedImageFileName,
      };

      const result = {
        title: formData.name,
        author: formData.author,
        isbn: formData.isbn,
        condition: formData.condition.toUpperCase(),
        price: Number(formData.price),
        description: formData.description,
        imageFile: uploadedImageFileName,
      };

      // STEP 3: Submit post
      // const postResponse = await axiosInterfaceaxiosInterface.post("/post/add", {
      //   ...postData,
      // }, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      // });

      // if (!postResponse.ok) {
      //   const error = await postResponse.json();
      //   throw new Error(error.message || "Failed to submit post");
      // }

      // const result = await postResponse.json();
      console.log("Post added:", result);
      return result;
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { addPost, loading };
};

export default useAddPost;
