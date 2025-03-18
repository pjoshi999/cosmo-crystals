export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ResetPasswordPayload {
  resetToken: string
  newPassword: string;
}

export interface ForgotPasswordPayload {
  email: string;
}
