import { cartKeys } from "@/api/endpoints/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AddToCartPayload, CartItemPayload } from "@/types";
import cartService from "@/services/cartService";

export const useCartMutations = () => {
  const queryClient = useQueryClient();

  const addToCart = useMutation({
    mutationFn: (payload: AddToCartPayload) => {
      return cartService.addToCart(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartKeys.lists(),
      });
    },
  });

  const updateCartItem = useMutation({
    mutationFn: (payload: CartItemPayload) => cartService.updateCart(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartKeys.lists(),
      });
    },
  });

  const removeFromCart = useMutation({
    mutationFn: (productId: string) =>
      cartService.removeFromCart({ productId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartKeys.lists(),
      });
    },
  });

  return {
    addToCart,
    updateCartItem,
    removeFromCart,
  };
};
