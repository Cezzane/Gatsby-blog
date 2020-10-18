/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Gatsby Demo',
    author:'Pierre'
  },
  plugins: [`gatsby-plugin-sass`,
  'gatsby-plugin-react-helmet',

  {
    resolve:'gatsby-source-contentful',
    options:{
      spaceId:process.env.CONTENTFUL_SPACE_ID,
      accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
    }
  },
  
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',



    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options:{
              maxWidth:750,
              linkImagesToOriginal:false
            }
          }
        ],
      },
    }
  ]
  
}
