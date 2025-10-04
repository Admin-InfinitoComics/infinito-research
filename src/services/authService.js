import axios from 'axios';
import { BACKEND_URL } from '../utils/constants';

// Create axios instance with credentials support
const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable cookies to be sent with all requests
});

// Login user (sets cookie in browser)
export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("/api/login", {
      email: email.toLowerCase(),
      password,
    });
    return response.data; // user info (token handled in cookie)
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Logout user (clears cookie)
export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post("/api/logout");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Logout failed");
  }
};

// Check if user is authenticated
export const checkAuth = async () => {
  try {
    const response = await axiosInstance.get("/api/check-auth");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Authentication check failed");
  }
};