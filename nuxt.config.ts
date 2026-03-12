export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@nuxt/icon',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  site: {
    url: 'https://jamacoder.uz',
    name: 'Jamshid Raximov - Full Stack Developer',
    description: 'Full Stack Developer portfolio - building modern web applications',
    defaultLocale: 'uz',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'uz' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  css: ['~/assets/css/main.css'],
})
