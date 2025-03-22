import { countryKeys, fetchCountryList } from "@/api/endpoints/countries";
import { useQuery } from "@tanstack/react-query";

export const useCountries = () => {
  return useQuery({
    queryKey: countryKeys.lists(),
    queryFn: () => fetchCountryList(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours - keep data fresh for a day
    gcTime: 7 * 24 * 60 * 60 * 1000, // 7 days - cache for a week
  });
};
