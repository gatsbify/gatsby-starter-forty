module.exports = {
  siteMetadata: {
    title: 'Gatsbify - Website Conversion Service',
    author: '@gatsbify.team',
    description: 'Gatsby Website converter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
