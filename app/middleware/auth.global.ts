import { useStorage } from "@vueuse/core";
import { ACCESS_TOKEN } from "~/const/token";

export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== "/login") {
    const accessToken = useStorage<string | null>(ACCESS_TOKEN, null);
    if (!accessToken.value) return navigateTo({ name: "login" });
  }
});
