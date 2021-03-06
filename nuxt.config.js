import axios from "axios";

export default {
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://admin-ekspose-sulsel.000webhostapp.com/wp-json/wp/v2"
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "Ekspose Sulsel - Portal Berita Sulawesi Selatan",
    titleTemplate: "Ekspose Sulsel - Portal Berita Sulawesi Selatan",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Portal Berita Sulawesi Selatan"
      },
      {
        name: "google-site-verification",
        content: "EEgQ7byeOq_F_HG7sCIOt_8_ieexLqddiL1zb0Bh3e0"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://ekspose-sulsel.herokuapp.com"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Ekspose Sulsel - Portal Berita Sulawesi Selatan"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Portal Berita Sulawesi Selatan"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://ekspose-sulsel.herokuapp.com/logo.png"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:domain",
        property: "twitter:domain",
        content: "ekspose-sulsel.herokuapp.com"
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://ekspose-sulsel.herokuapp.com"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Ekspose Sulsel - Portal Berita Sulawesi Selatan"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Ekspose Sulsel - Portal Berita Sulawesi Selatan"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://ekspose-sulsel.herokuapp.com/logo.png"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@kalamangna"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "~plugins/ga.js", mode: "client" }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/sitemap"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  },

  sitemap: {
    routes: async () => {
      let url =
        process.env.BASE_URL ||
        "https://admin-ekspose-sulsel.000webhostapp.com/wp-json/wp/v2";
      let { data } = await axios.get(`${url}/posts`);
      return data.map(post => `/posts/${post.slug}`);
    }
  }
};
