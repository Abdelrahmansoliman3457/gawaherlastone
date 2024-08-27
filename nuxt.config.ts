// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // socialShare: {
  //   baseUrl: 'https://www.yoursite.com' // required!
  //   // other optional module options
  // },
  devtools: { enabled: true },

  app: {
    pageTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Gawaher",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "ar", class: "html_direction" },
      meta: [{ name: "description", content: "موقع جواهر" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
    },
  },
  build: {
    transpile: ["@fawmi/vue-google-maps"],
  },

  // primevue
  modules: [
    "nuxt-primevue",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@stefanobartoletti/nuxt-social-share",
  ],
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },

  css: [
    "bootstrap/dist/css/bootstrap.rtl.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "primevue/resources/themes/lara-light-green/theme.css",
    "primevue/resources/primevue.min.css",
    "~/assets/css/style.scss",
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "primevue/resources/themes/aura-light-green/theme.css",
  ],
  primevue: {
    usePrimeVue: true,
    importPT: undefined,
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    directives: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    composables: {
      // prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
