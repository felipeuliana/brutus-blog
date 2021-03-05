const path = require('path')

module.exports = {
  siteMetadata: {
    author: 'Felipe Uliana "Brutus"',
    description: 'My blog about web development.',
    title: 'Brutus Blog'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, '/src/images')
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#011627',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
        name: 'Brutus Blog',
        short_name: 'Brutus',
        start_url: '/',
        theme_color: '#011627'
      }
    },
    'gatsby-plugin-gatsby-cloud'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
