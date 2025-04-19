import { useState } from "react";

const useUploadImage = () => {
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log("Uploading file:", file);
      console.log("Form data:", formData);

      const response = await fetch("http://localhost:3300/upload/image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const filename = await response.text();
      return filename;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  return { uploadImage, uploading };
};

export default useUploadImage;
