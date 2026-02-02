import { Product, CartItemResponse } from "@/types";

const CART_KEY = "cosmo_cart";

export const getCart = (): CartItemResponse[] => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (
  product: Product,
  quantity: number,
): CartItemResponse[] => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(
    (item) => item.productId === product.id,
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: Date.now().toString(), // Simple ID generation
      productId: product.id,
      product,
      quantity,
    });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
};

export const updateQuantity = (
  productId: string,
  quantity: number,
): CartItemResponse[] => {
  const cart = getCart();
  const updatedCart = cart.map((item) => {
    if (item.productId === productId) {
      return { ...item, quantity };
    }
    return item;
  });

  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  return updatedCart;
};

export const removeFromCart = (productId: string): CartItemResponse[] => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.productId !== productId);
  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  return updatedCart;
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};

export default {
  getCart,
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
};
