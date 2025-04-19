import { useState } from "react";
import axiosInterface from "../axiosInstance";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const LoginUser = async (username, password) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await axiosInterface.post("/cust/login",{username,password});
      localStorage.setItem("token", response.data.token);
      console.log("response.data.token", response.data.token);
      setUserData(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      setError("An error occurred during login.");
      return { success: false, message: "An error occurred during login." };
    } finally {
      setLoading(false);
      return { success: false };
    }
  };

  return {
    loading,
    error,
    userData,
    LoginUser,
  };
};

export default useLogin;
