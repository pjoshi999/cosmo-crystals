import { cartKeys } from "@/api/endpoints/cart";
import { queryClient } from "@/app/QueryProvider";
import cartService from "@/services/cartService";
import { CartItemPayload, CartItemResponse } from "@/types";
import { ApiError } from "@/types/error";
import { handleApiError } from "@/utils/apiHelpers";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const addToCartService = createAsyncThunk(
  "cart/addToCart",
  async (data: CartItemPayload, thunkAPI) => {
    try {
      const response = await cartService.addToCart(data);
      if (response && response.data) {
        queryClient.invalidateQueries({ queryKey: cartKeys.lists() });
        return response.data;
      }
      throw new Error("No data found");
    } catch (error) {
      console.log("Login Error:", error);
      const { error: errorDetails } = handleApiError(error as ApiError);

      return thunkAPI.rejectWithValue(errorDetails);
    }
  }
);

export const updateCartService = createAsyncThunk(
  "cart/updateCart",
  async (data: CartItemPayload, thunkAPI) => {
    try {
      const response = await cartService.updateCart(data);
      if (response && response.data) {
        queryClient.invalidateQueries({ queryKey: cartKeys.lists() });
        return response.data;
      }
      throw new Error("No data found");
    } catch (error) {
      console.log("Login Error:", error);
      const { error: errorDetails } = handleApiError(error as ApiError);

      return thunkAPI.rejectWithValue(errorDetails);
    }
  }
);

export const removeFromCartService = createAsyncThunk(
  "cart/removeFromCart",
  async (data: { productId: string }, thunkAPI) => {
    try {
      const response = await cartService.removeFromCart(data);
      if (response && response.data) {
        queryClient.invalidateQueries({ queryKey: cartKeys.lists() });
        return response.data;
      }
      throw new Error("No data found");
    } catch (error) {
      console.log("Login Error:", error);
      const { error: errorDetails } = handleApiError(error as ApiError);

      return thunkAPI.rejectWithValue(errorDetails);
    }
  }
);

interface CartState {
  loading: boolean;
  error: Record<string, string[]> | null;
}

const initialState: CartState = {
  loading: false,
  error: null,
};

// Define your user slice
const cartSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartService.pending, (state) => {
        console.log("Add to cart service is pending...");
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addToCartService.fulfilled,
        (state, action: PayloadAction<CartItemResponse>) => {
          console.log("Add to cart service successful:", action.payload);
          state.error = null;
          state.loading = false;
        }
      )
      .addCase(addToCartService.rejected, (state, action) => {
        console.log("Add to cart service failed:", action.payload);
        state.error = action.payload as Record<string, string[]>;
        state.loading = false;
      });

    builder
      .addCase(updateCartService.pending, (state) => {
        console.log("Update cart service is pending...");
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateCartService.fulfilled,
        (state, action: PayloadAction<CartItemResponse>) => {
          console.log("Update cart service successful:", action.payload);
          state.error = null;
          state.loading = false;
        }
      )
      .addCase(updateCartService.rejected, (state, action) => {
        console.log("Update cart service failed:", action.payload);
        state.error = action.payload as Record<string, string[]>;
        state.loading = false;
      });

    builder
      .addCase(removeFromCartService.pending, (state) => {
        console.log("Remove from cart service is pending...");
        state.loading = true;
        state.error = null;
      })
      .addCase(
        removeFromCartService.fulfilled,
        (state, action: PayloadAction<{ message: string }>) => {
          console.log("Remove from cart service successful:", action.payload);
          state.error = null;
          state.loading = false;
        }
      )
      .addCase(removeFromCartService.rejected, (state, action) => {
        console.log("Remove from cart service failed:", action.payload);
        state.error = action.payload as Record<string, string[]>;
        state.loading = false;
      });
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
