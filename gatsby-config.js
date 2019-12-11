module.exports = {
  siteMetadata: {
    title: `Gatsby ❤️ Notion`,
    description: `build site with gatsby & notion`,
    author: `@mayneyao`,
  },
  plugins: [
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/4b50defc60ce4e89a6539f511d9d946f?v=8e71dde4479040b5a3e6ca0d91d3d8e6',
            cacheType: 'html'
          },
          {
            name: 'books',
            table: 'https://www.notion.so/4ae9328e650945eb9adbd882b3b453d3?v=0966bdbd0645437cbcc62e6a933e241c',
            cacheType: 'static'
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-notion`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
