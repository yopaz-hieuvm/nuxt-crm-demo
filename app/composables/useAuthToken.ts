import { useStorage } from "@vueuse/core";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "~/const/token";

export function useAuthToken() {
  const accessToken = useStorage<string | null>(ACCESS_TOKEN, null);
  const refreshToken = useStorage<string | null>(REFRESH_TOKEN, null);

  function setTokens(a?: string | null, r?: string | null) {
    if (typeof a !== "undefined") accessToken.value = a;
    if (typeof r !== "undefined") refreshToken.value = r;
  }

  function clearTokens() {
    accessToken.value = null;
    refreshToken.value = null;
  }

  return { accessToken, refreshToken, setTokens, clearTokens };
}
