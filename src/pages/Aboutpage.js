import React from "react";
import "../pages/Aboutpage.css";
import homeinterior from "../images/interior.jpg";
import CustomButton from "../components/CustomButton";

const Aboutpage = () => {
  return (
    <section id="about">
      <div className="about-content">
        <div className="content-header">Explore Our beautiful Homes</div>
        <div className="content-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.<br></br>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="content-button">
          <CustomButton text="View Homes"></CustomButton>
        </div>
      </div>
      <div className="about-image">
        <img src={homeinterior} alt="interior"></img>
      </div>
    </section>
  );
};

export default Aboutpage;
