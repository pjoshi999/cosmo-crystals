import { apiClient } from "../apiClient";
import { OrderPayload } from "@/types";

export const placeOrder = async (payload: OrderPayload) => {
  const { data } = await apiClient.post("/orders", payload);
  return data;
};
