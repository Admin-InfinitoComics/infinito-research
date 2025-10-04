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

export const researchBrowse = async () => {
  try {
    const response = await axiosInstance.get(`/research-papers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching research papers:", error);
    throw error;
  }
};

