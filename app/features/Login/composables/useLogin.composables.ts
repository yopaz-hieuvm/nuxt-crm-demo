import type { ResponseToken } from "~/types/api.types";
import type { LoginRequest } from "../types";

export const useLogin = () => {
  const { setTokens } = useAuthToken();
  const { api } = useApi();
  const isLoading = ref(false);

  const login = async (payload: LoginRequest) => {
    try {
      isLoading.value = true;
      console.log(payload);
      const res = await api<ResponseToken>("/auth/login", {
        method: "POST",
        body: payload,
      });
      setTokens(res.access_token, res.refresh_token);
      await navigateTo("/");
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.value = false;
    }
  };

  return { login, isLoading };
};
