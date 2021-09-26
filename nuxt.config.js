export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  globalName: "myApp",
  globals: {
    id: globalName => `${globalName}`,
    nuxt: globalName => `$${globalName}`
  },
  server: {
    host: "0.0.0.0", // default: localhost
    port: 3000 // default: 3000
  },

  loading: {
    color: "#00ab6b"
  },
  loadingIndicator: {
    name: "circle",
    color: "#00ab6b",
    background: "white"
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nur Khozin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: "author", name: "author", content: "Nur Khozin" },
      { hid: "author", name: "author", content: "annurkhozin@gmail.com" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/vue-typed.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    "nuxt-i18n",
  ],

  i18n: {
    // seo: true,
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        flag: "/flag/en.png",
      },
      {
        name: "Indonesia",
        code: "id",
        iso: "id-ID",
        file: "id-ID.js",
        flag: "/flag/id.png",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      onlyOnRoot: true, // recommended
    },
    lazy: true,
    langDir: "lang/",
    defaultLocale: "id",
  },

  bootstrapVue: {
    icons: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: "Nur Khozin",
      author: "annurkhozin@gmail.com"
    },
    manifest: {
      name: "Nur Khozin",
      short_name: "Nur Khozin",
      lang: "en",
      theme_color: "#317EFB"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: "/script/",
    babel: {
      compact: true
    },
  },

  // directory generate file
  generate: {
    dir: 'docs'
  }
}
