// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-quasar-ui",
    "@vesp/nuxt-fontawesome",
    'nuxt-icons',
    '@nuxtjs/i18n',
    '@formkit/nuxt',
    '@pinia/nuxt',
    
  ],

  plugins: [
    '~/plugins/axios',
    '~/plugins/vuetify'
  ],

  css: ['~/assets/css/tailwind.css','@fortawesome/fontawesome-svg-core/styles.css','~/assets/css/font.css',  'vuetify/styles'],

  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar'],
      regular: ['user']
    }
  },
  build: {
    transpile: ['vuetify'],
  },
 

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig:{
    public:{

   apiBase:'https://bloom-gift.liara.run/api'
//     apiBase:'http://localhost:5000/api'

    }
  },

  compatibilityDate: '2024-07-13'
})