import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  handlePurchase = (token) => {
    const amount = 5000
    const description = "My awesome product"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require('../images/please-hero.png')} width="30" />
          </Link>
          <Link to="/courses">Sedans</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <StripeCheckout
            amount={ 5000 }
            image="https://cl.ly/835b1f8ec3fb"
            token={this.handlePurchase}
            stripeKey={'pk_test_LfK4BF7s7cKWPBReiXOizbRB00Hy4FUaKG'}
            >
            <button>Buy</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}

export default Header
