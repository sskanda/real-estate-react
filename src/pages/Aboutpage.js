import React, { useRef, useEffect, useState } from "react";
import "../pages/Aboutpage.css";
import homeinterior from "../images/interior.jpg";
import CustomButton from "../components/CustomButton";

const Aboutpage = () => {
  const [sectionvisible, setSectionvisible] = useState();

  const myref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry.isIntersecting);
      setSectionvisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, []);

  return (
    <section
      id="about"
      className={
        sectionvisible ? "animation-hide animation-show" : "animation-hide"
      }
      ref={myref}
    >
      <div className="about-content">
        <div className="content-header">Explore Our beautiful Homes</div>
        <div className="content-desc">
          A luxurious vacation home. Contemporary and calming interiors to
          unwind and relax as a family and enjoy their time together with a
          fuss-free interior design.<br></br>
          <br></br>
          Your home is all about you. From the first call, we try to understand
          you and your expectations from a living space. Our designers work with
          you on finding the right balance between aesthetics and functionality,
          while our project manager ensures that budget, time and quality goals
          are met.
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
