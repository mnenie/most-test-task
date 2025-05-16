export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  css: ['~/assets/styles/index.css'],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
})
