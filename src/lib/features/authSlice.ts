import authService from "@/services/authService";
import {
  ForgotPasswordPayload,
  LoginPayload,
  LoginResponse,
  ResetPasswordPayload,
  SignupPayload,
} from "@/types/auth";
import { ApiError } from "@/types/error";
import { handleApiError } from "@/utils/apiHelpers";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cookieOptions = { expires: 30, secure: true };

export const signupService = createAsyncThunk(
  "auth/signup",
  async (data: SignupPayload, thunkAPI) => {
    try {
      const response = await authService.signup(data);
      if (response && response.data) {
        return response.data;
      }
      throw new Error("No data found");
    } catch (error) {
      // console.log("Login Error:", error);
      const { error: errorDetails } = handleApiError(error as ApiError);

      return thunkAPI.rejectWithValue(errorDetails);
    }
  }
);

export const loginService = createAsyncThunk(
  "auth/login",
  async (data: LoginPayload, thunkAPI) => {
    try {
      const response = await authService.login(data);
      if (response && response.data) {
        return response.data;
      }
      throw new Error("No data found");
    } catch (error) {
      // // console.log("Login Error:", error);

      const { error: errorDetails } = handleApiError(error as ApiError);

      return thunkAPI.rejectWithValue(errorDetails);
    }
  }
);

export const resetPasswordService = createAsyncThunk(
  "auth/resetPassword",
  async (data: ResetPasswordPayload, thunkAPI) => {
    try {
      const response = await authService.resetPassword(data);
      if (response && response.data) {
        return response.data;
      }
      throw new Error("No data found");
    } catch (error) {
      // console.log("Login Error:", error);

      const { error: errorDetails } = handleApiError(error as ApiError);

      return thunkAPI.rejectWithValue(errorDetails);
    }
  }
);

export const forgotPasswordService = createAsyncThunk(
  "auth/forgotPassword",
  async (data: ForgotPasswordPayload, thunkAPI) => {
    try {
      const response = await authService.forgotPassword(data);
      if (response && response.data) {
        return response.data;
      }
      throw new Error("No data found");
    } catch (error) {
      // console.log("Login Error:", error);

      const { error: errorDetails } = handleApiError(error as ApiError);

      return thunkAPI.rejectWithValue(errorDetails);
    }
  }
);

export const logoutService = createAsyncThunk(
  "auth/logout",
  async (data: null, thunkAPI) => {
    try {
      const response = await authService.logout();
      if (response && response.data) {
        return response.data;
      }
      throw new Error("No data found");
    } catch (error) {
      // console.log("Login Error:", error);

      const { error: errorDetails } = handleApiError(error as ApiError);

      return thunkAPI.rejectWithValue(errorDetails);
    }
  }
);

interface AuthState {
  loading: boolean;
  error: Record<string, string[]> | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
};

// Define your user slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginService.pending, (state) => {
        // console.log("Login service is pending...");
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginService.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          // console.log("Login successful:", action.payload);
          state.error = null;
          state.loading = false;
          Cookies.set("accessToken", action.payload.accessToken, cookieOptions);
          Cookies.set(
            "refreshToken",
            action.payload.refreshToken,
            cookieOptions
          );
        }
      )
      .addCase(loginService.rejected, (state, action) => {
        // console.log("Login failed:", action.payload);
        state.error = action.payload as Record<string, string[]>;
        state.loading = false;
      });

    builder
      .addCase(signupService.pending, (state) => {
        // console.log("Signup is pending...");
        state.loading = true;
        state.error = null;
      })
      .addCase(
        signupService.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          // console.log("Signup successful:", action.payload);
          state.error = null;
          state.loading = false;
          Cookies.set("accessToken", action.payload.accessToken, cookieOptions);
          Cookies.set(
            "refreshToken",
            action.payload.refreshToken,
            cookieOptions
          );
        }
      )
      .addCase(signupService.rejected, (state, action) => {
        // console.log("Signup failed:", action.payload);
        state.error = action.payload as Record<string, string[]>;
        state.loading = false;
      });

    builder
      .addCase(forgotPasswordService.pending, (state) => {
        // console.log("Forgot password is pending...");
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPasswordService.fulfilled, (state) => {
        // console.log("Forgot password successful!");
        state.error = null;
        state.loading = false;
      })
      .addCase(forgotPasswordService.rejected, (state, action) => {
        // console.log("Forgot password failed:", action.payload);
        state.error = action.payload as Record<string, string[]>;
        state.loading = false;
      });

    builder
      .addCase(resetPasswordService.pending, (state) => {
        // console.log("Reset password is pending...");
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPasswordService.fulfilled, (state) => {
        // console.log("Reset password successful!");
        state.error = null;
        state.loading = false;
      })
      .addCase(resetPasswordService.rejected, (state, action) => {
        // console.log("Reset password failed:", action.payload);
        state.error = action.payload as Record<string, string[]>;
        state.loading = false;
      });

    builder
      .addCase(logoutService.pending, (state) => {
        // console.log("Logout service is pending...");
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutService.fulfilled, (state) => {
        // console.log("Logout successful");
        state.error = null;
        state.loading = false;
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
      })
      .addCase(logoutService.rejected, (state, action) => {
        // console.log("Logout failed:", action.payload);
        state.error = action.payload as Record<string, string[]>;
        state.loading = false;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
