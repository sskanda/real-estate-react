import React, { useState } from "react";
import "../components/NavBar.css";
import CustomButton from "./CustomButton";

const NavBar = () => {
  const [bgcolor, setbgcolor] = useState({ backgroundColor: "transparent" });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) setbgcolor({ backgroundColor: "orange" });
    else setbgcolor({ backgroundColor: "transparent" });
  });

  return (
    <header>
      <div id="main-container" style={bgcolor}>
        <span>RIZE</span>
        <nav className="navbar">
          <a href="#about">About</a>
          <a href="#home">Homes</a>
          <a href="#explore">Explore</a>
        </nav>
        <div className="main-button-container">
          <CustomButton text="Contact Us"></CustomButton>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
