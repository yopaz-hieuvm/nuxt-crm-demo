import { ACCESS_TOKEN, REFRESH_TOKEN } from "~/const/token";

export function useAuthToken() {
  const accessToken = useCookie<string | null>(ACCESS_TOKEN);
  const refreshToken = useCookie<string | null>(REFRESH_TOKEN);

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
