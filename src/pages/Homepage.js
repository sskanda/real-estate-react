import React, { useState } from "react";
import "../pages/Homepage.css";
import Slider from "../components/Slider";

const Homepage = () => {
  const [pagecount, setPagecount] = useState(1);

  const forwardtheme = () => {
    if (pagecount === 3) setPagecount(1);
    else setPagecount((prev) => prev + 1);
  };

  const backtheme = () => {
    if (pagecount === 1) setPagecount(3);
    else setPagecount((prev) => prev - 1);
  };

  return (
    <>
      <Slider
        page={pagecount}
        funfor={forwardtheme}
        funback={backtheme}
      ></Slider>
    </>
  );
};

export default Homepage;
