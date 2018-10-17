import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps.</h1>
        <p>Lerning how to create a React app from Design+Code. Very intersting stuff here, and a lot to learn.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div> 
    </div>

  </Layout>
)

export default IndexPage
