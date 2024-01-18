// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true,
    disable: ["performance", "network"],
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
