import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import home1 from "../images/home-2.jpg";
import home2 from "../images/home-4.jpg";
import home3 from "../images/home-1.jpg";
import "../components/Slider.css";

const Slider = (props) => {
  const pagedetails = [
    { id: 1, title: "ICE AGE VILLA, NORWAY", price: "$6,450,000", bg: home1 },
    {
      id: 2,
      title: "LUXURY VILLA IN BALI, INDONESIA",
      price: "$4,710,000",
      bg: home2,
    },
    {
      id: 3,
      title: "HOUSE IN LA, CALIFORNIA",
      price: "$10,250,000",
      bg: home3,
    },
  ];

  const section = pagedetails.map((x) => {
    if (x.id === props.page) {
      return (
        <section key={x.id} style={{ backgroundImage: `url(${x.bg})` }}>
          <div className="home-container">
            <span className="home-name">{x.title}</span>
            <span className="home-price">{x.price}</span>
          </div>
          <div className="home-buttons">
            <button onClick={props.funback}>
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            </button>
            <button onClick={props.funfor}>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </button>
          </div>
        </section>
      );
    }
  });

  return <>{section}</>;
};

export default Slider;
