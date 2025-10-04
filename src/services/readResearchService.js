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

/**
 * Fetch a specific research paper by its ID.
 * Automatically increments the paper's view count (handled by backend).
 *
 * @param {string} paperId - The MongoDB ObjectId of the research paper
 * @returns {Promise<Object>} - The research paper data
 */
export const readResearchService = async (paperId) => {
  if (!paperId) {
    throw new Error('Paper ID is required to fetch the research paper.');
  }

  try {
    const { data } = await axiosInstance.get(`/research-papers/${paperId}`);
    console.log("Fetched research paper:", data);
    return data;
  } catch (error) {
    console.error(`Error fetching research paper with ID ${paperId}:`, error);
    throw new Error(
      error.response?.data?.message ||
      'Failed to fetch research paper. Please try again later.'
    );
  }
};
