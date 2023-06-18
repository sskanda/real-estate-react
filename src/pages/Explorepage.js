import React, { useRef, useEffect, useState } from "react";
import "../pages/Explorepage.css";
import explore1 from "../images/explore1.jpg";
import explore2 from "../images/explore2.jpg";
import explore3 from "../images/explore3.jpg";
import explore4 from "../images/explore4.jpg";
import explore5 from "../images/explore5.jpg";
import explore6 from "../images/explore6.jpg";
const Explorepage = () => {
  const [visible, setvisible] = useState();

  const refx = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry.isIntersecting);
      setvisible(entry.isIntersecting);
    });
    observer.observe(refx.current);
  }, []);
  return (
    <section id="explore">
      <div className="explore-header">Explore Lifestyles</div>
      <div className="explore-content">
        <div className="top-half">
          <div
            className={
              visible
                ? "top-1 left-animation-hide left-animation-show"
                : "top-1 left-animation-hide"
            }
          >
            <div>
              <img src={explore1} alt="explore-Apartment"></img>
            </div>
            <span>Apartment</span>
          </div>
          <div
            className={
              visible
                ? "top-2 right-animation-hide right-animation-show"
                : "top-2 right-animation-hide"
            }
          >
            <div className="top-2-first">
              <img src={explore2} alt="explore-Office"></img>
              <span>Office</span>
            </div>
            <div className="top-2-first">
              <img src={explore3} alt="explore-Shop"></img>
              <span>Shop</span>
            </div>
          </div>
        </div>
        <div className="bottom-half">
          <div
            className={
              visible
                ? "top-2 extra left-animation-hide left-animation-show"
                : "top-2 extra left-animation-hide"
            }
          >
            <div className="top-2-first">
              <img src={explore4} alt="explore-House"></img>
              <span>Single House</span>
            </div>
            <div className="top-2-first">
              <img src={explore5} alt="explore-Studio"></img>
              <span>Studio</span>
            </div>
          </div>
          <div
            className={
              visible
                ? "top-1 right-animation-hide right-animation-show"
                : "top-1 right-animation-hide"
            }
            ref={refx}
          >
            <div>
              <img src={explore6} alt="explore-Villa"></img>
            </div>
            <span>Villa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explorepage;
