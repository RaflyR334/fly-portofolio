import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Σ</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Lab</li>
      </ul>
    </nav>
  );
};

export default Navbar;
