import React, { useState } from 'react';


const Navbar = ({ onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <span className="logo">Your Logo</span> */}
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => { onSectionClick('home'); setIsMenuOpen(false); }}>Home</a></li>
        <li><a href="#contact" onClick={() => { onSectionClick('contact'); setIsMenuOpen(false); }}>Contact</a></li>
        <li><a href="#accommodation" onClick={() => { onSectionClick('accommodation'); setIsMenuOpen(false); }}>Accommodation</a></li>
        <li><a href="#places" onClick={() => { onSectionClick('places'); setIsMenuOpen(false); }}>Places</a></li>
        <li><a href="#restaurants" onClick={() => { onSectionClick('restaurants'); setIsMenuOpen(false); }}>Restaurants</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
