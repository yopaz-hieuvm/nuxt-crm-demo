import { ACCESS_TOKEN } from "~/const/token";

export default defineNuxtRouteMiddleware((to) => {
  const publicPages = ["login"];
  const isPublicPage = publicPages.includes(to.name as string);
  if (!isPublicPage) {
    const accessToken = useCookie<string | null>(ACCESS_TOKEN);
    if (!accessToken.value) return navigateTo({ name: "login" });
  }
});
