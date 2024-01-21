// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true,
    disable: ["performance", "network"],
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["./modules/antd", "@pinia/nuxt"],
  css: ["@/assets/styles/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
        scss: {
          additionalData:
            '@import "@/assets/styles/variables.scss";@import "@/assets/styles/mixins.scss";',
        },
      },
    },
  },
});
