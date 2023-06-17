import React from "react";
import "../components/NavBar.css";
import CustomButton from "./CustomButton";

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
        <div className="main-button-container">
          <CustomButton text="Contact Us"></CustomButton>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
