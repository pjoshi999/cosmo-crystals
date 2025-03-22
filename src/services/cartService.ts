import { CartItemPayload } from "@/types";
import { apiClient } from "../api/apiClient";

const addToCart = async (data: CartItemPayload) =>
  apiClient.post("/cart", data);

const updateCart = async (data: CartItemPayload) =>
  apiClient.patch("/cart", data);

const removeFromCart = async (data: { productId: string }) =>
  apiClient.delete(`/cart/${data.productId}`);

export default {
  addToCart,
  updateCart,
  removeFromCart,
};
