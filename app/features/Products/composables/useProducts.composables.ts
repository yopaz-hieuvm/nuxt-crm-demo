import type { Product } from "../types";

export const useProducts = () => {
  const { api } = useApi();
  const isLoading = ref(false);
  const products = ref<Product[]>([]);

  const getProducts = async () => {
    try {
      isLoading.value = true;
      const res = await api<Product[]>("products", {
        method: "GET",
      });
      products.value = res;
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.value = false;
    }
  };

  getProducts();

  return {
    isLoading,
    products,
  };
};
