const siteMetadata = require("./config/metadata")

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Guilherme Bromonschenkel",
        short_name: "GuilhermeBkel",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#0598e3",
        display: "standalone",
        icon: "src/assets/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#0598e3",
        showSpinner: true
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-140879800-1",
      }
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Lato",
            variants: ["300", "500", "700"]
          }
        ]
      }
    },
    "gatsby-plugin-offline",
  ]
}
