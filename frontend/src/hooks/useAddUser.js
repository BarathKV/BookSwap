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
      return res.data;
    } catch (err) {
      const msg = err.response?.data?.message || "An error occurred";
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { AddUser, response, loading, error };
};

export default useAddUser;
