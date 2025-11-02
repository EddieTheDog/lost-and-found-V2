import axios from "axios";

// Replace with your backend URL from Render
const BASE_URL = "https://lost-and-found-api-gly1.onrender.com/";

export const createClaim = (data) => axios.post(`${BASE_URL}/claims`, data);
export const getClaim = (id) => axios.get(`${BASE_URL}/claims/${id}`);
export const getAllClaims = () => axios.get(`${BASE_URL}/claims`);
