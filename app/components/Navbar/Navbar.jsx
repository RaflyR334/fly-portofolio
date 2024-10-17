import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar">
  <div class="logo">
    <span>Σ</span>
  </div>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="menu-icon" onclick="toggleMenu()">
    &#9776;
  </div>
</nav>

  );
};

export default Navbar;