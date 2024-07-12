import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='img-size' src={logo} alt="Logo" />
      <ul className='nav-menu'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#when">When</a></li>
        <li><a href="#where">Where</a></li>  
      </ul>
      <div className='check-out'>
        Come check out!
      </div>
    </div>
  );
};
