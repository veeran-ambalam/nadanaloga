require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Nadanaloga.com`,
    description: `Nadanaloga School of classical dance was instituted to impart Bharathanatyam skills and faithfully nurture our classical Bharathanatyam traditions.`,
    author: `Nadanaloga`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price', 'Product', 'ApplicationFee', 'Sku', 'Subscription'],
        secretKey:  process.env.GATSBY_SECRET_KEY,
        downloadFiles: false,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAK_gLpdhaZUvX9beDdC5A16o1puHlKp0s",
          authDomain: "loan-clix.firebaseapp.com",
          databaseURL: "https://loan-clix.firebaseio.com",
          projectId: "loan-clix",
          storageBucket: "loan-clix.appspot.com",
          messagingSenderId: "767564628272",
          appId: "1:767564628272:web:e39e91d5c9b05e472c08f5",
          measurementId: "G-R6SF85CWJ9"
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
