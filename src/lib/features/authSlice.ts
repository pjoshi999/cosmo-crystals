// import authService from "@/services/authService";
// import { ApiError } from "@/types/api";
// import { handleApiError } from "@/utils/apiHelpers";
// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import cookies from "js-cookie";

// interface AuthState {
//   user: null;
//   loading: boolean;
//   error: Record<string, string[]> | null;
// }

// interface LoginPayload {
//   phone_number: string;
//   password: string;
// }

// interface LoginResponse {
//   access: string;
//   refresh: string;
// }

// interface ResetPasswordPayload {
//   phone_number: string;
//   otp: string;
//   password: string;
// }

// interface ForgotPasswordPayload {
//   phone_number: string;
// }

// interface ResetPasswordPayload {
//   phone_number: string;
//   otp: string;
//   password: string;
// }

// export const loginServiceAdmin = createAsyncThunk(
//   "auth/loginAdmin",
//   async (data: LoginPayload, thunkAPI) => {
//     try {
//       const response = await authService.loginAdmin(data);
//       if (response && response.data) {
//         console.log(response.data);
//         const cookieOptions = { expires: 30, secure: true };
//         Cookies.set("accessToken", response.data?.access, cookieOptions);
//         Cookies.set("refreshToken", response.data?.refresh, cookieOptions);

//         return response.data;
//       }
//       throw new Error("No data found");
//     } catch (error) {
//       console.log(error);
//       if (error instanceof Error) {
//         const { error: errorDetails } = handleApiError(error as ApiError);

//         return thunkAPI.rejectWithValue(errorDetails);
//       }
//       throw error;
//     }
//   }
// );

// export const loginServiceStaff = createAsyncThunk(
//   "auth/loginStaff",
//   async (data: LoginPayload, thunkAPI) => {
//     try {
//       const response = await authService.loginStaff(data);
//       if (response && response.data) {
//         console.log(response.data);
//         const cookieOptions = { expires: 30, secure: true };
//         Cookies.set("accessToken", response.data?.access, cookieOptions);
//         Cookies.set("refreshToken", response.data?.refresh, cookieOptions);

//         return response.data;
//       }
//       throw new Error("No data found");
//     } catch (error) {
//       console.log(error);
//       if (error instanceof Error) {
//         const { error: errorDetails } = handleApiError(error as ApiError);

//         return thunkAPI.rejectWithValue(errorDetails);
//       }
//       throw error;
//     }
//   }
// );

// export const resetPasswordService = createAsyncThunk(
//   "auth/resetPassword",
//   async (data: ResetPasswordPayload, thunkAPI) => {
//     try {
//       const response = await authService.resetPassword(data);
//       if (response && response.data) {
//         return response.data;
//       }
//       throw new Error("No data found");
//     } catch (error) {
//       if (error instanceof Error) {
//         const { error: errorDetails } = handleApiError(error as ApiError);
//         console.log("error:", errorDetails);

//         return thunkAPI.rejectWithValue(errorDetails);
//       }
//       throw error;
//     }
//   }
// );

// export const forgotPasswordService = createAsyncThunk(
//   "auth/forgotPassword",
//   async (data: ForgotPasswordPayload, thunkAPI) => {
//     try {
//       const response = await authService.forgotPassword(data);
//       if (response && response.data) {
//         return response.data;
//       }
//       throw new Error("No data found");
//     } catch (error) {
//       if (error instanceof Error) {
//         const { error: errorDetails } = handleApiError(error as ApiError);
//         console.log("error:", errorDetails);

//         return thunkAPI.rejectWithValue(errorDetails);
//       }
//       throw error;
//     }
//   }
// );

// const initialState: AuthState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// // Define your user slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.loading = false;
//       state.error = null;
//       Cookies.remove("accessToken");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginServiceAdmin.pending, (state) => {
//         console.log("Login service is pending...");
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(
//         loginServiceAdmin.fulfilled,
//         (state, action: PayloadAction<LoginResponse>) => {
//           console.log("Login successful:", action.payload);
//           state.error = null;
//           state.loading = false;
//           Cookies.set("accessToken", action.payload.access, {
//             expires: 30,
//             secure: true,
//           });
//           Cookies.set("refreshToken", action.payload.refresh, {
//             expires: 30,
//             secure: true,
//           });
//         }
//       )
//       .addCase(loginServiceAdmin.rejected, (state, action) => {
//         console.log("Login failed:", action.payload);
//         state.error = action.payload as Record<string, string[]>;
//         state.loading = false;
//       });

//     builder
//       .addCase(loginServiceStaff.pending, (state) => {
//         console.log("Login Staff service is pending...");
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(
//         loginServiceStaff.fulfilled,
//         (state, action: PayloadAction<LoginResponse>) => {
//           console.log("Login Staff successful:", action.payload);
//           state.error = null;
//           state.loading = false;
//           Cookies.set("accessToken", action.payload.access, {
//             expires: 30,
//             secure: true,
//           });
//           Cookies.set("refreshToken", action.payload.refresh, {
//             expires: 30,
//             secure: true,
//           });
//         }
//       )
//       .addCase(loginServiceStaff.rejected, (state, action) => {
//         console.log("Login Staff failed:", action.payload);
//         state.error = action.payload as Record<string, string[]>;
//         state.loading = false;
//       });

//     builder
//       .addCase(forgotPasswordService.pending, (state) => {
//         console.log("Forgot password is pending...");
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(forgotPasswordService.fulfilled, (state) => {
//         console.log("Forgot password successful!");
//         state.error = null;
//         state.loading = false;
//       })
//       .addCase(forgotPasswordService.rejected, (state, action) => {
//         console.log("Forgot password failed:", action.payload);
//         state.error = action.payload as Record<string, string[]>;
//         state.loading = false;
//       });

//     builder
//       .addCase(resetPasswordService.pending, (state) => {
//         console.log("Reset password is pending...");
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(resetPasswordService.fulfilled, (state) => {
//         console.log("Reset password successful!");
//         state.error = null;
//         state.loading = false;
//       })
//       .addCase(resetPasswordService.rejected, (state, action) => {
//         console.log("Reset password failed:", action.payload);
//         state.error = action.payload as Record<string, string[]>;
//         state.loading = false;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;
