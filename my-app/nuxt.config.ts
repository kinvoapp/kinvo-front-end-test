export default defineNuxtConfig({
  head: {
    title: "gaqno development",
    htmlAttrs: {
      lang: "pt-BR"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/assets/favicon.png" }
    ]
  },
  i18n: {
    locales: [
      { code: "en", name: "English" },
      { code: "pt", name: "Português" },
      { code: "es", name: "Español" }
    ]
  },
  loading: {
    color: "#fff"
  },
  transpile: ["@vuepic/vue-datepicker"],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ["@pinia/nuxt", {
      autoImports: [
        // automatically imports `defineStore`
        "defineStore", // import { defineStore } from 'pinia'
        // automatically imports `defineStore` as `definePiniaStore`
        ["defineStore", "definePiniaStore"] // import { defineStore as definePiniaStore } from 'pinia'
      ]
    }
    ],
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss"
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  typescript: {
    strict: true
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    // Its only an example, not hardcode values here, consider use Envs
    // Keys within public are also exposed client-side
    public: {
      apiBase: process.env.API_BASE
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/device",
    "nuxt-icon",
    "@pinia/nuxt"
  ]
});
