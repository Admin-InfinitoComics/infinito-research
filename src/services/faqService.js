import axios from "axios";
import { BACKEND_URL } from "../utils/constants";

// Create axios instance with credentials support
const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable cookies to be sent with all requests
});

export const fetchFAQsByCategory = async (category) => {
  try {
    const response = await axiosInstance.get(`/faq?category=${category}`);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    throw error;
  }
};
