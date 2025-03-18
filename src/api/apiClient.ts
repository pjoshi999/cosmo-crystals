import axios from "axios";
import Cookies from "js-cookie";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response?.status === 401) {
      Cookies.remove("accessToken");
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // Prevent infinite loops
        const newAccessToken = await refreshToken();
        if (newAccessToken) {
          // Update the authorization header and retry the request
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  try {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh/`,
      {
        refresh: refreshToken,
      }
    );
    const accessToken = response.data?.accessToken;

    // Store the new tokens
    Cookies.set("accessToken", accessToken, { secure: true });

    return accessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    Cookies.remove("accessToken");
    return null;
  }
};
