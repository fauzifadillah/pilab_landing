export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  router: {
    linkActiveClass: "text-orange-400",
  },
  head: {
    title: 'Padjadjaran Lab' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Padjadjaran Lab Official Website 2020' || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css' },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: './plugins/vue-awesome-swiper.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/vuetify',
    // '@nuxtjs/tailwindcss'
    ['@nuxtjs/google-analytics', {
      id: 'UA-163427652-1'
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/svg'],
  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
