import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import Footer from '../components/footer';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content:
        data.site.siteMetadata.keywords },
      ]}
    />
    <Header />
      {children()}
      <Footer data={data}>
      Backgrounds made fresh in Cinema 4d, iOsapp in Swift, site in React <a href="mailto:ryanmack.hill@gmail.com">Email us</a> to ask us anything.
      </Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLink (sort: {fields: [createdAt], order: ASC}) {
      edges {
        node{
          title
          url
        }
      }
    }
  }
`
