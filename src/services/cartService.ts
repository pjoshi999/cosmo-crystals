import { AddToCartPayload, CartItemPayload } from "@/types";
import cartStore from "./cartStore";

// Modified to accept AddToCartPayload which includes the Product object
const addToCart = async (data: AddToCartPayload) => {
  return { data: cartStore.addToCart(data.product, data.quantity) };
};

// Modified to use cartStore
const updateCart = async (data: CartItemPayload) => {
  return { data: cartStore.updateQuantity(data.productId, data.quantity) };
};

const removeFromCart = async (data: { productId: string }) => {
  return { data: cartStore.removeFromCart(data.productId) };
};

const cartService = {
  addToCart,
  updateCart,
  removeFromCart,
};

export default cartService;
