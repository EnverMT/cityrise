// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/reset.css", "~/assets/css/main.css"],

  modules: ["@nuxt/hints", "@nuxt/icon", "@nuxt/fonts", "@nuxt/eslint", "@nuxt/image"],
});
