export const cartKeys = {
  all: ["cart"] as const,
  lists: () => [...cartKeys.all, "list"] as const,
};

import { getCart } from "@/services/cartStore";

export const fetchCartItems = async () => {
  const cart = getCart();
  return Promise.resolve(cart);
};
