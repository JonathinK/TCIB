require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `The Church In Brielle`,
    description: `We are an open and inclusive church. We welcome all from our communities as we interpret the word of god, while creating a center of spiritual wellness.`,
    author: `Diamond Digital Services`,
    menuLinks: [
      {
        name:`I'm New`,
        link:`/im-new`,
      },
      {
        name:`About`,
        subMenu:[
          {
            name:`History`,
            link:`/about/history`,
          },
          {
            name:`Our Beliefs`,
            link:`/about/our-beliefs`,
          },
          {
            name:`Staff`,
            link:`/about/staff`,
          },
          {
            name:`Inclusivity Message`,
            link:`/about/inclusivity-message`
          },
        ]
      },
      {
        name:`Connect`,
        subMenu:[
          {
            name:`Daily Devotions`,
            link:`/connect/daily-devotions`
          },
          {
            name:`Ministries`,
            link:`/connect/ministries`,
          },
          {
            name:`Life Groups`,
            link:`/connect/life-groups`,
          },
          {
            name:`Pre School`,
            link:`/connect/pre-school`,
          },
          {
            name:`Prayer Request`,
            link:`/connect/prayer-request`,
          }
        ]
      },
      {
        name:`Events`,
        link:`/events`, 
      },
      {
        name:`Resources`,
        subMenu: [
          {
            name:`Covid Info`,
            link:`/resources/covid-info`,
          },
          {
            name:`Bible Study`,
            link:`/resources/bible-study`,
          },
          {
            name:`Home Activities`,
            link:`/resources/home-activities`,
          },
          {
            name:`Gardens`,
            link:`/resources/gardens`,
          },
          {
            name:`Directory Update`,
            link:`/resources/directory-update`,
          },
        ]
      },
      {
        name:`Give`,
        link:`/give`
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `Data`,
        path: `${__dirname}/src/Data`,
      }
    },
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, 
    /* {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nlhev9e9bx20`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`,
      },
    }, */
    
    {
      resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /assets/
         }
       }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    //d To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

