import { useState } from "react";
import axiosInstance from "../axiosInstance";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const LoginUser = async (username, password) => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await axiosInstance.post("/cust/login", {
        username,
        password,
      });
      if (response.data && response.data.token) {
        return response.data;
      } else {
        setError("Invalid response from server.");
        return null;
      }
  
    } catch (err) {
      setError("An error occurred during login.");
      return null;
    } finally {
      setLoading(false);
    }
  };
  
  return { loading, error, LoginUser };
};

export default useLogin;
