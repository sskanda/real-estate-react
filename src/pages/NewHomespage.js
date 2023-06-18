import React, { useRef, useEffect, useState } from "react";
import "../pages/NewHomespage.css";
import newhome1 from "../images/new-home1.jpg";
import newhome2 from "../images/new-home2.jpg";
import { HomeCard } from "../components/HomeCard";

const NewHomespage = () => {
  const [isvisible, setisvisible] = useState();

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry.isIntersecting);
      setisvisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
  }, []);

  return (
    <section id="new-homes" className={isvisible ? "hide show" : "hide"}>
      <div className="new-homes-header">View our newest Homes</div>
      <div className="new-homes-content">
        <div className="left-card" ref={ref}>
          <HomeCard
            desc="5 Bed 3 Bath House in Venice, California"
            image={newhome1}
          ></HomeCard>
        </div>
        <div className="right-card">
          <HomeCard
            desc="4 Bed 2 Bath House in Miami, Florida"
            image={newhome2}
          ></HomeCard>
        </div>
      </div>
    </section>
  );
};

export default NewHomespage;
