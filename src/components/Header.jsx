import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Navigation Bar Only - Removed Logo Banner */}
      <nav className="header">
        <div className="navbar">
          <div className="logo">FPT Aptech</div>
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#locations">Locations</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="#signin" className="btn btn-outline">Sign In</a>
            <a href="#signup" className="btn btn-primary">Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;