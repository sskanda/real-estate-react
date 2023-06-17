import React from "react";
import "../components/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <div id="main-container">
        <span>RIZE</span>
        <nav className="navbar">
          <a href="#">About</a>
          <a href="#">Homes</a>
          <a href="#">Rentals</a>
        </nav>
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default NavBar;
