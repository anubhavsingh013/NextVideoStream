import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Next Video Streaming</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" children>About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
