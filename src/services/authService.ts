import {
  ForgotPasswordPayload,
  LoginPayload,
  ResetPasswordPayload,
  SignupPayload,
} from "@/types/auth";
import { apiClient } from "../api/apiClient";

const login = async (credentials: LoginPayload) =>
  apiClient.post("/auth/login", credentials);

const resetPassword = async (credentials: ResetPasswordPayload) =>
  apiClient.post("/auth/reset-password", credentials);

const forgotPassword = async (credentials: ForgotPasswordPayload) =>
  apiClient.post("/auth/forgot-password", credentials);

const signup = async (credentials: SignupPayload) =>
  apiClient.post("/auth/signup", credentials);

const logout = async () => apiClient.post("/auth/logout");

export default {
  signup,
  login,
  resetPassword,
  forgotPassword,
  logout,
};
