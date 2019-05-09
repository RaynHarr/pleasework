import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1 />
        <p>GARAGEBAND PUNK</p>
        <Link to="/page-2/">Watch the video NOW</Link>
        <div className="Logos">
          <img src={require('../images/please-hero.png')} width="100" />
          <img src={require('../images/flint-hero.jpg')} width="100" />
        </div>

        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>Garage to Face</h2>
      <div className="CardGroup">
        <Card
          title="Merch"
          text="She was"
          image={require('../images/please-hero.png')}
        />
        <Card
          title="Music"
          text="a dark, white ghost"
          image={require('../images/please-hero.png')}
        />
        <Card
          title="Bio"
          text="she didn't"
          image={require('../images/please-hero.png')}
        />
        <Card
          title="Engage"
          text="happen"
          image={require('../images/please-hero.png')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="Basement Punks"
      text={
        "Looking for the owner of a pink sedan? A pink sedan!....It's getting towed."
      }
    />

    <SectionCaption>12 sections - 6hrs</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
