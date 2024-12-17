import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import axios from "axios";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);

          window.location.href = "/";
        } else {
          setError(true);
          setErrorMessage(response.data);
        }
      } catch (err) {
        setErrorMessage("Credenciais inválidas");
        setError(true);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/register",
          { email, password, phone, address, name },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);

          window.location.href = "/login";
        } else {
          setError(true);
          setErrorMessage(response.data);
        }
      } catch (err) {
        setError(true);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <p className="text-center text-gray-500">
          {isLogin
            ? "Welcome back! Please login to your account."
            : "Create an account to get started."}
        </p>
        {errorMessage && (
          <div className="mt-4 p-4 bg-red-100 text-red-600 text-center rounded-lg">
            {errorMessage}
          </div>
        )}
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Phone"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
              {error ? <div>{errorMessage}</div> : null}
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-500 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
