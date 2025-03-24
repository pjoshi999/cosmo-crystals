import {
  fetchProductById,
  fetchProducts,
  ProductFilters,
  productKeys,
} from "@/api/endpoints/products";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (filters: ProductFilters = {}) => {
  return useQuery({
    queryKey: productKeys.list(filters),
    queryFn: () => fetchProducts(filters),
    
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};
