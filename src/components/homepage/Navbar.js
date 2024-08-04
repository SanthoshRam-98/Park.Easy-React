import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="nav-header">
        Park.Easy
      </a>
      <a href="#" className="nav-section">
        Home
      </a>
      <a href="#" className="nav-section">
        Parking
      </a>
      <a href="#" className="nav-section">
        List Your Space
      </a>
      <a href="#" className="nav-section">
        Plan & Pricing
      </a>
      <a href="#" className="nav-section">
        About Us
      </a>
      <a href="#" className="nav-section">
        Contact Us
      </a>
      <a href="#" className="nav-button">
        Log In
      </a>
    </div>
  );
};

export default Navbar;
