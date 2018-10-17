import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
      <Link to="/courses"><img src="" width="30" />Courses</Link>
      <Link to="/downloads"><img src="" width="30" />Downloads</Link>
      <Link to="/workshops"><img src="" width="30" />Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>    
)

export default Header
