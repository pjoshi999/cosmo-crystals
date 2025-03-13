import axios from "axios";
import { cookies } from "next/headers";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const cookieStore = await cookies();

apiClient.interceptors.request.use(
  async (config) => {
    const token = cookieStore.get("accessToken");
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
    // Check if the error is due to an expired token
    if (error.response?.status === 401) {
      cookieStore.delete("accessToken");
      cookieStore.delete("refreshToken");
      window.location.reload();
      // if (error.response?.status === 401 && !originalRequest._retry) {
      // originalRequest._retry = true; // Prevent infinite loops
      // const newAccessToken = await refreshToken();
      // if (newAccessToken) {
      //   // Update the authorization header and retry the request
      //   originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      //   return apiClient(originalRequest);
      // }
    }

    return Promise.reject(error);
  }
);

// const refreshToken = async () => {
//   try {
//     const refreshToken = Cookies.get("refreshToken");
//     if (!refreshToken) {
//       throw new Error("No refresh token available");
//     }
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_API_KEY}/auth/signin/refresh/`,
//       {
//         refresh: refreshToken,
//       }
//     );
//     const accessToken = response.data?.access;

//     // Store the new tokens
//     Cookies.set("accessToken", accessToken, { secure: true });

//     return accessToken;
//   } catch (error) {
//     console.error("Failed to refresh token:", error);
//     Cookies.remove("accessToken");
//     return null;
//   }
// };
