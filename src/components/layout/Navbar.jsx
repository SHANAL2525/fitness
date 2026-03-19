import React from "react";
import "../../styles/navbar.css";
import siteLogo from "../../assets/site-logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-shell">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">
            <img src={siteLogo} alt="Fitness Sports Center Logo" />
          </a>

          <nav className="navbar-menu">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICE</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;