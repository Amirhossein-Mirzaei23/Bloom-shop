// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui", "@vesp/nuxt-fontawesome",'nuxt-icons', '@nuxtjs/i18n','@formkit/nuxt'],
  plugins: [
    '~/plugins/axios'
    
  ],
  css: ['~/assets/css/tailwind.css','@fortawesome/fontawesome-svg-core/styles.css','~/assets/css/font.css'],
  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar'],
      regular: ['user']
    }
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
     // apiBase:'http://localhost:5000/api'
    }
  }
})