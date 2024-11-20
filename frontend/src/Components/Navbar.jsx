import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/">registration</Link></li>
        <li><Link to="login">login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
