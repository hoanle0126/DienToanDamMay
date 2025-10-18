import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;  
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem("token");
    } else if (response.status === 404) {
      //
    }

    throw error;
  }
);
