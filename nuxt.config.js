import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Official Vue.js Israel Community",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'VueJS Israel meetup - workshop - community' },
      { hid: 'og:image', content:"https://res.cloudinary.com/mayashavin/image/upload/v1552841630/VueJS%20Israel/logo_square.png", property: 'og:image', name: 'og:image' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://res.cloudinary.com/mayashavin/image/upload/v1552841630/VueJS%20Israel/logo_square.png' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  meta: {
    name: "Official Vue.js Israel Community",
    ogTitle: "Official Vue.js Israel Community",
    ogSiteName: "Official Vue.js Israel Community - Meetups | Workshops",
    ogDescription: "Everything for Vue Community in Israel",
    ogUrl: "https://vuejsisrael.com",
    ogImage: "https://res.cloudinary.com/mayashavin/image/upload/v1552841630/VueJS%20Israel/logo_square.png",
    twitterCard: "summary",
    twitterCreator: "@vuejsisrael",
    twitterSite: "@vuejsisrael",
    theme_color: "#424242"
  },
  icon: {
    iconSrc: "https://res.cloudinary.com/mayashavin/image/upload/v1552841630/VueJS%20Israel/logo_square.png"
  },
  manifest: {
    name: "Official Vue.js Israel Community",
    lang: 'en',
    short_name: "Official Vue.js Israel Community",
    start_url: "https://vuejsisrael.com",
    description: "Everything for Vue Community in Israel",
    background_color: "transparent",
    icons: [{
      src: "https://res.cloudinary.com/mayashavin/image/upload/w_48,h_48,c_fit,ar_1:1/v1552841630/VueJS%20Israel/logo_square.png",
      size: "48x48",
      type: "image/png",
    },{
      src: "https://res.cloudinary.com/mayashavin/image/upload/w_72,h_72,c_fit,ar_1:1/v1552841630/VueJS%20Israel/logo_square.png",
      size: "72x72",
      type: "image/png",
    },{
      src: "https://res.cloudinary.com/mayashavin/image/upload/w_96,h_96,c_fit,ar_1:1/v1552841630/VueJS%20Israel/logo_square.png",
      size: "96x96",
      type: "image/png",
    },{
      src: "https://res.cloudinary.com/mayashavin/image/upload/w_144,h_144,c_fit,ar_1:1/v1552841630/VueJS%20Israel/logo_square.png",
      size: "144x144",
      type: "image/png",
    },{
      src: "https://res.cloudinary.com/mayashavin/image/upload/w_168,h_168,c_fit,ar_1:1/v1552841630/VueJS%20Israel/logo_square.png",
      size: "168x168",
      type: "image/png",
    },{
      src: "https://res.cloudinary.com/mayashavin/image/upload/w_192,h_192,c_fit,ar_1:1/v1552841630/VueJS%20Israel/logo_square.png",
      size: "192x192",
      type: "image/png",
    }]
  },
}
