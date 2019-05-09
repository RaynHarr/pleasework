module.exports = {
  siteMetadata: {
    title: 'P L E A S E',
    description: 'Complete stuff',
    keywords: 'garage, punk',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '4pw9mf2c4rpr',
        accessToken:
          '1f9e7131b488d516c010c30058e9e66d6aa8a001427f7efaa9770d5ce28b84a7',
      },
    },
  ],
}
