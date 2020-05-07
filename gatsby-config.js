require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cumulus Bookkeeping Solutions`,
    description: `Quickbooks Online Certified Proadvisor dedicated to helping small businesses understand their financial health, streamline processes, and prepare for tax time. All packages include QBO subscription and unlimited client support.`,
    author: `Andy Hoffman`,
    image: `https://scontent-sea1-1.xx.fbcdn.net/v/t45.5328-0/c5.5.138.138a/p148x148/24293562_1528611323852591_2972124794830454784_n.png?_nc_cat=111&_nc_sid=c48759&_nc_ohc=3X8Qu9Mpq20AX_M-3hB&_nc_ht=scontent-sea1-1.xx&oh=d2dab6a2fc6061754e1e8e4bb4c89926&oe=5ECAD514`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://cumulusbookkeeper.us4.list-manage.com/subscribe/post?u=a9dbc0592f1061ce7ba78351d&amp;id=fc2a3e95ef", // add your MC list endpoint here; see instructions below
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Cumulus Bookkeeping Solutions",
        short_name: "Cumulus",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon-32x32.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
