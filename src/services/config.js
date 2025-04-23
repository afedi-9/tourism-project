import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseURL,
});

// Add a request interceptor to attach the token to the headers of each request

apiClient.interceptors.request.use((config) => {
  // get access token from local storage
  const token = localStorage.getItem("token");
  // Attach token to Authorix=zation header
  config.headers.Authorization = `Bearer ${token}`;
  // Return config
  return config;
});
