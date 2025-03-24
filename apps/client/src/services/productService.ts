import api from "./api.service";

export const fetchProducts = async ({ pageParam = 0 }) => {
  const limit = 5;
  const { data } = await api.get(
    `/api/v1/products?limit=${limit}&skip=${pageParam}`
  );
  return {
    products: data.products,
    nextSkip: data.products.length === limit ? pageParam + limit : null,
  };
};
