const resolve = require('path').resolve

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'MasaakiTodoroki - Webエンジニア',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:locale', content: 'ja_JP' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/earlyaccess/notosansjp.css'
      }
    ],
    script: [{ src: '/js/easeljs-0.8.2.min.js' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/common/Loading.vue',
  router: {
    linkActiveClass: 'is-current',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
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
  modules: ['@nuxtjs/style-resources'],
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
  // generate: {
  //   interval: 500,
  //   routes: () => {
  //     return Promise
  //       .all([
  //         axios.get(`${config.default.endpoint}/wp/v2/post_all_id`)
  //       ])
  //       .then(data => {
  //         const posts = data[0]
  //         return posts.data
  //           .map(post => {
  //             return {
  //               route: '/post/' + post.id,
  //               payload: post
  //             }
  //           })
  //       })
  //   }
  // },
  manifest: {
    name: 'MasaakiTodoroki',
    short_name: 'MT',
    title: 'MasaakiTodoroki',
    description: '神奈川県川崎市在住のWebエンジニア',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  }
}
