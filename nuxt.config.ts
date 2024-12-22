export default defineNuxtConfig({

  devtools: { enabled: true },
  components: true,
  pages: true,

  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vform.js',
    '~/plugins/cookies.js',
  ],

  modules:[
    '@pinia/nuxt'
  ],

  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/style.css',
    '@/assets/css/responsive.css',
  ],

  compatibilityDate: '2024-12-21',
});