require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata:{
    title: "Alex Leung",
    description: "A personal website of Alex Leung",
    author: "@christinayun",
    twitterUsername: "@acl1n4l",
    image: "/twitter.png",
    siteUrl: process.env.METADATA_SITE_URL
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`experiences`, `blogs`],
        //If using single types place them in this array.
        singleTypes: [`about`]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Parisienne`
          },
          {
            family: `Poppins`,
            variants: [`400`, `700`]
          },
          {
            family: `Playfair+Display`,
            variants: [`500`]
          }
        ],
      },
    },
  ],
}
