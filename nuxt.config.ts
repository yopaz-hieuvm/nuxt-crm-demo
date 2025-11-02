import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "vuetify-nuxt-module",
    "@nuxt/eslint",
    "@vee-validate/nuxt",
    "nuxt-toast",
  ],
  css: ["@/assets/styles/index.scss"],
  runtimeConfig: {
    public: { apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || "" },
  },
  ssr: false,
});
