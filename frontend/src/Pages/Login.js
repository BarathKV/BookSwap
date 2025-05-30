import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";

const Login = () => {
  const { loading, error, LoginUser } = useLogin();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);

    try {
      const userData = await LoginUser(username, password);
      console.log("User data:", userData);
      if (userData && userData.token) {
        localStorage.setItem("token", userData.token);
        navigate("/home");
      } else {
        console.error("Login failed: Invalid token or response");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      style={{
        backgroundImage: `url(${require("../Assets/BG_Login.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="w-full max-w-md">
        <div className="ml-6 w-[400px] bg-white rounded-[30px] shadow-[1px_10px_4px_0_rgba(0,0,0,0.76)] p-8">
          <h2 className="text-[40px] font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            {error && (
              <div className="text-red-500 text-sm text-center mb-4">
                {error}
              </div>
            )}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="username"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[200px] bg-[#000B6D] hover:bg-[#0d1238] text-white font-medium py-2 px-4 rounded-md transition duration-200 my-2"
                disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center flex flex-col items-center">
            <p className="text-gray-600 text-sm">Dont have an account?</p>
            <div className="flex space-x-2 mt-2">
              <Link to="/signup?type=USER">
                <button>User SignUp</button>
              </Link>
              <Link to="/signup?type=ADMIN">Dealer Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
