const resolve = require('path').resolve

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'MasaakiTodoroki.me - 川崎市在住のフロントエンドエンジニア',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:locale', content: 'ja_JP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosansjp.css' },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  router: {
    linkActiveClass: 'is-current'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/mixin'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
   ** style-resources module configuration
   */
  styleResources: {
    // See https://github.com/nuxt-community/style-resources-module
    scss: [resolve(__dirname, 'assets/scss/vars.scss')]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  manifest: {
    name: 'MasaakiTodoroki.me',
    short_name: 'MT',
    title: 'MasaakiTodoroki.me',
    'og:title': 'MasaakiTodoroki.me',
    description: '川崎市在住のフロントエンドエンジニア',
    'og:description': '川崎市在住のフロントエンドエンジニア',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  }
}
