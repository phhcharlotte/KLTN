import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
