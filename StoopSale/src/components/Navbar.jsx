import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='img-size' src={logo} alt="" />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Where</li>
            <li>When</li>
        </ul>
        <div className='check-out'>
            Come check out!
        </div>
    </div>
  )
}
