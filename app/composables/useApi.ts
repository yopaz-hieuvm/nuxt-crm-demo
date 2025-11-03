import type { HttpMethod, ResponseToken } from "~/types/api.types";

export const useApi = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl as string;

  const { accessToken, refreshToken, setTokens, clearTokens } = useAuthToken();
  const core = $fetch.create({ baseURL });

  const api = $fetch.create({
    baseURL,
    onRequest({ options }) {
      if (accessToken.value) {
        const h = new Headers(options.headers);
        h.set("Authorization", `Bearer ${accessToken.value}`);
        options.headers = h;
      }
    },
    async onResponseError({ response, request, options }) {
      if (response.status === 401) {
        try {
          if (!refreshToken.value) {
            clearTokens();
            throw new Error("No refresh token available");
          }
          const data = await core<ResponseToken>("/auth/refresh-token", {
            method: "POST",
            body: { refresh_token: refreshToken.value },
          });
          setTokens(data.access_token, data.refresh_token);
          const h = new Headers(options.headers);
          h.set("Authorization", `Bearer ${data.access_token}`);

          return await $fetch(request, {
            ...options,
            method: options.method as HttpMethod,
            headers: h,
          });
        } catch (err) {
          console.log(err);
          clearTokens();
          navigateTo("/login");
        }
      }
    },
  });

  return { api };
};
