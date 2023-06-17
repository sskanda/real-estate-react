import React from "react";
import "../components/HomeCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const HomeCard = (props) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt="new home"></img>
      </div>
      <div className="card-desc">{props.desc}</div>
      <div className="card-link">
        <span>
          View Details <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </span>
      </div>
    </div>
  );
};
