// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'dark'
  },
  modules: ['@nuxt/ui', '@vueuse/nuxt'],
  devtools: { enabled: true }
})
