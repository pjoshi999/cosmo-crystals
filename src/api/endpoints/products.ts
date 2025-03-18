import { apiClient } from "../apiClient";

export type ProductFilters = {
  page?: number;
  limit?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
};

export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters: ProductFilters) =>
    [...productKeys.lists(), { filters }] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
};

export const fetchProducts = async (filters: ProductFilters = {}) => {
  const { data } = await apiClient.get("/products", {
    params: {
      page: filters.page || 1,
      limit: filters.limit || 20,
      category: filters.category,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      search: filters.search,
    },
  });

  return data;
};

export const fetchProductById = async (id: string) => {
  const { data } = await apiClient.get(`/products/${id}`);
  return data;
};
