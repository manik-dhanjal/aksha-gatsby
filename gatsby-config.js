const path = require("path")

module.exports = {
  plugins: [
    // {
    //   resolve: "gatsby-source-wordpress-experimental",
    //   options: {
    //     url: "https://aksha.com/aksha-website",
    //   },
    // },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "aksha-demo.000webhostapp.com",
        protocol: "https",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: true,
       },
     },
    "gatsby-plugin-styled-components",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
