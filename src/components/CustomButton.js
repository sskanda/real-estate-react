import React from "react";
import "../components/CustomButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CustomButton = (props) => {
  return (
    <button>
      {props.text}
      <FontAwesomeIcon icon={props.icon} className="iconx" />
    </button>
  );
};

export default CustomButton;
