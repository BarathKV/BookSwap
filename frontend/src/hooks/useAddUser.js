import { useState } from "react";
import axiosInstance from "../axiosInstance";

const useAddUser = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const AddUser = async (UserData) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/cust/signup", UserData);
      setResponse(res.data);
      console.log("User created:", res.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { AddUser, response, loading, error };
};

export default useAddUser;
