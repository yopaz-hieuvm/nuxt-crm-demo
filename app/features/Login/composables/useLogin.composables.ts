import type { ResponseToken } from "~/types/api.types";
import type { LoginRequest } from "../types";

export const useLogin = () => {
  const { setTokens } = useAuthToken();
  const { api } = useApi();
  const isLoading = ref(false);

  const login = async (payload: LoginRequest) => {
    isLoading.value = true;
    await api<ResponseToken>("/auth/login", {
      method: "POST",
      body: payload,
    })
      .then((res) => {
        setTokens(res.access_token, res.refresh_token);
        navigateTo({ name: "index" });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  return { login, isLoading };
};
