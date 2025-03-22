import { apiClient } from "@/api/apiClient";
import { cartKeys } from "@/api/endpoints/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type AddToCartPayload = {
  productId: string;
  quantity: number;
};

type UpdateCartItemPayload = {
  productId: string;
  quantity: number;
};

export const useCartMutations = () => {
  const queryClient = useQueryClient();

  const addToCart = useMutation({
    mutationFn: (payload: AddToCartPayload) => {
      return apiClient.post("/cart", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartKeys.lists(),
      });
    },
  });

  const updateCartItem = useMutation({
    mutationFn: (payload: UpdateCartItemPayload) =>
      apiClient.put(`/cart`, {
        quantity: payload.quantity,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: cartKeys.lists(),
      });
    },
  });

  const removeFromCart = useMutation({
    mutationFn: (productId: string) => apiClient.delete(`/cart/${productId}`),
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
