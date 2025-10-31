import type { Product } from "../types";

export const useProducts = () => {
  const { api } = useApi();
  const isLoading = ref(false);
  const products = ref<Product[]>([]);

  const getProducts = async () => {
    isLoading.value = true;
    await api<Product[]>("products", {
      method: "GET",
    })
      .then((res) => {
        products.value = res;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  getProducts();

  return {
    isLoading,
    products,
  };
};
