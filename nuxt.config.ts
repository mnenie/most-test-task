export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@vee-validate/nuxt',
    '@formkit/auto-animate/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/styles/index.css'],
  colorMode: {
    preference: 'light',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
  pinia: {
    storesDirs: ['./app/stores/**'],
  },
})
