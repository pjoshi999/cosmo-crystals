import { useMutation, useQueryClient } from "@tanstack/react-query";
import { placeOrder } from "@/api/endpoints/order";
import { cartKeys } from "@/api/endpoints/cart";
import cartStore from "@/services/cartStore";
import { OrderPayload } from "@/types";

export const useOrderMutation = () => {
  const queryClient = useQueryClient();

  const placeOrderMutation = useMutation({
    mutationFn: (payload: OrderPayload) => placeOrder(payload),
    onSuccess: () => {
      // Clear local cart store
      cartStore.clearCart();

      // Invalidate cart queries to sync with server
      queryClient.invalidateQueries({
        queryKey: cartKeys.lists(),
      });
    },
  });

  return {
    placeOrderMutation,
  };
};
