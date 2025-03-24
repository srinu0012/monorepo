import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/productService";

export function useProducts() {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextSkip ?? undefined,
  });
}
