import React from "react";
import "../pages/Footerpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footerpage = () => {
  return (
    <section id="footer">
      <div className="footer-header"></div>
      <div className="footer-content">
        <div className="footer-text-left">
          <span>
            Let's Find <br></br>your Dream Home
          </span>
          <div className="footer-links">
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </div>
        </div>
        <div className="footer-text-right">
          <div></div>
          <div className="footer-contact-us">
            <div className="bold">Contact Us</div>
            <div>FAQ</div>
            <div>Support</div>
            <div>Questions</div>
          </div>
          <div className="footer-contact-us">
            <div className="bold">Offices</div>
            <div>India</div>
            <div>United States</div>
            <div>Europe</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footerpage;
